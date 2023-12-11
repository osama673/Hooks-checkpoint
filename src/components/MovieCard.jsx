import React, { useState } from "react";

function MovieCard({ title, imgUrl, rating, desc, cast }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`movie-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgUrl} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>Rating: {rating}/5</p>
        <p>Cast: {cast}</p>
      </div>
    </div>
  );
}

export default MovieCard;
