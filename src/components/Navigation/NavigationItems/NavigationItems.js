import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import * as ROUTES from '../../../constants/routes';

// const navItems = ({ authUser }) => (
//     authUser ? <navigationItems /> : <navigationItemsNonAuth />
// );

const navigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavigationItem link={ROUTES.LOG_IN} exact>Log in</NavigationItem>
        <NavigationItem link={ROUTES.SIGN_UP} class="signup">Sign Up</NavigationItem>
    </ul>
);

// const navigationItemsNonAuth = () => (
//     <ul className={classes.NavigationItems}> 
//         <NavigationItem link={ROUTES.LOG_IN} exact>Dashboard</NavigationItem>
//         <NavigationItem link={ROUTES.SIGN_UP} class="signup">Sign Up</NavigationItem>
//     </ul>
// );

export default navigationItems;