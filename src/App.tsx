import React, { useState } from "react";
import "./App.css"; // Import your global CSS file
import Navbar from "./components/NavBar";
import ResumeSection from "./components/ResumeSection";
import PdfDisplay from "./components/PdfDisplay";

const App: React.FC = () => {
  const resumePoints = [
    "Hi there I'm literally about to be 24",
    "I would do really great at your company",
    "Please, I've been unemployed so long I forget what it's like to not be",
    "I can gurantee I can speel",
  ];
  const [homeVis, setHomeVis] = useState(false);
  const [projectVis, setProjectVis] = useState(false);
  const [resumeVis, setResumeVis] = useState(false);

  function setPageVisFunc() {
    if (resumeVis)
      return (
        <div>
          <PdfDisplay resumeUrl="mingLiuResume.pdf" />
        </div>
      );
    else
      return (
        <ResumeSection
          imageUrl="mingLiu.png" // Update this path if necessary
          altText="didn't load for some reason"
          caption="Most recent photo of me"
          resumePoints={resumePoints}
        ></ResumeSection>
      );
  }

  return (
    <>
      <Navbar
        homeState={homeVis}
        homeHook={setHomeVis}
        projectState={projectVis}
        projectHook={setProjectVis}
        resumeState={resumeVis}
        resumeHook={setResumeVis}
      />
      {setPageVisFunc()}
      <h1>Website under construction</h1>
    </>
  );
};

export default App;
