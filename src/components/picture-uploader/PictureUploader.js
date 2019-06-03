import React,{useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios"



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      
    },
    input: {
      display: 'none',
    },
  }));



const PictureUploader = () =>{
  const [file, setFile] = useState(null)
    const classes = useStyles()

    const handleFileUpload = event => {
      setFile(event.target.files);
    }

    const submitFile = event => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('file',file[0]);
      axios.post(`/test-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        // handle your error
      });
    }
  


    return (
        <Grid>
          <form onSubmit={submitFile}>
                <input
                 accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                   multiple
                   label='upload file' 
                   type='file' 
                   onChange={handleFileUpload}
              ></input>
             <label htmlFor="contained-button-file">
               <Button  color="primary" variant="contained" component="span" className={classes.button}>
                 Change Picture
               </Button>
             </label>
                 <Button type="submit" variant="contained" color="primary" className={classes.button}>
                     Upload
                  </Button>      
          </form>
        </Grid>
    )
}

export default PictureUploader
