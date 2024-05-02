async function allEvents(token) {
  const response = await fetch(`${BACKEND_URL}/events`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const events = response.json();
  return events;
}

async function getEvent(eventId, token) {
  const response = await fetch(`${BACKEND_URL}/events/${eventId}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const event = response.json();
  console.log("event", event);
  return event;
}

async function createEvent(eventObj, token) {
  const response = await fetch(`${BACKEND_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(eventObj),
  });
  const newEvent = response.json();
  return newEvent;
}

async function deleteEvent(eventId, token) {
  const response = await fetch(`${BACKEND_URL}/events/${eventId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  return "Event was deleted";
}

async function updateEvent(eventObj, eventId, token) {
  console.log("[updating event] idToken", token);
  const response = await fetch(`${BACKEND_URL}/events/${eventId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(eventObj),
  });
  const updatedEvent = response.json();
  return updatedEvent;
}

// get code to exchange for token from query params
async function getAuthToken(code) {
  let url =
    "https://estilocalico.auth.us-east-2.amazoncognito.com/oauth2/token";

  let postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: "7nk2p2fkrha638okq6m2tbobir",
      code: `${code}`,
      redirect_uri: FRONTEND_URL,
    }),
  };
  console.log("[get auth token] request options", postOptions);
  const authToken = await fetch(url, postOptions)
    .then((response) => response.json())
    .then((tokenResponse) => {
      // console.log("[get auth token] id_token response", tokenResponse.id_token);
      return tokenResponse.id_token;
    });
  return authToken;
}

async function allBios(token) {
  const response = await fetch(`${BACKEND_URL}/bios`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const bios = response.json();
  return bios;
}

async function getBio(bioId, token) {
  const response = await fetch(`${BACKEND_URL}/bios/${bioId}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const bio = response.json();
  return bio;
}

async function createBio(file, bioObj, token) {
  const response = await fetch(`${BACKEND_URL}/bios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(bioObj),
  });
  const newBio = await response.json();

  // console.log("Uploading img to s3 bucket", newBio);
  fetch(newBio["upload_url"], {
    method: "PUT",
    body: file,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      alert("Upload successful");
    })
    .catch((err) => {
      console.error("Error uploading video", err);
      alert("Upload failed");
    });

  return newBio;
}

async function deleteBio(bioId, token) {
  const response = await fetch(`${BACKEND_URL}/bios/${bioId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  return "Bio was deleted";
}

async function updateBio(bioObj, token, file) {
  // console.log("bioObj from updated bio", bioObj);
  // console.log("[updating event] idToken", token)

  const response = await fetch(`${BACKEND_URL}/bios/${bioObj["id"]}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(bioObj),
  });
  const updatedBio = await response.json();

  if (file !== undefined) {
    // console.log("Uploading img to s3 bucket", updatedBio);
    fetch(updatedBio["upload_url"], {
      method: "PUT",
      body: file,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Upload failed");
        }
        alert("Upload successful");
      })
      .catch((err) => {
        console.error("Error uploading video", err);
        alert("Upload failed");
      });
  }

  return updatedBio;
}

async function allVideos(token) {
  console.log("Getting all videos");
  const response = await fetch(`${BACKEND_URL}/videos`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const videos = response.json();
  return videos;
}

async function createVideo(file, metadata, token) {
  console.log("Creating new video: ", metadata, file);

  const response = await fetch(`${BACKEND_URL}/videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(metadata),
  });

  const newVid = await response.json();

  // TODO: write explanation
  console.log("Uploading video to s3 bucket", newVid);
  fetch(newVid["upload_url"], {
    method: "PUT",
    body: file,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      alert("Upload successful");
    })
    .catch((err) => {
      console.error("Error uploading video", err);
      alert("Upload failed");
    });
  return newVid;
}

async function updateMetadata(videoObj, token) {
  const response = await fetch(`${BACKEND_URL}/videos/${videoObj.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(videoObj),
  });
  const updatedEvent = response.json();
  return updatedEvent;
}

async function deleteVideo(videoId, token) {
  const response = await fetch(`${BACKEND_URL}/videos/${videoId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  return "Video was deleted";
}

export {
  allEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
  getAuthToken,
  allBios,
  getBio,
  createBio,
  updateBio,
  deleteBio,
  allVideos,
  createVideo,
  updateMetadata,
  deleteVideo,
};
