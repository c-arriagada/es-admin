import React, { useEffect, useState } from "react";
import VideosCard from "../components/VideosCard";
import NavBar from "../components/NavBar";
import { allVideos } from "../client/estilocalico";

function Videos() {
  const [videos, setVideos] = useState([]);

  const reloadVideos = async () => {
    let videos = await allVideos();
    console.log(videos);
    setVideos(videos);
  };

  useEffect(() => {
    reloadVideos();
  }, []);

  return (
    <>
      <NavBar />
      <h1>Videos</h1>
      <VideosCard key={"newVideo"} />
      {videos &&
        videos.map((video) => (
          <VideosCard key={video["id"]} startingData={video} />
        ))}
    </>
  );
}

export default Videos;
