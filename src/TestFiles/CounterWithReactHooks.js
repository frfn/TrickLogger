import React, { useState, useEffect } from 'react'

/*
Left Off At – Mock API
https://hub.packtpub.com/getting-started-with-react-hooks-by-building-a-counter-with-usestate-and-useeffect/ 
*/

const INCREMENT = [1, 2, 5, 10]

const Counter = () => {
    /* this.state === counter */
    /* this.setState === setCounter */
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    })

    const add = (value) => {
        setCounter(prevCounter => {
            return prevCounter + value;
        })
    }

    return(
        <div>
            <h1> Counter: {counter} </h1>
            {INCREMENT.map(num => 
                <button onClick={() => add(num)}> {num} </button>
            )}
        </div>
    );
}

export default Counter;