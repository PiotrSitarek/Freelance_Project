import React from 'react';
import { useHistory } from 'react-router-dom';


const GiveClothesFormStep2 = () => {
    const history = useHistory();
    const toStep1 = () => {
        history.push("/GiveClothes/")
    }

    const toStep3 = (event) => {
        event.preventDefault();

        if (localStorage.getItem('numberOfBags') != null) {
            history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep3")
        }
        else {
            alert("musisz wybrać ilość worków")
        }
    }








    const stepTwoValue = () => {

        const selectedOptions = document.querySelectorAll('.selectOptions')

        selectedOptions.forEach((element) => {

            if (element.selected === true) {
                localStorage.setItem("numberOfBags", element.value);
            }

        })
    }
    const numberOfBags = localStorage.getItem("numberOfBags"); // pięknie musi tak zostać
    console.log(numberOfBags);



    return (
        <>
            <section className="giveClothesImportantStep2">
                <p>Ważne!</p>
                <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak spakować rzeczy znajdziesz TUTAJ (???)</p>
            </section>
            <section className="giveClothesFormStep2" >
                <p className="stepNumberPositionClass">Krok 2/4 </p>
                <div className="formStep2Container">
                    <h2>Podaj liczbę worków w które spakowałeś/spakowałaś rzeczy</h2>
                    <form onChange={stepTwoValue}>
                        <select >
                            <option value="-1" className="selectOptions" >-wybierz-</option>
                            <option value="1" className="selectOptions" >1</option>
                            <option value="2" className="selectOptions" >2</option>
                            <option value="3" className="selectOptions" >3</option>
                            <option value="4" className="selectOptions" >4</option>
                            <option value="5" className="selectOptions" >5</option>
                        </select>
                    </form>
                    <button onClick={toStep1}>Cofnij</button>
                    <button onClick={toStep3}>Przejdz dalej</button>

                </div>

            </section>

        </>
    );
}

export default GiveClothesFormStep2;