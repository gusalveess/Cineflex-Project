import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border: 1px solid #fff;
    margin-top: 43px;
    max-width: 150px;
    max-height: 245px;
    border-radius: 5px;
    margin-left: 10px;
  }

  img {
    max-width: 149px;
    height: 245px;
    border-radius: 5px;
  }

  p {
    padding-left: 16px;
    color: #fff;
    font-family: "Orbitron", sans-serif;
    font-size: 11px;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    outline: none;
    width: 140px;
    height: 40px;
    border-radius: 5px;
    font-family: "Orbitron", sans-serif;
    background-color: orange;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    transition: all ease-in-out 0.3s;
  }

  button:hover {
    cursor: pointer;
    background-color: black;
  }
`;

const Session = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding-left: 16px;
    color: #fff;
    font-family: "Orbitron", sans-serif;
    font-size: 22px;
    font-weight: 600;
  }
`;

const MovieStyles = { Container, Session, Box };

export default MovieStyles;
