import React from "react";

import { Stack, Typography } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

import { Context } from "../context/appContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

const BarChart = ({ dailyData, weeklyData, device }) => {
  let context = React.useContext(Context);

  // fecha de los ultimos 7 dias incluyendo hoy
  // hago fetch a la api para la data de los ultimos 7 dias
  // me devuelve solo el promedio y la fecha. id???

  // horas que han pasado hoy. 4am retorna [1, 2, 3, 4]
  // se tiene que actualizar cada vez que le llega info (cada hora)

  const handleDailyClick = () => {
    context.actions.setDailyChart(dailyData);
  };

  const handleWeeklyClick = () => {
    context.actions.setWeeklyChart(weeklyData);
  };

  const data = {
    labels: context.store.charts.chartDates,
    datasets: [
      {
        label: device,
        data: context.store.charts.chartData,
        tension: 0.2,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {
    responsive: true,
    animations: false,
    elements: {
      bar: { borderWidth: 2 },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: context.store.charts.chartMin,
        max: context.store.charts.chartMax,
      },
      x: {
        type: "time",
        time: {
          unit: context.store.charts.chartUnit,
        },
      },
    },
  };

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"20px"}
      >
        <Stack flexDirection={"row"}>
          <Typography variant={"h6"} sx={{ fontWeight: 500 }}>
            {device} chart
          </Typography>
        </Stack>
        <Stack flexDirection={"row"}>
          <button onClick={handleDailyClick}>Today</button>
          <button onClick={handleWeeklyClick}>Last 7 days</button>
        </Stack>
      </Stack>
      <Stack flexDirection={"row"}>
        <Bar data={data} options={options} />
      </Stack>
    </>
  );
};

export default BarChart;
