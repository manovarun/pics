import React, { Component } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';

export class App extends Component {
  state = {
    images: null
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    const { images } = this.state;
    return (
      <div className='ui container' style={{ paddingTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
