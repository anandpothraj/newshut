import { createContext, useState } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const existingMode = localStorage.getItem('mode');
    const existingView = localStorage.getItem('view');
    const [ currentCategory , setCurrentCategory ] = useState("General");
    const [ mode , setMode ] = useState(existingMode?existingMode:"dark");
    const [ view , setView ] = useState(existingView?existingView:"grid");

    return (
        <Theme.Provider value={{mode , setMode, view, setView, currentCategory, setCurrentCategory }}>{children}</Theme.Provider>
    )
}

export default Context;
