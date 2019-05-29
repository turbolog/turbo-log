import React from "react";
import NavBar from "../reusable/NavBar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  button: {
    width: "25%"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    
    <div
      style={{
        background: `url("https://images.unsplash.com/photo-1457332253637-21d324d25df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80") no-repeat center center`,
        height: "100vh"
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "5vw",
          width: "50vw"
        }}
      >
        <p style={{ fontSize: "7vh", textAlign: "center" }}>
          Maintenance starts with you!
        </p>
        <p
          style={{
            fontSize: "4vh",
            width: "100%",
            textAlign: "center",
            marginTop: "0vh"
          }}
        >
          Get the most out of your investment by logging your service records.
          Your future self will be thanking you!
        </p>

        <Fab
          size="large"
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.button}
        >
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Register Today
          </Link>
        </Fab>
      </div>
      <div />
    </div>
   
  );
};

export default Home;
