import { createContext, useContext, useState, useEffect } from 'react';

const ContextVariales = createContext({})

export const ContextVarialesProvider = ({children}) => {

    // call login
    const [callReview, setCallReview] = useState(true)

    return (
        <ContextVariales.Provider value={{ callReview, setCallReview }} >
            {children}
        </ContextVariales.Provider>
    )
}

export default ContextVariales;