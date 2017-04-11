import _ from 'lodash';
import React , {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const Api_Key = 'AIzaSyAr5d_NHB8Q20Ue06LETo9gfCPduirK8KQ';







class App extends Component {

  constructor(props){
    super(props);

    this.state={ 
      videos: [],
      selectedVideo : null
     };

     this.videoSearch('gaming');
  }

  videoSearch(term){
        YTSearch({key: Api_Key, term:term}, (videos) => {
      this.setState({
         videos:videos,
         selectedVideo:videos[0]
       });

    });
  }
    render () {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 150)
            return(
          <div className="row">
              <div className=" card hoverable">
                  <SearchBar onSearchTermChange={videoSearch } />
              </div>
                 <VideoDetail  video={this.state.selectedVideo} /> 
                 <VideoList 
                  onVideoSelect = {selectedVideo=> this.setState({selectedVideo})}
                 videos={this.state.videos} />
            </div>
            );
    }
};




// push it to html page
ReactDom.render(<App /> , document.querySelector('.container'));


