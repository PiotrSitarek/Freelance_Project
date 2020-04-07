import React from 'react';
import { useHistory } from 'react-router-dom';


const GiveClothesFormStep2 = () => {
    const history = useHistory();
    const toStep1 = () => {
        history.push("/GiveClothes/")
    }
    const toStep3 = () => {
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep3")
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

    const storageClear = (event) => {
        event.preventDefault();
        localStorage.removeItem("numberOfBags")
    }

    return (
        <>
            <section className="giveClothesFormStep2" >
                <p>Krok 2/4 </p>
                <h2>Podaj liczbę worków w które spakowałeś/spakowałaś rzeczy</h2>

                <form onChange={stepTwoValue}>
                    <select name="">
                        <option value="-1" className="selectOptions" >-wybierz-</option>
                        <option value="1" className="selectOptions" >1</option>
                        <option value="2" className="selectOptions" >2</option>
                        <option value="3" className="selectOptions" >3</option>
                        <option value="4" className="selectOptions" >4</option>
                        <option value="5" className="selectOptions" >5</option>
                    </select>
                </form>

                <button onClick={storageClear}>StorageClear</button>
                <button onClick={toStep1}>To step 1</button>
                <button onClick={toStep3}>To step 3</button>
            </section>
        </>
    );
}

export default GiveClothesFormStep2;