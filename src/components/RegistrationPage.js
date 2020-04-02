import React, { useState } from 'react'
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
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState('');

    const toLoginPage = () => {
        history.push("/LoginPage")
    }
    const toRegistrationPage = () => {
        history.push("/RegistrationPage")
    }
    const toHomeComponent = () => {
        history.push("/")
    }
    const registrationForm = document.querySelector('#registrationFormReset');
    const checkLoginData = (event) => {
        event.preventDefault();
        if (password1 == password2) {
            alert(`Hasła są zgodne,  email to ${registeredEmail} ale nie bardzo jest gdzie się logować`);  // tymczasowo alert
            registrationForm.reset();
        } else {
            alert(`${registeredEmail} to fajny mail ale hasła nie pasują! `);  // tymczasowo alert
        }
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
                    <form onSubmit={checkLoginData} id="registrationFormReset">
                        <label>Email  </label>

                        <input onChange={event => setRegisteredEmail(event.target.value)} type="email" />

                        <label>Hasło  </label>
                        <input onChange={event => setPassword1(event.target.value)} id="password1" type="password" />

                        <label>Powtórz hasło </label>
                        <input onChange={event => setPassword2(event.target.value)} id="password2" type="password" />
                        <button onClick={toLoginPage}>Zaloguj się</button>
                        <button >Załóż konto</button>
                    </form>
                </div>





            </div>




        </section>
        </>
    );
}

export default RegistrationPage;