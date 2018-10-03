import React, { Component } from "react";

export default class HScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }

  componentDidMount() {
    let isScroll = false;

    const startScroll = e => {
      e.preventDefault();
      this.setState(
        prevState => {
          return {
            left: isNaN(parseInt(this.nv.style.left.replace("px", ""), 10))
              ? 0
              : parseInt(this.nv.style.left.replace("px", ""), 10),
            initialXPos: e.clientX,
            xPos: e.clientX,
            isScroll: false
          };
        },
        () => {
          window.addEventListener("mouseup", stopScroll);
          if (this.nv.scrollWidth > window.innerWidth) {
            window.addEventListener("mousemove", scroll);
          }
        }
      );
    };

    const scroll = e => {
      e.preventDefault();

      this.setState(
        prevState => {
          return {
            xPos: e.clientX
          };
        },
        () => {
          if (
            e.clientX - this.state.initialXPos > -10 &&
            e.clientX - this.state.initialXPos < 10
          ) {
            isScroll = true;
          }
          isScroll = true;
          var left = this.state.left + this.state.xPos - this.state.initialXPos;
          if (left > 0) {
            this.nv.style.left = 0;
          } else if (this.nv.scrollWidth < window.innerWidth) {
            this.nv.style.left = 0;
          } else if (left < 0 - this.nv.scrollWidth + window.innerWidth) {
            this.nv.style.left =
              -100 - this.nv.scrollWidth + window.innerWidth + "px";
          } else {
            this.nv.style.left = left + "px";
          }
        }
      );
    };

    const stopScroll = e => {
      e.preventDefault();
      window.removeEventListener("mousemove", scroll);
      const idImg = e.target.getAttribute("data-idimg");
      if (!isScroll) {
        this.props.setImageIndex(idImg);
      }
      window.removeEventListener("mouseup", stopScroll);
      isScroll = false;
    };

    this.nv.style.left = 0;

    this.nv.addEventListener("mousedown", startScroll);
  }

  render() {
    return (
      <div ref={elem => (this.nv = elem)} className="hscroll">
        {this.props.children}
      </div>
    );
  }
}
