import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import {
  Typography,
  Radio,
  Fab,
  MenuItem,
  Select,
  OutlinedInput,
  Button
} from "@material-ui/core";
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
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = e => {
    props.updateForm(e.target.name, e.target.value);
  };

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
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        style={{ width: "10vw" }}
      />
      <TextField
        id="outlined-name"
        label="Part Description"
        className={classes.textField}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        style={{ width: "30vw" }}
      />
      <Input type="file" style={{ marginRight: "50px" }} />
      <Fab
        size="small"
        color="secondary"
        aria-label="Add"
        className={classes.margin}
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

export default PartsForm;
