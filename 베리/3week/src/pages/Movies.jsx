import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ title, poster, releaseDate, overview }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClickImage = () => {
    navigate(`${title}`, { state: { title, poster, overview } });
  };

  const renderMovieOverview = () => {
    if (!isHovered) return null;

    return (
      <div>
        <div className="movie-title">{title}</div>
        <div className="movie-overview">
          {overview.length > 200 ? (
            <div>{overview.substr(0, 200) + " ..."}</div>
          ) : (
            <div>{overview}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <span
      className="movie-wrapper"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={handleClickImage}
    >
      <div className="movie-overview-container">{renderMovieOverview()}</div>
      <img
        alt={`${title} poster`}
        className="movie-poster"
        src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + poster}
      />
      <div className="movie-info">
        <span className="movie-title-box">{title}</span>
        <span className="movie-release-date">
          {releaseDate ? `${Number(releaseDate.substr(5, 2))}.${Number(releaseDate.substr(8, 2))}` : 'N/A'}
        </span>
      </div>
    </span>
  );
};

export default Movie;
