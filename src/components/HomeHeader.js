import React from "react";
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
                            <li>O co chodzi?</li>
                            <li>O nas</li>
                            <li>Fundacja i organizacje</li>
                            <li>Kontakt</li>
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