import React, { useState, useEffect } from "react";
import "./App.css"; // Import your global CSS file
import Navbar from "./components/NavBar";
import ResumeSection from "./components/ResumeSection";
import PdfDisplay from "./components/PdfDisplay";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const resumePoints = [
    "Hi I'm literally about to turn 24",
    "I would do really great at your company",
    "Please, I've been unemployed so long",
    "Now with a cool scrolling animation that lets you scroll the card past the navbar",
    "Going to change it so that when you click on a new page, it will slide the tile out before the new one comes in",
    "Last edit was on Wed Aug 7 1:12",
  ];

  // The states can be updated to include more pages
  const [pageVis, setPageVis] = useState("Home");
  const [prevPageVis, setPrevPageVis] = useState("Home");

  function setPageVisFunc() {
    // console.log("PageVis: " + pageVis);
    // console.log("PrevPageVis: " + prevPageVis);
    // This function will return the correct page based on the state

    switch (pageVis) {
      case "PROJECT":
        return (
          <h1>
            This will be a 6 tiled type of thing with summaries of my projects,
            where each tile will sort of fly in from the bottom and stack up to
            be 2x3
          </h1>
        );
      case "HOME":
        return (
          <>
            <ResumeSection
              imageUrl="mingLiu.png" // Update this path if necessary
              altText="Failed to load image, but I assure you I'm good looking"
              caption="Me"
              resumePoints={resumePoints}
            ></ResumeSection>
            <Footer bottomText="🚧 Under construction, improvements daily. Made with React and JS <3" />
          </>
        );
      case "RESUME":
        return (
          <div>
            <PdfDisplay imageUrl="mingLiuResume.png" />
          </div>
        );
      default:
        return (
          <>
            <ResumeSection
              imageUrl="mingLiu.png" // Update this path if necessary
              altText="Failed to load image, but I assure you I'm good looking"
              caption="Me"
              resumePoints={resumePoints}
            ></ResumeSection>
            <Footer bottomText="🚧 Under construction, improvements daily. Made with React and JS <3" />
          </>
        );
    }
  }

  return (
    <>
      <Navbar
        setPrevPageVis={setPrevPageVis}
        pageVis={pageVis}
        setPageVis={setPageVis}
        paperLink={"https://dl.acm.org/doi/abs/10.1145/3576914.3589561"}
        googleDriveLink={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        linkedinLink={"https://www.linkedin.com/in/mingliu232/"}
        emailLink={"mailto:mingliu232@gmail.com"} // Update the emailLink prop
      />
      {setPageVisFunc()}
    </>
  );
};

export default App;
