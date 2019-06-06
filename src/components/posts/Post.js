import React,{useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddComment from "@material-ui/icons/AddComment";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper"
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "../forum/Forum.css";
import NavBar from "../navbar/NavBar";
import axios from "axios"

const useStyles = makeStyles(theme => ({
    // card: {
    //   maxWidth: 400,
    // },
    hart: {
      color: red
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      // backgroundColor: red[500],
      backgroundImage: "url(https://popingservers.com/images/1.png)"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "80%",
      textAlign: "center"
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  }));

  function Post(props) {
    const classes = useStyles();
    
    const [comment, setComment] = React.useState("");
    const [responseComments, setResponseComments] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);
    
    useEffect(() => {
      
      const {post_id} = props.post
      axios.get(`/api/comments/${post_id}`).then(result => {
        setResponseComments(result.data)
      })
      
    },[]);
    
    const handleComment = event => {
      setComment(event.target.value);
    };
    
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    const addComment = () => {
      const {post_id} = props.post
      axios.post("/api/comments", {post_id,comment}).then(result => {
        setResponseComments(result.data)
      })
      
    }
    
    
    
    const displayComments = responseComments.map(comment => {
      const year = comment.date.slice(0,4)
    const mounth = comment.date.slice(5,8)
    const day = comment.date.slice(8,10)
    const date = `${mounth}${day}-${year}`
    
    console.log(responseComments)
    const displayComments = responseComments.map(comment => {
      
      return   (
        <Card style={{width: "50vw", margin: " 20px auto", border:"1px white solid", width:"70vw"}}>
            <CardHeader
              avatar={
                  <Avatar aria-label="Recipe">
                    <img  className="post-pic" src={comment.image} />
                  </Avatar>
                }
        
              
            title={comment.username}
            subheader={date}
          />
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              {comment.comment} 
            </Typography>
          </CardContent>
            </Card>
  ) 
})
    return (
        <Card style={{ margin: "20px", border: "2px black solid" }}>
        <CardHeader
        
          avatar={
            <Avatar>
              <img className="post-pic" src={props.post.image} />
            </Avatar>
          }
          title={props.post.username}
          subheader={props.date}
          
        />

        <CardContent>
        <Typography variant="h5" color="textSecondary" component="p">
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.post}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" style={{marginLeft: 10}} /> }
        
      />

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <AddComment />
            
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
           {displayComments}
            <Typography />
            <TextField
              id="standard-dense"
              label="Add Comment"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              onChange={handleComment}
            />
            
             <Button  onClick={addComment} variant="contained" color="primary" className={classes.button}>
                Add
             </Button>
          </CardContent>
        </Collapse>
      </Card>
    )
}

export default Post
