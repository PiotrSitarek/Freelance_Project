import React from 'react'
import { Link } from 'react-scroll';
import image from "../assets/Decoration.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useHistory
} from "react-router-dom";

const RegistrationPage = () => {
    const history = useHistory()
    const toLoginPage = () => {
        history.push("/LoginPage")
    }
    const toRegistrationPage = () => {
        history.push("/RegistrationPage")
    }
    const toHomeComponent = () => {
        history.push("/")
    }

    return (

        <><section>
            <div className="menuLoginContainer">
                <div className="loginContainer">
                    <button onClick={toLoginPage}>Zaloguj się</button>
                    <button onClick={toRegistrationPage}>Załóż konto</button>
                </div>
                <div className="menuContainer">
                    <ul>
                        <li onClick={toHomeComponent} className="menuHoverElement">Start</li>
                        <Link onClick={toHomeComponent} className="menuHoverElement" to="idFourSteps" smooth={true} duration={1000}>O co chodzi?</Link>
                        <Link onClick={toHomeComponent} className="menuHoverElement" to="idAboutUs" smooth={true} duration={1000}>O nas</Link>
                        <Link onClick={toHomeComponent} className="menuHoverElement" to="idWeHelp" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                        <Link onClick={toHomeComponent} className="menuHoverElement" to="idHomeContact" smooth={true} duration={1000}>Kontakt</Link>
                    </ul>
                </div>
            </div>
            <div className="loginDataContainer">
                <p>Zarejestruj się</p>
                <img src={image} />
                <div>
                    <form>
                        <label>Email  </label>

                        <input type="email" />

                        <label>Hasło  </label>
                        <input type="password" />

                        <label>Powtórz hasło </label>
                        <input type="password" />

                    </form>
                </div>

                <button onClick={toLoginPage}>Zaloguj się</button>
                <button onClick={toRegistrationPage}>Załóż konto</button>


            </div>




        </section>
        </>
    );
}

export default RegistrationPage;