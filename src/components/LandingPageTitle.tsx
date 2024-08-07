import React from "react";

interface LandingPageTitleProps {
  titleText: string;
}

const LandingPageTitle: React.FC<LandingPageTitleProps> = ({ titleText }) => {
  return (
    <div className="landing-page-title">
      <h1>{titleText}</h1>
      <p>Welcome to my website</p>
    </div>
  );
};

export default LandingPageTitle;
