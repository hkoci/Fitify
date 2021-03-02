
import React from "react";
import PropTypes from "prop-types";
import "../Hyperlinks.css";

import "./review.css";

class Review extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="bc3d6006-1c79-47bd-ade1-29747cdacd53" className="review">        <div data-layer="e5ab7f71-e921-459d-b1a5-ba5e8644c8eb" className="background"></div>
        <div data-layer="b3f2c81e-efcd-466f-863b-aa585defe8d2" className="logoPng"></div>
        <div data-layer="1b85dd37-d4e7-411a-969f-85ae48c84859" className="beYourBest">Be your best!</div>
        <div data-layer="2fb56c17-bdf1-44ee-8225-49d7af9e0c84" className="hereAtFitifyWeValueYourFeedbackToEnsureWeBringTheBestPossibleExperienceToYouWeWantYourJourneyOfGreatFitnessToBeAMemorableYetFulfillingOnetoEnsureThisWeWantToTakeAnyFormOfCritiqueYouMayHaveWeHaveProvided">Here at Fitify, we value your feedback to ensure we bring the best possible experience to you. We want your journey of great fitness to be a memorable yet fulfilling one.<br /><br />To ensure this, we want to take any form of critique you may have. We have provided a review form for you to fill and to talk about any things you would want changing or to you may have encountered. If you have nothing but good things to say, then we are more than welcome to receive the warm compliments! Every review matters.</div>
        <div data-layer="423bbcd8-2480-4bc7-a8cb-608fd89d4fba" className="weValueYourFeedback">We value your feedback</div>
        <div data-layer="2ea0c00b-7554-4b46-acf7-eddbd917ca1f" className="home"><a id="orangelink" href="./home">Home</a></div>
        <div data-layer="85c6a18e-e1d2-4032-9d77-498d44050bb5" className="signIn"><a id="orangelink" href="./app/login">Sign in</a></div>
        <div data-layer="23716882-1ce6-421a-8809-93580baa5855" className="review8bc95b58"><a id="orangelink" href="./review">Review</a></div>
        <div data-layer="cc4530bb-f8fa-44d7-92f9-0fe47cd40a0f" className="help"><a id="orangelink" href="./help">Help</a></div>
        <svg data-layer="d68b603a-3faa-4bbc-9c80-daa1e321d4bc" preserveAspectRatio="none" viewBox="-2 -2 100 4" className="line1"><path d="M 0 0 L 96 0"  /></svg>
</div>

    );
  }
}

Review.propTypes = {

}

Review.defaultProps = {

}


export default Review;
          