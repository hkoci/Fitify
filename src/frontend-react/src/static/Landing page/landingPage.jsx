
import React from "react";
import PropTypes from "prop-types";

import "./landingPage.css";

class LandingPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="c928f3c7-5250-4138-a83c-e25456bf8686" className="landingPage">        <div data-layer="5a6980cb-b6bf-4c62-aae8-fcb621d738fc" className="background"></div>
        <div data-layer="d6ae205a-a0e8-4846-a627-9f79bdb5a0f8" className="logoPng"></div>
        <div data-layer="5fe04d9c-2e45-40b5-9b1b-365638df499c" className="beYourBest">Be your best!</div>
        <div data-layer="db4238ef-c62c-47fd-9ff0-8550d1e9e531" className="home"><a href="./home">Home</a></div>
        <div data-layer="86a65718-96bf-44f4-af17-77341978d82b" className="signIn"><a href="./app/login">Sign in</a></div>
        <div data-layer="f630dc31-7e1f-4466-8cf4-8b7fdfdc67df" className="review"><a href="./review">Review</a></div>
        <div data-layer="b8889e6b-4f00-4793-8372-cc9c30a98fde" className="help"><a href="./help">Help</a></div>
</div>

    );
  }
}

LandingPage.propTypes = {

}

LandingPage.defaultProps = {

}


export default LandingPage;
          