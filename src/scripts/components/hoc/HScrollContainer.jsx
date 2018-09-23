import React, { Component } from "react";

export default class HScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }

  componentDidMount() {
    const startScroll = e => {
      e.preventDefault();
      this.setState(
        prevState => {
          return {
            left: isNaN(parseInt(this.nv.style.left.replace("px", ""), 10))
              ? 0
              : parseInt(this.nv.style.left.replace("px", ""), 10),
            initialXPos: e.clientX
          };
        },
        () => {
          window.addEventListener("mousemove", scroll);
          window.addEventListener("mouseup", stopScroll);
        }
      );
    };

    const scroll = e => {
      this.setState(
        prevState => {
          return {
            xPos: e.clientX
          };
        },
        () => {
          console.log(this.nv.scrollWidth);
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
      window.removeEventListener("mousemove", scroll);
      window.removeEventListener("mouseup", stopScroll);
    };

    this.nv.style.left = 0;
    console.log(this.nv.scrollWidth);
    if (this.nv.scrollWidth < window.innerWidth) {
      this.nv.addEventListener("mousedown", startScroll);
    }
  }

  render() {
    return (
      <div ref={elem => (this.nv = elem)} className="hscroll">
        {this.props.children}
      </div>
    );
  }
}
