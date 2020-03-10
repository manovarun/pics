import React, { Component, createRef } from 'react';

export class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();
    this.state = {
      spans: 0
    };
  }

  componentDidMount = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const {
      image: { description, urls }
    } = this.props;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
