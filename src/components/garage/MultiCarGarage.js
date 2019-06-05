import React, { useEffect } from "react";
import NavBar from "../navbar/NavBar";
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { getCars } from "../../ducks/vehicleReducer";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core/";
import VehicleCard from "./VehicleCard";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    background: "#99b1d8"
  },
  image: {
    width: 400,
    height: 200
  },
  img: {
    margin: 0,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  header: {
    marginTop: "5vh",
    marginBottom: "5vh"
  },
  vehicleInfo: {
    maxWidth: 500
  },
  button: {
    marginBottom:"10px",
    marginTop:"10px",
    textAlign:"center"
  }
});

function MultiCarGarage(props) {
  const { classes } = props;
  useEffect(() => {
    props.getCars();
  }, []);

  const handleAddVehicle = () => {};

  let cars = props.garage.map(vehicle => {
    return <VehicleCard car={vehicle} />;
  });

  if (!props.user_id) return <Redirect to="/" />
  
  return (
    <div className={classes.root}>
      <NavBar />
      <div>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h3"
          style={{ textAlign: "center" }}
        >
          My Garage
        </Typography>
      </div>
      <div className={classes.button}>
        <Link
          to="/addvehicle"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddVehicle}
            style={{ marginBottom: "10vh" }}
          >
            Add Vehicle
          </Button>
        </Link>
      </div>
      {cars}
    </div>
  );
}

MultiCarGarage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    garage: state.vehicle.garage,
    user_id: state.auth.user_id
  };
};

export default connect(
  mapStateToProps,
  { getCars }
)(withStyles(styles)(MultiCarGarage));
