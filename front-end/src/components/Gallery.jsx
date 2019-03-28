import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';


export default class Gallery extends Component {
  render() {

    if (this.props.images) {
      var mappedImages = this.props.images.map(singleImg => {
        return { original: singleImg, thumbnail: singleImg }
      })
    }

    return (
      <div style={{ height: '400px' }}>
        {<ImageGallery items={mappedImages} />}
      </div>
    )
  }
}
