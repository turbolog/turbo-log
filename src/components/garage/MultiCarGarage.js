import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

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

function MultiCarGarage(props) {
  const [deleteCar, setDeleteCar] = useState(false);
  const [open, setOpen] = useState(false);
  const { classes } = props;

  const handleCarDelete = () => {
    setOpen(true);
  };

  const closeDeleteAlert = () => {
    setOpen(false);
  };

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
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="vehicles"
                src="https://cdn.jdpower.com/Models/400x200/2007-Dodge-Dakota.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.vehicleInfo}>
                <Typography gutterBottom variant="h5">
                  {"2007 Dodge Dakota"}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  VIN: {"3VWML7AJ3CM452600"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mileage: {"108,065"}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="body2"
                  size="small"
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    to="/addRecordForm"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Add Record
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="body2"
                  size="small"
                  style={{ cursor: "pointer" }}
                  onClick={handleCarDelete}
                >
                  Delete
                </Button>
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
                      Are you sure you want to delete your vehicle? This can not
                      be undone!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeDeleteAlert} color="primary">
                      Go back
                    </Button>
                    <Button
                      onClick={closeDeleteAlert}
                      color="primary"
                      autoFocus
                    >
                      Delete Vehicle
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
            {/* <Grid item style={{ border: "solid 1px green" }}>
              <Typography variant="subtitle1">
                Current Value: {"$5,000"}
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

MultiCarGarage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MultiCarGarage);

// import React from "react";
// import NavBar from "../navbar/NavBar";

// import CssBaseline from "@material-ui/core/CssBaseline";
// import Container from "@material-ui/core/Container";
// import { Grid } from "@material-ui/core";

// function MultiCarGarage() {
//   return (
//     <div>
//       <NavBar />
//       <CssBaseline />
//       <Container fixed>
//         <Grid
//           container
//           style={{
//             border: "solid 1px red",
//             height: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center"
//           }}
//         >
//           <Grid
//             item
//             style={{
//               width: "20vw",
//               height: "20vh",
//               display: "flex",
//               alignItems: "center",
//               border: "solid red 1px"
//             }}
//           >
//             Card
//           </Grid>
//           <Grid
//             item
//             style={{ width: "20vw", display: "flex", alignItems: "center" }}
//           >
//             Card
//           </Grid>
//           <Grid
//             item
//             style={{ width: "20vw", display: "flex", alignItems: "center" }}
//           >
//             Card
//           </Grid>
//           <Grid
//             item
//             style={{ width: "20vw", display: "flex", alignItems: "center" }}
//           >
//             Card
//           </Grid>
//           <Grid
//             item
//             style={{ width: "20vw", display: "flex", alignItems: "center" }}
//           >
//             Card
//           </Grid>
//           <Grid
//             item
//             style={{ width: "20vw", display: "flex", alignItems: "center" }}
//           >
//             Card
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default MultiCarGarage;
