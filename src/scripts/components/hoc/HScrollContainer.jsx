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
        {
          left: isNaN(this.nv.style.left.replace("px", ""))
            ? 0
            : this.nv.style.left.replace("px", ""),
          xPos: e.clientX,
          initialXPos: e.clientX
        },
        function() {
          this.nv.addEventListener("mousemove", scroll);
        }
      );
    };

    const scroll = e => {
      this.setState(prevState => {
        return {
          xPos: e.clientX
        };
      });
      console.log("nv.style.left: " + this.nv.style.left);
      console.log("this.state.left: " + this.state.left);
      console.log("this.state.initialXPos: " + this.state.initialXPos);
      const left = this.state.left + this.state.xPos - this.state.initialXPos;
      console.log("left: " + left);
      this.nv.style.left = left + "px";
      console.log(this.nv.style.left);
    };

    const stopScroll = e => {
      this.nv.removeEventListener("mouseout", stopScroll);
      this.nv.removeEventListener("mousemove", scroll);
      this.setState(prevState => {
        return {
          left: isNaN(this.nv.style.left.replace("px", ""))
            ? 0
            : this.nv.style.left.replace("px", ""),
          xPos: e.clientX
        };
      });
    };
    this.nv.style.left = 0;
    this.nv.addEventListener("mousedown", startScroll);
    this.nv.addEventListener("mouseup", stopScroll);
  }

  render() {
    return (
      <div ref={elem => (this.nv = elem)} className="hscroll">
        <div>{this.state.xPos}</div>
        <div>{this.state.initialXPos}</div>
        {this.props.children}
      </div>
    );
  }
}
