import React, { Component } from "react";

export default class Thumbnail extends Component {
  render() {
    const { idImg, className, src, title } = this.props;
    const name = title.replace(/.png|.jpe?g|.gif/, "");
    return (
      <img
        ref={elem => (this.img = elem)}
        data-idimg={idImg}
        className={className + " thumbnail"}
        src={src}
        alt={name}
        title={name}
      />
    );
  }
}
