import React, { Component } from "react";

export default class Thumbnail extends Component {
  render() {
    const { className, src, title } = this.props;
    const name = title.replace(/.png|.jpe?g|.gif/, "");
    return (
      <img
        className={className + " thumbnail"}
        src={src}
        alt={name}
        title={name}
      />
    );
  }
}
