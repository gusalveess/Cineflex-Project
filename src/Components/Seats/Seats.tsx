import React, { useState, useEffect, useContext } from "react";
import Logo from "../Logo";
import MovieStyles from "../../Common/Styles/movies-style";
import SeatsStyle from "../../Common/Styles/seats-style";
import axios from "axios";
import SeatsProps from "./Seats-props";
import { useParams } from "react-router-dom";
import UserContext from "../../Context";
import { SeatsType } from "../../Common/Types/Seats-Type";

export default function Seats() {
  const { Session } = MovieStyles;
  const {
    ContainerSeats,
    Container,
    ContainerSubtitle,
    Selected,
    Available,
    Unavailable,
    Division,
  } = SeatsStyle;
  const [SeatsArr, SetSeats] = useState<SeatsType[]>([]);
  const { seats } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${id}/seats`
    );

    promise.then((response) => {
      SetSeats(response.data.seats);
      console.log(SeatsArr);
    });
    promise.catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <>
      <Logo />
      <Session>
        <p>Selecione os Assentos</p>
      </Session>
      <Container>
        <ContainerSeats>
          {SeatsArr.splice(0, 50).map((item, index) => (
            <SeatsProps
              key={index}
              name={item.name}
              isAvailable={item.isAvailable}
            />
          ))}
        </ContainerSeats>
      </Container>

      <ContainerSubtitle>
        <Division>
          <Selected />
          <p>Selecionado</p>
        </Division>
        <Division>
          <Available />
          <p>Disponível</p>
        </Division>
        <Division>
          <Unavailable />
          <p>Indisponivel</p>
        </Division>
      </ContainerSubtitle>

      <Container>
        <h1>Nome Completo do reservante</h1>
      <input type="text" required placeholder="Digite seu nome..."></input>
      <h1>CPF do reservante</h1>
      <input type="text" required placeholder="Digite seu CPF..." />
      <button>Reservar ingresso</button>
      </Container>
    </>
  );
}
