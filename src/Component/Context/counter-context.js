import { createContext } from 'react'

/* Note no React, just the createContext function is imported */

/* All functions, we used a getter method for counter, and methods for increase/decrease counter methods! */
const counterContext = createContext({
    counter: () => {}, 
    increaseCounter: () => {},
    decreaseCounter: () => {}
})

export default counterContext;