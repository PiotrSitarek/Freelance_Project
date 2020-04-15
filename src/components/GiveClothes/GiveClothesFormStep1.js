import React from 'react';
import { useHistory } from 'react-router-dom';
import image from '../../assets/myBackgroundTeddy1.jpg';

const GiveClothesFormStep1 = () => {
    const history = useHistory();

    const toStep2 = (event) => {
        event.preventDefault();
        if (localStorage.getItem('typeOfDonation') != null) {
            history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep2")
        }
        else {
            alert("musisz wybrać co chcesz oddać")
        }
    }

    const stepOneValue = () => {

        const radioCheckboxesToCheck = document.querySelectorAll('.radioCheckboxes');

        radioCheckboxesToCheck.forEach((element) => {
            if (element.checked === true) {
                localStorage.setItem("typeOfDonation", element.value);
            }
        })
    }

    const storageClear = (event) => {
        event.preventDefault();
        localStorage.removeItem("userStreet");
        localStorage.removeItem("userCity");
        localStorage.removeItem("userPostalCode");
        localStorage.removeItem("userPhoneNumber");
        localStorage.removeItem("pickUpDate");
        localStorage.removeItem("pickUpHour");
        localStorage.removeItem("pickUpComment");
        localStorage.removeItem("localizationCity");
        localStorage.removeItem("peopleToHelp");
        localStorage.removeItem("typeOfDonation");
        localStorage.removeItem("numberOfBags");
    }
    return (
        <>
            <section className="giveClothesImportantStep1">
                <p>Ważne!</p>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>
            </section>
            <section className="giveClothesFormStep1" >
                <p className="stepNumberPositionClass">Krok 1/4</p>
                <div className="formStep1Container">
                    <h2>Zaznacz co chcesz oddać:</h2>
                    <form onChange={stepOneValue}>
                        <label>
                            <input type="radio" name="togive" value="ubrania do ponownego noszenia" className="radioCheckboxes" />Ubrania do ponownego noszenia
                    </label>
                        <label>
                            <input type="radio" name="togive" value="ubrania do wyrzucenia" className="radioCheckboxes" /> Ubrania do wyrzucenia
                    </label>
                        <label>
                            <input type="radio" name="togive" value="zabawki" className="radioCheckboxes" /> Zabawki
                    </label>
                        <label>
                            <input type="radio" name="togive" value="książki" className="radioCheckboxes" /> Książki
                    </label>
                        <label>
                            <input type="radio" name="togive" value="inne" className="radioCheckboxes" /> Inne
                    </label>
                        <button onClick={toStep2}>Przejdz dalej </button>
                    </form>
                    <button onClick={storageClear}>StorageClear</button>
                </div>
                <div className="teddyContainer">
                    <img src={image} alt="teddyImage" />
                </div>
            </section>
        </>
    )
}
export default GiveClothesFormStep1;