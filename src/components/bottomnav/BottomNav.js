import React from 'react';
import { Link } from "react-router-dom"
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
      <Link style={{display: "none"}} to="/forum"><BottomNavigationAction label="Forum" value="forum" icon={<ForumIcon />}/></Link>
      <Link style={{display: "none"}} to="/garage"><BottomNavigationAction label="Garage" value="garage" icon={<Car />} /></Link>
      <Link style={{display: "none"}} to="/account"><BottomNavigationAction label="Account" value="account" icon={<Account />}/></Link>
    </BottomNavigation>
  );
}

export default BottomNav;