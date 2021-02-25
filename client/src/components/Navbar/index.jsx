import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Box,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import memories from "images/memories.png";
import * as actionType from "redux/constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>

        <Hidden mdUp implementation="css">
          <Avatar
            className={classes.image}
            style={user?.result.imageUrl && { borderRadius: 0 }}
            alt={user?.result.name}
            src={!user ? memories : user?.result.imageUrl}
            onClick={user && handleClick}
          >
            {user?.result.name.charAt(0)}
          </Avatar>
        </Hidden>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>

        <Hidden smDown implementation="css">
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="60"
          />
        </Hidden>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <Hidden smDown implementation="css">
            <div className={classes.profile}>
              <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
                {user?.result.name.charAt(0)}
              </Avatar>

              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>

              <Box ml={5}>
                <Button
                  variant="contained"
                  className={classes.logout}
                  color="secondary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </Box>
            </div>
          </Hidden>
        ) : (
          <Hidden smDown implementation="css">
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="secondary"
            >
              Sign In
            </Button>
          </Hidden>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
