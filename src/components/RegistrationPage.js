import React, { useState, useEffect } from 'react'
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

    const [allDataBase, setAllDataBase] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/database/`)
            .then((response) => response.json())
            .then((response) => setAllDataBase(response))
    }, [])

    const [usersBase, setUsersBase] = useState([]);
    useEffect(() => {

        const filteredAllData = allDataBase.filter(function (element, index, array) {
            return element.userEmail != null
        });
        setUsersBase(filteredAllData);
        // console.log(filteredAllData);

    }, [allDataBase])









    const registrationForm = document.querySelector('#registrationFormReset');
    const checkLoginData = (event) => {
        event.preventDefault();
        const account = usersBase.filter(function (element) {
            return element.userEmail == registeredEmail

        });

        if (account.length == 0) {

            if (password1.length < 6 || password2.length < 6) {
                alert(`Hasło jest za krótkie`);
                return;

            } if (password1 != password2) {
                alert(`Hasła nie są zgodne`);
                return;
            }
            if (password1 == password2) {

                const registrationData = {
                    "userEmail": `${registeredEmail}`,
                    "userPassword": `${password1}`,
                    "userConfirmPassword": `${password2}`
                }
                fetch(`  http://localhost:3000/database/`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(registrationData)
                })
                    .then(response => console.log(response))
                    .then(alert(`Konto zostało utworzone`))
                    .then(registrationForm.reset())
                    .then(history.push("/LoginPage"))
            }
        }

        else {
            alert(`Błąd rejestracji! Podany adres istnieje już w naszej bazie`)
            return;
        }
    }
    const lockEnter = (event) => {

        if (event.keyCode == 13) {
            window.event.returnValue = false;
        }
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
            <div className="loginDataContainer">
                <p>Zarejestruj się</p>
                <img src={image} />
                <div>
                    <form onSubmit={checkLoginData} id="registrationFormReset" onKeyDown={lockEnter}>
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