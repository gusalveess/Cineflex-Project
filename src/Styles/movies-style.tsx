import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Box = styled.div`
    border: 2px solid #fff;
    margin-top: 13px;
    max-width: 145px;
    max-height: 209px;
    border-radius: 5px;
    margin-left: 10px;

    img {
        max-width: 119px;
        max-height: 193px;
    }
`

const Session = styled.div`

margin-top: 40px;
    
p {
    padding-left: 16px;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: 600;
    
}

`

const MovieStyles = {Container, Session, Box}

export default MovieStyles

