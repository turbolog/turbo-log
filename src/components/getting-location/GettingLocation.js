import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  }));

function GettingLocation() {
    const classes = useStyles();

    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    

 const handleCity =(e) =>{
     setCity(e.target.value)
     console.log('e.target.value: ', e.target.value);
   }
   const handleState =(e) =>{
    setState(e.target.value)
    console.log('(e.target.value: ', e.target.value);

  }


    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20%"}}>
            <TextField
        id="filled-email-input"
        label="City"
        className={classes.textField}
        name="City"
        margin="normal"
        variant="filled"
        onChange={handleCity}
      />
      <TextField
        id="filled-email-input"
        label="State"
        className={classes.textField}
         margin="normal"
        variant="filled"
        onChange={handleState}
      />
      <Link style={{textDecoration:"none"}} to={`/near-me/${city}/${state}`}>

      <Button color="primary" variant="contained" >
        Primary
      </Button>
      </Link>
        </div>
    )
}

export default GettingLocation
