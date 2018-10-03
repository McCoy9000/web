import React from "react";
import Thumbnail from "./Thumbnail";

const Reel = props => {
  return props.images.map(image => {
    const handleClick = () => {
      console.log("handlefired");
      props.setImageIndex(image.id);
    };

    return (
      <Thumbnail
        className="image-reel-thumbnail"
        key={image.id}
        idImg={image.id}
        src={image.src}
        title={image.name}
        alt={image.name}
      />
    );
  });
};

export default Reel;
