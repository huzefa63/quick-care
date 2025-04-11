"use client";
import { createContext, useContext, useState } from "react"

const context = createContext();

function SliderProvider({children}) {
    const [showSlider,setShowSlider] = useState(false);
    const [date,setDate] = useState('');
    const [dateTime,setDateTime] = useState('');
    return (
        <context.Provider value={{setShowSlider,showSlider,date,setDate,dateTime,setDateTime}}>
            {children}
        </context.Provider>
    )
}

export function useMyContext(){
    if(!context) throw new Error('called outside of provider')
    return useContext(context);
}

export default SliderProvider
