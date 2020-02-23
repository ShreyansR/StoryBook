import React, { Component } from 'react';
import classes from './Pages.css';
import { NavLink } from 'react-router-dom';

class Pages extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <h3>Insert StoryName here</h3>
                <p>populate pages from database here</p>
                <NavLink to="/login">
                    <img className={classes.Link} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png" />
                </NavLink>
                <p>This link will point to the photo editor page </p>
            </div>
        )
    }
}

export default Pages;