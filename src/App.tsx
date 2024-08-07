import React, { useState } from "react";
import Navbar from "./components/NavBar";
import ResumeSection from "./components/ResumeSection";
import "./App.css"; // Import your global CSS file

const App: React.FC = () => {
  const resumePoints = [
    "Hi there I'm literally about to be 24",
    "I would do really great at your company",
    "Please, I've been unemployed so long I forget what it's like to not be",
  ];

  return (
    <div>
      <Navbar />
      <ResumeSection
        imageUrl="public/mingLiu.png" // Update this path if necessary
        altText="Dashing image of Ming"
        caption="At a tech conference"
        resumePoints={resumePoints}
      />
      <h1>Website still in development, learning react at the moment</h1>
    </div>
  );
};

export default App;
