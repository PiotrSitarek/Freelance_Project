import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-scroll';
import HomeContact from './HomeContact';
import image from '../assets/Form-Hero-Image.jpg';
import GiveClothesImportant from './GiveClothesImportant';
import HomeFooter from './HomeFooter';
import decoration from '../assets/Decoration.svg';
import AccountContext from './LoginPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useHistory
} from "react-router-dom";
import GiveClothesForm from './GiveClothesForm';



const GiveClothes = () => {
    const history = useHistory()
    const toLoginPage = () => {
        history.push("/LoginPage")
    }
    const toLogoutPage = () => {
        history.push("/LogoutPage")
    }
    const toHomeComponent = () => {
        history.push("/")
    }

    const contextType = useContext(AccountContext);



    return (
        <>
            <section className="giveClothesComponent">
                <section className="imgNaviContainer">
                    <img src={image} />
                    <div className="navigationFlexContainer">
                        <div className="menuLoginContainer">
                            <div className="loginContainer">
                                <p>
                                    {contextType}
                                </p>
                                <button id="giveClothesStaticButton">Oddaj rzeczy</button>
                                <button onClick={toLogoutPage}>Wyloguj się</button>
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

                        <div className="pageInfoFlex">
                            <div className="pageInfoContainer">
                                <div className="pageInfoText">
                                    <p>Oddaj rzeczy których już nie chcesz</p>
                                    <p>POTRZEBUJĄCYM</p>
                                    <img src={decoration} />
                                    <p>Wystarczą 4 proste kroki</p>
                                </div>
                                <div className="pageInfoOptions">
                                    <div>
                                        <p className="stepNumbers">1</p>
                                        <p>Wybierz rzeczy</p>
                                    </div>
                                    <div>
                                        <p className="stepNumbers">2</p>
                                        <p>Spakuj je w worki</p>
                                    </div>
                                    <div>
                                        <p className="stepNumbers">3</p>
                                        <p>Wybierz fundację</p>
                                    </div>
                                    <div>
                                        <p className="stepNumbers">4</p>
                                        <p>Zamów kuriera</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GiveClothesImportant />
                <GiveClothesForm />


                <HomeContact />
                <HomeFooter />

            </section>

        </>
    )
}
export default GiveClothes;