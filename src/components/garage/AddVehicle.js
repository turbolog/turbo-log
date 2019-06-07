import React, { useState } from "react";
import PictureUploader from "../picture-uploader/PictureUploader";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { Typography, Fab, Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NavBar from "../navbar/NavBar";
import { updateVehicle, addCar } from "../../ducks/vehicleReducer";
import { connect } from "react-redux";
import VehiclePictureUploader from "../vehiclePictureUploader/VehiclePictureUploader";

const styles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(4)
  },
  dense: {
    marginTop: theme.spacing(4)
  },
  menu: {
    width: 200
  },
  upload: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "40vw"
  }
}));

function AddVehicle(props) {
  const classes = styles();

  const handleChange = e => {
    props.updateVehicle(e.target.name, e.target.value);
  };

  const addVehicle = () => {
    props.addCar(
      props.year,
      props.make,
      props.model,
      props.trim,
      props.color,
      props.miles,
      props.vin,
      props.image
    );
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Add Vehicle Form</h1>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <TextField
          id="outlined-name"
          label="Year"
          className={classes.textField}
          name="year"
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          id="outlined-name"
          label="Make"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="make"
          autoComplete="off"
        />
        <TextField
          id="outlined-name"
          label="Model"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="model"
          autoComplete="off"
        />
        <TextField
          id="outlined-name"
          label="Trim"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="trim"
          autoComplete="off"
        />
        <TextField
          id="outlined-name"
          label="Color"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="color"
          autoComplete="off"
        />
        <TextField
          id="outlined-name"
          label="Miles"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="miles"
          autoComplete="off"
        />
        <TextField
          id="outlined-name"
          label="VIN"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="vin"
          autoComplete="off"
        />
        <div>
          <Typography>Add Car Image:</Typography>
          <VehiclePictureUploader uploadtitle="add" />
        </div>
      </form>
      <Grid style={{ textAlign: "center" }}>
        <Link to="/garage" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={addVehicle}
            style={{ marginBottom: "10vh" }}
          >
            Submit
          </Button>
        </Link>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    year: state.vehicle.year,
    make: state.vehicle.make,
    model: state.vehicle.model,
    trim: state.vehicle.trim,
    color: state.vehicle.color,
    miles: state.vehicle.miles,
    vin: state.vehicle.vin,
    image: state.vehicle.image
  };
};

export default connect(
  mapStateToProps,
  { updateVehicle, addCar }
)(AddVehicle);
