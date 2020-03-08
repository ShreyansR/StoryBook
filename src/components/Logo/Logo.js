import React from 'react';
import burgerLogo from '../../assests/images/logo.png';
import './Logo.css';

const logo = (props) => (
    <div className={"MainLogo"} style={{height: props.height}}>
        <a href="/"><img src={burgerLogo} alt="CompanyName"/></a>
    </div>
);

export default logo;