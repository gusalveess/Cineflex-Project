import React, { useState } from "react";
import UserContext from "../Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies/Movies-Menu";
import SessionTime from "./Session-Time/Session-Time";
import Seats from "./Seats/Seats";

export default function App() {
  const [Id, setId] = useState(0);
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [movie, setMovie] = useState('')
  const [date, setDate] = useState('')
  const [seats, setSeats] = useState<Number[]>([])

  return (
    <>
      <UserContext.Provider value={{ Id, setId, name, setName, cpf, setCpf, movie, setMovie, date, setDate, seats, setSeats }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/filme/:id" element={<SessionTime />} />
            <Route path="/assentos/:id" element={<Seats />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
