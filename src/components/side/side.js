import React from "react" 
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Lock from '@material-ui/icons/LockOutlined';

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
            <ListItem button className={classes.logout} onClick={props.logout} >
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
export default Side