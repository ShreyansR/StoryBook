import React, { Component } from 'react';

//import hompage components

import{
  WelcomeBanner,
  StoryPreviewSection,
  FeaturesSection,
  AboutUsSection,
  FAQSection
} from './HomepageComps';


class Homepage extends Component {
  constructor() {
    super()
  }
  
  render() { 
  return (
    <div>

      <WelcomeBanner></WelcomeBanner>
      
      <StoryPreviewSection></StoryPreviewSection>

      <FeaturesSection></FeaturesSection>

      <FAQSection></FAQSection>
      
      <AboutUsSection></AboutUsSection>      
    </div>
  );
  }
}

export default Homepage;