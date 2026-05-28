import { useEffect, useState } from "react";

export function AppMode() {

    const [mode, setMode] = useState(() => {
        return localStorage.getItem("mode") || "light"
    });

    useEffect(() => {
        document.documentElement.setAttribute("app-mode", mode);
        localStorage.setItem("mode", mode);
    },[mode])

    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light");
    }

    return (
        <i className={mode === "light" 
            ? "bi bi-moon-stars-fill" 
            : "bi bi-brightness-high"}
            onClick={toggleMode}
        />
    )
}