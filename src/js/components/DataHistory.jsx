import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Context } from "../context/appContext";

const DataHistory = ({ data, dataType, unit }) => {
  let context = useContext(Context);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "date",
      headerName: "Date created",
      width: 130,
      editable: false,
    },
    {
      field: "data",
      headerName: `${dataType} (${unit})`,
      type: "number",
      width: 130,
      editable: true,
    },
  ];

  let dates = context.store.charts.genericDailyDates;


  let newRows = data.map((each, index) => {
    return {
      id: index + 1,
      data: each,
      date: new Date(dates[index])
    }
  })
  
  console.log(newRows)

  return (
    <>
      <Stack flexDirection={"row"} marginBottom={"20px"}>
        <Typography variant={"h6"} sx={{ fontWeight: 500 }}>
          Daily data history
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
