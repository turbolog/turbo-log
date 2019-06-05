import React,{useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Camera from "@material-ui/icons/CameraAlt"
import axios from "axios"
import {updateImage} from "../../ducks/formReducer"
import {connect} from "react-redux"




const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      
    },
    input: {
      display: 'none',
    },
  }));



const PictureUploader = (props) =>{
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
        console.log('response: ', response);
    
        props.updateImage(response.data.Location)
      }).catch(error => {
        // handle your error
      });
    }
  


    return (
        <Grid >
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
                 <Camera style={{marginRight:"4px"}}/>
                 {props.uploadtitle}
               </Button>
             </label>
                 <Button onClick={submitFile} type="submit" variant="contained" color="primary" className={classes.button}>
                     Upload
                  </Button>      
       
        </Grid>
    )
}
 
function mapStateToProps (state) {
  return {
    image: state.form.image
  }
}
export default connect(mapStateToProps, {updateImage})(PictureUploader)
