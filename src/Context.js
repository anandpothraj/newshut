import { createContext, useState, useEffect } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const [ css, setCss ] = useState("");
    const [ myFeed, setMyFeed ] = useState("");
    const [ userName, setUserName ] = useState("");
    const existingMode = localStorage.getItem('mode');
    const existingView = localStorage.getItem('view');
    const existingCustomTheme = localStorage.getItem('customTheme');
    const [ currentCategory , setCurrentCategory ] = useState("Feed");
    const [ mode , setMode ] = useState(existingMode?existingMode:"dark");
    const [ view , setView ] = useState(existingView?existingView:"grid");
    const [ customTheme, setCustomTheme ] = useState(existingCustomTheme?existingCustomTheme:"#ffffff");

    useEffect(() => {

        if(mode === "dark"){
          setCss("black")
        }
        else{
          setCss("rgb(0,123,255)")
        }
        
      }, [mode,customTheme])

    return (
        <Theme.Provider value={{customTheme, setCustomTheme,mode , setMode, view, setView, currentCategory, setCurrentCategory, css, setCss, userName, setUserName, myFeed, setMyFeed }}>{children}</Theme.Provider>
    )
}

export default Context;
