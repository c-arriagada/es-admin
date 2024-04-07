import React, { useEffect, useState } from "react";
import VideosCard from "../components/VideosCard";
import NavBar from "../components/NavBar";
import { allVideos, updateMetadata, deleteVideo } from "../client/estilocalico";

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

  const deleteVid = (videoId) => {
    deleteVideo(videoId).then(reloadVideos)
  }

  const updMetadata =(videoObj)=> {
    updateMetadata(videoObj).then(reloadVideos)
  }

  return (
    <>
      <NavBar />
      <h1>Videos</h1>
      <VideosCard key={"newVideo"} />
      {videos &&
        videos.map((video) => (
          <VideosCard key={video["id"]} startingData={video} deleteVideo={deleteVid} updateMetadata={updMetadata}/>
        ))}
    </>
  );
}

export default Videos;
