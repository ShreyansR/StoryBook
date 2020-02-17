import React from 'react';
import classes from './Navbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const navbar = (props) => (
    <header className={classes.Navbar}>
        <DrawerToggle  clicked={props.drawerToggleClicked}/>

        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default navbar;