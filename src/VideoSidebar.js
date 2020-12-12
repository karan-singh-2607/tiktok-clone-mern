import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const VideoSidebar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className="video__sidebar">
            <div class="VideoSidebar__Button">
                {liked ? (<FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />) : (<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />)}

                <p>{liked ? (likes + 1) : (likes)}</p>
            </div>
            <div class="VideoSidebar__Button">
                <ChatIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div class="VideoSidebar__Button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
