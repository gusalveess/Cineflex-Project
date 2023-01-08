import React, { useState, useEffect } from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import Logo from "./Logo";
import { Props } from "../Types/Movie-Type";
import MovieProps from "./Movies-Props";
import * as MovieStyle from "../Styles/movies-style";

export default function Movies() {

  const { Session, Container } = MovieStyle.default;
  const [Movies, setMovies] = useState<Props[]>([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((response) => {
      setMovies(response.data);
    });
    promise.catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <>
      <Logo />
      <Session>
        <p>Selecione o filme desejado</p>
      </Session>

      <Container>
        {Movies.length != 0 ? (
          Movies.map((item) => (
            <MovieProps id={item.id} posterURL={item.posterURL} />
          ))
        ) : (
          <MutatingDots
            height="100"
            width="100"
            color="#fff"
            secondaryColor="#fff"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </Container>
    </>
  );
}
