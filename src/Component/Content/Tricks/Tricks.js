import React, { PureComponent } from 'react'
import Aux from '../../HOC/Aux'
import TricksContext from '../../Context/tricks-context'
import Trick from '../Trick/Trick'

 /* 
There are lifecyle method that should NOT include this.setState!
Module is in Section 7, lifecycle methods.
*/

/* 
nameContext was NEVER used. Possibly delete.
*/

/* PureComponent – instead of shouldComponentUpdate: it shallow checks if props has changed, else, rerender! */
class Tricks extends PureComponent {

    /*
    contextType will not work if two context files are imported 
     - static contextType = <ContextFileName>; 
    */

    // static contextType = TricksContext; 

    render() {
        /* PROPS are click */
        const {click} = this.props;

        return (
          <Aux>
            {/* DIV focuses on the Tricks section display */}
            <div>
                <h2> Tricks For Today? </h2>
                <p> Press on ' + ' button to increase, ' – ' to decrease count </p>
            </div>

            {/* <div>Bonus: Access contextType by: {this.context.trickList}</div> */}

            <hr></hr>

            {/* Used two context files, works... was not needed though. */}
            {/* To use .Consumer, open up a {context => { ..code.. }}  | to use context, do context.trickList...*/}
            {/* this is just passing an array of objects and using map to iterate through the objects one by one. :D */}
            <TricksContext.Consumer>
                {list => {
                    /* id & key are RESERVED words */
                    return list.trickList.map(({ trick }, index) => {
                        return <Trick
                                key={index}
                                indexNumber={index}
                                nameOfTrick={trick}
                                click={() => click(index)}
                                />
                        
                    })
                }}
            </TricksContext.Consumer>
          </Aux>
        );
    }
}

export default Tricks;