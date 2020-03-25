import React, { Component } from 'react';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import {fireB, googleProvider, fstore} from '../../firebase-config';



class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            storyName: this.props.story,
            stories: [{
                storyId: "",
                storyName: "",
            }]
        }
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
                console.log("Result from adding story: " + docRef.id);
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

    componentDidMount() {
        this.getStories().then(result => {
            console.log(result);
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
                querySnapshot.forEach((doc) =>{
                    var storyObject = {
                        storyId: doc.id,
                        storyName: doc.data().storyName
                    }
                    storiesList.push(storyObject);
                });
                this.setState({
                    stories: storiesList
                })
            resolve(true);
            });
        })
    }

    render() {
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
                                <p>{story.storyId}</p>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;