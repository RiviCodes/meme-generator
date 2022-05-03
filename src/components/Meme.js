import React from "react";
import "../styles/Meme.css";
import memesData from "../memesData";

export default function Meme() {
  // The 'meme' state variable contains and object with the basic meme properties
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  // The 'allMemeImages' state variable contains the value of memeData.js
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeUrl = memesArray[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState, // Using the spread operator, pass the whole object...
      randomImage: memeUrl, // ...and replace the meme image with a random one
    }));
  }

  return (
    <>
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
          <button className="form--button" onClick={getMemeImage}>
            Create a new meme image 👽
          </button>
        </div>
        <img src={meme.randomImage} className="meme--image" />
      </main>
    </>
  );
}
