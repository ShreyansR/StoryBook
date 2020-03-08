import React, { Component, useState, useEffect } from 'react';
import './Pages.css';
import Editor from '../Editor/Editor'
import { NavLink } from 'react-router-dom';

class Pages extends Component { 
    render() {
        return (
            <div className={"PagesContainer"}>
                <h3>Insert StoryName here</h3>
                <div>
                    <h5>Pages</h5>
                    <div className={"Pages"}>
                        <div className={"Page"}>
                            <NavLink to="/editor">
                                <p>Page1</p>
                            </NavLink>
                        </div>
                        <div className={"Page"}>
                            <NavLink to="/editor">
                                <p>Page2</p>
                            </NavLink>
                        </div>
                        <div className={"Page"}>
                            <NavLink to="/editor">
                                <p>Page3</p>
                            </NavLink>
                        </div>
                        <div className={"Page"}>
                            <NavLink to="/editor">
                                <p>Page4</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <NavLink to="/editor">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png" />
                </NavLink>
                <p>This link will point to the photo editor page </p>
                {/* <Editor></Editor> */}
            </div>
        )
    }
}

export default Pages;