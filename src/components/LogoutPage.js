import React from 'react'
import image from "../assets/Decoration.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useHistory
} from "react-router-dom";

const LogoutPage = () => {

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
            <div className="navigationFlexContainer">
                <div className="menuLoginContainer">
                    <div className="loginContainer">
                        <button onClick={toLoginPage}>Zaloguj się</button>
                        <button onClick={toRegistrationPage}>Załóż konto</button>
                    </div>
                    <div className="menuContainer">
                        <ul>
                            <RouterLink to="/" className="menuHoverElement">Start</RouterLink>
                            <RouterLink to="/" className="menuHoverElement">O co chodzi?</RouterLink>
                            <RouterLink to="/" className="menuHoverElement">O nas</RouterLink>
                            <RouterLink to="/" className="menuHoverElement">Fundacja i organizacje</RouterLink>
                            <RouterLink to="/" className="menuHoverElement">Kontakt</RouterLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="logoutDataContainer">
                <p>Nastąpiło pomyślne wylogowanie</p>
                <img src={image} />
                <button onClick={toHomeComponent}>Strona główna</button>
            </div>
        </section>
        </>
    );
}

export default LogoutPage;