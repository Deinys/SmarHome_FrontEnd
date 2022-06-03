const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BASE_URL: "http://127.0.0.1:8000",
      user: {
        name: "Raul",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NDIyMTcyOCwianRpIjoiZDlkZjkzOWYtY2JjZC00ZmZiLTgwNWMtYzc2OTI2Yjg3YWRhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjU0MjIxNzI4fQ.-jGof5IaVHSlndRB7nr07Rtye7SFDiy7vOHo2CEAQ5I",
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
          realData: JSON.parse(localStorage.getItem("intLightData")) || [],
        },
        {
          id: 1,
          device: "sonar",
          name: "Water level",
          realData: JSON.parse(localStorage.getItem("sonarData")) || [
            { date: "Fri, 03 Jun 2022 00:37:24 GMT", data: 95 },
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
          realData: JSON.parse(localStorage.getItem("thermostatData")) || [
            { date: "Fri, 03 Jun 2022 00:37:24 GMT", data: 23 },
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
          realData: JSON.parse(localStorage.getItem("extLightData")) || [],
        },
        {
          id: 4,
          device: "motion",
          name: "Motion alarm",
          status: true,
          realData: JSON.parse(localStorage.getItem("motionData")) || [
            { date: "Fri, 03 Jun 2022 00:37:24 GMT", data: "False" },
          ],
        },
      ],
    },
    actions: {
      init: () => {
        let actions = getActions();

        actions.setCurrentChartTab("intLight");
      },
      getLastEntries: async () => {
        let store = getStore();

        let response = await fetch(`${store.BASE_URL}/last-entries`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.user.token}`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log(data);

          setStore({
            ...store,
            collection: store.collection.map((eachObj, index) => {
              if (index === 1) {
                if (eachObj.realData.length === 10) {
                  eachObj.realData.shift();
                }
                return {
                  ...eachObj,
                  realData: [
                    ...eachObj.realData,
                    {
                      date: data.results.sonar.date_created,
                      data: data.results.sonar.device_data,
                    },
                  ],
                };
              } else if (index === 2) {
                if (eachObj.realData.length === 10) {
                  eachObj.realData.shift();
                }
                return {
                  ...eachObj,
                  realData: [
                    ...eachObj.realData,
                    {
                      date: data.results.thermostat.date_created,
                      data: data.results.thermostat.device_data,
                    },
                  ],
                };
              } else if (index === 4) {
                if (eachObj.realData.length === 10) {
                  eachObj.realData.shift();
                }
                return {
                  ...eachObj,
                  realData: [
                    ...eachObj.realData,
                    {
                      date: data.results.motion.date_created,
                      data:
                        data.results.motion.device_data === "True"
                          ? true
                          : false,
                    },
                  ],
                };
              } else {
                return eachObj;
              }
            }),
          });
          localStorage.setItem(
            "sonarData",
            JSON.stringify(store.collection[1].realData)
          );
          localStorage.setItem(
            "thermostatData",
            JSON.stringify(store.collection[2].realData)
          );
          localStorage.setItem(
            "motionData",
            JSON.stringify(store.collection[4].realData)
          );
          // localStorage.setItem(
          //   "sonarData",
          //   JSON.stringify(newArr[1].realData)
          // );
          // localStorage.setItem(
          //   "thermostatData",
          //   JSON.stringify(newArr[2].realData)
          // );
          // localStorage.setItem(
          //   "motionData",
          //   JSON.stringify(newArr[4].realData)
          // );
          // let currentDevice = store.collection.find((eachObj) => {
          //   return eachObj.device === data.results.device_type;
          // });

          // let deviceIndex =
          //   store.collection[store.collection.findIndex(currentDevice)];
          // let newData = 0;

          // if (typeOf(store.collection[deviceIndex].data) === "array") {
          //   newArr = [
          //     ...store.collection[deviceIndex].data.daily,
          //     store.collection[deviceIndex].data.push(data.results.device_data),
          //   ];
          // } else {
          //   newArr = [
          //     ...store.collection[deviceIndex].data.daily,
          //     store.collection[deviceIndex].data.daily.push(
          //       data.results.device_data
          //     ),
          //   ];
          // }
        }
      },
      setSensorStatus: (id, bool, device) => {
        let store = getStore();

        let newCollection = store.collection.map((eachObj) => {
          if (eachObj.id === id) {
            if (device === "motion") {
              return {
                ...eachObj,
                status: !eachObj.status,
              };
            } else {
              if (eachObj.realData.length === 10) {
                eachObj.realData.pop();
              }
              return {
                ...eachObj,
                status: !eachObj.status,
                realData: [
                  {
                    date: new Date(),
                    data: bool,
                  },
                  ...eachObj.realData,
                ],
              };
            }
          }
          return eachObj;
        });
        setStore({
          ...store,
          collection: newCollection,
        });
        localStorage.setItem(
          "intLightData",
          JSON.stringify(store.collection[0].realData)
        );
        localStorage.setItem(
          "extLightData",
          JSON.stringify(store.collection[3].realData)
        );
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
      updateMotionChart: (realData) => {
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
            chartDates: dateArr,
            chartData: dataArr,
            chartMin: Math.min(...dataArr) - 5,
            chartMax: Math.max(...dataArr) + 5,
            currentChartFilter: "now",
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
            currentChartFilter: "now",
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
            currentChartFilter: "today",
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
            currentChartFilter: "last7days",
          },
        });
      },
    },
  };
};

export default getState;
