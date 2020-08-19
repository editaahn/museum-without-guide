import React from "react";

const Artwork = ({ artist, title, img, index }) => {
  return (
    <li key={index}>
        <strong>{title}</strong>
        <em>{artist}</em>
        <img src={img} alt={{title}+', '+{artist}}/>
    </li>
  )
}

export default Artwork;