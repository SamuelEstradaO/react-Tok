import React from 'react'

import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

let Item = () => (<p>Hola mundo</p>)

let VideosList = props => {

    return(
        <InfiniteLoader>
            {({onItemsRendered, ref})=>(
                <List
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                    height={500}
                    width={700}
                    itemSize={100}
                >
                    <Item />
                </List>
            )}
        </InfiniteLoader>
    )
}

export default VideosList;