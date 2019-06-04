import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateForm, getID } from "../../ducks/formReducer";
import NavBar from "../navbar/NavBar";
import DatePicker from "./DatePicker";
import DIY from "./DIY";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Radio } from "@material-ui/core";
import PartsForm from "./PartsForm";
import Shop from "./Shop";

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
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = e => {
    props.updateForm(e.target.name, e.target.value);
  };

  useEffect(() => {
    props.getID(+props.match.params.vehicle_id);
  }, []);

  const handleRadioButton = e => {
    setSelectedValue(e.target.value);
  };

  if (selectedValue === "b") {
    return (
      <Shop
        handleRadioButton={handleRadioButton}
        id={+props.match.params.vehicle_id}
      />
    );
  } else if (selectedValue === "a") {
    return (
      <DIY
        handleRadioButton={handleRadioButton}
        id={+props.match.params.vehicle_id}
      />
    );
  }

  return (
    <div>
      <NavBar />
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "5vh" }}
      >
        Add Service Record
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vh"
        }}
      >
        <Typography>DIY</Typography>
        <Radio
          checked={selectedValue === "a"}
          onChange={handleRadioButton}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          style={{ color: "teal" }}
        />
        <Typography>Shop</Typography>
        <Radio
          checked={selectedValue === "b"}
          onChange={handleRadioButton}
          value="b"
          name="radio-button-demo"
          aria-label="A"
          style={{ color: "teal" }}
        />
      </div>
      <DatePicker />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Service Description"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Current Mileage"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <PartsForm />
        <TextField
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

const mapStateToProps = (state, ownProps) => {
  return {
    vehicle_id: +ownProps.match.params.vehicle_id,
    shop: state.form.shop,
    date: state.form.date,
    miles: state.form.miles,
    summary: state.form.summary,
    shop_name: state.form.shop_name
  };
};

export default connect(
  mapStateToProps,
  { updateForm, getID }
)(ServiceForm);
