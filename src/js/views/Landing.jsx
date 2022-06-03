import React from "react";
import { Stack, Typography, Box, Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TextField from "@mui/material/TextField";
import Image from "@mui/material/ImageList";
import Smart from "../../img/smart2.png";
import Logo from "../../img/Logo2.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Landing = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      backgroundColor={"white"}
    >
      <Container maxWidth={"xl"}>
        <Stack direction={"row"} sx={{ mt: 10, mb: 10 }} alignItems={"center"}>
          <Stack direction={"column"} width={"60%"} paddingRight={"120px"}>
            <Stack direction={"row"}>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 600 }}>
                Makes everything feel easy
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"start"} sx={{ mt: 3 }}>
              <Typography variant="h6">
                Remotely control the smart devices in your home
              </Typography>
            </Stack>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
              justifyContent={"start"}
            >
              {/* <CheckCircleIcon
                sx={{ mr: 1, my: 0.5, mt: 3 }}
                color={"#158ea8"}
              /> */}
              <Typography variant="body1">
                Smart Home unites your devices and services offered by us, and
                also those from your favorite brands. So you can build a
                personalized smart home that helps with any household task.
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              justifyContent={"start"}
            >
              {/* <CheckCircleIcon sx={{ mr: 1, my: 0.5 }} color={"#158ea8"} /> */}
              {/* <Typography variant="h6">
                Controlling your home in real time
              </Typography> */}
            </Box>
            <Stack direction={"row"}>
              <Button
                variant="contained"
                sx={{ mt: 3, color: "#fff", backgroundColor: "#000" }}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  BUY NOW
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: 3,
                  mt: 3,
                  p: 1,
                  paddingLeft: 3,
                  paddingRight: 3,
                  color: "#fff",
                  backgroundColor: "#000",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Learn more
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Stack direction={"column"} width={"40%"}>
            <img src={Smart} />
          </Stack>
        </Stack>
        <Stack flexDirection={"row"}></Stack>
        <Stack justifyContent={"center"}>
          <WhatsAppIcon color={"#158ea8"}></WhatsAppIcon>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Landing;
