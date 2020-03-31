import React from 'react'
import image from "../assets/Decoration.svg";
import clothesimage from '../assets/Background-Contact-Form.jpg'

const HomeContact = () => {
    return (
        <>
            <section className="contactContainer">
                <div className="clothesImgContainer">
                    <img src={clothesimage} />
                </div>
                <div className="contactForm">
                    <p>Skontaktuj się z nami</p>
                    <img src={image} />
                    <form>
                        <div className="nameEmailContainer">

                            <div className="nameContainer">
                                <label>Wpisz swoje imię</label>
                                <input className="inputStyle" type="text" placeholder="Name..."></input>
                            </div>
                            <div className="emailContainer">
                                <label>Wpisz swój e-mail</label>
                                <input className="inputStyle" type="text" placeholder="e-mail..."></input>
                            </div>
                        </div>
                        <label>Wpisz wiadomość</label><br />
                        <textarea placeholder="Wpisz wiadomość..."></textarea>
                        <button>Wyślij</button>
                    </form>


                </div>
            </section>
        </>
    );
}

export default HomeContact;
