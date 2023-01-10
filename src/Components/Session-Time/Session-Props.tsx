import React from "react";
import { Link } from "react-router-dom";
import SessionStyle from "../../Common/Styles/session-style";
import { Showtimes } from "../../Common/Types/Session-Type";

export default function SessionProps(props: any) {
  const { Container, Box } = SessionStyle;
  let showtimes: Showtimes = props.showtimes;
  showtimes.splice(2,2)

  return (
    <>
      <Container>
        <p>
          {props.weekday} - {props.date}
        </p>
        {showtimes.map((item, index) => (
          <Link to={`/assentos/${item.id}`} key={index}>
          <div>
            <Box>{item.name}</Box>
          </div>
        </Link>
        ))}
      </Container>
    </>
  );
}
