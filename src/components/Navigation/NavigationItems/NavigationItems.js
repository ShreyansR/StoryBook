import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavigationItem link="/login" exact>Log In</NavigationItem>
        <NavigationItem link="/signup" class="signup">Sign Up</NavigationItem>
    </ul>
);

export default navigationItems;