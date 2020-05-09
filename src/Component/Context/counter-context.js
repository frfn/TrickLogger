import { createContext } from 'react'

const counterContext = createContext({
    counter: () => {}, 
    increaseCounter: () => {},
    decreaseCounter: () => {}
})

export default counterContext;