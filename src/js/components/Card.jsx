import React from "react";

import { Stack, Typography } from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AnimationIcon from "@mui/icons-material/Animation";

import { Context } from "../context/appContext";
import DataLabel from "./DataLabel.jsx";

const Card = ({ id, device, name, status }) => {
  let context = React.useContext(Context);

  const handleClick = () => {
    context.actions.setCurrentChartTab(device);
  };

  const handleChange = () => {
    context.actions.setSensorStatus(id);
  };

  return (
    <>
      <div className="col collection-card p-4">
        <div className="col">
          <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Stack>
              {device === "intLight" ? (
                <LightbulbIcon fontSize={"large"} />
              ) : device === "sonar" ? (
                <WaterIcon fontSize={"large"} />
              ) : device === "thermostat" ? (
                <ThermostatIcon fontSize={"large"} />
              ) : device === "extLight" ? (
                <LightbulbIcon fontSize={"large"} />
              ) : device === "motion" ? (
                <AnimationIcon fontSize={"large"} />
              ) : null}
            </Stack>
            <Stack>
              {device === "intLight" ? (
                <DataLabel
                  data={
                    context.store.collection[0].data[
                      context.store.collection[0].data.length - 1
                    ].status
                  }
                  unit={null}
                />
              ) : device === "sonar" ? (
                <DataLabel
                  data={
                    context.store.collection[1].data.daily[
                      context.store.collection[1].data.daily.length - 1
                    ]
                  }
                  unit={"%"}
                />
              ) : device === "thermostat" ? (
                <DataLabel
                  data={
                    context.store.collection[2].data.daily[
                      context.store.collection[2].data.daily.length - 1
                    ]
                  }
                  unit={"°C"}
                />
              ) : device === "extLight" ? (
                <DataLabel
                  data={
                    context.store.collection[3].data[
                      context.store.collection[0].data.length - 1
                    ].status
                  }
                  unit={null}
                />
              ) : device === "motion" ? (
                <DataLabel
                  data={
                    context.store.collection[4].data[
                      context.store.collection[0].data.length - 1
                    ].status
                  }
                  unit={null}
                />
              ) : null}
            </Stack>
          </Stack>

          <Typography
            className={"card-title"}
            variant={"h6"}
            onClick={handleClick}
            component={"div"}
            marginTop={"10px"}
          >
            {name}
          </Typography>

          <div className="div">
            <div className="form-check form-switch">
              <input
                className="form-check-input border"
                type="checkbox"
                checked={status}
                onChange={handleChange}
                name={`${device}Switch`}
                id={`${device}Switch`}
              />
              <label
                className="form-check-label"
                htmlFor={`${device}Switch`}
              ></label>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Card;
