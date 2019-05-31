import React, { useState } from "react";
import { connect } from "react-redux";
import { updateForm } from "../../ducks/formReducer";
import NavBar from "../navbar/NavBar";
import DatePicker from "./DatePicker";

import clsx from "clsx";
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
import PartsForm from "./PartsForm";

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

function ServiceForm(props) {
  const classes = styles();
  // const [count, setCount] = useState(0);

  const handleChange = e => {
    props.updateForm(e.target.name, e.target.value);
  };

  // const increment = e => {
  //   setCount([...parts, <PartsForm />]);
  // };

  // const decrement = e => {
  //   setCount(countMinus);
  // };

  return (
    <div>
      <DatePicker />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          name="description"
          id="outlined-name"
          label="Service Description"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="miles"
          id="outlined-name"
          label="Current Mileage"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <PartsForm />
        <TextField
          name="summary"
          id="outlined-multiline-flexible"
          label="Summary"
          rowsMax="4"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    shop: state.form.shop,
    date: state.form.date,
    miles: state.form.miles,
    summary: state.form.summary,
    shop_name: state.form.shop_name
  };
};

export default connect(
  mapStateToProps,
  { updateForm }
)(ServiceForm);
