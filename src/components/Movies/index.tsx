import React from 'react';

import {
  Container,
  Title,
  MovieContainer,
  MovieImage
} from './styles';

const Movies: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Filmes</Title>
        <MovieContainer>
          <MovieImage source={{ uri: "/Users/douglassantos/Desktop/workspace/marvelComics/src/assets/movies/ant-man-and-the-wasp.jpg" }} />
          <MovieImage source={{ uri: "/Users/douglassantos/Desktop/workspace/marvelComics/src/assets/movies/ant-man-and-the-wasp.jpg" }} />
          <MovieImage source={{ uri: "/Users/douglassantos/Desktop/workspace/marvelComics/src/assets/movies/ant-man-and-the-wasp.jpg" }} />
          <MovieImage source={{ uri: "/Users/douglassantos/Desktop/workspace/marvelComics/src/assets/movies/ant-man-and-the-wasp.jpg" }} />
        </MovieContainer>
      </Container>
    </>
  )
}

export default Movies;