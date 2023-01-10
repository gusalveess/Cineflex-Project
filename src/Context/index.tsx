import { createContext } from "react";

type Context = {
  Id: number;
  setId: (c: number) => void;
  name: string;
  setName: (c: string) => void;
  cpf: string;
  setCpf: (c: string) => void;
  movie: string;
  setMovie: (c: string) => void;
  date: string;
  setDate: (c: string) => void;
  seats: Number[];
  setSeats: (c: Number[]) => void;
};

const UserContext = createContext<Context>({
  Id: 0,
  setId: () => 0,
  name: "",
  setName: () => "",
  cpf: "",
  setCpf: () => "",
  movie: '',
  setMovie: () => '',
  date: '',
  setDate: () => '',
  seats: [],
  setSeats: () => []
});

export default UserContext;
