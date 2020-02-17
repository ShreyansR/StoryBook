import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavigationItem link="/" active>Log In</NavigationItem>
        <NavigationItem link="/" active>Sign Up</NavigationItem>
    </ul>
);

export default navigationItems;