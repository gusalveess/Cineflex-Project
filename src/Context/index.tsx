import { createContext } from "react";

type Context = {
    Id: number
    setId: (c: number) => void
}

const UserContext = createContext<Context>({Id: 0, setId: () => 0});

export default UserContext;