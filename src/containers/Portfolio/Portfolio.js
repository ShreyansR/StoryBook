import React, { Component } from 'react';
import classes from './Portfolio.css';
import { NavLink } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <h3>Create a Story</h3>
                <div className={classes.NewStoryContainer}>
                    <NavLink to="/pages">
                        <img className={classes.Link} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png"/>
                    </NavLink>
                </div>
                <hr></hr>
                <div className={classes.CreatedStoriesContainer}>
                    <h3>Your Stories</h3>
                    <p>Populate created stories here</p>
                </div>
            </div>
        )
    }
}

export default Portfolio;