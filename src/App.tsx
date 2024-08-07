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

  // The pages can be Home, Projects, Resume
  const [pageVis, setPageVis] = useState("Home");

  function setPageVisFunc() {
    switch (pageVis) {
      case "PROJECT":
        return <>Link to some of my projects I guess</>;
      case "HOME":
        return (
          <ResumeSection
            imageUrl="mingLiu.png" // Update this path if necessary
            altText="didn't load for some reason"
            caption="Most recent photo of me"
            resumePoints={resumePoints}
          ></ResumeSection>
        );
      case "RESUME":
        return (
          <div>
            <PdfDisplay resumeUrl="mingLiuResume.pdf" />
          </div>
        );
      default:
        return (
          <ResumeSection
            imageUrl="mingLiu.png" // Update this path if necessary
            altText="didn't load for some reason"
            caption="Most recent photo of me"
            resumePoints={resumePoints}
          ></ResumeSection>
        );
    }
  }

  return (
    <>
      <Navbar
        pageVis={pageVis}
        setPageVis={setPageVis}
        githubLink={""}
        googleDriveLink={""}
        linkedinLink={""}
        emailLink={"mailto:mingliu232@gmail.com"} // Update the emailLink prop
      />
      {setPageVisFunc()}
      <div></div>
      <Footer bottomText="🚧 Still under construction, improvements daily hopefully made with React 🚧" />
    </>
  );
};

export default App;
