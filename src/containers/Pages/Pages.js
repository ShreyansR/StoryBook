import React, { Component, useState, useEffect } from 'react';
import './Pages.css';
// import FabricEditor from '../Editor/FabricEditor'
import { NavLink } from 'react-router-dom';
import {fstore, fireB} from "../../firebase-config";
import jsPDF from "jspdf";


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
                // console.log("this is the story name: " + this.state.story);
                this.setState({
                    story: result
                })
            });
        })        
    }

    //assemble all of the pages in the database into one pdf, show in new tab
    createPdf(){
        //create a new pdf file
        var doc = new jsPDF('p', 'mm', [480, 480]);
        //let the picture start at the top left corner
        let left = 0;
        let top = 0;

        //scale the picture so it fits the whole page
        const imgWidth = doc.internal.pageSize.getWidth();
        const imgHeight = doc.internal.pageSize.getHeight();
        
        //loop through the gathered urls and create a pdf page for each
        var i;
        for (i = 0; i < this.state.urls.length; i++){
            if(i != 0){
                //add a new page
                doc.addPage();
            }
            //add the dataurl to the pdf page
            doc.addImage(this.state.urls[i].dataUrl, 'PNG', left, top, imgWidth, imgHeight);
        }
        //show the created pdf in a new window
        // doc.output('dataurlnewwindow'); 
        doc.save("story.pdf");
    }

    getStoryName(){
        return new Promise((resolve, reject) => {
            var story;
            var docRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId);
            docRef.get().then(function(doc) {
                // console.log(doc.data().storyName);
                story = doc.data().storyName;
                resolve(story);
            });
        })
    }

    clickRemove(pageId){
        this.removePage(pageId).then(result => {
            // console.log("Successfully removed page: " + pageId);
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


    handleChange = (event) => {
        event.preventDefault();
        //console.log(event.target.value)
        this.setState({
            story: event.target.value
        }, () => {
            //console.log("_____",this.story)
            fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(this.state.sId).update({
                "storyName": this.state.story
            });
        });
    }
    
    render() {
        return (
            <div className={"PagesContainer"}>
                <form>
                    <input className={'inputField'} type='text' onChange={this.handleChange} value={this.state.story}></input>
                </form>
                <br></br>
                <NavLink to = {{
                    pathname:"/Flipbook",
                    state:{
                        urls: this.state.urls
                    }
                }}
                exact
                >
                <button className={'Btn'}>View Book</button>
                </NavLink>
                <button className={'Btn'} onClick={this.createPdf.bind(this)}>PDF it</button>
                <div>
                    <h5 className={'pagesTitle'}>Pages</h5>
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
                        data: "data:image/png;base64,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",
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