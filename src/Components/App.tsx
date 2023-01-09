import React, {useState} from "react";
import UserContext from "../Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies/Movies-Menu";
import SessionTime from "./Session-Time/Session-Time";

export default function App() {

  const [Id, setId] = useState(0)

  return (
    <>
    <UserContext.Provider value={{Id, setId}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/filme/:id" element={<SessionTime />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
