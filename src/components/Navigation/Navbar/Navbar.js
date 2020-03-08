import React from 'react';
import './Navbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const navbar = (props) => (
    <header className={"Navbar"}>
        <DrawerToggle  clicked={props.drawerToggleClicked}/>

        <div className={"NavLogo"}>
            <Logo />
        </div>
        <nav className={"DesktopOnly"}>
            <NavigationItems auth={props.auth} />
        </nav>
    </header>
);

export default navbar;