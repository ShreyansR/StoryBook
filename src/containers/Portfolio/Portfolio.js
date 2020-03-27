import React, { Component } from 'react';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import {fireB, googleProvider, fstore} from '../../firebase-config';



class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            storyName: this.props.story,
            gatheredThumbnails: false,
            stories: [{
                storyId: "",
                storyName: "",
                cover: ""
            }],
        }
    }

    componentWillMount() {
        this.getStories().then(result => {
            console.log("this is the result from the getStories promise: " + this.state.stories);
            console.log(this.state.stories);
            this.setState({
                gatheredThumbnails: true
            })
        })
    }

    createStory(){
       this.createStoryCollection().then(result => {
            this.createPagesCollection(result).then(result2 => {
                //re-render the page
                this.getStories();
            })
       })
    }

    createStoryCollection(){
         //create the story collection in the firestore database
         return new Promise((resolve, reject) => {
            var id;
            var today = new Date(); 
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + '  ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var docRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc();
            docRef.set({
                storyName: "storyName",
                default: false,
                dateCreated: date
            }).then((result) => {
                // console.log("Result from adding story: " + docRef.id);
                // this.createPagesCollection(docRef.id);
                resolve(docRef.id);
            })
        })
    }

    createPagesCollection(sId){
        //create a Pages collection for this document id
        return new Promise((resolve, reject) => {
            var pagesRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(sId).collection("Pages");
            pagesRef.add(
                {default:true}
            ).then((result => {
                resolve(true);
            }))
        })
    }


    clickRemove(storyId){
        // first, delete the "Pages" subcollection
        this.removePagesCollection(storyId).then((result) => {
            // delete the "story" document
            this.removeStoryCollection(storyId).then((result) => {
                // re-set the state
                this.getStories().then((result) => {
                    //do nothing
                });
            })
        })
    }

    removeStoryCollection(storyId){
        return new Promise((resolve, reject) => {
            fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(storyId).delete();
            resolve(true);
        })
    }

    removePagesCollection(storyId){
        // delete the "Pages" subcollection, to ensure that it's not orphaned in firestore
        return new Promise((resolve, reject) => {
            var pages = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(storyId).collection("Pages");
            pages.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    // console.log(doc.id)
                    // delete each page in the Pages collection, this will delete the Pages collection itself
                    fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(storyId).collection("Pages").doc(doc.id).delete();  
                });
                resolve(true);
            });

        })
    }


    //create image object
    getStories(){
        return new Promise((resolve, reject) => {
            // var pages = fstore.collection("Users").doc("user1").collection("Stories").doc("story1").collection("Pages");
            var pages = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories");
            var storiesList = [];
            var queryRef = pages.where('default', '==', false)
            queryRef.get().then((querySnapshot) => {
                // put promise here
                querySnapshot.forEach((doc) =>{
                    // this.getThumbnail(doc.id).then((result) => {
                        var storyObject = {
                            storyId: doc.id,
                            storyName: doc.data().storyName,
                            // cover: result
                        }
                        storiesList.push(storyObject);
                    })  
                // });
                this.setState({
                    stories: storiesList
                })
                resolve(true);
            });
        })
    }

    getThumbnail(sId){
        // grab the first page image in firestore for the story provided
        return new Promise((resolve, reject) => {
            var pageRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(sId).collection("Pages").where('default', '==', false).limit(1);
            pageRef.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    resolve(doc.data().url)
                })
            })  
        })
    }

    render() {
        if(this.state.gatheredThumbnails == false) return null;
        return (
            <div className={"PortfolioContainer"}>
                <h3>Create a Story</h3>
                <img className={"Link"} onClick={this.createStory.bind(this)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png"/>
                <hr></hr>
                <div className={"CreatedStoriesContainer"}>
                    <h3>Your Stories</h3>
                    <div className={"Stories"}>
                        {this.state.stories.map(story => (
                            <div key={story.storyId}>

                                <NavLink to = {{
                                    pathname:"/Pages",
                                    state:{
                                        storyId: story.storyId
                                    }
                                }}
                                exact
                                >
                                <p>{story.storyName}</p>
                                </NavLink>
                                <p onClick={this.clickRemove.bind(this, story.storyId)}>Remove</p>
                                {/* <img src="https://image.flaticon.com/icons/svg/25/25230.svg" onClick={this.clickRemove.bind(this, story.storyId)}/> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;