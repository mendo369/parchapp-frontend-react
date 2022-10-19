import React, { useState } from "react";

import { Link, useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import getCategories from "../../services/getCategories";

import Logo from "../../components/Others/logo";

import "./styles.css";
import { useEffect } from "react";

function createParche() {
  const { createParche } = useUser();
  const [, navigate] = useLocation();
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState();

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
      console.log("categories: ", categories);
      console.log("res categories: ", res);
    });
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paths = await insertFiles();
    const cityUpper = city.split("")[0].toUpperCase() + city.substring(1);

    createParche({
      parche: { city, place, category, description, media: paths },
    });
    navigate("/");
    // console.table([city, place, category, description, paths]);
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
        <br />
        <form className="create-parche-form" onSubmit={handleSubmit}>
          <div className="geo">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              value={city}
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="place">Place:</label>
            <input
              type="text"
              value={place}
              name="place"
              placeholder="Place"
              onChange={(e) => setPlace(e.target.value)}
              autoComplete="off"
            />
          </div>
          <br />
          <div className="categories">
            <label htmlFor="categories">Category</label>
            <select
              name="categories"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected value={category}>
                Category
              </option>
              {categories.map((category) => {
                return (
                  <option value={category.type} key={category.type}>
                    {category.type}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            maxLength={150}
            res
            placeholder="Description | Max. 150 characteres"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          {/* <input
            value={description}
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          /> */}
          <label htmlFor="add-media">Add media</label>
          {/* <small>
            If you are in a pc, press Ctrl and then click over files
          </small> */}
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
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancelar
          </button>
        </form>
      </section>
    </section>
  );
}

export default createParche;
