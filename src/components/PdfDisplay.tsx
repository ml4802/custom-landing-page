import "../App.css"; // Import the global CSS file

interface Props {
  imageUrl: string; // URL of the image
}

function PdfDisplay({ imageUrl }: Props) {
  return (
    <div className="resumeSection">
      <img src={imageUrl} alt="resume" className="photoRightImage" />
    </div>
  );
}

export default PdfDisplay;
