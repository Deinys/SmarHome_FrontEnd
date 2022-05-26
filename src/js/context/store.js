const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      chartUnit: "",
      chartDates: [],
      chartData: [],
      currentTab: "light",
      collection: [
        {
          id: 1,
          device: "light",
          name: "Interior Light",
          status: false,
          data: [
            {
              date_created: "Sat, 21 May 2022 01:57:38 GMT",
              device_data: "17",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 02:57:38 GMT",
              device_data: "18",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 03:57:38 GMT",
              device_data: "19",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 04:57:38 GMT",
              device_data: "17",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 05:57:38 GMT",
              device_data: "19",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 06:57:38 GMT",
              device_data: "20",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 07:57:38 GMT",
              device_data: "24",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 08:57:38 GMT",
              device_data: "22",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 09:57:38 GMT",
              device_data: "23",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 10:57:38 GMT",
              device_data: "25",
              entry_id: 4,
            },
            {
              date_created: "Sat, 21 May 2022 11:57:38 GMT",
              device_data: "22",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 12:57:38 GMT",
              device_data: "26",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 13:57:38 GMT",
              device_data: "24",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 14:57:38 GMT",
              device_data: "23",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 15:57:38 GMT",
              device_data: "26",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 16:57:38 GMT",
              device_data: "23",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 17:57:38 GMT",
              device_data: "22",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 18:57:38 GMT",
              device_data: "21",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 19:57:38 GMT",
              device_data: "20",
              entry_id: 5,
            },
            {
              date_created: "Sat, 21 May 2022 20:57:38 GMT",
              device_data: "21",
              entry_id: 5,
            },
          ],
        },
        {
          id: 2,
          device: "light",
          name: "Exterior Light",
          status: false,
        },
        {
          id: 3,
          device: "sonar",
          name: "Water level",
          status: false,
        },
        {
          id: 4,
          device: "thermostat",
          name: "Temperature",
          status: false,
        },
        {
          id: 5,
          device: "motion",
          name: "Motion",
          status: false,
        },
      ],
    },
    actions: {
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
      setCurrentTab: (device) => {
        let store = getStore();

        setStore({
          ...store,
          currentTab: device,
        });
      },
      setDailyChart: (currentDayHours, currentDayData) => {
        let store = getStore();

        setStore({
          ...store,
          chartUnit: "hour",
          chartDates: currentDayHours,
          chartData: currentDayData,
        });
      },
      setWeeklyChart: (pastWeekDates, pastWeekData) => {
        let store = getStore();

        setStore({
          ...store,
          chartUnit: "day",
          chartDates: pastWeekDates,
          chartData: pastWeekData,
        });
      },
    },
  };
};

export default getState;
