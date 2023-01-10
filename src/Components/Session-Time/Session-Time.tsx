import React, { useContext, useState, useEffect } from "react";
import { Session } from "../../Common/Types/Session-Type";
import MovieStyles from "../../Common/Styles/movies-style";
import SessionProps from "./Session-Props";
import axios from "axios";
import UserContext from "../../Context";
import Logo from "../Logo";
import { useNavigate, useParams } from "react-router-dom";

export default function SessionTime() {
  const [SessionTime, SetSession] = useState<Session[]>([]);
  const { Session } = MovieStyles;
  const {id} = useParams()
  const Navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`
    );

    promise.then((response) => {
      SetSession(response.data.days)
      
    });
    promise.catch((err) => {
      if(err.code === 'ERR_BAD_REQUEST') {
        Navigate('/')
      }
    });
  }, []);

  return (
    <>
      <Logo />
      <Session>
        <p>Selecione o horário desejado</p>
      </Session>
      {SessionTime.map((item, index) => (
          <SessionProps
          key={index}
          weekday={item.weekday}
          date={item.date}
          showtimes={item.showtimes}
        />
        )
      )}
    </>
  );
}
