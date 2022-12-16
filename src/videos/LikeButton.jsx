import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearButton, SvgButton } from '../theme';
import { likeVideo } from '../store/likes';

let LikeButton = ({ video }) => {
    let dispatch = useDispatch();
    let doLike = (videoId) => {
        dispatch(
            likeVideo(videoId)
        )
    }
    return (
        <div>
            <ClearButton onClick={() => doLike(video.id)} >
                <SvgButton src='/heart.svg' active={video.isLikedByCurrentUser}></SvgButton>
            </ClearButton>
        </div>
    )
}

export default LikeButton;