import React from "react";

import './landingPage.css'

const LandingPage: React.FC = () => {


    return (
        <div className="landingPageBackground">
          <div className={"landingPageContainer"}>
              <span>J</span>
              <span>R</span>
              <span className={'landingPageDot'}>.</span>
          </div>
        </div>
    );
}

export default LandingPage;