import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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

function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
    
    function handleChange(event, newValue) {
        setValue(newValue);
    }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;