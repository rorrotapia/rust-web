import React from 'react'
import video from '../boatvillage1.mp4'
import styled from "styled-components";

const BackgroundVideo = () => {
  const Video = styled.video`
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    z-index: -1;
  `;
  
  return (
    <Video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
    </Video>
  )
}

export default BackgroundVideo;