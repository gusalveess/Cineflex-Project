import React from "react";
import { Link } from "react-router-dom";
import * as MovieStyle from '../Styles/movies-style'

const {Box} = MovieStyle.default


export default function MovieProps(props: any) {
    return(
        <>
          <Box>
          <Link key={props.id} to={`/filme/${props.id}`} >
            <img src={props.posterURL} alt='img' />
            </Link>
          </Box>
        </>
    )
}