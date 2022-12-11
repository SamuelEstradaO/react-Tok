import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../store/likes";
import { loadVideos } from "../store/videos";
import Player from "./player";
let Videos = props => {
    let videosState = useSelector(state => state.videos)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            loadVideos()
        )
    }, [])

    let doLike = (videoId) => {
        dispatch(
            likeVideo(videoId)
        )
    }
    
    return(
        <div>
            {videosState.data.videos.map( (video, index) => (
                <div key={index}>
                    <h2>{video.title}</h2>
                    <Player video={video}/>
                    <button onClick={()=> doLike(video.id)} style={{backgroundColor: (video.isLikedByCurrentUser? 'red': 'inherit')}}>Like</button>
                </div>
            ))}
        </div>
    )
}
export default Videos;