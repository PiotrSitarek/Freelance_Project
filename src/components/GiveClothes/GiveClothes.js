import React from 'react';
import HomeContact from '../Home/HomeContact';
import image from '../../assets/Form-Hero-Image.jpg';
import HomeFooter from '../Home/HomeFooter';
import decoration from '../../assets/Decoration.svg';
import { Link as RouterLink, useHistory } from "react-router-dom";
import GiveClothesForm from './GiveClothesForm';

const GiveClothes = () => {
    const history = useHistory()

    if (localStorage.getItem("savedName") === null) {
        history.push("/")
    }
    const toLogoutPage = () => {
        localStorage.removeItem('savedName');
        history.push("/LogoutPage")
    }
    var savedData = localStorage.getItem("savedName");

    return (
        <section className="giveClothesComponent" id="idGiveClothes">
            <section className="imgNaviContainer">
                <img src={image} alt="GiveClothesImg" />
                <div className="navigationFlexContainer">
                    <div className="menuLoginContainer">
                        <div className="loginContainer">
                            <p className="userMailStyleLocal"> {savedData}</p>
                            <button id="giveClothesStaticButton">Oddaj rzeczy</button>
                            <button onClick={toLogoutPage}>Wyloguj się</button>
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
                    <div className="pageInfoFlex">
                        <div className="pageInfoContainer">
                            <div className="pageInfoText">
                                <p>Oddaj rzeczy których już nie chcesz</p>
                                <p>POTRZEBUJĄCYM</p>
                                <img src={decoration} alt="decorationImage" />
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
            <GiveClothesForm />
            <HomeContact />
            <HomeFooter />
        </section>
    )
}
export default GiveClothes;