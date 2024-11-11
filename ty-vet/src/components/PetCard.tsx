import React from "react";

interface Props {
  name: String;
  imageUrl: string;
}

function PetCard({ name, imageUrl }: Props) {
  const handleClick = () => {
    alert("Image button clicked! " + name);
    // Show a current Patient at the top banner part. Eventually lets use state to track which Pet is active. And only bring up the BIO for the current pet
  };

  return (
    <div>
      {/* Image wrapped in a clickable div */}
      <img
        src={imageUrl}
        alt="Clickable Button"
        onClick={handleClick}
        style={{ cursor: "pointer" }} // Cursor change to indicate clickability
      />
    </div>
  );
}

export default PetCard;
