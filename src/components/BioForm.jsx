import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import authContext from "../client/context";
import { img } from "../assets/defautlmg";

const BioForm = ({ onSubmit, startingData, deleteBio, updateBio }) => {
  const idToken = useContext(authContext);

  const emptyForm = {
    first_name: "",
    last_name: "",
    bio: "",
    bio_img: img,
  };

  const [formValues, setFormValues] = useState(startingData || emptyForm);
  const [file, setFile] = useState(undefined);
  const [imgString, setImgString] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...formValues, bio_img: imgString }, idToken);
    setFormValues(emptyForm);
    setFile(undefined);
  }

  function handleOnChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = function (e) {
      setImgString(reader.result);
    };
    reader.readAsDataURL(selectedFile);
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
      <form className="bioForm" onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 500 }} elevation={8}>
          <CardMedia
            sx={{ height: 400 }}
            image={formValues.bio_img}
            title="member headshot"
            component="img"
            loading="lazy"
          />
          <CardContent>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 1 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                size="small"
                label="First Name"
                onChange={(e) =>
                  setFormValues({ ...formValues, first_name: e.target.value })
                }
                value={formValues.first_name}
                fullWidth
                required
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                size="small"
                label="Last Name"
                onChange={(e) =>
                  setFormValues({ ...formValues, last_name: e.target.value })
                }
                value={formValues.last_name}
                fullWidth
                required
              />
            </Stack>
            <TextField
              variant="outlined"
              color="secondary"
              label="Bio"
              onChange={(e) =>
                setFormValues({ ...formValues, bio: e.target.value })
              }
              value={formValues.bio}
              multiline
              rows={12}
              fullWidth
              required
            />
            <Stack spacing={2} direction="row" sx={{ marginBottom: 3 }}></Stack>
          </CardContent>
          <CardActions>
            {!startingData ? (
              <Button
                key="create"
                variant="outlined"
                size="small"
                color="secondary"
                type="submit"
              >
                Add New Bio
              </Button>
            ) : (
              [
                <Button
                  key="save"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  onClick={() => updateBio(formValues, idToken)}
                >
                  Save
                </Button>,
                <Button
                  key="del"
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => deleteBio(formValues["id"], idToken)}
                >
                  Delete
                </Button>,
              ]
            )}
            <Button
              key="upload"
              variant="contained"
              size="small"
              color="secondary"
              component="label"
            >
              Upload Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleOnChange}
              />
            </Button>
            <a>{file?.name}</a>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
};

export default BioForm;
