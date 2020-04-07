import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const GiveClothesFormThanks = () => {
    const history = useHistory();
    useEffect(() => {
        const homePageTimeout = setTimeout(() => {
            history.push("/") // poprawić aby wracało na samą górę


        }, 4000)
        return () => {
            clearTimeout(homePageTimeout);
        }
    }, [])
    return (
        <>
            <section className="thanksContainer">
                <p>Thanks</p>
            </section>
        </>
    );
}

export default GiveClothesFormThanks;