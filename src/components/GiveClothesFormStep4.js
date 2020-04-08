import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import image from '../assets/myBackgroundTeddy1.jpg'


const GiveClothesFormStep4 = () => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [comments, setComments] = useState('');
    const history = useHistory();

    const toStep3 = () => {
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep3")
    }
    const toConfirm = (event) => {
        event.preventDefault();
        if (street.length < 3) {
            alert("Nazwa ulicy powinna mieć przynajmniej 3 znaki")
            return;
        }
        if (city.length < 3) {
            alert("Nazwa miasta powinna mieć przynajmniej 3 znaki")
            return;
        }
        const codeFormula = /^[0-9][0-9]-[0-9][0-9][0-9]$/;
        if (!codeFormula.test(postalCode)) {
            alert("Podaj prawidłowy kod pocztowy. Powienien być w formacie XX-XXX")
            return;
        }
        const phoneNumberFormula = /^[1-9]{1}[0-9]{8}$/;
        if (!phoneNumberFormula.test(phoneNumber)) {
            alert("Podaj prawidłowy numer telefonu. Powinien być w formacie XXXXXXXXX")
            return;
        }
        // const dateFormula = /^(19|20)[0-9]{2}-[0-1][0-2]-[0-3][0-9]$/;
        // if (!dateFormula.test(date)) {
        //     alert("Podaj prawidłową datę. Powinna być w formacie RRRR-MM-DD")
        //     return;
        // }

        // const hourFormula = /^[0-2][0-9]:[0-5][0-9]$/;
        // if (!hourFormula.test(hour)) {
        //     alert("Podaj prawidłową godzinę. Powinna być w formacie GG:MM")
        //     return;
        // }

        localStorage.setItem("userStreet", street)
        localStorage.setItem("userCity", city)
        localStorage.setItem("userPostalCode", postalCode)
        localStorage.setItem("userPhoneNumber", phoneNumber)
        localStorage.setItem("pickUpDate", date)
        localStorage.setItem("pickUpHour", hour)
        localStorage.setItem("pickUpComment", comments)
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormConfirm")
    }
    // const uploadData = (event) => {
    //     event.preventDefault(event);
    //     localStorage.setItem("userStreet", street)
    //     localStorage.setItem("userCity", city)
    //     localStorage.setItem("userPostalCode", postalCode)
    //     localStorage.setItem("userPhoneNumber", phoneNumber)
    //     localStorage.setItem("pickUpDate", date)
    //     localStorage.setItem("pickUpHour", hour)
    //     localStorage.setItem("pickUpComment", comments)
    // }






    return (
        <>
            <section className="giveClothesImportantStep4">
                <p>Ważne!</p>
                <p>Podaj adres oraz termin odbiour rzeczy.</p>
            </section>

            <section className="giveClothesFormStep4 ">
                <p className="stepNumberPositionClass">Krok 4/4</p>
                <div className="formStep4Container">
                    <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                    <form className="adressDateForm" >
                        <div className="adressContainer">
                            <label>Ulica: <input type="text" onChange={event => setStreet(event.target.value)}></input></label>
                            <label>Miasto: <input type="text" onChange={event => setCity(event.target.value)}></input></label>
                            <label>Kod pocztowy: <input type="text" onChange={event => setPostalCode(event.target.value)}></input></label>
                            <label>Numer telefonu: <input type="text" onChange={event => setPhoneNumber(event.target.value)}></input></label>
                        </div>
                        <div className="dateContainer">
                            <label>Data: <input type="date" onChange={event => setDate(event.target.value)}></input></label>
                            <label>Godzina: <input type="time" onChange={event => setHour(event.target.value)}></input></label>
                            <label>Uwagi dla kuriera: <textarea type="text" onChange={event => setComments(event.target.value)}></textarea></label>
                        </div>
                        <button onClick={toStep3}>Cofnij</button>
                        {/* <button>sumbit</button> */}
                        <button onClick={toConfirm} >Przejdz dalej</button>

                    </form>
                </div>
                <div className="teddyContainer">
                    <img src={image} />
                </div>
            </section>
        </>
    );
}

export default GiveClothesFormStep4;