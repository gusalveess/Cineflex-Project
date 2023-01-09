import React, { useContext } from "react";
import UserContext from "../../Context";
import { Link } from "react-router-dom";
import * as MovieStyle from "../../Common/Styles/movies-style";

const { Box } = MovieStyle.default;

export default function MovieProps(props: any) {
  const { setId } = useContext(UserContext);

  return (
    <>
      <Box>
        <Link to={`/filme/${props.id}`}>
          <div>
            <img
              onClick={() => setId(props.id)}
              src={props.posterURL}
              alt={props.title}
            />
          </div>
          <p>{props.title}</p>
          <button>Ver horários</button>
        </Link>
      </Box>
    </>
  );
}
