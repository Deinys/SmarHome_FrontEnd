import { Stack, Typography } from "@mui/material";
import React from "react";

import { DataGrid } from "@mui/x-data-grid";
//import { Context } from "../context/appContext";

const DataInsights = ({ realData, device }) => {
  //let context = React.useContext(Context);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "date",
      headerName: "Date",
      width: 120,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
      editable: false,
    },
    {
      field: "duration",
      headerName: "Duration",
      type: "number",
      width: 150,
      editable: false,
    },
    {
      field: "power",
      headerName: "Power consumption",
      type: "number",
      width: 210,
      editable: false,
    },
  ];

  const newRows = realData.map((eachObj, index) => {
    return {
      id: index + 1,
      status: eachObj.data ? "ON" : "OFF",
      date: new Date(eachObj.date).toLocaleTimeString("en-US"),
      duration:
        index != 0
          ? ((new Date(realData[index - 1].date).getTime() -
              new Date(realData[index].date).getTime()) /
              60000).toFixed(1) +
            " min"
          : null,
      // suponiendo que el bombillo es de 0.1kW o 100W
      power: index != 0
      ? ((new Date(realData[index - 1].date).getTime() -
          new Date(realData[index].date).getTime()) * 100 /
          3600000).toFixed(1) + " Wh" : null
    };
  });

  return (
    <>
      <Stack flexDirection={"row"} marginBottom={"20px"}>
        <Typography variant={"h6"} sx={{ fontWeight: 500 }}>
          Data history
        </Typography>
      </Stack>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={newRows}
            columns={columns}
            pageSize={24}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            disableColumnMenu
            hideFooter
            density="compact"
            rowHeight={56}
          />
        </div>
      </div>
    </>
  );
};

export default DataInsights;
