import React, { useState } from "react";
import'./App.css';

function App() {

  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const ACCESS_KEY = "wAZPgixYkw5BESycUrYx0uXjF-HYjRFeSU5vGPlLQk8";

  const searchImages = async () => {

    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    setImages(data.results);
  };

  return (
    <div className="container">

      <h1>Image Search App</h1>

<input
  type="text"
  placeholder="Search images..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}     
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      searchImages();
    }
  }}
/>

      <button onClick={searchImages}>Search</button>

      <div className="image-grid">
        {images.map((img) => (
          <img key={img.id} src={img.urls.small} alt="img"/>
        ))}
      </div>

    </div>
  );
}

export default App;