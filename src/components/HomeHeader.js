import React from "react";
import { Link } from 'react-scroll';
import image from '../assets/Home-Hero-Image-2.jpg';
import pageInfoimage from '../assets/Decoration.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useHistory
} from "react-router-dom";

const HomeHeader = () => {

    const history = useHistory()

    const savedData = localStorage.getItem("savedName");


    const toLoginPage = () => {
        history.push("/LoginPage")
    }
    const toRegistrationPage = () => {
        history.push("/RegistrationPage")
    }

    const toLogoutPage = () => {
        localStorage.removeItem('savedName');
        history.push("/LogoutPage")
    }


    const toGiveClothes = () => {
        if (localStorage.getItem("savedName") === null) {
            history.push("/LoginPage")
        } else {
            history.push("/GiveClothes")
        }
    }



    return (
        <>
            <section className="allthings">

                <img className="homeHeaderImage" src={image} alt="HomeHeaderImg" />
                <section className="navigationContainer">
                    <div className="navigationFlexContainer">
                        <div className="menuLoginContainer">
                            <div className="loginContainer">
                                <p className="userMailStyleLocal">{savedData}</p>
                                {savedData ? (
                                    <button onClick={toLogoutPage}>Wyloguj się</button>
                                ) : (
                                        <>

                                            <button onClick={toLoginPage}>Zaloguj się</button>
                                            <button onClick={toRegistrationPage}>Załóż konto</button>
                                        </>
                                    )}
                            </div>
                            <div className="menuContainer">
                                <ul>

                                    <li className="menuHoverElement">Start</li>
                                    <Link className="menuHoverElement" to="idFourSteps" smooth={true} duration={1000}>O co chodzi?</Link>
                                    <Link className="menuHoverElement" to="idAboutUs" smooth={true} duration={1000}>O nas</Link>
                                    <Link className="menuHoverElement" to="idWeHelp" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                                    <Link className="menuHoverElement" to="idHomeContact" smooth={true} duration={1000}>Kontakt</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pageInfoFlex">
                        <div className="pageInfoContainer">
                            <div className="pageInfoText">
                                <p>Zacznij pomagać!</p>
                                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                                <img src={pageInfoimage} />
                            </div>
                            <div className="pageInfoOptions">
                                <button onClick={toGiveClothes}>Oddaj rzeczy</button>
                                <button onClick={toGiveClothes}>Zorganizuj zbiórkę</button>

                            </div>
                        </div>
                    </div>
                </section>
            </section>




        </>
    );
}

export default HomeHeader;