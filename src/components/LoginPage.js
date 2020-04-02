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

const LoginPage = () => {

    const [loginMail, setLoginMail] = useState('');
    const [loginInfo, setLoginInfo] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

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
    const logIntoSystem = (event) => {
        event.preventDefault();
        const loginForm = document.querySelector('#loginFormReset')
        const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        if (!regEmail.test(loginMail)) {
            // setLoginInfo("Wprowadz poprawny adres email");
            return;
        }

        if (loginPassword.length < 6) {
            setLoginInfo('Hasło musi być dłuższe niż 5 znaków');
            return;
        }
        setLoginInfo("Dane poprawne");
        loginForm.reset();
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
                <p>Zaloguj się</p>
                <img src={image} />
                <div>
                    <form onSubmit={logIntoSystem} id="loginFormReset">
                        <label>Email  </label>
                        <input onChange={event => setLoginMail(event.target.value)} type="email" />
                        <label>Hasło  </label>
                        <input onChange={event => setLoginPassword(event.target.value)} type="password" />
                        {loginInfo && <p className="infoFromLoginPage">{loginInfo}</p>}
                        <button onClick={toRegistrationPage}>Załóż konto</button>
                        <button >Zaloguj się</button>
                    </form>
                </div>




            </div>




        </section>
        </>
    );
}

export default LoginPage;