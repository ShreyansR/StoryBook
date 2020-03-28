import React, { Component } from 'react';
import {fireB } from '../../firebase-config';

class Dashboard extends Component {
    render() {

        return (
            <section style={{textAlign: "center", position: "absolute", top:"25%", left: "50%"}}>
              {/* <button style={{textAlign:"center"}} onClick={()=>fireB.auth().signOut()}>Sign Out</button>
              <h1 style={{textAlign:"center"}}>Welcome {fireB.auth().currentUser.displayName}</h1>
              <img src={fireB.auth().currentUser.photoURL}></img> */}
            </section>
            )

    }
}

export default Dashboard;