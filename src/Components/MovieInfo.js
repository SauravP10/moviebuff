import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfor = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </MovieName>
            <MovieInfor>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfor>
            <MovieInfor>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfor>
            <MovieInfor>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfor>
            <MovieInfor>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfor>
            <MovieInfor>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfor>
            <MovieInfor>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfor>
            <MovieInfor>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfor>
            <MovieInfor>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfor>
            <MovieInfor>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfor>
            <MovieInfor>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfor>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfo;