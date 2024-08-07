import React from "react";

interface Props {
  bottomText: string;
}

const Footer: React.FC<Props> = ({ bottomText }) => {
  return (
    <div className="footer-text">
      <h1>{bottomText}</h1>
    </div>
  );
};

export default Footer;
