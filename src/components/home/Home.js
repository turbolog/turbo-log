import React from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import "./Home.css";
import HomeNav from "../navbar/HomeNav";

const useStyles = makeStyles(theme => ({
  button: {
    width: "37%"
  }
}));

const Home = props => {
  const classes = useStyles();

  if (props.user_id) {
    return <Redirect to="/garage" />;
  }
  return (
    <div
      className="home-background"
      style={{
        background: `url("https://images.unsplash.com/photo-1504575797-2f83688754b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80") no-repeat center center`,
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      {/* background: url(images/bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */}
      <HomeNav/>
      <div className="text-box">
        <p
          className="glove-box"
          style={{ fontSize: "7vh", textAlign: "center" }}
        >
          Give your glovebox a break!
        </p>
        <p
          style={{
            fontSize: "4vh",
            width: "100%",
            textAlign: "center",
            marginTop: "0vh"
          }}
        >
          No more dirty receipts. No more hassle. Simple. Just TurboLog it!
        </p>

        <Fab
          size="large"
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.button}
          id="register"
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

const mapStateToProps = state => {
  return {
    user_id: state.auth.user_id
  };
};

export default connect(mapStateToProps)(Home);
