import { createContext, useState, useEffect } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const [ css, setCss ] = useState("");
    const existingMode = localStorage.getItem('mode');
    const existingView = localStorage.getItem('view');
    const existingCustomTheme = localStorage.getItem('customTheme');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [ currentCategory , setCurrentCategory ] = useState("Feed");
    const [ mode , setMode ] = useState(existingMode?existingMode:"dark");
    const [ view , setView ] = useState(existingView?existingView:"grid");
    const [ customTheme, setCustomTheme ] = useState(existingCustomTheme?existingCustomTheme:"#ffffff");
    const [ online, setOnline ] = useState(userInfo?true:false);

    useEffect(() => {

        if(mode === "dark"){
          setCss("black");
        }
        else{
          setCss("rgb(0,123,255)");
        }
        
      }, [mode,customTheme])

    return (
        <Theme.Provider value={{customTheme, setCustomTheme,mode , setMode, view, setView, currentCategory, setCurrentCategory, css, setCss, userInfo, online, setOnline }}>{children}</Theme.Provider>
    )
}

export default Context;
