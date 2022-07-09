import React from "react"
import { IconName } from "react-icons/fa";

const Signin = () => {
    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure>
                            <img src=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="signin-form">
                <h2 className="form-title">Sign in to your account</h2>
                <form className="register-form" id="register-form">

                    <div className="form-group">
                        <label htmlFor="email">Email Address <br></br>
                            <i className="zmdi zmdi-lock material-icons-name"></i><br></br>
                            <input type="email" id="email" placeholder="Your Email"></input>
                        </label>
                    </div>

                    <div className="form-group"><br></br>
                        <label htmlFor="Password"> Password<br></br>
                            <i className="zmdi zmdi-email material-icons-name"></i><br></br>
                            <input type="password" id="password" placeholder="Your Password"></input><br></br>
                        </label>
                    </div>

                    <div className="form-group form-button"><br></br>
                        <label className="forgetpassword">Forget your password? <br></br>
                            <input type="submit" name="signin" id="signin" className="form-submit" value="sign in"></input><br></br>
                        </label>
                    </div>

                    <div>
                        <p>Don't have an account yet? Get started here</p>
                    </div>

                </form>
            </div>
        </section>
    )
}
export default Signin