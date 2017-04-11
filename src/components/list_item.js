import React from 'react';


const VideoListItem = ({video, onVideoSelect }) => {
    //const video = props.video;
   
   const imgUrl = video.snippet.thumbnails.default.url;

    return  ( <li
                onClick={()=>{onVideoSelect(video)}}
                className="collection-item hoverable"
                 title={video.snippet.title}> 
                <div className="item-b">
                    <div className="left">
                        <img src={imgUrl} alt=""/>   
                    </div>
                    <div className="media-body">
                        <div className="item-title">{video.snippet.title}</div>
                    </div>
                </div>
               </li>
            );
};

export default VideoListItem;