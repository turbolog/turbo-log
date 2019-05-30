import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./Forum.css";
import NavBar from "../navbar/NavBar";
import Post from "../posts/Post";
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const Forum = (props) => {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [search, setSearch] = React.useState("");
  const handleSeaech = (e) =>{
    
  } 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();


  return (
    <Grid>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Ask a Qustion
          </Typography>
         
           <Typography variant="subtitle1" id="simple-modal-description">
           <TextField 
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          className="search-bar"
          onChange={handleSeaech}
        />
        <Button variant="contained" color="primary" >
        submit
        </Button>
          </Typography> 
           
        </div>
      </Modal>
      <NavBar />
      <Paper style={{ margin: "20px",textAlign:"center" }}>
        <TextField 
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          className="search-bar"
        />
        <Button variant="contained" color="primary" >
        Search
        </Button>
     </Paper>
     <Fab color="secondary" aria-label="Add">
          <AddIcon onClick={handleOpen} />
        </Fab>
     <Post />
     <Post />
    </Grid>
  );
};

export default Forum;
