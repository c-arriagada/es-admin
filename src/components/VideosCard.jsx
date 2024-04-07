import React, { useState } from "react";
import { createVideo } from "../client/estilocalico";
import {
  Button,
  TextField,
  Stack,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const NewVideoButton = ({ onClick }) => {
  return (
    <Button
      key="createVid"
      variant="outlined"
      size="small"
      color="secondary"
      component="label"
      onClick={onClick}
    >
      Add New Video
    </Button>
  );
};

const UploadFileButton = ({ onChange }) => {
  return (
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
  );
};

const DeleteButton = ({ handleDelete }) => {
  return (
    <Button
      key="deleteVid"
      variant="contained"
      size="small"
      color="error"
      component="label"
      onClick={handleDelete}
    >
      Delete Video
    </Button>
  );
};

const UpdateMetadataButton = ({ handleMetadata }) => {
  return (
    <Button
      key="updateVid"
      variant="outlined"
      size="small"
      color="secondary"
      component="label"
      onClick={handleMetadata}
    >
      Update
    </Button>
  );
};

const DescriptionField = ({ description, onChange }) => {
  return (
    <TextField
      type="text"
      variant="outlined"
      color="secondary"
      size="small"
      label="Video description"
      onChange={onChange}
      value={description}
      multiline
      rows={5}
      fullWidth
      required
    />
  );
};

function VideosCard({ startingData, deleteVideo, updateMetadata }) {
  // startingData refers to existing data from the database
  const [videoName, setVideoName] = useState(startingData?.videos_name);
  const [description, setDescription] = useState(startingData?.description);
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
    <Box
      // component="form"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "auto",
        padding: "10px",
      }}
      noValidate
      autoComplete="off"
    >
      <Card sx={{ maxWidth: 500, padding: "10px" }} elevation={8}>
        <CardContent>
          <CardMedia
            sx={{ height: 400 }}
            src={`https://www.estilocalico.com/${startingData?.pointer}`}
            title="video"
            component="video"
            loading="lazy"
          />
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
          <DescriptionField
            onChange={(e) => setDescription(e.target.value)}
            description={description}
          />
        </CardContent>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 1 }}></Stack>
        <CardActions>
          {!startingData ? (
            <>
              <NewVideoButton onClick={handleClick} />
              <UploadFileButton onChange={onChange} />
              <a>{file?.name}</a>
            </>
          ) : (
            <>
              <UpdateMetadataButton
                handleMetadata={() =>
                  updateMetadata({
                    videos_name: videoName,
                    description: description,
                    id: startingData.id
                  })
                }
              />
              <DeleteButton handleDelete={() => deleteVideo(startingData.id)} />
            </>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default VideosCard;
