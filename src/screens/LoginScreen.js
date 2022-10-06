import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [singIn, setSignIn] = useState(false);



    return (
        <div className='LoginScreen'>

            <div className='LogninScreen__background'>
                <img className='LoginScreen__logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                ></img>

                <button onClick={() => setSignIn(true)}
                    className='LoginScreen__button'>Sign In</button>
                <div className='LoginScreen__gradient'></div>
            </div>
            <div className='LoginScreen__body'>
                {singIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address"></input>
                                <button onClick={() => setSignIn(true)}
                                    className='LoginScreen__GetStarted'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen