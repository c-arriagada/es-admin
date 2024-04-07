import React, { useState } from "react";
import { createVideo } from "../client/estilocalico";
import {
  Button,
  TextField,
  Stack,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

function VideosCard() {
  const [videoName, setVideoName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(undefined);

  function handleClick(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("file_name", file.name);
    data.append("video_name", videoName);
    data.append("description", description);
    console.log("data", data);
    let response = createVideo(data);
    console.log(response);
    // reset values
    setVideoName("");
    setDescription("");
    setFile(undefined);
  }

  function onChange(e) {
    const selectedFile = e.target.files[0];
    console.log("selectedFile", selectedFile);
    setFile(selectedFile);
    console.log("selected file name", selectedFile.name);
  }

  return (
    <>
      <Card sx={{ maxWidth: 500 }} elevation={8}>
        <CardContent>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 1 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              size="small"
              label="Video name"
              onChange={(e) => setVideoName(e.target.value)}
              value={videoName}
              required
            />
          </Stack>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            size="small"
            label="Video description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            multiline
            rows={5}
            fullWidth
            required
          />
        </CardContent>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 1 }}></Stack>
        <CardActions>
          <Button
            key="createVid"
            variant="outlined"
            size="small"
            color="secondary"
            component="label"
            onClick={handleClick}
          >
            Create Video
          </Button>
          <Button
            key="uploadVid"
            variant="contained"
            size="small"
            color="secondary"
            component="label"
          >
            Upload File
            <input
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              hidden
              onChange={onChange}
            />
          </Button>
          <a>{file?.name}</a>
        </CardActions>
      </Card>
    </>
  );
}

export default VideosCard;
