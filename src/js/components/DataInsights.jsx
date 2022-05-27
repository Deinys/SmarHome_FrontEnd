import { Stack, Typography } from "@mui/material";
import React from "react";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: false,
  },
  {
    field: "data",
    headerName: "",
    type: "number",
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, firstName: "Jon", age: 35 },
  { id: 2, firstName: "Cersei", age: 42 },
  { id: 3, firstName: "Jaime", age: 45 },
  { id: 4, firstName: "Arya", age: 16 },
  { id: 5, firstName: "Daenerys", age: 23 },
  { id: 6, firstName: "Rascal", age: 150 },
  { id: 7, firstName: "Ferrara", age: 44 },
  { id: 8, firstName: "Rossini", age: 36 },
  { id: 9, firstName: "Harvey", age: 65 },
];

const DataInsights = ({ d }) => {
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
            rows={rows}
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
