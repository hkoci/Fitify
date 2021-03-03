
import React from "react";
import PropTypes from "prop-types";
import "../Hyperlinks.css";

import "./home.css";

class About extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="d23c8daa-0d9f-4576-aef7-3c1b4d55ef79" className="about">        <div data-layer="498884de-4f2e-4a53-9958-39c5f9207f12" className="background"></div>
        <div data-layer="9732dac0-89fb-4f51-b158-d9019b645015" className="logoPng"></div>
        <div data-layer="cfc26b5e-f1cc-4364-9006-17e8c8e314ce" className="beYourBest">Be your best!</div>
        <div data-layer="1d7fcc49-717d-419c-8316-992c70b84a4c" className="set6"></div>
        <div data-layer="e0cf441c-dbb8-4fec-904e-81112091c703" className="fitifyIsAWebBasedApplicationThatHelpsUsersManageAndKeepTrackOfTheirWeightOutUltimateGoalIsToHelpPeopleAroundTheWorldBeInTheBestShapeTheyPossiblyCanBeWithOurEasyToUseFeatures">Fitify is a web-based application that helps users manage and keep track of their weight. Out ultimate goal is to help people around the world be in the best shape they possibly can be with our easy to use features!  </div>
        <div data-layer="a40d870c-45b7-4c5b-ab75-287acdfa4fdc" className="someOfTheAwesomeFeaturesThatAreIncludedWithFitifyRecordingWeightStepCountCalorieIntakewithManyMoreToComeInTheFuture">Some of the awesome features that are included with Fitify:<br />- Recording weight<br />- Step count<br />- Calorie intake<br /><br />With many more to come in the future!</div>
        <div data-layer="be6d139f-c1d0-4817-9516-890bb57590d6" className="whatIsFitify">What is Fitify?</div>
        <div data-layer="22170fe6-97f9-4bb7-bffe-1f58f794bc33" className="fitifyFeatures">Fitify features</div>
        <div data-layer="d4a54f64-b36c-4924-86bb-35b307f9e00b" className="rectangle3"></div>
        <div data-layer="3076fe46-55db-4966-a672-7586fb3e2a83" className="home"><a id="orangelink" href="./home">Home</a></div>
        <div data-layer="d8cc1c99-ab6c-4170-84be-b3b7fff63103" className="signIn"><a id="orangelink" href="./app/login">Sign in</a></div>
        <div data-layer="7414b399-2602-41da-ae09-7fed3c4dac36" className="review"><a id="orangelink" href="./review">Review</a></div>
        <div data-layer="d8549f2e-1f16-427e-9d68-d308cf847a3d" className="help"><a id="orangelink" href="./help">Help</a></div>
        <svg data-layer="029d0d9f-7e37-488b-b955-28dc0cc8d36f" preserveAspectRatio="none" viewBox="-2 -2 83 4" className="line1"><path d="M 0 0 L 79 0"  /></svg>
        <div data-layer="32ef4f59-e13d-4613-a6b6-74c72ca48abd" className="getFit"><a href="./app/login">Get Fit</a></div>
</div>

    );
  }
}

About.propTypes = {

}

About.defaultProps = {

}


export default About;
          