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

  const handleChange = (e) => {
    setTimeout(
      () => context.actions.setSensorStatus(id, e.target.checked, device),
      500
    );
  };

  return (
    <>
      <div
        className={
          device === context.store.charts.currentChartTab
            ? "col collection-card p-4 extra-border"
            : "col collection-card p-4"
        }
      >
        <div className={""}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              className={
                device === "motion" &&
                context.store.collection[4].status === true &&
                context.store.collection[4].realData[
                  context.store.collection[4].realData.length - 1
                ].data === true
                  ? "red-alert"
                  : ""
              }
            >
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
            <Stack flexDirection={"column"}>
              <Stack>
                {device === "intLight" ? (
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
                ) : device === "sonar" ? (
                  <DataLabel
                    data={
                      context.store.collection[1].realData != []
                        ? context.store.collection[1].realData[0].data
                        : null
                    }
                    device={device}
                    unit={
                      context.store.collection[1].realData.length ? "%" : null
                    }
                  />
                ) : device === "thermostat" ? (
                  <DataLabel
                    data={
                      context.store.collection[2].realData != []
                        ? context.store.collection[2].realData[0].data
                        : null
                    }
                    device={device}
                    unit={
                      context.store.collection[2].realData.length ? "°C" : null
                    }
                  />
                ) : device === "extLight" ? (
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
                ) : device === "motion" ? (
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
                ) : null}
              </Stack>
            </Stack>
          </Stack>

          <Typography
            className={
              device === "motion" &&
              context.store.collection[4].status === true &&
              context.store.collection[4].realData[
                context.store.collection[4].realData.length - 1
              ].data === true
                ? "red-alert card-title"
                : "card-title"
            }
            variant={"h6"}
            onClick={handleClick}
            component={"div"}
            marginTop={"10px"}
          >
            {name}
          </Typography>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Card;
