import React, { useState, useEffect } from "react";
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
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import axios from "axios";
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
  span: {
    fontSize: "20px"
  }
});

function SingleCarGarage(props) {
  const [open, setOpen] = useState(false);
  const [logs, setLogs] = React.useState([]);
  const { classes } = props;

  useEffect(() => {
    axios
      .get(`/api/vehicles/records/${props.match.params.vehicle_id}`)
      .then(data => {
        setLogs(data.data);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = () => {
    handleClose();
  };

  let singleCar = props.garage.find(vehicle => {
    if (vehicle.vehicle_id === +props.match.params.vehicle_id) {
      return vehicle;
    }
  });
  const displayLogs = logs.map(log => {
    let date = log.date.slice(0, 10);
    return (
      <ExpansionPanel key={log.report_id}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {log.description}
          </Typography>
          <Typography
            style={{
              marginLeft: "10vw"
            }}
          >
            {date}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <span className={classes.span}>
                Shop Name: {String(log.shop_name)}
              </span>
            </Grid>
            <Grid item>
              <span className={classes.span}>Mileage: {logs.miles}</span>
              {log.miles}
            </Grid>

            <Button variant="contained" color="primary" onClick={handleOpen}>
              View Receipt
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <Grid container justify="center">
                <Grid item>
                  <Typography variant="h6" id="modal-title">
                    title
                  </Typography>
                  <Typography variant="subtitle1" id="simple-modal-description">
                    <img
                      style={{ maxHeight: "800px" }}
                      src="https://images.invoicehome.com/templates/receipt-template-us-neat-750px.png"
                    />
                  </Typography>
                  <Typography style={{ textAlign: "center" }}>
                    <Button
                      onClick={handleModal}
                      variant="contained"
                      color="primary"
                    >
                      Close
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Modal>
          </Grid>
          <Typography />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
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

      {displayLogs}
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
