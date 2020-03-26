import React, { Component, useState, useEffect } from 'react';
import './Pages.css';
import Editor from '../Editor/Editor'
// import FabricEditor from '../Editor/FabricEditor'
import {history} from 'react-router';
import { NavLink } from 'react-router-dom';
import {fstore, fireB} from "../../firebase-config"


class Pages extends Component { 
    constructor(props){
        super(props);
        this.state = {
            urls: [{
                dataId: "",
                dataUrl: "",
            }],
            sId: this.props.location.state.storyId,
            story: "",
            tempStory: ""
        }
    }

    componentDidMount() {
        this.getURLs().then(result => {
            this.getStoryName().then(result => {
                console.log("this is the story name: " + this.state.story);
                this.setState({
                    story: result
                })
            });
        })        
    }

    getStoryName(){
        return new Promise((resolve, reject) => {
            var story;
            var docRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId);
            docRef.get().then(function(doc) {
                console.log(doc.data().storyName);
                story = doc.data().storyName;
                resolve(story);
            });
        })
    }

    clickRemove(pageId){
        this.removePage(pageId).then(result => {
            console.log("Successfully removed page: " + pageId);
            window.location.reload(false);
            // this.getURLs().then((result) => {
            //     // do nothing
            // })
        })
    }

    removePage(pageId){
        return new Promise((resolve, reject) => {
            fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId).collection("Pages").doc(pageId).delete();  
            resolve(true);         
        })
    }

    //create image object from image stored in firestore
    getURLs(){
        return new Promise((resolve, reject) => {
            // var pages = fstore.collection("Users").doc("user1").collection("Stories").doc("story1").collection("Pages");
            var pages = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId).collection("Pages");
            var queryRef = pages.orderBy('date', "asc");
            var urlList = [];
            queryRef.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    var urlObject = {
                        dataId: doc.id,
                        dataUrl: doc.data().url
                    }
                    urlList.push(urlObject);
                });
                this.setState({
                    urls: urlList
                })
                resolve(true);
            });
        })
    }

    updateStoryName(event){
        this.setState({
            tempStory: event.target.value
        })
        // console.log("story name should be updated");
        // var docRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId);
        // docRef.update({
        //     "storyName": "test"
        // })
    }

    mySubmitHandler(event){
        event.preventDefault();
        //submit the changed name to firestore
        fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId).update({
            "storyName": this.state.tempStory
        }).then(result => {
            window.location.reload(false);
        });
    }
    
    render() {
        return (
            <div className={"PagesContainer"}>
                <h3>{this.state.story}</h3>
                <form onSubmit={this.mySubmitHandler.bind(this)}>
                    <label>
                        Story Name:
                        <input type="text" onChange={this.updateStoryName.bind(this)}/>
                    </label>
                    <input type="submit" value="Change Name"/>
                </form>
                {/* <button onClick={this.updateStoryName.bind(this)}>Update Story Name</button> */}
                
                <div>
                    <h5>Pages</h5>
                    <div className={"Pages"}>
                    {this.state.urls.map(image => (
                            <div key={image.dataId}>
                                <NavLink to = {{
                                    pathname:"/Editor",
                                    state:{
                                        data: image.dataUrl,
                                        id: image.dataId,
                                        editing: true,
                                        sId: this.state.sId 
                                    }
                                }}
                                exact
                                >
                                <img className={"Page"} src={image.dataUrl}/>
                                </NavLink>
                                <img src="https://image.flaticon.com/icons/svg/25/25230.svg" onClick={this.clickRemove.bind(this, image.dataId)}/>
                            </div>
                        ))}
                    </div>
                </div>
                <NavLink to = {{
                    pathname: "/editor",
                    state: {
                        data: "",
                        id: "",
                        editing: false,
                        sId: this.state.sId 
                    }
                }}
                exact
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png" />
                </NavLink>
            </div>
        )
    }
}

export default Pages;