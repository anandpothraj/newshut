import { createContext, useState } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const existingMode = localStorage.getItem('mode');
    const [ mode , setMode ] = useState(existingMode?existingMode:"dark");
    const [ showGrid, setShowGrid ] = useState(false);

    return (
        <Theme.Provider value={{mode , setMode, showGrid, setShowGrid }}>{children}</Theme.Provider>
    )
}

export default Context;
