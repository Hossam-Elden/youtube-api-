import React from 'react';


const VideoDetail = ({video}) =>{

    if (!video) {
        return <div > loading... </div>;    
    }

    const videoId = video.id.videoId;
    const Url     = `https://www.youtube.com/embed/${videoId}`;

return(
    <div className="col s8">
        <div className="card">
             <div className="video-container card-image">
                <iframe className="responsive-video" src={Url} />
            </div>
            <div className="" >
                <div className="card-title">{video.snippet.title}</div>
                <div className="card-content">{video.snippet.description}</div>
             </div>
        </div>

    </div>
   ); 
}

export default VideoDetail;