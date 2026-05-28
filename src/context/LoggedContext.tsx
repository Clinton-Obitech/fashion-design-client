import { createContext, useContext, useState } from "react";
import type { LoggedContextType, ChildrenNode } from "../types/context";

export const LoggedContext = createContext<LoggedContextType | null>(null);

export function LoggedProvider({children}:ChildrenNode) {

    const [logged, setLogged] = useState(() => {
        return JSON.parse(localStorage.getItem("logged") || "false");
    })

    return (
        <LoggedContext.Provider value={{logged, setLogged}}>
            {children}
        </LoggedContext.Provider>
    )
}

export const useLogged = () => {
    const context = useContext(LoggedContext);

    if (!context) return null;

    return context;
}