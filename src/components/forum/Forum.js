import React,{useEffect} from "react";
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
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import {addPost,getPosts} from "../../ducks/forumReduce"
import Card from "@material-ui/core/Card"

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
  useEffect(() => {
    // Update the document title using the browser API
    props.getPosts()
  },[]);

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
  
  // const posts = props.posts.map(post) => {
  //   return <Post post={post} /> 
  // } 
   const posts = props.posts.map(post =>{
    console.log(post);
     return <Post post ={post}/>
     
   })
   
  return (
    
    <Grid>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Card style={modalStyle} className={classes.paper} item xs={12}>
          
        <div >
          <Typography variant="h6" id="modal-title">
            Ask a Qustion
          </Typography>

           <Typography variant="subtitle1" id="simple-modal-description">

           <TextField
              style={{ width:"100%"}}
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="1"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
           
            <TextField
              style={{ width:"100%"}}
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
     
        
          </Typography> 
           
        </div>
        <Link to="/forum">
          <Button variant="contained" color="primary" >
          submit
         </Button>
        </Link>
        </Card>
      </Modal>
      <NavBar />
      <Grid style={{marginTop:"20px", textAlign:"center"}}>

       <Fab color="secondary" aria-label="Add" style={{margin:" 0px 5px 5px 5px"}}>
          <AddIcon onClick={handleOpen} />
         </Fab>
      
         <TextField 
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          className="search-bar"
         />
      
         <Button variant="contained" color="primary" style={{ margin: "10px",}} >
          Search
          </Button>
      </Grid>
    
    
     {posts}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.forum.posts,
    
  }
};


export default connect(mapStateToProps, {addPost,getPosts})(Forum);
