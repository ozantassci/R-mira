import React from "react";
import "./video.scss";
import spaceVideo from "./../../../assets/video/space.mp4";

const VideoContainer = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="homepage-text">
        <h1 className="homepage-tittle ">RentaCars's</h1>
        <h2 className="text-white m-4">Rentacar yazılımı ve araç takip sistemleri.</h2>
        <button className="fw-bold">Bize Katıl!</button>
      </div>
    </div>
  );
};

export default VideoContainer;