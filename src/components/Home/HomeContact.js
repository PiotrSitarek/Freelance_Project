import React, { useState } from "react";
import image from "../../assets/Decoration.svg";
import clothesimage from '../../assets/Background-Contact-Form.jpg';

const HomeContact = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [succes, setSucces] = useState('');
    const [allInputsError, setAllInputsError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');


    const sendForm = (event) => {
        event.preventDefault();

        if (userName.length === 0 || userEmail === 0 || userMessage === 0) {
            setAllInputsError('Wszyskie pola muszą być wypełnione');
            return;
        }
        const regName = /^[a-zA-Z]{2,}$/i;
        if (!regName.test(userName)) {
            setNameError('Imię musi być jednym wyrazem oraz mieć przynajmniej 2 znaki');
            return;
        }
        const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        if (!regEmail.test(userEmail)) {
            setEmailError('Wypełnij poprawnie adres e-mail');
            return;
        }
        if (userMessage.length < 120) {
            setMessageError('Wiadomość nie może być krótsza niż 120 znaków');
            return;
        }

        const formData = {
            "name": `${userName}`,
            "email": `${userEmail}`,
            "message": `${userMessage}`
        }
        const formReset = document.querySelector('#contactFormReset')
        console.log(formReset)

        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => console.log(response))
            .then(setSucces('Wiadomość wysłana'))
            .then(setNameError(''))
            .then(setEmailError(''))
            .then(setMessageError(''))
            .then(setAllInputsError(''))
            .then(formReset.reset())

    }
    return (
        <section className="contactContainer" id="idHomeContact">
            <img src={clothesimage} alt="clothesImage" />
            <div className="contactForm">
                <p className="contactUs">Skontaktuj się z nami</p>
                <img src={image} alt="decorationImage" />
                <p className="succesStyle">{succes}</p>
                <p className="errorStyle">{allInputsError}</p>
                <form onSubmit={sendForm} id="contactFormReset">
                    <div className="nameEmailContainer">
                        <div className="nameContainer">
                            <label>Wpisz swoje imię</label>
                            <input onChange={event => setUserName(event.target.value)} className="inputStyle" type="text" placeholder="Name..."></input>
                            <p className="errorStyle">{nameError}</p>
                        </div>
                        <div className="emailContainer">
                            <label>Wpisz swój e-mail</label>
                            <input id="emailInputInject" onChange={event => setUserEmail(event.target.value)} className="inputStyle" type="email" placeholder="e-mail..."></input>
                            <p className="errorStyle">{emailError}</p>
                        </div>
                    </div>
                    <label>Wpisz wiadomość</label><br />
                    <textarea onChange={event => setUserMessage(event.target.value)} placeholder="Wpisz wiadomość..."></textarea>
                    <p className="errorStyle">{messageError}</p>
                    <button>Wyślij</button>
                </form>
            </div>
        </section>
    )
}
export default HomeContact;
