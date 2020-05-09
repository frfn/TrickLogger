import React, { Component } from 'react'
import Tricks from '../Content/Tricks/Tricks'
import Aux from '../HOC/Aux'

/* PropTypes */
import PropTypes from 'prop-types'

export default class Body extends Component {
    /* constructor made just for reference! */
    constructor(props){
        super(props);

        this.reference = React.createRef();
    }

    /* Reference so that it will focus on input field! Create constructor */
    /* When component gets rendered... focus on input field! */
    componentDidMount() {
        this.reference.current.focus();
    }

    /* I can use this.props.tricks.length for shouldComponentUpdate... but no thanks. */

    /*
    IMPORTANT LIFECYCLE METHODS:
     - componentDidMount(): runs after component mounts to DOM
     - shouldComponentUpdate(nextState, nextProps): sees if there are changes and if component should update
     - getSnapshotBeforeUpdate(prevState,prevProps): gets details before update
     - componentDidUpdate(prevState,prevProps,snapshot): once component renders successfully, you can do requests here
     - componentWillUnmount(): clean up, close requests for good, etc.
     
    
    // shouldComponentUpdate is VERY important, it OPTIMIZES how our project! Should we re-render our items, or NOT!
     // nextProps are the props that are PASSED in – means if the component changes, do an action.
      // In this case we compare if nextProps is not equal to current Props, if true, then run, if not, don't do anything 

    shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
        console.log(nextProps) <-- will print props that are passed in.
        if(nextProps.tricks !== this.props.tricks) {
            return true;
        }
        else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return { message: 'Snapshot!'};
        // Pretty cool, it can get a snapshot of the page like where you were on the page and put you back on the same location
        // a real snapshot probably returns an object full of information about the DOM values.
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // you can use getSnapshotBeforeUpdate here in componentDidUpdate
        console.log('componentDidUpdate')
        console.log(prevProps, prevState, snapshot)
    }
    */

    render() {
        /* PROPS are toggleState, toggleButton, click, tricks */
        const {toggleState, toggleButton, clickSubmitHandler, clickDeleteHandler, changeHandler} = this.props;
        let showTrickList = ''
        if(toggleState){
            showTrickList = <Tricks 
                                click={clickDeleteHandler}
                            />
        }
        return(
            <Aux>
                {/* Focuses on Form Fields */}
                <div>
                    <form>
                        {/* DIV focuses on input for name of trick */}
                        <div>
                            <label htmlFor='trick'> Name of Trick: </label>
                            <input 
                                ref={this.reference}
                                type='text'
                                onChange={(e) => changeHandler(e)} 
                                id='trick' 
                                name='trick' 
                                placeholder='Enter name of trick...'
                            />
                        </div>

                        {/* DIV focuses on description of trick */}
                        <div>
                            <label htmlFor='desc'>Quick Description: </label>
                            <input
                                type='text'
                                onChange={(e) => changeHandler(e)}
                                id='desc'
                                name='desc'
                                placeholder='Enter description...'
                            />
                        </div>

                        {/* DIV focuses on SUBMIT */}
                        <div>
                            <button type='submit' onClick={clickSubmitHandler}>Submit</button>
                        </div>
                    </form>
                </div>

                {/* Focuses on toggleButton */}
                <div>
                    <h2> Please click on toggle button to render trick list </h2>
                    <button onClick={toggleButton}> Show </button>
                </div>

                <div>
                    {showTrickList}
                </div>
            </Aux>
        );
    }
}

/* For type checking, making sure the Body component get the correct props! */
Body.propTypes = {
    tricks: PropTypes.array,
    toggleState: PropTypes.bool,
    toggleButton: PropTypes.func,
    changeHandler: PropTypes.func,
    clickSubmitHandler: PropTypes.func,
    clickDeleteHandler: PropTypes.func
}