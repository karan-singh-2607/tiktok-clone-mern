import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
const Video = ({ videoUrl, chanel, description, song, likes, messages, shares }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // playing ? (videoRef.current.pause(),
        //     setPlaying(false)) : (videoRef.current.play(),
        //         setPlaying(true));
    }
    return (
        <div className="List__Videos">
            <video className="Video__Player" onClick={handleVideoPress} loop ref={videoRef} src={videoUrl}></video>
            <VideoFooter chanel={chanel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
