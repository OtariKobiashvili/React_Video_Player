import _ from 'lodash';
import React, {Component} from 'react';
import YTSearch from "youtube-api-search"

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_details';

const API_KEY = 'AIzaSyDApS-dSbX--D_wQEl8ZeKdc_bMwcehJw8';

//Create a new component
//Component should produce HTML.
class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('best videos');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  };
}

export default VideoPlayer;
