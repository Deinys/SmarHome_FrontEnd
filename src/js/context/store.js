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
        genericLiveDates: [],
        chartDates: [],
        chartData: [],
        currentChartTab: "",
        currentChartFilter: "",
      },
      collection: [
        {
          id: 0,
          device: "intLight",
          name: "Interior lights",
          status: true,
          realData: [
            {
              date: "Sat, 29 May 2022 05:07:12 GMT",
              data: true,
            },
            {
              date: "Sat, 29 May 2022 05:07:20 GMT",
              data: false,
            },
            {
              date: "Sat, 29 May 2022 05:08:22 GMT",
              data: true,
            },
            {
              date: "Sat, 29 May 2022 05:21:02 GMT",
              data: false,
            },
          ].reverse(),
        },
        {
          id: 1,
          device: "sonar",
          name: "Water level",
          realData: [
            {
              date: "Sun, 29 May 2022 04:08:38 GMT",
              data: 59,
            },
            {
              date: "Sun, 29 May 2022 04:07:38 GMT",
              data: 60,
            },
          ],
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
          realData: [
            {
              date: "Sun, 29 May 2022 04:08:38 GMT",
              data: 22,
            },
            {
              date: "Sun, 29 May 2022 04:07:38 GMT",
              data: 23,
            },
          ],
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
          realData: [
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              data: false,
            },
            {
              date: "Sat, 27 May 2022 18:47:38 GMT",
              data: false,
            },
          ],
        },
        {
          id: 4,
          device: "motion",
          name: "Motion alarm",
          status: true,
          realData: [
            {
              date: "Sat, 29 May 2022 17:07:38 GMT",
              data: false,
            },
            {
              date: "Sat, 29 May 2022 17:09:38 GMT",
              data: true,
            },
            {
              date: "Sat, 29 May 2022 17:11:38 GMT",
              data: false,
            },
            {
              date: "Sat, 29 May 2022 17:14:38 GMT",
              data: true,
            },
          ],
        },
      ],
    },
    actions: {
      init: () => {
        let actions = getActions()

        actions.setCurrentChartTab("intLight");
      },
      getLastEntry: async () => {
        let store = getStore();

        let response = await fetch(`${BASE_URL}/entries`, {
          headers: {
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
          actions.setLiveChart(store.collection[0].realData);
        }
        if (device === "sonar") {
          actions.setLiveChart(store.collection[1].realData);
        }
        if (device === "thermostat") {
          actions.setLiveChart(store.collection[2].realData);
        }
        if (device === "extLight") {
          actions.setLiveChart(store.collection[3].realData);
        }
        if (device === "motion") {
          actions.setLiveChart(store.collection[4].realData);
        }

        setStore({
          ...store,
          charts: {
            ...store.charts,
            currentChartTab: device,
          },
        });
      },
      setLiveChart: (realData) => {
        let store = getStore();

        let dateArr = realData.map((eachObj) => {
          return new Date(eachObj.date);
        });
        let dataArr = realData.map((eachObj) => {
          return eachObj.data;
        });

        setStore({
          ...store,
          charts: {
            ...store.charts,
            chartUnit: "minute",
            chartDates: dateArr,
            chartData: dataArr,
            chartMin: Math.min(...dataArr) - 5,
            chartMax: Math.max(...dataArr) + 5,
            currentChartFilter: "now"
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
            currentChartFilter: "today"
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
            currentChartFilter: "last7days"
          },
        });
      },
    },
  };
};

export default getState;
