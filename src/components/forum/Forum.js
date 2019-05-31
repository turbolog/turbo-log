import React,{useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./Forum.css";
import NavBar from "../navbar/NavBar";
import Post from "../posts/Post";
import Modal from '@material-ui/core/Modal';
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import {addPost,getPosts,update} from "../../ducks/forumReduce"
import Card from "@material-ui/core/Card"

function searching(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || x.post.toLowerCase().includes(term.toLowerCase()) || !term
    
  }
  
}
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
  const [term, setTerm] = React.useState("");
  
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  
  
   const posts = props.posts.filter(searching(term)).map(post =>{
     return <Post post ={post}/>
     
   })
   const handleInput = e => {
    props.update(e.target.name, e.target.value)
  }
   const handleSubmit = () =>{
     if(!props.title || !props.post){
       return
      }
      props.addPost(props.title, props.post)
      handleClose()
   }

   
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
            name="title"
            id="outlined-dense"
            style={{ width:"100%"}}
            label="Title"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            onChange={handleInput}
            />
           
           
            <TextField
              style={{ width:"100%"}}
              name="post"
              id="outlined-multiline-static"
              label="Detals"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleInput}
            />
     
        
           </Typography> 
           
          </div>
        
           <Button onClick={handleSubmit} variant="contained" color="primary" >
            submit
           </Button>
        
        </Card>
      </Modal>
      <NavBar />
      <Grid style={{marginTop:"20px", textAlign:"center"}}>

       <Fab onClick={handleOpen} color="secondary" aria-label="Add" style={{margin:" 0px 5px 5px 5px"}}>
          <AddIcon  />
         </Fab>
      
         <TextField 
          id="outlined-search"
          label="Search...."
          type="search"
          variant="outlined"
          className="search-bar"
          value={term}
          onChange={(e) =>{setTerm(e.target.value)}}
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
    title: state.forum.title,
    post: state.forum.post
    
  }
};


export default connect(mapStateToProps, {addPost,getPosts,update})(Forum);
