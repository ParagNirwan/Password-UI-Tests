import { useState } from "react";

function End() {
  const [catImage, setCatImage] = useState("");

  const fetchCatImage = () => {
    const timestamp = new Date().getTime();
    const apiUrl = `https://cataas.com/cat?timestamp=${timestamp}`;

    fetch(apiUrl)
      .then((response) => response.url)
      .then((url) => setCatImage(url))
      .catch((error) => console.error("Error fetching cat image:", error));
  };

  return (
    <>
      <div className="container">
        <h3>
          <p className="text-center mt-4">
            Thou hast tested the UI valiantly, and for that, we extend our
            deepest gratitude.
          </p>
          <p className="text-center">
            As a token of our appreciation, behold a random feline image
            conjured for thee!
          </p>
        </h3>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={fetchCatImage}>
            Fetch Cat Image
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <img
            src={catImage || "https://placekitten.com/300/200"}
            alt="Random Feline"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </>
  );
}

export default End;
