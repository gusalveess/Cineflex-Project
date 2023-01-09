import styled from "styled-components";

const Container = styled.div`
    
p {
    padding-left: 36px;
    padding-top: 20px;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    font-size: 16px;
    font-weight: 600;
}

div {
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
}
`

const Box = styled.div`
    border: 2px solid #F4FFFD;
    border-radius: 5px;
    background-color: orange;
    margin-left: 20px;
    margin-top: 14px;
    max-width: 170px;
    height: 33px;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all ease-in-out 0.3s;

    &:hover{
        background-color: black;
    }
`

const SessionStyle = {Container, Box}

export default SessionStyle