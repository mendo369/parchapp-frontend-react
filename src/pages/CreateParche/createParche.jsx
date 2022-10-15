import React, { useState } from "react";

import { Link, useLocation } from "wouter";
import useUser from "../../hooks/useUser";
// import createParcheService from "../../services/createParche.js";

import Logo from "../../components/Others/logo";

import "./styles.css";

function createParche() {
  const { createParche } = useUser();
  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState();
  // const [media, setMedia] = useState([]);
  const [, navigate] = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paths = await insertFiles();

    console.log("paths: ", paths);
    createParche({ parche: { city, place, description, media: paths } });
    navigate("/");
  };

  const uploadFiles = (e) => {
    setFiles(e);
  };

  const insertFiles = async () => {
    let f = new FormData();

    for (let index = 0; index < files.length; index++) {
      f.append("file", files[index]);
    }

    let response = await fetch("http://localhost:4369/api/parches/media", {
      method: "POST",
      body: f,
    });

    let results = await response.json();
    let pathFiles = results.pathFiles;
    return pathFiles;
  };

  return (
    <section className="container">
      <section className="create-parche-section">
        <div className="logo">
          <Logo />
        </div>
        <h2>Create parche</h2>
        <form className="create-parche-form" onSubmit={handleSubmit}>
          <div className="geo">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="place">Place</label>
            <input
              type="text"
              value={place}
              name="place"
              placeholder="Place"
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            name="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="add-media">Add media</label>
          <small>
            If you are in a pc, press Ctrl and then click over files
          </small>
          <section className="upload-media" name="add-media">
            {/* <div className="custom-input-file"> */}
            <input
              type="file"
              name="files"
              id="media-files"
              multiple
              accept="image/*"
              onChange={(e) => {
                uploadFiles(e.target.files);
              }}
              // className="input-file"
            />
            {/* subir imagenes */}
            {/* </div> */}
          </section>
          <button>Create</button>
        </form>
      </section>
    </section>
  );
}

export default createParche;
