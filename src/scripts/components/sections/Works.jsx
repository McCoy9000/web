import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dossier from "../common/Dossier";
import importAll from "../workers/imageRetriever";
import ImageReel from "../common/ImageReel";

export default class Works extends Component {
  render() {
    const images = importAll(
      require.context(
        "../../../resources/images/works",
        true,
        /\.(gif|jpe?g|svg)$/
      )
    );

    const graphicDesign = images.filter(image =>
      image.path.includes("graphic-design")
    );

    const illustration = images.filter(image =>
      image.path.includes("illustration")
    );

    const projects = images.filter(image => image.path.includes("projects"));

    return (
      <div className="works">
        <Route path="/works/:id" component={Dossier} />
        <div className="works-container">
          <div className="reel-container">
            <h5>Graphic design</h5>
            <div className="graphic-design-reel reel">
              <ImageReel images={graphicDesign} />
            </div>
          </div>
          <div className="reel-container">
            <h5>Illustration</h5>
            <div className="graphic-design-reel reel">
              <ImageReel images={illustration} />
            </div>
          </div>
          <div className="reel-container">
            <h5>Projects</h5>
            <div className="graphic-design-reel reel">
              <ImageReel images={projects} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
