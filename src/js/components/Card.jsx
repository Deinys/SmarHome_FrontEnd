import React from "react";

import { Typography } from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AnimationIcon from "@mui/icons-material/Animation";

import { Context } from "../context/appContext";

const Card = ({ id, device, name, status }) => {
  let context = React.useContext(Context);

  const handleClick = () => {
    context.actions.setCurrentTab(device)
  }

  const handleChange = () => {
    context.actions.setSensorStatus(id);
  };

  return (
    <>
      <div className="col collection-card m-4 p-4" onClick={handleClick}>
        <div className="col">
          {device === "light" ? (
            <LightModeIcon fontSize={"large"} />
          ) : device === "sonar" ? (
            <WaterIcon fontSize={"large"} />
          ) : device === "thermostat" ? (
            <ThermostatIcon fontSize={"large"} />
          ) : device === "motion" ? (
            <AnimationIcon fontSize={"large"} />
          ) : null}
          <div className="div">
            <Typography variant={"h6"}>{name}</Typography>
          </div>
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
