import React from "react";
import image from "../../assets/Decoration.svg";
import img1 from '../../assets/Icon-1.svg';
import img2 from '../../assets/Icon-2.svg';
import img3 from '../../assets/Icon-3.svg';
import img4 from '../../assets/Icon-4.svg';
import { useHistory } from "react-router-dom";

const HomeFourSteps = () => {

    const history = useHistory();
    const toGiveClothes = () => {

        if (localStorage.getItem("savedName") === null) {

            history.push("/LoginPage")
        } else {
            history.push("/GiveClothes")
        }
    }

    return (
        <section className="fourStepsContainer" id="idFourSteps">
            <div className="fourStepsInfo">
                <p>Wystarczą 4 proste kroki</p>
                <img src={image} alt="decorationImage" />
            </div>
            <div className="stepsCountainer">
                <div className="singleStepContainer">
                    <img className="fourStepsImage" src={img1} alt="icon1" />
                    <p>Wybierz rzeczy</p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="singleStepContainer">
                    <img className="fourStepsImage" src={img2} alt="icon2" />
                    <p>Spakuj je</p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="singleStepContainer">
                    <img className="fourStepsImage" src={img3} alt="icon3" />
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="singleStepContainer">
                    <img className="fourStepsImage" src={img4} alt="icon4" />
                    <p>Zamów kuriera</p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="giveButtonContainer">
                <button onClick={toGiveClothes}>Oddaj rzeczy</button>
            </div>

        </section>
    )
}

export default HomeFourSteps;