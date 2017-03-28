import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBiMhTo2uovsnXq4fRilS9zYT-Js-CKWYc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));