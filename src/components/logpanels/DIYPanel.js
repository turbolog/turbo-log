import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "20%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

function DIYPanel(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const type = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = () => {
    handleClose();
  };
 let date = props.log.date.slice(0, 10)
  return (
    <ExpansionPanel key={props.log.report_id}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={type.heading}>
          {props.log.description}
        </Typography>
        <Typography className={type.secondaryHeading}>
          {date}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <span className={classes.span}>Mileage: {props.log.miles}</span>
          </Grid>
          <Grid item>
            <span className={classes.span}>Summary:</span>
          </Grid>
          <Grid item>
            <span className={classes.span}>{props.log.summary}</span>
          </Grid>
          <Grid item>
            <span className={classes.span}>
              Part Number: {props.log.part_number}
            </span>
          </Grid>
          <Grid item>
            <span className={classes.span}>
              Part Description: {props.log.part_description}
            </span>
          </Grid>

          {props.log.image && (
            <Button variant="contained" color="primary" onClick={handleOpen}>
              View Receipt
            </Button>
          )}

          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
              style={{ margin: `10vh auto`, left: `50%`, width: "50vw" }}
            >
              <Grid item style={{ display: "block" }}>
                {/* <Typography variant="h6" id="modal-title">
                                 title
                                </Typography> */}
                {/* <Typography variant="subtitle1" id="simple-modal-description"> */}
                <img style={{ maxHeight: "75vh" }} src={props.log.image} alt={props.log.summary}/>
                {/* </Typography> */}
                {/* <Typography style={{textAlign:"center"}}> */}
                {/* </Typography> */}
              </Grid>
              <Grid item>
                <Button
                  onClick={handleModal}
                  variant="contained"
                  color="primary"
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Modal>
        </Grid>
        <Typography />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default DIYPanel;
