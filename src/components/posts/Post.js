import React from 'react'
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
const [expanded, setExpanded] = React.useState(false);

  const handleComment = event => {
    setComment(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


    return (
        <Card style={{ margin: "20px", border: "2px black solid" }}>
        <CardHeader
          avatar={
            <Avatar>
              <img src="https://popingservers.com/images/1.png" />
            </Avatar>
          }
          title={props.username}
          subheader={props.date}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
        
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
            {/* <ExpandMoreIcon /> */}
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Commrnt 1</Typography>
            <Typography paragraph>Commrnt 2</Typography>
            
            

            <Typography />
            <TextField
              id="standard-dense"
              label="Add Comment"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              onChange={handleComment}
            />
          </CardContent>
        </Collapse>
      </Card>
    )
}

export default Post
