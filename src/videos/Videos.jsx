import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    
    return(
        <div>
            {videosState.data.videos.map( (video, index) => (
                <div key={index}>
                    <h2>{video.title}</h2>
                    <Player video={video}/>
                </div>
            ))}
        </div>
    )
}
export default Videos;