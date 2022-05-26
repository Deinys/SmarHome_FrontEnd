import React from "react";

import { Stack } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

import { Context } from "../context/appContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

const dates = [23, 21];

const datesInMili = dates.map((date) => {
  return new Date(date).setHours(0, 0, 0, 0);
});

let currentDate = "Sat, 21 May 2022 18:47:38 GMT";
const currentDateInMili = new Date(currentDate).setHours(0, 0, 0, 0);

const filterByWeek = () => {
  endDate = currentDate;
  startDate = currentDate - 604800000;

  filteredDates = datesInMili.filter((date) => {
    return date >= start && date <= end;
  });
};

const datapoints = [23, 22, 25, 22, 21];



const LightChart = ({ device }) => {
  let context = React.useContext(Context);

  // fecha de los ultimos 7 dias incluyendo hoy
  const pastWeekDates = [...Array(7).keys()].map((index) => {
    let date = new Date();
    date.setDate(date.getDate() - index);
    return date;
  });
  // hago fetch a la api para la data de los ultimos 7 dias
  // me devuelve solo el promedio y la fecha. id???
  const pastWeekData = [22, 24, 22, 21, 24, 23, 21];

  // horas que han pasado hoy. 4am retorna [1, 2, 3, 4]
  // se tiene que actualizar cada vez que le llega info (cada hora)
  let date = new Date();
  let passedHours = date.getHours();

  const currentDayHours =  [...Array(passedHours).keys()].map((index) => {
    let newDate = date.setTime(date.getTime() - 1 * 3600000)
    return newDate
  })

  console.log(currentDayHours)


  // const currentDayHours = [...Array(passedHours).keys()].map((index) => {
  //   return passedHours - index;
  // }).reverse();
  const currentDayData = [21, 24, 23, 21]


  
  const handleDailyClick = () => {
    context.actions.setDailyChart(currentDayHours, currentDayData);
  };

  const handleWeeklyClick = () => {
    context.actions.setWeeklyChart(pastWeekDates, pastWeekData);
  };

const data = {
    labels: context.store.chartDates,
    datasets: [
      {
        label: device,
        data: context.store.chartData,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: context.store.chartUnit,
        },
      },
    },
  };

  return (
    <>
      <Stack flexDirection="column">
        <button onClick={handleWeeklyClick}>Weekly</button>
        <button onClick={handleDailyClick}>Daily</button>
      </Stack>
      <Stack flexDirection="column" width={"800px"} height={"500px"}>
        <Line data={data} options={options} />
      </Stack>
    </>
  );
};

export default LightChart;
