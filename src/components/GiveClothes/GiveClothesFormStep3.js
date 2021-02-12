import React from 'react';
import { useHistory } from 'react-router-dom';
import image from '../../assets/myBackgroundTeddy1.jpg';

const GiveClothesFormStep3 = () => {
    const history = useHistory();

    const stepThreeValues = () => {
        const localizationOptions = document.querySelectorAll(".localizationOptions");

        localizationOptions.forEach((element) => {
            if (element.selected === true) {
                localStorage.setItem("localizationCity", element.value)
            }
        });
        const peopleCheckboxes = document.querySelectorAll(".peopleCheckboxes");
        let choosenPeople = [];
        peopleCheckboxes.forEach((element) => {
            if (element.checked === true) {
                choosenPeople.push(element.value)
            }

        });
        localStorage.setItem("peopleToHelp", choosenPeople);
    }

    const toStep2 = () => {
        history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep2")
    }
    const toStep4 = (event) => {
        event.preventDefault();
        if (localStorage.getItem("localizationCity") === null) {
            alert("musisz wybrać miasto");
            return;
        }
        if (localStorage.getItem("peopleToHelp") === []) {
            alert("musisz wybrać przynajmniej jedną grupę ludzi");
            return;
        }
        else {
            history.push("/GiveClothes/GiveClothesForm/GiveClothesFormStep4");
        }
    }
    return (
        <>
            <section className="giveClothesImportantStep3">
                <p>Ważne!</p>
                <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji poniżej. (Dodatkowo wyszukiwarka filtrująca po nazwie z bazy)</p>
            </section>
            <section className="giveClothesFormStep3">
                <p className="stepNumberPositionClass">Krok 3/4</p>
                <div className="formStep3Container">
                    <h2>Miasto do którego wysyłasz pomoc:</h2>
                    <form onChange={stepThreeValues} >
                        <select name="localizations">
                            <option value="0" className="localizationOptions" >-wybierz-</option>
                            <option value="Poznań" className="localizationOptions" >Poznań</option>
                            <option value="Warszawa" className="localizationOptions" >Warszawa</option>
                            <option value="Kraków" className="localizationOptions" >Kraków</option>
                            <option value="Wrocław" className="localizationOptions" >Wrocław</option>
                            <option value="Katowice" className="localizationOptions" >Katowice</option>
                        </select>
                        <h2>Komu chcesz pomóc?</h2>
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
                        <button onClick={toStep2}>Cofnij</button>
                        <button onClick={toStep4}>Przejdź dalej</button>
                    </form>
                </div>
                <div className="teddyContainer">
                    <img src={image} alt="teddyImage" />
                </div>
            </section>
        </>
    )
}
export default GiveClothesFormStep3;