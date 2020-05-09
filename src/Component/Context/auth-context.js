import { createContext } from 'react'

/* 
To make context, you MUST use React.createContext() or import { createContent }
 - inside args of createContext, it can take objects, arrays, primitive values, etc.
 
 - Notice, no React in import!
*/

const authContext = createContext({
    authenticated: false,
    logIn: () => {},
    logOut: () => {}
});

export default authContext;