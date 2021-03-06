import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Context } from "../context/appContext";

import PersonIcon from "@mui/icons-material/Person";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let context = React.useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Container maxWidth={"xl"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"5px 0"}
          >
            <Stack flexDirection={"column"}>
              <Link to="/">
                <img src={"https://i.ibb.co/JjydpD3/Logo2.png"} height="75" />
              </Link>
            </Stack>
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {context.store.user.token != "" ? (
                  <Link to="/dashboard">
                    <Typography variant={"h6"} sx={{ paddingRight: "20px" }}>
                      Dashboard
                    </Typography>
                  </Link>
                ) : null}

                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        padding: "5px",
                        backgroundColor: "gray",
                        color: "fff",
                      }}
                    >
                      {context.store.user.token != "" ? (
                        context.store.user.name[0]
                      ) : (
                        <PersonIcon />
                      )}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to="/login">
                  <MenuItem>Log In</MenuItem>
                </Link>
                <Divider />
                <Link to="/signup">
                  <MenuItem>Sign Up</MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          </Stack>
        </Container>
      </nav>
    </div>
  );
}
