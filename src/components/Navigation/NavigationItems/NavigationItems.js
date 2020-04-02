import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import * as ROUTES from '../../../constants/routes';
import {fireB} from '../../../firebase-config';
import { NavLink } from 'react-router-dom';



const navigationItems = ( props ) => (
    
    <ul className={"NavigationItems"}> 
        {props.auth ? 
            (<ul className={"NavigationItems"}> 
                <h1 style={{textAlign:"center"}}>{fireB.auth().currentUser.displayName} ({fireB.auth().currentUser.emailVerified ? "Verified" : "Unverified"})</h1>
                <img title={fireB.auth().currentUser.displayName} src={fireB.auth().currentUser.photoURL}></img>
                <NavLink to={'/' }onClick={()=>fireB.auth().signOut()}>Sign Out</NavLink>

            </ul>) : null}
        {(!props.auth || props.auth==undefined) ? 
            (<ul className={"NavigationItems"}> 
                <NavigationItem link={ROUTES.LOG_IN} exact>Log in</NavigationItem>
                <NavigationItem link={ROUTES.SIGN_UP} class="signup">Sign Up</NavigationItem>
            </ul>) : null}
        {/* <NavigationItem link={ROUTES.LOG_IN} exact>Log in</NavigationItem>
        <NavigationItem link={ROUTES.SIGN_UP} class="signup">Sign Up</NavigationItem> */}
    </ul>
);

const navigationItemsAuth = () => (
    <ul className={"NavigationItems"}> 
        <img src={fireB.auth().currentUser.photoURL}></img>
        <h1 style={{textAlign:"center"}}>Welcome {fireB.auth().currentUser.displayName}</h1>
        <NavLink to={'/' }onClick={()=>fireB.auth().signOut()}>Sign Out</NavLink>
    </ul>
);

const navigationItemsNonAuth = () => (
    <ul className={"NavigationItems"}> 
        <NavigationItem link={ROUTES.LOG_IN} exact>Log in</NavigationItem>
        <NavigationItem link={ROUTES.SIGN_UP} class="signup">Sign Up</NavigationItem>
    </ul>
);

export default navigationItems;