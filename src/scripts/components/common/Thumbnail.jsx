import React, { Component } from "react";

export default class Thumbnail extends Component {
  render() {
    return (
      <div className={this.props.className + " thumbnail"}>
        <img
          src={this.props.src}
          alt={this.props.name}
          title={this.props.name}
          //onClick={this.props.onClick}
        />
      </div>
    );
  }
}
