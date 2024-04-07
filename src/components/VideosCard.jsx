import React, { useState } from "react";
import { updateVideo } from "../client/estilocalico";
import { Button, TextField } from "@mui/material";

function VideosCard() {
    const [fileName, setFileName] = useState()

  function onChange(e) {
    const selectedFile = e.target.files[0];
    console.log('selectedFile', selectedFile)
    const data = new FormData()
    data.append('file', selectedFile)
    data.append('file_name', selectedFile.name)
    console.log('selected file name', selectedFile.name)
    console.log('data', data)
    let response = updateVideo(data)
    console.log(response)
  }

  return (
    <>
      <h2>Videos</h2>
      <div>
        <p>Display videos from S3</p>
        <p>Each video will have a delete button option</p>
      </div>
      <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  size="small"
                  label="First Name"
                  onChange={(e) =>
                    setFileName(e.target.value)
                  }
                  value={fileName}
                  required
                />
      <Button
        key="upload"
        variant="contained"
        size="small"
        color="secondary"
        component="label"
      >
        Upload Video
        <input
          type="file"
          accept="video/mp4,video/x-m4v,video/*"
          hidden
          onChange={onChange}
        />
      </Button>
    </>
  );
}

export default VideosCard;
