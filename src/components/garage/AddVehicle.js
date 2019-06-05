import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { Typography, Fab, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NavBar from "../navbar/NavBar";
import { updateVehicle, addCar } from "../../ducks/vehicleReducer";
import { connect } from "react-redux";

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
    border: "solid 1px red",
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
        />
        <TextField
          id="outlined-name"
          label="Make"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="make"
        />
        <TextField
          id="outlined-name"
          label="Model"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="model"
        />
        <TextField
          id="outlined-name"
          label="Trim"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="trim"
        />
        <TextField
          id="outlined-name"
          label="Color"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="color"
        />
        <TextField
          id="outlined-name"
          label="Miles"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="miles"
        />
        <TextField
          id="outlined-name"
          label="VIN"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="vin"
        />
        <div className={classes.upload}>
          <Typography>Add Image:</Typography>
          <Input type="file" />
          <Fab
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.margin}
          >
            <AddIcon />
          </Fab>
        </div>
      </form>
      <Link to="/garage">
        <Button color="primary" onClick={addVehicle}>
          Submit
        </Button>
      </Link>
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

