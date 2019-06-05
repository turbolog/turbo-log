import React from 'react';
import { Redirect } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Car from '@material-ui/icons/DirectionsCar';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import Account from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    zIndex: 2,
    position: 'fixed',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
        display: "none"
    }
  },
}));

function BottomNav(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('garage');
    
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Forum" value="forum" icon={<ForumIcon />} onClick={<Redirect to="/forum" />}/>
      <BottomNavigationAction label="Garage" value="garage" icon={<Car />} onClick={<Redirect to="/garage" />}/>
      <BottomNavigationAction label="Account" value="account" icon={<Account />} onClick={<Redirect to="/account" />}/>
    </BottomNavigation>
  );
}

export default BottomNav;