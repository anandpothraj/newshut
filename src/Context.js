import { createContext, useState, useEffect } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const [ css, setCss ] = useState("");
    const existingMode = localStorage.getItem('mode');
    const existingView = localStorage.getItem('view');
    const existingCustomTheme = localStorage.getItem('customTheme');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [ currentCategory , setCurrentCategory ] = useState("General");
    const [ mode , setMode ] = useState(existingMode?existingMode:"dark");
    const [ view , setView ] = useState(existingView?existingView:"grid");
    const [ customTheme, setCustomTheme ] = useState(existingCustomTheme?existingCustomTheme:"#000000");
    const [ online, setOnline ] = useState(userInfo?true:false);
    const [ news, setNews ] = useState([]);
    const [ index, setIndex ] = useState(0);
    const customFeeds = userInfo ? userInfo.feeds : "";
    const [ showNews, setShowNews ] = useState(true);

    useEffect(() => {

        if(mode === "dark"){
          setCss("black");
        }
        else{
          setCss("rgb(0,123,255)");
        }
        
      }, [mode,customTheme])

    return (
        <Theme.Provider value={{customTheme, setCustomTheme,mode , setMode, view, setView, currentCategory, setCurrentCategory, css, setCss, userInfo, online, setOnline, news, setNews, index, setIndex, customFeeds, showNews, setShowNews}}>{children}</Theme.Provider>
    )
}

export default Context;
