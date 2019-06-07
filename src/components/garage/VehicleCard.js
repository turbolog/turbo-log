import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteCar,
  updateMiles,
  updateVehicle
} from "../../ducks/vehicleReducer";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    background: "#202226",
    border: "solid 1px black",
    marginBottom: "20px"
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
  dialogActions: {
    display: "flex",
    justifyContent: "space-evenly"
  }
});

function VehicleCard(props) {
  const [open, setOpen] = useState(false);
  const [mileageOpen, setMileageOpen] = useState(false);
  const { classes } = props;

  const openDeleteAlert = () => {
    setOpen(true);
  };

  const closeDeleteAlert = () => {
    setOpen(false);
  };

  const deleteVehicle = () => {
    props.deleteCar(props.car.vehicle_id);
    setOpen(false);
  };

  const openMileageUpdate = () => {
    setMileageOpen(true);
  };

  const closeMileageUpdate = () => {
    setMileageOpen(false);
  };

  const updateMileage = () => {
    props.updateMiles(props.miles, props.car.vehicle_id);
    setMileageOpen(false);
  };

  const updateMilesField = e => {
    props.updateVehicle(e.target.name, e.target.value);
  };

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          
          <Link to={`/garage/${props.car.vehicle_id}`}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="vehicles"
                src={props.car.image}
              />
            </ButtonBase>
          </Link>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs className={classes.vehicleInfo}>
              <Typography gutterBottom variant="h5">
                {props.car.year} {props.car.make} {props.car.model}
              </Typography>
              <Typography variant="body2" gutterBottom>
                VIN: {props.car.vin}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Mileage: {props.car.miles}
              </Typography>
            </Grid>
            <Grid
              item
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                onClick={openMileageUpdate}
                variant="body2"
                size="small"
                style={{ cursor: "pointer", border: "solid 1px blue" }}
              >
                Update Mileage
              </Button>
              <Button
                variant="body2"
                size="small"
                style={{ cursor: "pointer", border: "solid 1px green" }}
              >
                <Link
                  to={`/addrecord/${props.car.vehicle_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Add Record
                </Link>
              </Button>
              <Button
                variant="body2"
                size="small"
                style={{ cursor: "pointer", border: "solid 1px red" }}
                onClick={openDeleteAlert}
              >
                Delete
              </Button>
            </Grid>
            <Grid item>
              <Dialog
                open={open}
                onClose={closeDeleteAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete Vehicle"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete your vehicle? This action
                    will delete all of your service records for this vehicle.
                    This can not be undone!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDeleteAlert} color="primary">
                    Go back
                  </Button>
                  <Button onClick={deleteVehicle} color="primary" autoFocus>
                    Delete Vehicle
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid item>
              <Dialog
                open={mileageOpen}
                onClose={closeMileageUpdate}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle
                  id="alert-dialog-title"
                  style={{ marginLeft: "30px", marginRight: "30px" }}
                >
                  {"Update Mileage"}
                </DialogTitle>
                <TextField
                  placeholder="New Mileage"
                  onChange={updateMilesField}
                  type="number"
                  style={{ width: "80%", marginLeft: "30px" }}
                  name="miles"
                />
                <DialogActions className={classes.dialogActions}>
                  <Button onClick={closeMileageUpdate} color="primary">
                    Go back
                  </Button>
                  <Button onClick={updateMileage} color="primary" autoFocus>
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    vehicle_id: state.vehicle.vehicle_id,
    miles: state.vehicle.miles
  };
};

export default connect(
  mapStateToProps,
  { deleteCar, updateMiles, updateVehicle }
)(withStyles(styles)(VehicleCard));
