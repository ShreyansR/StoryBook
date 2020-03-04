import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import {fireB } from '../../firebase-config';

class Logout extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        };
    }
    componentDidMount() {
        fireB.auth().signOut.then((user) => {
            this.setState({redirect: true})
        })
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to ="/" />
        }

        else {

        return (
            <div style={{textAlign: "center", position: "absolute", top:"25%", left: "50%"}}>
                <h3> Logging Out</h3>
                <Spinner />
            </div>
            )
        }
    }
}

export default Logout;