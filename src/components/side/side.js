import React from "react" 
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';


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
        </Drawer>
      </Hidden>
      </>
    )
}
export default Side