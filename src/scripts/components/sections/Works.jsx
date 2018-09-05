import React, { Component } from "react";

export default class Works extends Component {
  render() {
    const resourcesUri = "resources/images/works/";

    const images = require
      .context("../../../resources/images/works", true)
      .keys()
      .map(image => image.split("./")[1])
      .map(image => resourcesUri + image);

    const graphicDesign = images.filter(image =>
      image.includes("graphic-design")
    );

    const illustration = images.filter(image => image.includes("illustration"));

    const projects = images.filter(image => image.includes("projects"));

    const imageName = image => {
      return image.substring(image.lastIndexOf("/") + 1, image.length);
    };

    const renderReel = imageArr => {
      return imageArr.map(image => {
        return (
          <img
            key={imageName(image)}
            src={image}
            title={imageName(image)}
            alt={imageName(image)}
          />
        );
      });
    };

    return (
      <div className="works container">
        <div className="reel-container">
          <h5>Graphic design</h5>
          <div className="graphic-design-reel reel">
            {renderReel(graphicDesign)}
          </div>
        </div>
        <div className="reel-container">
          <h5>Illustration</h5>
          <div className="graphic-design-reel reel">
            {renderReel(illustration)}
          </div>
        </div>
        <div className="reel-container">
          <h5>Projects</h5>
          <div className="graphic-design-reel reel">{renderReel(projects)}</div>
        </div>
      </div>
    );
  }
}
