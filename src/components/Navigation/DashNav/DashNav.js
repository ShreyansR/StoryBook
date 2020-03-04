import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './DashNav.css'
import Ax from '../../../hoc/Ax/Ax';
import {fireB} from '../../../firebase-config';
import { NavLink } from 'react-router-dom';

const dashnav = (props) => {

    return(
        <Ax>
            <div className={classes.DashNav}>
                <div>
                    <img src={fireB.auth().currentUser.photoURL}></img>
                    <h1 style={{textAlign:"center"}}>Welcome {fireB.auth().currentUser.displayName}</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/' }onClick={()=>fireB.auth().signOut()}>Sign Out</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Ax>
    );
};

export default dashnav;