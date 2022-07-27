import { createContext, useState } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const existingMode = localStorage.getItem('mode');
    const existingView = localStorage.getItem('view');
    const [ customTheme, setCustomTheme ] = useState("#ffffff");
    const [ currentCategory , setCurrentCategory ] = useState("General");
    const [ mode , setMode ] = useState(existingMode?existingMode:"dark");
    const [ view , setView ] = useState(existingView?existingView:"grid");

    return (
        <Theme.Provider value={{customTheme, setCustomTheme,mode , setMode, view, setView, currentCategory, setCurrentCategory}}>{children}</Theme.Provider>
    )
}

export default Context;
