import React from "react";
import { motion } from "framer-motion";
import "../App.css"; // Import the global CSS file

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      summary:
        "Summary 1, even longer text, this is some longer placeholder text, a paragraph",
      image: "placeholderMing.webp", // Add the image path for Project 1
    },
    {
      title: "Project 2",
      summary:
        "Summary 2, even longer text, this is some longer placeholder text, a paragraph",
      image: "placeholderMing.webp", // Add the image path for Project 2
    },
    {
      title: "Project 3",
      summary:
        "Summary 3, even longer text, this is some longer placeholder text, a paragraph",
      image: "placeholderMing.webp", // Add the image path for Project 3
    },
    {
      title: "Project 4",
      summary:
        "Summary 4, even longer text, this is some longer placeholder text, a paragraph",
      image: "placeholderMing.webp", // Add the image path for Project 4
    },
    {
      title: "Project 5",
      summary:
        "Summary 5, even longer text, this is some longer placeholder text, a paragraph",
      image: "placeholderMing.webp", // Add the image path for Project 5
    },
    {
      title: "Project 6",
      summary:
        "Summary 6, even longer text, this is some longer placeholder text, a paragraph",
      image: "placeholderMing.webp", // Add the image path for Project 6
    },
    // Add more projects with their respective titles, summaries, and images
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="project-tile"
        >
          <h2>{project.title}</h2>
          <div className="image-container">
            <img src={project.image} alt={project.title} />
          </div>
          <p>{project.summary}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
