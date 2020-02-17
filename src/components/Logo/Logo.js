import React from 'react';
import burgerLogo from '../../assests/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <a href="/"><img src={burgerLogo} alt="CompanyName"/></a>
    </div>
);

export default logo;