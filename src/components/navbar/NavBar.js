import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserSession } from "../../ducks/authReducer";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BottomNav from "../bottomnav/BottomNav";
import Avatar from "@material-ui/core/Avatar";
import Side from "../side/side";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  routes: {
    [theme.breakpoints.between('xs', "sm")]: {
      display: "none"
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const NavBar = props => {
  useEffect(() => {
    props.getUserSession()
  },[])
  const classes = useStyles();
  const [open, setOpen] = useState(false)


  function toggleSide () {
      setOpen(!open)
  }

  return (
    <div>
      <div className={classes.root}>
        <Side open={open} toggleSide={toggleSide} />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                TurboLog
              </Link>
            </Typography>
            {!props.user_id ? 
            
            <Button color="inherit">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </Button>
            :
            <>
            <Link to="/account" style={{ textDecoration: "none", color: "inherit" }}>
              <Avatar className={classes.avatar}>
              <img src="https://popingservers.com/images/1.png" />
              </Avatar>
            </Link>
            <Button className={classes.routes} color="inherit">
            <Link
              to="/forum"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Forum
            </Link>
          </Button>
            <Button className={classes.routes} color="inherit">
            <Link
              to="/garage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Garage
            </Link>
          </Button>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={toggleSide}
            >
              <MenuIcon />
            </IconButton>
          </>
            }
          </Toolbar>
          <BottomNav/>
        </AppBar>
      </div>
    </div>
  );
};

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.auth.user_id
  }
};

export default connect(
  mapStateToProps,
  { getUserSession }
)(NavBar);
