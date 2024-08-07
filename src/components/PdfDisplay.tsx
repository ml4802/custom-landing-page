import "../App.css"; // Import the global CSS file

interface Props {
  imageUrl: string; // URL of the image
}

function PdfDisplay({ imageUrl }: Props) {
  return (
    <div className="resumeSection">
      <div className="photoRightContainer">
        <img src={imageUrl} alt="resume" className="photoRightImage" />
      </div>
    </div>
  );
}

export default PdfDisplay;
