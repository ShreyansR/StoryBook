import React from "react";
import "./Homepage.css";
import { NavLink } from 'react-router-dom';

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
        <div className={"imageLeft"}>
          <h1>*Preview of Book*</h1>
        </div>
        <div className={"description"}>
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
        
        <div className={"textLeft"}>
          <h2>Some Cool Features Include:</h2>
          <h3>*Think of a proper format*</h3>
        </div>
        <div className={"imageRight"}>
          <h1>*Another pic??*</h1>
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
        <div className={"textLeft"}>
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
        
        <div className={"textLeft"}>
          <h2>About Us</h2>
          <h3> *Some stuff about this thing I don't know what to write D:*</h3>
        </div>
        <div className={"imageRight"}>
          <h1>*Another pic??*</h1>
        </div>
      </div>
    )
  }
}

export {WelcomeBanner, StoryPreviewSection, FeaturesSection, AboutUsSection, FAQSection};

