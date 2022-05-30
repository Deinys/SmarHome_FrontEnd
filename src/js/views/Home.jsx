import React from "react";

import { Stack, Typography, Container } from "@mui/material";
import Card from "../components/Card.jsx";

import { Context } from "../context/appContext";
import LineChart from "../components/LineChart.jsx";
import BarChart from "../components/BarChart.jsx";
import DataHistory from "../components/DataHistory.jsx";
import DataInsights from "../components/DataInsights.jsx";
import PieChart from "../components/PieChart.jsx";
import ColumnChart from "../components/ColumnChart.jsx";

const Home = () => {
  let context = React.useContext(Context);
  let currentTab = context.store.charts.currentChartTab;

  return (
    <Container maxWidth={"xl"}>
      <Stack
        flexDirection={"row"}
        marginTop={"60px"}
        marginBottom={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack flexDirection={"row"}>
          <Typography
            variant={"h5"}
            sx={{ fontWeight: 600 }}
            component={"div"}
            marginRight={"10px"}
            color={"rgb(30,30,30)"}
          >
            Welcome home, {context.store.user.name}
          </Typography>
        </Stack>
        <Stack flexDirection={"row"}>
          <Typography
            variant={"h6"}
            sx={{ fontWeight: 700 }}
            component={"div"}
            marginRight={"10px"}
          ></Typography>
        </Stack>
      </Stack>
      <Stack flexDirection={"row"} margin={"0 -15px"}>
        {context.store.collection.map((eachObj) => {
          return (
            <Card
              key={eachObj.device}
              id={eachObj.id}
              device={eachObj.device}
              name={eachObj.name}
              status={eachObj.status}
            />
          );
        })}
      </Stack>

      <Stack flexDirection={"row"} marginTop={"30px"} marginBottom={"20px"}>
        <Typography
          variant={"h5"}
          color={"rgb(40,40,40)"}
          sx={{ fontWeight: 600 }}
        >
          Sensor information
          {/* {currentTab === "intLight"
            ? "Interior lights details"
            : currentTab === "sonar"
            ? "Water level history"
            : currentTab === "thermostat"
            ? "Temperature history"
            : currentTab === "extLight"
            ? "Exterior lights details"
            : currentTab === "motion"
            ? "Motion sensor history"
            : null} */}
        </Typography>
      </Stack>

      <Stack flexDirection={"row"}>
        <Stack
          flexDirection={"column"}
          width={
            currentTab === "intLight" || currentTab === "extLight"
              ? "65%"
              : "35%"
          }
          padding={"30px"}
          marginRight={"30px"}
          className={"chart-card"}
        >
          {currentTab === "intLight" ? (
            <DataInsights
              realData={context.store.collection[0].realData}
              device={"intLight"}
            />
          ) : currentTab === "sonar" ? (
            <DataHistory
              realData={context.store.collection[1].realData}
              dataType="Water level"
              unit="%"
            />
          ) : currentTab === "thermostat" ? (
            <DataHistory
              realData={context.store.collection[2].realData}
              dataType="Temperature"
              unit="°C"
            />
          ) : currentTab === "extLight" ? (
            <DataInsights
              realData={context.store.collection[3].realData}
              device={"extLight"}
            />
          ) : currentTab === "motion" ? (
            <DataHistory
              realData={context.store.collection[4].realData}
              dataType="Motion"
              unit={null}
            />
          ) : null}
        </Stack>
        <Stack
          flexDirection={"column"}
          width={
            currentTab === "intLight" || currentTab === "extLight"
              ? "40%"
              : "60%"
          }
          padding={"30px"}
          className={"chart-card"}
        >
          {currentTab === "intLight" ? (
            <PieChart
              realData={context.store.collection[0].realData}
              device={"Interior lights"}
            />
          ) : currentTab === "sonar" ? (
            <BarChart
              realData={context.store.collection[1].realData}
              dailyData={context.store.collection[1].data.daily}
              weeklyData={context.store.collection[1].data.weekly}
              device={"Water level"}
            />
          ) : currentTab === "thermostat" ? (
            <LineChart
              realData={context.store.collection[2].realData}
              dailyData={context.store.collection[2].data.daily}
              weeklyData={context.store.collection[2].data.weekly}
              device={"Temperature"}
            />
          ) : currentTab === "extLight" ? (
            <PieChart
              realData={context.store.collection[3].realData}
              device={"Exterior lights"}
            />
          ) : currentTab === "motion" ? (
            <ColumnChart
              realData={context.store.collection[4].realData}
              device={"Motion"}
            />
          ) : null}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
