import React from "react";
import "../App.css"; // Import the global CSS file

interface Props {
  resumeUrl: string; // URL of the resume
}

function PdfDisplay({ resumeUrl }: Props) {
  return (
    <iframe
      src={resumeUrl}
      width="100%"
      height="800px"
      style={{ border: "none" }}
    >
      This browser does not support PDFs. Please download the PDF to view it:{" "}
      <a href={resumeUrl}>Download PDF</a>.
    </iframe>
  );
}

export default PdfDisplay;
