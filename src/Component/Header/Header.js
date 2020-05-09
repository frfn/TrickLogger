import React, { useContext } from 'react'
import Aux from '../HOC/Aux'
import AuthContext from '../Context/auth-context'

const Header = () => {

    const authContext = useContext(AuthContext); 

    /* Focuses on the AuthContext manipulation */
    let securePrompt = 'Please log in!';
    if(authContext.authenticated){
        securePrompt = 'You are logged in!'
    }

    return(
        <Aux>
            <div>
                <h1>Trick Logger</h1>
                <h3>By F. Fadrigalan</h3>
            </div>

            {/* DIV focuses on AuthContext */}
            <div>
                <br></br>
                {securePrompt}
                <div>
                    <button onClick={authContext.logIn}> Log In </button>
                    <button onClick={authContext.logOut}> Log Out </button>
                </div>
            </div>

            <div>
                <h2> Please fill form to start! </h2>
            </div>
        </Aux>
    );
}

export default Header;