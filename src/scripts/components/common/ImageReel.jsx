import React from "react";
import { NavLink } from "react-router-dom";
import Thumbnail from "./Thumbnail";

const ImageReel = props => {
  return props.images.map(image => {
    return (
      <NavLink
        className="image-reel-link"
        key={image.id}
        to={{
          pathname: "/works/" + image.name,
          state: {
            src: image.src,
            title: image.name,
            alt: image.name
          }
        }}
      >
        <Thumbnail
          className="image-reel-thumbnail"
          key={image.id}
          src={image.src}
          title={image.name}
          alt={image.name}
          //onClick={handleClick.bind(this)}
        />
      </NavLink>
    );
  });
};

export default ImageReel;
