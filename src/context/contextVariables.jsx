import { createContext, useContext, useState, useEffect } from 'react';

const ContextVariales = createContext({})

export const ContextVarialesProvider = ({children}) => {

    const [callReview, setCallReview] = useState(false)
    const [callTalk, setCallTalk] = useState(false)

    return (
        <ContextVariales.Provider value={{ callReview, setCallReview, callTalk, setCallTalk }} >
            {children}
        </ContextVariales.Provider>
    )
}

export default ContextVariales;