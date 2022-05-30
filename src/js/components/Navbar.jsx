import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Context } from "../context/appContext";

const Navbar = () => {
  let context = React.useContext(Context);

  return (
    <div>
      <nav className="color-navbar navbar navbar-expand-lg navbar-light bg-light">
        <Container maxWidth={"xl"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack flexDirection={"column"}>
              <Link to="/">
                <img src={"https://i.ibb.co/JjydpD3/Logo2.png"} height="60" />
              </Link>
            </Stack>

            <Stack flexDirection={"column"}>
              {context.store.user.token === "" ? (
                <Stack flexDirection={"row"}>
                  <Link to="/">
                    <Typography variant={"h6"} component={"div"} color={"#000"} sx={{marginLeft: "30px"}}>
                      Dashboard
                    </Typography>
                  </Link>
                  <Link to="/login">
                    <Typography variant={"h6"} component={"div"} color={"#000"} sx={{marginLeft: "30px"}}>
                      Log In
                    </Typography>
                  </Link>
                  <Link to="/signup">
                    <Typography variant={"h6"} component={"div"} color={"#000"} sx={{marginLeft: "30px"}}>
                      Sign Up
                    </Typography>
                  </Link>
                </Stack>
              ) : (
                <Stack flexDirection={"row"}>
                  <Link to="/">
                    <Typography variant={"h6"} component={"div"} color={"#000"} sx={{marginLeft: "30px"}}>
                      Dashboard
                    </Typography>
                  </Link>
                  <Link to="/signout">
                    <Typography variant={"h6"} component={"div"} color={"#000"} sx={{marginLeft: "30px"}}>
                      Sign Out
                    </Typography>
                  </Link>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
