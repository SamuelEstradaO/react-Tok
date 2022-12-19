import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";
import { SmallContainer } from "../theme";
import Video from "./Video";
import VideosList from "./VideosList";
let Videos = props => {
    let videosState = useSelector(state => state.videos)
    let dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(
    //         loadVideos()
    //     )
    // }, [])

    let loadNextPage = async () => {
        await dispatch(
            loadVideos()
        )
    }

    

    return (
        <div>
            <SmallContainer>
                <VideosList loadNextPage={loadNextPage} videosState={videosState}></VideosList>
                {/* {videosState.data.videos.map((video, index) => (
                    <Video index={index} video={video}/>
                ))} */}
            </SmallContainer>

        </div>
    )
}
export default Videos;