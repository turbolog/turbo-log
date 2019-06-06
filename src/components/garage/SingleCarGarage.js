import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VehicleCard from "./VehicleCard";
import { connect } from "react-redux";

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
  }
});

function SingleCarGarage(props) {
  const [open, setOpen] = useState(false);
  const { classes } = props;

  const handleCarDelete = () => {
    setOpen(true);
  };

  const closeDeleteAlert = () => {
    setOpen(false);
  };

  let singleCar = props.garage.find(vehicle => {
    if (vehicle.vehicle_id === +props.match.params.vehicle_id) {
      return vehicle;
    }
  });
  return (
    <div className={classes.root}>
      <NavBar />
      <Typography
        className={classes.header}
        gutterBottom
        variant="h3"
        style={{ textAlign: "center" }}
      >
        My Garage
      </Typography>
      <VehicleCard car={singleCar} />
      <Typography
        className={classes.header}
        gutterBottom
        variant="h4"
        style={{ textAlign: "center" }}
      >
        Service Logs
      </Typography>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {"Brakes Changed"}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item>Date:{""}</Grid>
              <Grid item>Mileage:{""}</Grid>
              <Grid item>Parts List:{""}</Grid>
              <Grid item>Warrantied Parts:{""}</Grid>
              <Grid item>Summary:{""}</Grid>
            </Grid>
            <Typography />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{"Tires Rotated"}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item>Date:{""}</Grid>
              <Grid item>Mileage:{""}</Grid>
              <Grid item>Parts List:{""}</Grid>
              <Grid item>Warrantied Parts:{""}</Grid>
              <Grid item>Summary:{""}</Grid>
            </Grid>
            <Typography />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ marginBottom: "10vh" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>{"Oil Change"}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item>Date:{""}</Grid>
              <Grid item>Mileage:{""}</Grid>
              <Grid item>Parts List:{""}</Grid>
              <Grid item>Warrantied Parts:{""}</Grid>
              <Grid item>Summary:{""}</Grid>
            </Grid>
            <Typography />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

SingleCarGarage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { year, make, model, trim, color, miles, vin, image } = state.vehicle;
  return {
    year,
    make,
    model,
    trim,
    color,
    miles,
    vin,
    image,
    garage: state.vehicle.garage
  };
};

export default connect(mapStateToProps)(withStyles(styles)(SingleCarGarage));
