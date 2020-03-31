import React from 'react'
import image from '../assets/People-3.jpg'
import decoration from "../assets/Decoration.svg";
import signature from '../assets/Signature.svg';

const HomeAboutUs = () => {
    return (
        <>
            <section className="aboutUsContainer">
                <div className="aboutUS">
                    <p>O nas</p>
                    <img src={decoration} />
                    <p>Nulla tristique, lacus id varius luctus, metus urna posuere velit, et tristique purus magna vel dolor. Praesent sit amet ullamcorper lacus, et rhoncus quam.</p>
                    <img src={signature} />

                </div>
                <div className="peopleImg">
                    <img src={image} />
                </div>




            </section>
        </>
    );
}

export default HomeAboutUs;