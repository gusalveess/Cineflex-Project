import styled from "styled-components";

const FunctionDiv = styled.div`
  div {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-left: 7px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Orbitron", sans-serif;
    font-weight: 400;
    font-size: 15px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ContainerSeats = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 327px;
`;

const Division = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Orbitron", sans-serif;
    color: #fff;
    font-size: 14px;
  }
`;

const ContainerSubtitle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 327px;
    height: 51px;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 19px;
  }

  input::placeholder {
    font-size: 18px;
    font-style: italic;
    padding-left: 16px;
  }

  button {
    width: 225px;
    height: 46px;
    background-color: #e8833a;
    margin-top: 37px;
    margin-bottom: 30px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    font-family: "Orbitron", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: white;
  }

  button:hover {
    cursor: pointer;
  }

  h1 {
    padding-top: 10px;
    font-family: "Orbitron", sans-serif;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Selected = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: black;
  margin-left: 7px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
`;

const Available = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: green;
  margin-left: 7px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
`;

const Unavailable = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: red;
  margin-left: 7px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
`;

const SeatsStyle = {
  ContainerSeats,
  Container,
  FunctionDiv,
  Selected,
  Available,
  Unavailable,
  ContainerSubtitle,
  Division,
};

export default SeatsStyle;
