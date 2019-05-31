import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
  grid: {
    marginTop: "3vh"
  }
});

function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
    console.log(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="center">
        <KeyboardDatePicker
          margin="normal"
          label="Service Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
