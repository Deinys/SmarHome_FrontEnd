import { Stack, Typography } from "@mui/material";
import React from "react";

import { DataGrid } from "@mui/x-data-grid";
//import { Context } from "../context/appContext";

const DataHistory = ({ realData, dataType, unit }) => {
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
      field: "data",
      headerName: `${dataType}`,
      type: "number",
      width: 160,
      editable: true,
    },
  ];

  //let dates = context.store.charts.;

  let newRows = []
  if (dataType === "Motion") {
    newRows = realData.map((eachObj, index) => {
      return {
        id: index + 1,
        data: eachObj.data === false ? "No" : "Yes",
        date: new Date(eachObj.date).toLocaleTimeString('en-US')
      }
    })
  } else {
    newRows = realData.map((eachObj, index) => {
      return {
        id: index + 1,
        data: `${eachObj.data}${unit}`,
        date: new Date(eachObj.date).toLocaleTimeString('en-US')
      }
    })
  }

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

export default DataHistory;
