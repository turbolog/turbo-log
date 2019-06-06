import React from "react" 
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {Link} from "react-router-dom"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Lock from '@material-ui/icons/LockOutlined';
import LocationOn from '@material-ui/icons/LocationOn';
import Notes from '@material-ui/icons/NotesOutlined';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import Directions_car from '@material-ui/icons/DirectionsCar';
import ViewCompact from '@material-ui/icons/ViewCompact';
import {connect} from "react-redux"
import {logout} from "../../ducks/authReducer"


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.down('lg')]: {
        width: 240,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width:240,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logout: {
      bottom:0
    }
  }));

function Side (props) {
  const classes = useStyles()

  function handleClick() {
    props.logout()
  }

    return(
        <>
        <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          open={props.open}
          onOpen={props.toggleSide}
          onClose={props.toggleSide}
        >
          <List>
            <ListItem button>
              <ListItemIcon> <Notes /> </ListItemIcon>
              <ListItemText primary="Car Log" />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <Directions_car /> </ListItemIcon>
              <ListItemText primary="Garage"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon> <LocationOn /> </ListItemIcon>
              <ListItemText primary="Find Shop" />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <ForumIcon /> </ListItemIcon>
              <ListItemText primary="Forum" />
            </ListItem>
            <Link to='/bestpractices' style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem button>
                <ListItemIcon> <ViewCompact /> </ListItemIcon>
                <ListItemText primary="Best Practices" />
              </ListItem>
            </Link>
          </List>
            <Divider />
            <List>
              <ListItem className={classes.logout} onClick={handleClick}>
                <ListItemIcon> <Lock /> </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
        </Drawer>
      </Hidden>
      </>
    )
}

const mapStatetoProps = state => {
  return {
    user_id: state.auth.user_id
  }
}
export default connect(mapStatetoProps,{logout})(Side)