import React from 'react';
import { useHistory } from 'react-router-dom';
import image from '../assets/Icon-1.svg';
import image2 from '../assets/Icon-4.svg';

const GiveClothesFormConfirm = () => {
    const history = useHistory();

    const toStep4 = () => {
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep4")
    }
    const userStreet = localStorage.getItem("userStreet")
    const userCity = localStorage.getItem("userCity")
    const userPostalCode = localStorage.getItem("userPostalCode")
    const userPhoneNumber = localStorage.getItem("userPhoneNumber")
    const pickUpDate = localStorage.getItem("pickUpDate")
    const pickUpHour = localStorage.getItem("pickUpHour")
    const pickUpComment = localStorage.getItem("pickUpComment")

    const typeOfDonation = localStorage.getItem("typeOfDonation");

    const numberOfBags = localStorage.getItem("numberOfBags");

    const localizationCity = localStorage.getItem("localizationCity");
    const peopleToHelp = localStorage.getItem("peopleToHelp");

    const userLogin = localStorage.getItem('savedName');




    const confirmSend = () => {

        const donationInfo = {
            "userLogin": `${userLogin}`,
            "userStreet": `${userStreet}`,
            "userCity": `${userCity}`,
            "userPostalCode": `${userPostalCode}`,
            "userPhoneNumber": `${userPhoneNumber}`,
            "pickUpDate": `${pickUpDate}`,
            "pickUpHour": `${pickUpHour}`,
            "pickUpComment": `${pickUpComment}`,
            "localizationCity": `${localizationCity}`,
            "peopleToHelp": `${peopleToHelp}`,
            "typeOfDonation": `${typeOfDonation}`,
            "numberOfBags": `${numberOfBags}`
        }
        const formReset = document.querySelector('#contactFormReset')
        console.log(formReset)

        fetch(`  http://localhost:3000/database/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(donationInfo)
        })
            .then(response => console.log(response))
            .then(history.push("/GiveClothes/GiveClothesForm/GiveClothesFormThanks"))
            .then(
                localStorage.removeItem("userStreet"),
                localStorage.removeItem("userCity"),
                localStorage.removeItem("userPostalCode"),
                localStorage.removeItem("userPhoneNumber"),
                localStorage.removeItem("pickUpDate"),
                localStorage.removeItem("pickUpHour"),
                localStorage.removeItem("pickUpComment"),
                localStorage.removeItem("localizationCity"),
                localStorage.removeItem("peopleToHelp"),
                localStorage.removeItem("typeOfDonation"),
                localStorage.removeItem("numberOfBags"),
            )
    }
    return (
        <>
            <section className="giveClothesFormConfirm">
                <div className="formConfirmContainer">
                    <h2>Podsumowanie Twojej darowizny:</h2>
                    <h3>Oddajesz:</h3>
                    <div className="confirmThingsContainer">
                        <img src={image} />
                        <p>{numberOfBags} worki, rzeczy: {typeOfDonation}, przekazujesz: {peopleToHelp}</p>
                    </div>
                    <div className="confirmLocalizationContainer">
                        <img src={image2} />
                        <p>dla lokalizacji: {localizationCity}</p>
                    </div>
                    <div className="confirmCourierInformation">
                        <div className="confirmAdressInformation">
                            <h3>Adres odbioru:</h3>
                            <p>Ulica: {userStreet}</p>
                            <p>Miasto: {userCity}</p>
                            <p>Kod pocztowy: {userPostalCode}</p>
                            <p>Numer telefonu: {userPhoneNumber}</p>
                        </div>
                        <div className="confirmPickUpInformation">
                            <h3>Termin odbioru:</h3>
                            <p>Data: {pickUpDate}</p>
                            <p>Godzina: {pickUpHour}</p>
                            <p>Uwagi dla kuriera: {pickUpComment}</p>
                        </div>
                    </div>
                    <button onClick={toStep4}>Wstecz</button>
                    <button onClick={confirmSend}>Potwierdź i wyślij</button>
                </div>
            </section>

        </>
    );
}

export default GiveClothesFormConfirm;