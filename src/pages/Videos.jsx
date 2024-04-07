import React, { useEffect, useState, useContext } from "react";
import VideosCard from "../components/VideosCard";
import NavBar from "../components/NavBar";
import { allVideos, updateMetadata, deleteVideo } from "../client/estilocalico";
import AuthContext from "../client/context";

function Videos() {
  const [videos, setVideos] = useState([]);

  const idToken = useContext(AuthContext);

  const reloadVideos = async () => {
    let videos = await allVideos(idToken);
    setVideos(videos);
  };

  useEffect(() => {
    idToken && reloadVideos();
  }, [idToken]);

  const deleteVid = (videoId, token) => {
    deleteVideo(videoId, token).then(reloadVideos);
  };

  const updMetadata = (videoObj, token) => {
    updateMetadata(videoObj, token).then(reloadVideos);
  };

  return (
    <>
      <AuthContext.Provider value={user.accessToken}>
        <NavBar />
        <h1>Videos</h1>
        <VideosCard key={"newVideo"} />
        {videos &&
          videos.map((video) => (
            <VideosCard
              key={video["id"]}
              startingData={video}
              deleteVideo={deleteVid}
              updateMetadata={updMetadata}
            />
          ))}
      </AuthContext.Provider>
    </>
  );
}

export default Videos;
