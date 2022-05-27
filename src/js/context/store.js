const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BASE_URL: "127.0.0.1:8000",
      user: {
        name: "Raul",
        token: "",
      },
      charts: {
        chartMin: 0,
        chartMax: 100,
        chartUnit: "",
        genericWeeklyDates: [],
        genericDailyDates: [],
        chartDates: [],
        chartData: [
          21, 24, 23, 21, 24, 23, 21, 22, 23, 21, 24, 23, 23, 21, 24, 23, 23,
          21, 22, 23, 21, 24, 23, 23,
        ],
        currentChartTab: "",
      },
      collection: [
        {
          id: 0,
          device: "intLight",
          name: "Interior lights",
          status: true,
          data: [
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              status: false,
            },
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              status: false,
            },
          ],
        },
        {
          id: 1,
          device: "sonar",
          name: "Water level",
          status: true,
          data: {
            weekly: [60, 54, 50, 88, 82, 75, 69],
            daily: [
              62, 61, 60, 60, 60, 59, 57, 53, 53, 53, 52, 52, 50, 50, 49, 44,
              44, 44, 44, 43, 42, 42, 42, 40,
            ],
          },
        },
        {
          id: 2,
          device: "thermostat",
          name: "Temperature",
          status: true,
          data: {
            weekly: [22, 24, 22, 21, 24, 23, 21],
            daily: [
              21, 24, 23, 21, 24, 23, 21, 22, 23, 21, 24, 23, 23, 21, 24, 23,
              23, 21, 22, 23, 21, 24, 23, 23,
            ],
          },
        },
        {
          id: 3,
          device: "extLight",
          name: "Exterior lights",
          status: true,
          data: [
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              status: false,
            },
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              status: false,
            },
          ],
        },
        {
          id: 4,
          device: "motion",
          name: "Motion",
          status: true,
          data: [
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              status: false,
            },
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              status: false,
            },
          ],
        },
      ],
    },
    actions: {
      getLastEntry: async () => {
        let store = getStore();

        let response = await fetch(`${BASE_URL}/single-entry`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.user.token}`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          let currentDevice = store.collection.find((eachObj) => {
            return eachObj.device === data.results.device_type;
          });

          let deviceIndex =
            store.collection[store.collection.findIndex(currentDevice)];
          let newData = 0;
          let newArr = [];

          if (typeOf(store.collection[deviceIndex].data) === "array") {
            newArr = [
              ...store.collection[deviceIndex].data.daily,
              store.collection[deviceIndex].data.push(data.results.device_data),
            ];
          } else {
            newArr = [
              ...store.collection[deviceIndex].data.daily,
              store.collection[deviceIndex].data.daily.push(
                data.results.device_data
              ),
            ];
          }

          setStore({
            ...store,
            collection: newArr,
          });
        }
      },

      setSensorStatus: (id) => {
        let store = getStore();

        let newCollection = store.collection.map((eachObj) => {
          if (eachObj.id === id) {
            return { ...eachObj, status: !eachObj.status };
          }
          return eachObj;
        });
        setStore({
          ...store,
          collection: newCollection,
        });
      },
      setCurrentChartTab: (device) => {
        let store = getStore();
        let actions = getActions();

        if (device === "intLight") {
          actions.setDailyChart(store.collection[1].data.daily);
        }
        if (device === "sonar") {
          actions.setDailyChart(store.collection[1].data.daily);
        }
        if (device === "thermostat") {
          actions.setDailyChart(store.collection[2].data.daily);
        }
        if (device === "extLight") {
          actions.setDailyChart(store.collection[2].data.daily);
        }
        if (device === "motion") {
          actions.setDailyChart(store.collection[1].data.daily);
        }

        setStore({
          ...store,
          charts: {
            ...store.charts,
            currentChartTab: device,
          },
        });
      },
      setDailyChart: (dailyData) => {
        let store = getStore();
        let date = new Date();

        let dateAtZeroMinInMili =
          date.getTime() -
          date.getMinutes() * 60 * 1000 -
          date.getSeconds() * 1000;
        let dateAtZeroMin = new Date(dateAtZeroMinInMili); // parsed

        const dailyHours = [...Array(date.getHours()).keys()].map((index) => {
          let newDate = dateAtZeroMin.setTime(dateAtZeroMin - 1 * 3600000);
          return newDate;
        });

        setStore({
          ...store,
          charts: {
            ...store.charts,
            chartUnit: "hour",
            chartDates: dailyHours,
            chartData: dailyData,
            chartMin: Math.min(...dailyData) - 5,
            chartMax: Math.max(...dailyData) + 5,
            genericDailyDates: dailyHours,
          },
        });
      },
      setWeeklyChart: (weeklyData) => {
        let store = getStore();
        let date = new Date();

        let dateAtZeroHourInMili =
          date.getTime() -
          date.getHours() * 60 * 60 * 1000 -
          date.getMinutes() * 60 * 1000 -
          date.getSeconds() * 1000;
        let dateAtZeroHour = new Date(dateAtZeroHourInMili); // parsed

        const weeklyDates = [...Array(7).keys()].map((index) => {
          let newDate = dateAtZeroHour.setDate(dateAtZeroHour.getDate() - 1);
          return newDate;
        });

        setStore({
          ...store,
          charts: {
            ...store.charts,
            chartUnit: "day",
            chartDates: weeklyDates,
            chartData: weeklyData,
            chartMin: Math.min(...weeklyData) - 5,
            chartMax: Math.max(...weeklyData) + 5,
            genericWeeklyDates: weeklyDates,
          },
        });
      },
      signup: () => {
        // fetch a la api
        // metodo POST
        // url base /signup
        // headers: {"Content-Type": "application/json"}
        // body: {
        //      "name": "Martin",
        //      "email": "email@gmail.com",
        //       "password": "tendigitpassword",
        //       "controller_sn": ""
        //      }
      },
      login: () => {
        // fetch
        // POST
        // url base /login
        // headers: {"Content-Type": "application/json"}
        // body: {
        //     "email": "email@gmail.com",
        //     "password": "tendigitpassword"
        // }   TE RESPONDE UN TOKEN
        // setStore({
        // 	...store,
        // 	user: {
        // 		token: TOKEN
        // 	}
        // })
      },
    },
  };
};

export default getState;
