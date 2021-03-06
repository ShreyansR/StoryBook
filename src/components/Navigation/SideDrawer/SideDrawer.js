import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Ax from '../../../hoc/Ax/Ax';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "SideDrawerClose"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "SideDrawerOpen"];
    }

    return(
        <Ax>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={"SideDrawerLogo"}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Ax>
    );
};

export default sideDrawer;