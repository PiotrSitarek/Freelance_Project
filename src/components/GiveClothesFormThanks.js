import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import decoration from '../assets/Decoration.svg'
import { Link } from 'react-scroll';




const GiveClothesFormThanks = () => {
    const history = useHistory();

    useEffect(() => {
        const homePageTimeout = setTimeout(() => {
            history.push("/") // poprawić aby wracało na samą górę
        }, 3000)
        return () => {
            clearTimeout(homePageTimeout);
        }
    }, [])



    return (
        <>
            <section className="thanksContainer">
                <h1>Dziękujemy za pomoc!</h1>
                <img src={decoration} />
            </section>
        </>
    );
}

export default GiveClothesFormThanks;