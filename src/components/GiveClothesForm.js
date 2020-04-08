import React from 'react'
import GiveClothesFormStep1 from './GiveClothesFormStep1';
import GiveClothesFormStep2 from './GiveClothesFormStep2';
import GiveClothesFormStep3 from './GiveClothesFormStep3';
import GiveClothesFormStep4 from './GiveClothesFormStep4';
import GiveClothesFormConfirm from './GiveClothesFormConfirm';
import GiveClothesFormThanks from './GiveClothesFormThanks';
import { Switch, Link, Route } from 'react-router-dom';


const GiveClothesForm = () => {
    return (
        <>
            <section className="giveClothesFormContainer">
                <Switch>
                    <Route exact path="/GiveClothes" component={GiveClothesFormStep1} />
                    <Route path="/GiveClothes/GiveClothesForm/GiveClothesFormStep2" component={GiveClothesFormStep2} />
                    <Route path="/GiveClothes/GiveClothesForm/GiveClothesFormStep3" component={GiveClothesFormStep3} />
                    <Route path="/GiveClothes/GiveClothesForm/GiveClothesFormStep4" component={GiveClothesFormStep4} />
                    <Route path="/GiveClothes/GiveClothesForm/GiveClothesFormConfirm" component={GiveClothesFormConfirm} />
                    <Route path="/GiveClothes/GiveClothesForm/GiveClothesFormThanks" component={GiveClothesFormThanks} />
                </Switch>
            </section>
        </>

    );
}

export default GiveClothesForm;
