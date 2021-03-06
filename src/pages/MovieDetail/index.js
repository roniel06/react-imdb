import { Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchMovie, searchMovieById} from '../../redux/actions/search'
import {movieResult as movieResultSelector } from '../../redux/selectors'
import {CircularProgress  } from "@material-ui/core";

export default ({match})=>{
const dispatch = useDispatch()
const movieResult = useSelector((state) => movieResultSelector(state));

useEffect(() => {
  const movieId = match.params.id;
  if(!movieResult || movieResult && movieResult.imdbID !== movieId){      
    dispatch(searchMovieById({ movieId }));
  }
});

if (!movieResult) {
    return <CircularProgress size={80} color="primary" />;
  }


    return (
      <Container>
        <Typography variant='h2'>{movieResult.Title}</Typography>
        <img src={movieResult.Poster} alt={movieResult.Title}/>
        <Typography><strong>Actors:</strong>{movieResult.Actors}</Typography>
        <Typography><strong>Director:</strong>{movieResult.Director}</Typography>
        <Typography><strong>Country:</strong>{movieResult.Country}</Typography>
        <Typography><strong>Rate:</strong>{movieResult.Rated}</Typography>
        <Typography><strong>Awards:</strong>{movieResult.Awards}</Typography>
        <Typography><strong>Plot:</strong>{movieResult.Plot}</Typography>
      </Container>
    );
}