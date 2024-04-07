import React, { useEffect, useState, useContext } from "react";
import VideosCard from "../components/VideosCard";
import NavBar from "../components/NavBar";
import { allVideos, updateMetadata, deleteVideo, createVideo } from "../client/estilocalico";
import AuthContext from "../client/context";

function VideoPage() {
  const [videos, setVideos] = useState([]);

  const idToken = useContext(AuthContext);

  const reloadVideos = async () => {
    console.log("reloading videos")
    let videos = await allVideos(idToken);
    setVideos(videos);
  };

  useEffect(() => {
    idToken && reloadVideos();
  }, [idToken]);

  const createVid = (file, metadataObj, token) => {
    createVideo(file, metadataObj, token).then(reloadVideos)
  }

  const deleteVid = (videoId, token) => {
    deleteVideo(videoId, token).then(reloadVideos);
  };

  const updMetadata = (videoObj, token) => {
    updateMetadata(videoObj, token).then(reloadVideos);
  };

  console.log('videos', videos)

  return (
    <>
        <h1>Videos</h1>
        <VideosCard key={"newVideo"} createVideo={createVid} />
        {videos &&
          videos.map((video) => (
            <VideosCard
              key={video["id"]}
              startingData={video}
              deleteVideo={deleteVid}
              updateMetadata={updMetadata}
            />
          ))}
    </>
  );
}

function Videos({ user }) {
  return (
    <>
      <AuthContext.Provider value={user.accessToken}>
        <NavBar />
        <VideoPage />
      </AuthContext.Provider>
    </>
  );
}

export default Videos;
