import React, { Component } from 'react';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
            <div className={"PortfolioContainer"}>
                <h3>Create a Story</h3>
                <div className={"NewStoryContainer"}>
                    <NavLink to="/pages">
                        <img className={"Link"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png"/>
                    </NavLink>
                </div>
                <hr></hr>
                <div className={"CreatedStoriesContainer"}>
                    <h3>Your Stories</h3>
                    <div className={"Stories"}>
                        <div className={"Story"}>
                            <NavLink to="/pages">
                                <p>Story1</p>
                            </NavLink>
                        </div>
                        <div className={"Story"}>
                            <NavLink to="/pages">
                                <p>Story2</p>
                            </NavLink>
                        </div>
                        <div className={"Story"}>
                            <NavLink to="/pages">
                                <p>Story3</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;