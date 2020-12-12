import React, { useEffect, useState } from 'react'
import axios from './axios';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get('/v1/posts');
      setVideos(response.data);
      return response;
    }

    fetchPost();
  }, [])

  return (<div className="app">
    <div className="app_videos">
      {videos.map(({ videoUrl, chanel, description, song, likes, messages, shares }) => (
        <Video
          videoUrl={videoUrl}
          chanel={chanel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}

        />
      ))}

    </div>

  </div>);
}

export default App;