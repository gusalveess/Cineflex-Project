import React, { useContext, useState } from "react";
import UserContext from "../../Context";
import SeatsStyle from "../../Common/Styles/seats-style";

export default function SeatsProps(props: any) {
  const { seats } = useContext(UserContext);
  const [clicked, setClicked] = useState<boolean>(false);
  const [color, setColor] = useState<string>("green");
  const { FunctionDiv } = SeatsStyle;

  function Click() {
    clicked == true ? setColor("black") : setColor("green");
    clicked == true ? setClicked(false) : setClicked(true);
  }

  function clickSeat(e: any) {
    if (seats.includes(e)) {
      seats.splice(seats.indexOf(e), 1);
    } else {
      seats.push(e);
    }
  }

  return (
    <>
      {props.isAvailable !== true ? (
        <FunctionDiv>
          <div style={{ backgroundColor: "red" }}>
            <p>{props.name}</p>
          </div>
        </FunctionDiv>
      ) : (
        <FunctionDiv onClick={() => setClicked(!clicked)}>
          <div
            style={
              clicked === true
                ? { backgroundColor: "black" }
                : { backgroundColor: "green" }
            }
            onClick={() => clickSeat(props.name)}
          >
            <p>{props.name}</p>
          </div>
        </FunctionDiv>
      )}
    </>
  );
}
