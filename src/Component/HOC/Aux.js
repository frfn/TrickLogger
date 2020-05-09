/* Making Aux file in case we need to return two adjacent JSX code (Ex. Two Divs in one Return Statement */

import React from 'react'

const auxWithClass = ( {children, className, func } ) => {
    return (
        <div onClick={func} className={className}>
            {children}
        </div>
    );
}

export default auxWithClass;

/* 
Below is wrapper for the class itself when exporting 
 - We do not have to use this. Not now.
*/

const withClass = ( WrappedComponent, className ) => {
    // return props 
    return (props) => {
        return <div className={className}>
                   <WrappedComponent {...props} />
               </div>
    }
}

export {
    withClass
}