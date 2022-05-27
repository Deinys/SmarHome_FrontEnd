import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { Stack, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["On", "Off"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
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

const PieChart = ({ device }) => {
  return (
    <>
      <Stack flexDirection={"row"} alignItems={"center"} marginBottom={"20px"}>
        <Stack flexDirection={"row"}>
          <Typography variant={"h6"} sx={{ fontWeight: 500 }}>
            {device} chart
          </Typography>
        </Stack>
      </Stack>
      <Stack flexDirection={"row"}>
        <Pie data={data} options={options} />
      </Stack>
    </>
  );
};

export default PieChart;
