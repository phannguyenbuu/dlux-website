import React from 'react';
import ReactPlayer from 'react-player';

const YoutubePlayer = ({ videoUrl }) => {
  return (
    <div style={{ width: '90vw', maxWidth: '100%', position: 'relative', paddingTop: '56.25%' /* tỷ lệ 16:9 */ }}>
      <ReactPlayer 
        url={videoUrl}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        controls={true}
      />
    </div>
  );
};

export default YoutubePlayer;