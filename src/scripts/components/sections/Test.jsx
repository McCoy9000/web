import React, { Component } from "react";
import HScrollContainer from "../hoc/HScrollContainer";
import importAll from "../workers/imageRetriever";
import ImageReel from "../common/ImageReel";

export default class Test extends Component {
  /*componentDidMount() {
    this.button = document.querySelector(".test");
  }

  render() {
    const sendMessage = () => {
      this.button.dispatchEvent(
        new CustomEvent("feedback", {
          bubbles: true,
          detail: { text: "test.messagebutton" }
        })
      );
    };
    return (
      <div className="test">
        <button onClick={sendMessage}>SendMessage</button>
      </div>
    );
  }*/
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
        <div className="works-container">
          <div className="reel-container" ref={this.hscrollable1}>
            <h5>Graphic design</h5>
            <HScrollContainer>
              <div className="reel">
                <ImageReel images={graphicDesign} />
              </div>
            </HScrollContainer>
          </div>
          <div className="reel-container">
            <h5>Illustration</h5>
            <HScrollContainer>
              <div className="reel">
                <ImageReel images={illustration} />
              </div>
            </HScrollContainer>
          </div>
          <div className="reel-container">
            <h5>Projects</h5>
            <HScrollContainer>
              <div className="reel">
                <ImageReel images={projects} />
              </div>
            </HScrollContainer>
          </div>
        </div>
      </div>
    );
  }
}
