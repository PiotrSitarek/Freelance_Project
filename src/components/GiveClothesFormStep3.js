import React from 'react';
import { useHistory } from 'react-router-dom';

const GiveClothesFormStep3 = () => {
    const history = useHistory();
    // localizationOptions

    const stepThreeValues = () => {
        const localizationOptions = document.querySelectorAll(".localizationOptions")

        localizationOptions.forEach((element) => {
            if (element.selected === true) {
                localStorage.setItem("localizationCity", element.value);
            }
        })
        const peopleCheckboxes = document.querySelectorAll(".peopleCheckboxes")
        let choosenPeople = [];
        peopleCheckboxes.forEach((element) => {
            if (element.checked == true) {
                choosenPeople.push(element.value)
            }

        })
        localStorage.setItem("peopleToHelp", choosenPeople);
    }
    const localizationCity = localStorage.getItem("localizationCity"); // pięknie musi tak zostać
    console.log(localizationCity);
    const peopleToHelp = localStorage.getItem("peopleToHelp"); // pięknie musi tak zostać
    console.log(peopleToHelp);

    const storageClear = (event) => {
        event.preventDefault();
        localStorage.removeItem("numberOfBags")
        localStorage.removeItem("localizationCity")
        localStorage.removeItem("peopleToHelp")
    }
    // debugger;

    const toStep2 = () => {
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep2")
    }
    const toStep4 = (event) => {
        event.preventDefault();
        if (localStorage.getItem("localizationCity") === null) {
            alert("musisz wybrać miasto");
            // return;
        }
        if (localStorage.getItem("peopleToHelp") == []) {
            alert("musisz wybrać przynajmniej jedną grupę ludzi");
            // return;
        }
        else {
            history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep4");
        }


    }

    return (
        <>
            <section className="giveClothesFormStep3">
                <p>Krok 3/4</p>
                <form onChange={stepThreeValues} >
                    <select name="localizations">
                        <option value="0" className="localizationOptions" >-wybierz-</option>
                        <option value="Poznań" className="localizationOptions" >Poznań</option>
                        <option value="Warszawa" className="localizationOptions" >Warszawa</option>
                        <option value="Kraków" className="localizationOptions" >Kraków</option>
                        <option value="Wrocław" className="localizationOptions" >Wrocław</option>
                        <option value="Katowice" className="localizationOptions" >Katowice</option>
                    </select>
                    <label>
                        <input type="checkbox" name="peopleToHelp" value="dzieciom" className="peopleCheckboxes" />dzieciom
                    </label>
                    <label>
                        <input type="checkbox" name="peopleToHelp" value="samotnym matkom" className="peopleCheckboxes" /> samotnym matkom
                    </label>
                    <label>
                        <input type="checkbox" name="peopleToHelp" value="bezdomnym" className="peopleCheckboxes" /> bezdomnym
                    </label>
                    <label>
                        <input type="checkbox" name="peopleToHelp" value="niepełnosprawnym" className="peopleCheckboxes" /> niepełnosprawnym
                    </label>
                    <label>
                        <input type="checkbox" name="peopleToHelp" value="osobom starszym" className="peopleCheckboxes" /> osobom starszym
                    </label>
                    <button onClick={toStep2}>To step 2</button>
                    <button onClick={toStep4}>To step 4</button>
                    <button onClick={storageClear}> clearStorage</button>
                </form>




            </section>
        </>
    );
}

export default GiveClothesFormStep3;