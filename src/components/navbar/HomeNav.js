import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserSession } from "../../ducks/authReducer";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none"
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const HomeNav = props => {

  useEffect(() => {
    props.getUserSession();
  }, []);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                TurboLog
              </Link>
            </Typography>
            <Button color="inherit">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.auth.user_id
  };
};

export default connect(
  mapStateToProps,
  { getUserSession }
)(HomeNav);
