import React, { useContext, memo } from 'react'
import Aux from '../../HOC/Aux'

/* Context */
import CounterContext from '../../Context/counter-context'

/* PROPS are nameOfTrick, click, indexNumber */
const Trick = ( { nameOfTrick, click, indexNumber } ) => {

    /* const reference = useRef(null) */
    /* useEffect(() => { reference.current.focus() }, []) */

    // You can do getSnapshotBeforeUpdate in React hooks. :\

    // 1
    // componentDidMount
    /* useEffect(() => {
        this will only run useEffect ONCE, during startup
    }, []) */

    // 2
    // shouldComponentUpdate
    /* useEffect(() => {
        points to prop, sees if prop updates then will run code inside useEffect()
    }, [props.xyz]) */


    // 3
    // componentWillUnmount
    /* useEffect(() => {
        // code
        return () => {
            // this is where clean up happens, componentWillUnmount 
        }
    }, [props.xyz]) */

    // 4
    // componentDidUpdate
    /* useEffect(() => {
        // no second argument means it RUNS every render cycle.
    }) */

    /* Grabs details from .Provider context in App.js */
    const counterContext = useContext(CounterContext);

    
    /* 
    This works because, before this class, we have an array. 
    When counter(nameOfTrick) gets called, it will run the method in App.js
    In that method, it retrieves the value IN THAT object.
    */
    const counter = counterContext.counter(nameOfTrick)

    return (
        /* Aux takes in click, which is an onClick in Aux.js file */
        <Aux>
            {/* <h4>{indexNumber}.</h4> – Was implemented to see the index :3 */}
            <b onClick={click}> Click On Me to Delete</b>

            {/* DIV focuses on Trick */}
            <div>
                <h2>{nameOfTrick}</h2>

                {/* DIV focuses on structure of values */}
                <div>
                    <button onClick={() => counterContext.decreaseCounter(nameOfTrick)}> – </button>
                    &nbsp; {counter} &nbsp; 
                    <button onClick={() => counterContext.increaseCounter(nameOfTrick)}> + </button>
                </div>
            </div>
            <hr></hr>
        </Aux>
    );
}

/* memo takes a snapshot (memoizes) and ONLY renders if there is change */
/* should be used with useEffect() though... we don't have one here.. but it's good to know how to use. */
export default memo(Trick);