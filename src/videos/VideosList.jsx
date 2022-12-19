import React from 'react'

import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import Video from './Video';





let VideosList = ({videosState, loadNextPage}) => {
    let Item = ({index, parent, key, style}) => {
        let video = videosState.data.videos[index]
        return (video?<Video key={key} video={video} style={style} /> : <p>Cargando...</p>)
    }
    let isItemLoaded = ({index}) => {
        return !!videosState.data.videos[index];
    }
    let loadMoreItems = () => {
        loadNextPage()
    }
    return(
        <InfiniteLoader
            itemCount={2}
            isItemLoaded={isItemLoaded}
            loadMoreItems={loadMoreItems}
        >
            {({onItemsRendered, ref})=>(
                <List
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                    height={500}
                    width={700}
                    itemSize={100}
                    itemCount={2}
                >
                    {Item}
                </List>
            )}
        </InfiniteLoader>
    )
}

export default VideosList;