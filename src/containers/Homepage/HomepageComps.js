import React from "react";
import "./Homepage.css";
import { NavLink } from 'react-router-dom';

//import images
import previewBook from '../../assests/images/preview-book.gif';
import checkIcon from "../../assests/images/check-mark.webp";
import logoblack from "../../assests/images/logoblack.png";

// reactstrap components
import {
  Button,
  Nav
} from "reactstrap";

class WelcomeBanner extends React.Component{
  render(){
    return(
      <div>
          <div className={"welcomeBanner"} id='welcomeBanner'>
            <h1 className={"welcomeMessage1"}>Storybook, the only tool to capture your imagination</h1>
            <h2 className= {"welcomeMessage2"}>Create and share your vitual story today!</h2>
        </div>
      </div>
    ) 
  }
}

class StoryPreviewSection extends React.Component{
  render(){
    return(
      <div className={"storyPreviewSection"} id='storyPreviewSection'>
        <img src={previewBook} className={'previewGif'}></img>    

        <div className={'discription'}>
              <h2>create your story using our intuitive program and share it with your friends online</h2>
              <NavLink to={'/Login'}><Button className={"createNowBtn"}> Create Story Now </Button></NavLink>  
        </div>
      </div>
            
    )
  }
}

class FeaturesSection extends React.Component{
  render(){
    return(
      <div className={"featuresSection"} id='featuresSection'>
        
        
        <h1> What can you do with Stori.io?</h1>
        <div className={"benefits"}>
          <img src={checkIcon} className={'checkIcon'}></img> <h3> Customize the pages story</h3>
          <img src={checkIcon} className={'checkIcon'}></img> <h3> Upload images </h3>
          <img src={checkIcon} className={'checkIcon'}></img> <h3> Download story to PDF to share with firends</h3>
          <img src={checkIcon} className={'checkIcon'}></img> <h3> View your story </h3>
        </div>
         
      </div>
    )
  }
}

class FAQSection extends React.Component{
  render(){
    return(
      <div className={"FAQSection"} id='fAQSection'>
        
        
        <h2>Frequently Asked Questions</h2>
        <br></br><br></br>
        <div className={"qAndAs"}>
          <i><h3> What is Storybook?</h3></i>
          <h4>Storybook helps you create and share your stories online without the hassles associated with creating a physical book</h4>
          <br></br><br></br>

          <i><h3> How much does this cost?</h3></i>
          <h4>Storybook is FREE! No strings attached</h4>
          <br></br><br></br>

          <i><h3> How can I share my stories?</h3></i>
          <h4>All stories can will contain a sharable link "read version" of your story where it can be viewed </h4>
          <br></br> <br></br>

          <i><h3> Can I download my story to my computer?</h3></i>
          <h4> YES! It can be downloaded as a PDF</h4>
        </div>
      </div>
    )
  }
}

class AboutUsSection extends React.Component{
  render(){
    return(
      <div className={"aboutUsSection"} id='aboutUsSection'>
        <img className={'logoblack'} src={logoblack}></img> 
        <div className={"content"}>
          <h2>About Us</h2>
          <p> The team at Stori.io have always enjoyed expressing themselves through writing but with the difficulties of publishing books they have struggled to share their own stories. </p>
          <p> Therefore they have come together to create stori.io, an easy to use platform to create stories. </p>
          <p> Start creating your story today!</p>
        </div>
          
      </div>
    )
  }
}

export {WelcomeBanner, StoryPreviewSection, FeaturesSection, AboutUsSection, FAQSection};

