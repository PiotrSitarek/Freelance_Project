import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-scroll';
import image from "../assets/Decoration.svg";
import pageInfoimage from '../assets/Decoration.svg';
// import GiveClothes from './GiveClothes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useHistory
} from "react-router-dom";
import GiveClothes from './GiveClothes';

const LoginPage = () => {

    const [loginMail, setLoginMail] = useState('');
    const [loginInfo, setLoginInfo] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [allDataBase, setAllDataBase] = useState([]);
    const [usersBase, setUsersBase] = useState([]);
    const [accountState, setAccountState] = useState([]);

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
    useEffect(() => {
        fetch(`http://localhost:3000/database/`)
            .then((response) => response.json())
            // .then(response => console.log(response))
            .then((response) => setAllDataBase(response))
        // .then(setUsersBase(filteredAllData))



    }, [])



    const logIntoSystem = (event) => {
        event.preventDefault();
        const loginForm = document.querySelector('#loginFormReset')
        // const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

        const filteredAllData = allDataBase.filter(function (element, index, array) {
            return element.id >= 0
        });
        setUsersBase(filteredAllData);

        // if (loginMail.length === 0 && loginPassword.length === 0) {
        //     setLoginInfo('wprowadz poprawne dane')
        // }

        // if (!regEmail.test(loginMail)) {
        //     // setLoginInfo("Wprowadz poprawny adres email");
        //     return;
        // }

        // if (loginPassword.length < 6) {
        //     setLoginInfo('Hasło musi być dłuższe niż 5 znaków');
        //     return;
        // }
        // setLoginInfo("Dane poprawne");
        // history.push("/GiveClothes")
        // loginForm.reset();


        // const userAccount = usersBase.filter((element) => {
        //     return element.userEmail === loginMail
        // })
        const account = usersBase.filter(function (element) {
            return element.userEmail == loginMail && element.userPassword == loginPassword

        });


        if (account.length === 0) {
            alert("nie ma takiego usera")
        } else {
            console.log(account);
            setAccountState(account);
            alert('zalogowano');
            history.push("/GiveClothes")

        }




    }
    const AccountContext = React.createContext(accountState);


    const consoleStanBase = () => {
        // const filteredAllData = allDataBase.filter(function (element, index, array) {
        //     return element.id >= 0
        // });

        // setUsersBase(filteredAllData);
        console.log(usersBase)

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
                            <button onClick={consoleStanBase}>check</button>
                            <li onClick={toHomeComponent} className="menuHoverElement">Start</li>
                            <Link onClick={toHomeComponent} className="menuHoverElement" to="idFourSteps" smooth={true} duration={1000}>O co chodzi?</Link>
                            <Link onClick={toHomeComponent} className="menuHoverElement" to="idAboutUs" smooth={true} duration={1000}>O nas</Link>
                            <Link onClick={toHomeComponent} className="menuHoverElement" to="idWeHelp" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                            <Link onClick={toHomeComponent} className="menuHoverElement" to="idHomeContact" smooth={true} duration={1000}>Kontakt</Link>
                        </ul>
                    </div>
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
                        {<p className="infoFromLoginPage">{loginInfo}</p>}
                        <button onClick={toRegistrationPage}>Załóż konto</button>
                        <button >Zaloguj się</button>
                    </form>
                </div>




            </div>





        </section>
            <AccountContext.Provider value={accountState.userEmail} />
        </>
    );
}

export default LoginPage;