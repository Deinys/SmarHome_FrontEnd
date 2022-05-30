import React from "react";

import { Typography } from "@mui/material";

const DataLabel = ({ data, device, unit }) => {
  let newData = "";
  if (device === "intLight" || device === "extLight") {
    if (data === false) {
      newData = "OFF";
    } else if (data === true) {
      newData = "ON";
    } else {
      newData = data;
    }
  } else if (device === "motion") {
    if (data === false) {
      newData = "NO";
    } else if (data === true) {
      newData = "YES";
    } else {
      newData = data;
    }
  } else {
    newData = data;
  }

  return (
    <Typography variant={"h7"} sx={{ fontWeight: 600 }} component={"div"}>
      {newData} {unit}
    </Typography>
  );
};

export default DataLabel;
