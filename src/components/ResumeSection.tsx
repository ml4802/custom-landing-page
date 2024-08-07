import React from "react";
import "../App.css"; // Import the global CSS file

interface ResumeSectionProps {
  resumePoints: string[]; // Array of bullet points for the resume
  imageUrl: string; // URL of the image
  altText: string; // Alternative text for accessibility of the image
  caption?: string; // Optional caption for the image
}

const ResumeSection: React.FC<ResumeSectionProps> = ({
  resumePoints,
  imageUrl,
  altText,
  caption,
}) => {
  return (
    <div className="resumeSection">
      <div className="resumeLeft">
        <h2>Resume Highlights</h2>
        <ul>
          {resumePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="resumeRight">
        <div className="photoRightContainer">
          <img src={imageUrl} alt={altText} className="photoRightImage" />
          {caption && <p className="photoRightCaption">{caption}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
