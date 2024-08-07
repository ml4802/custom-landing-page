import React, { useState } from "react";
import "./App.css"; // Import your global CSS file
import Navbar from "./components/NavBar";
import ResumeSection from "./components/ResumeSection";
import PdfDisplay from "./components/PdfDisplay";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const resumePoints = [
    "Hi there I'm literally about to be 24",
    "I would do really great at your company",
    "Please, I've been unemployed so long I forget what it's like to not be",
    "gonna make this look better i promise zac/omkar",
    "Last version 12:10am wed aug 7",
  ];
  const [homeVis, setHomeVis] = useState(true);
  const [projectVis, setProjectVis] = useState(false);
  const [resumeVis, setResumeVis] = useState(false);

  function setPageVisFunc() {
    if (resumeVis)
      return (
        <div>
          <PdfDisplay resumeUrl="mingLiuResume.pdf" />
        </div>
      );
    if (homeVis)
      return (
        <ResumeSection
          imageUrl="mingLiu.png" // Update this path if necessary
          altText="didn't load for some reason"
          caption="Most recent photo of me"
          resumePoints={resumePoints}
        ></ResumeSection>
      );
    if (projectVis) return <>Link to some of my projets I guess</>;
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
      <div></div>
      <Footer bottomText="🚧 Still under construction, improvements daily hopefully made with React 🚧" />
    </>
  );
};

export default App;
