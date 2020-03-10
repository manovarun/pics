import React, { Component } from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

export class ImageList extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className='image-list'>
        {images !== null &&
          images.length > 0 &&
          images.map(image => <ImageCard key={image.id} image={image} />)}
      </div>
    );
  }
}

export default ImageList;
