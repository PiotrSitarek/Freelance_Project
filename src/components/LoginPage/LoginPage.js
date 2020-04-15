import React, { useState, useEffect } from 'react';
import image from "../../assets/Decoration.svg";
import { Link as RouterLink, useHistory } from "react-router-dom";

const LoginPage = () => {

    const [loginMail, setLoginMail] = useState('');
    const [loginInfo] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [allDataBase, setAllDataBase] = useState([]);
    const [usersBase, setUsersBase] = useState([]);
    const history = useHistory();
    const toLoginPage = () => {
        history.push("/LoginPage")
    }
    const toRegistrationPage = () => {
        history.push("/RegistrationPage")
    }

    useEffect(() => {
        fetch(`http://localhost:3000/database/`)
            .then((response) => response.json())
            .then((response) => setAllDataBase(response))
    }, []);

    useEffect(() => {
        const filteredAllData = allDataBase.filter(function (element, index, array) {
            return element.id >= 0
        });
        setUsersBase(filteredAllData);
    }, [allDataBase]);

    const logIntoSystem = (event) => {
        event.preventDefault();
        const account = usersBase.filter(function (element) {
            return element.userEmail === loginMail && element.userPassword === loginPassword
        });

        if (account.length === 0) {
            alert("nie ma takiego usera")
        } else {
            alert('zalogowano');
            const userName = loginMail;
            localStorage.setItem('savedName', userName);
            history.push("/GiveClothes")
        }
    }
    const lockEnter = (event) => {
        if (event.keyCode === 13) {
            window.event.returnValue = false;
        }
    }
    return (

        <section>
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
            <div className="loginDataContainer">
                <p>Zaloguj się</p>
                <img src={image} alt="decorationImage" />
                <div>
                    <form onSubmit={logIntoSystem} id="loginFormReset" onKeyDown={lockEnter}>
                        <label>Email  </label>
                        <input onChange={event => setLoginMail(event.target.value)} type="email" />
                        <label>Hasło  </label>
                        <input onChange={event => setLoginPassword(event.target.value)} type="password" />
                        {<p className="infoFromLoginPage">{loginInfo}</p>}
                        <button onClick={toRegistrationPage}>Załóż konto</button>
                        <button >Zaloguj się</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
