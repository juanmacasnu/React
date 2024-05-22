import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock(){
    const [currentTime, setCurrentTime] = useState(new Date());
    const language = useContext(LanguageContext)

    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentTime(new Date())
        }, 500)

        return (() => {
            clearInterval(interval)
        })
    },[])

    return(
        <h2>{language === "en" ? `Current Time: ${currentTime.toLocaleTimeString()}` : `Hora actual: ${currentTime.toLocaleTimeString()}`}</h2>
    )
}
