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
        <>
            <section className="heroImageContainer">
                <img src={image} />
            </section>
            <section className="navigationContainer">
                <div className="navigationFlexContainer">
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
                </div>
                <div className="pageInfoFlex">
                    <div className="pageInfoContainer">
                        <div className="pageInfoText">
                            <p>Zacznij pomagać!</p>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <img src={pageInfoimage} />
                        </div>
                        <div className="pageInfoOptions">
                            <button onClick={toLoginPage}>Oddaj rzeczy</button>
                            <button onClick={toLoginPage}>Zorganizuj zbiórkę</button>

                        </div>
                    </div>
                </div>
            </section>




        </>
    );
}

export default HomeHeader;