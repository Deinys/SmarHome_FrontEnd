import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Stack, Typography } from "@mui/material";
import { Context } from "../context/appContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ realData, device }) => {
  let context = React.useContext(Context);

  // const numberOnFunc = () => {
  //   let count = 0;
  //   context.store.charts.chartData.forEach(
  //     (value) => value === true && count++
  //   );
  //   return count;
  // };
  // const numberOffFunc = () => {
  //   let count = 0;
  //   context.store.charts.chartData.forEach(
  //     (value) => value === false && count++
  //   );
  //   return count;
  // };
  // let numberOn = numberOnFunc();
  // let numberOff = numberOffFunc();

  let accTime = realData.map((eachObj, index) => {
    return {
      status: eachObj.data ? "ON" : "OFF",
      duration:
        index != 0
          ? (new Date(realData[index - 1].date).getTime() -
              new Date(realData[index].date).getTime()) /
            1000
          : null,
    };
  });

  let timeOn = accTime
    .filter((eachObj) => eachObj.status === "OFF")
    .map((eachObj) => eachObj.duration);

  let timeOff = accTime
    .filter((eachObj) => eachObj.status === "ON")
    .map((eachObj) => eachObj.duration);

  let totalTimeOn = Math.round(timeOn.reduce((a, b) => a + b, 0) / 60);
  let totalTimeOff = Math.round(timeOff.reduce((a, b) => a + b, 0) / 60);

  const data = {
    labels: ["Time ON", "Time OFF"],
    datasets: [
      {
        label: device,
        data: [totalTimeOn, totalTimeOff],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    animations: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Stack flexDirection={"row"} alignItems={"center"} marginBottom={"20px"}>
        <Stack flexDirection={"row"}>
          <Typography variant={"h6"} sx={{ fontWeight: 500 }}>
            Live chart
          </Typography>
        </Stack>
      </Stack>
      <Stack flexDirection={"row"} padding={"10px 41px"}>
        <Doughnut data={data} options={options} />
      </Stack>
    </>
  );
};

export default PieChart;
