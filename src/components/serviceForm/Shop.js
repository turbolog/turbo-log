import React, { useState, useEffect } from "react";
import PictureUplodar from "../picture-uploader/PictureUploader"

import { connect } from "react-redux";
import {
  updateForm,
  submitShopRecord,
  toggleShop
} from "../../ducks/formReducer";
import NavBar from "../navbar/NavBar";
import DatePicker from "./DatePicker";
import DIY from "./DIY";
import Shop from "./Shop";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { Typography, Radio, Button, Grid} from "@material-ui/core";

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
  file: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1),
    width:"14vw"
  },
}));

function ServiceForm(props) {
  const classes = styles();
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    props.toggleShop(true);
  }, []);

  const handleChange = e => {
    props.updateForm(e.target.name, e.target.value);
  };

  const handleShopSubmit = () => {
    props.submitShopRecord(
      props.id,
      props.shop,
      props.date,
      props.miles,
      props.summary,
      props.shop_name
      );;
  };
  if (selectedValue === "b") {
    return <Shop />;
  } else if (selectedValue === "a") {
    return <DIY />;
  }

  return (
    <div>
      <NavBar />
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "5vh" }}
      >
        Shop Log
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
          onChange={props.handleRadioButton}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          style={{ color: "teal" }}
        />
        <Typography>Shop</Typography>
        <Radio
          checked={selectedValue === "b"}
          onChange={props.handleRadioButton}
          value="b"
          name="radio-button-demo"
          aria-label="A"
          style={{ color: "teal" }}
        />
      </div>
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
        <TextField
          name="shop_name"
          id="outlined-name"
          label="Shop Name"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
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

        {/* <Input
          type="file"
          className={classes.file}
          style={{ marginRight: "50px" }}
        /> */}
        <Grid style={{textAlign:"center",}}>
            <PictureUplodar uploadtitle="Invice Picture" />
        <Button color="primary" variant="contained" className={classes.button} onClick={handleShopSubmit}>Submit</Button>
        </Grid>
        
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
  { updateForm, submitShopRecord, toggleShop }
)(ServiceForm);
