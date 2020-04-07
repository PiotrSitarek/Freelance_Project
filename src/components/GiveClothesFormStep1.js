import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GiveClothesFormStep2 from './GiveClothesFormStep2';



{/* <Link className="menuHoverElement" to="idFourSteps" smooth={true} duration={1000}>O co chodzi?</Link> */ }
const GiveClothesFormStep1 = () => {

    const history = useHistory();

    const toStep2 = () => {
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep2")
    }

    const stepOneValue = () => {

        const radioCheckboxesToCheck = document.querySelectorAll('.radioCheckboxes')

        radioCheckboxesToCheck.forEach((element) => {

            if (element.checked === true) {
                localStorage.setItem("typeOfDonation", element.value);
            }
        })
    }
    const typeOfDonation = localStorage.getItem("typeOfDonation"); // pięknie musi tak zostać
    console.log(typeOfDonation);

    // localStorage.removeItem('typeofDontaion',); na koniec przy wysłaniu fetchem wszystie dane zeruje.

    return (
        <>
            <section className="giveClothesFormStep1" >
                <p>Krok 1/4</p>
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
                </form>
                <button onClick={toStep2}>To step 2 </button>
            </section>
        </>
    );
}

export default GiveClothesFormStep1;