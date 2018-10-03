import React, { Component } from "react";
import { Route } from "react-router-dom";
import importAll from "../workers/imageRetriever";
import Reel from "../common/Reel";
import HScrollContainer from "../hoc/HScrollContainer";
import Dossier from "../common/Dossier";

export default class Works extends Component {
  state = {
    imageIndex: 0
  };

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

    const setImageIndex = index => {
      console.log("setImageIndex fired");
      this.setState(() => {
        return {
          imageIndex: index
        };
      }, this.props.history.push("/works/detail/"));
    };

    return (
      <div className="works">
        <Route
          path={"/works/detail"}
          render={props => (
            <Dossier {...props} images={images} index={this.state.imageIndex} />
          )}
        />
        <div className="works-container">
          <div className="reel-container" ref={this.hscrollable1}>
            <h5>Graphic design</h5>
            <HScrollContainer
              history={this.props.history}
              setImageIndex={setImageIndex}
            >
              <div className="reel">
                <Reel images={graphicDesign} />
              </div>
            </HScrollContainer>
          </div>
          <div className="reel-container">
            <h5>Illustration</h5>
            <HScrollContainer
              history={this.props.history}
              setImageIndex={setImageIndex}
            >
              <div className="reel">
                <Reel images={illustration} />
              </div>
            </HScrollContainer>
          </div>
          <div className="reel-container">
            <h5>Projects</h5>
            <HScrollContainer
              history={this.props.history}
              setImageIndex={setImageIndex}
            >
              <div className="reel">
                <Reel images={projects} />
              </div>
            </HScrollContainer>
          </div>
        </div>
      </div>
    );
  }
}
