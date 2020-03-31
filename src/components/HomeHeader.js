import React from "react";
import { Link } from 'react-scroll';
import image from '../assets/Home-Hero-Image-2.jpg';
import pageInfoimage from '../assets/Decoration.svg';





const HomeHeader = () => {
    return (
        <>
            <section className="heroImageContainer">
                <img src={image} />
            </section>
            <section className="navigationContainer">
                <div className="menuLoginContainer">
                    <div className="loginContainer">
                        <button>Zaloguj się</button>
                        <button>Załóż konto</button>
                    </div>
                    <div className="menuContainer">
                        <ul>
                            <li>Start</li>
                            <Link to="idFourSteps" smooth={true} duration={1000}>O co chodzi?</Link>
                            <Link to="idAboutUs" smooth={true} duration={1000}>O nas</Link>
                            <li>Fundacja i organizacje</li>
                            <Link to="idHomeContact" smooth={true} duration={1000}>Kontakt</Link>
                        </ul>
                    </div>
                </div>
                <div className="pageInfoContainer">
                    <div className="pageInfoText">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={pageInfoimage} />
                    </div>
                    <div className="pageInfoOptions">
                        <button>Oddaj rzeczy</button>
                        <button>Zorganizuj zbiórkę</button>

                    </div>
                </div>
            </section>




        </>
    );
}

export default HomeHeader;