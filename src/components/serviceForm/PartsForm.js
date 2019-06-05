import React, { useState } from "react";
import PictureUploader from "../picture-uploader/PictureUploader"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { Typography, Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
  }
}));

function PartsForm(props) {
  const classes = styles();

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <TextField
        id="outlined-name"
        label="Part Number"
        className={classes.textField}
        name="part_number"
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
        style={{ width: "10vw" }}
      />
      <TextField
        id="outlined-name"
        label="Part Description"
        className={classes.textField}
        onChange={props.handleChange}
        name="part_description"
        margin="normal"
        variant="outlined"
        style={{ width: "30vw" }}
      />
      <Typography variant="h5" style={{ marginRight: "20px" }}>
        Add Parts Invoice:
      </Typography>
        <Grid>
          <PictureUploader uploadtitle="add"/>
        </Grid>
      {/* <Input type="file" style={{ marginRight: "50px" }} />
      <Fab
        size="small"
        color="secondary"
        aria-label="Add"
        className={classes.margin}
      >
        <AddIcon />
      </Fab> */}
    </form>
  );
}

export default PartsForm;
