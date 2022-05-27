import React from "react";

import { Typography } from "@mui/material";

const DataLabel = ({ data, unit }) => {
  let newData = ""
  if (data === false) {
    newData = "OFF"
  } else if (data === true) {
    newData = "ON"
  } else {
    newData = data
  }

  return (
    <Typography variant={"h7"} sx={{fontWeight: 600}} component={"div"}>
      {newData} {unit}
    </Typography>
  );
};

export default DataLabel;
