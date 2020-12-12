import React from 'react'
import './VideoFooter.css'
import Disk from './assets/disk.png'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
const VideoFooter = ({ chanel, description, song }) => {
    return (
        <div className="video__footer">
            <div class="Video__Footer__Text">
                <h3>@{chanel}</h3>
                <p>{description}</p>
                <div class="Video__Footer__Ticker">
                    <MusicNoteIcon className="Video__Footer__Icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src={Disk} className="Video__Footer__Record" />
        </div>
    )
}

export default VideoFooter
