import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SessionStyle from "../../Common/Styles/session-style";
import { Showtimes } from "../../Common/Types/Session-Type";

export default function SessionProps(props: any) {
  const { Container, Box } = SessionStyle;
  let showtimes: Showtimes = props.showtimes;

  return (
    <>
      <Container>
        <p>
          {props.weekday} - {props.date}
        </p>
        {showtimes.map((item) => (
          <Link to={`/sessoes/${item.id}`}>
          <div>
            <Box>{item.name}</Box>
          </div>
        </Link>
        ))}
      </Container>
    </>
  );
}
