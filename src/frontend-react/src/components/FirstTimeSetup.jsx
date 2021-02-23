import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

export default function FirstTimeSetup(props) {
   
    const [intro, setIntro] = useState({ show: false });
    const mobileQuery = useMediaQuery("(max-width:600px)");

    //Check if user has just been registered and that the intro has not been shown.
    if(sessionStorage.getItem("FirstTimeSetup") === 'true' && intro.show === false){
        //Show the intro
        setIntro({ show: true })
    }

    //Disabling the intro requires changing the state here and the Session
    const disableIntro = () => {
        setIntro({ show: false })
        sessionStorage.setItem("FirstTimeSetup",false)
    }

  return (
    <div>
      <AutoRotatingCarousel
        label="Get started"
        open={intro.show}
        onClose={disableIntro}
        onStart={disableIntro}
        autoplay={false}
        mobile={mobileQuery}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src="https://raw.githubusercontent.com/BrunelCS/cs2001-2020_21-group7/main/docs/frontend-spring/prototyping-interfaces/logos/Version%205.png?token=AR2BK7NPVWQEI3UZOB6FN6LAHVGYA" alt="Welcome to Fitify"/>
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="Hi! Welcome to Fitify"
          subtitle="Let's give you a quick intro."
        />
        <Slide
          media={
            <img src="https://cdn.iconscout.com/icon/free/png-512/workout-40-1100757.png" alt="Physical Activity"/>
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Wanted to track your physical activity?"
          subtitle="In a couple of clicks under your 'Activities' section you are able to do so."
        />
        <Slide
          media={
            <img src="https://cdn.iconscout.com/icon/free/png-256/chat-2639493-2187526.png" alt="Social Features"/>
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="How about socialising with other Fitify users?"
          subtitle="No problem. Your dashboard contains your social feed."
        />
      </AutoRotatingCarousel>
    </div>
  );
}