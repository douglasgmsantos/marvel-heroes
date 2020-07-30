import React from 'react';

import {
  Container,
  Title,
  MovieContainer,
  MovieImage
} from './styles';

interface IMoviesProps {
  movies: string[];
}

const Movies: React.FC<IMoviesProps> = ({
  movies
}: IMoviesProps) => {
  return (
    <>
      <Container>
        <Title>Filmes</Title>
        <MovieContainer>
          {movies.map(movie => <MovieImage key={movie} source={{ uri: movie }} />)}
        </MovieContainer>
      </Container>
    </>
  )
}

export default Movies;