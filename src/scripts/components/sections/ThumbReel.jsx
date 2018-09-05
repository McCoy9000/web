import React, { Component } from "react";

export default class ThumbReel extends Component {
  render() {
    const images = this.props.images;
    return (
      <div>
        {images.map(image => {
          return <img src={image.url} title={image.name} />;
        })}
      </div>
    );
  }
}
