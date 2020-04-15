import React from 'react';
import fbimage from '../../assets/Facebook.svg';
import instaimage from '../../assets/Instagram.svg';

const HomeFooter = () => {
    return (
        <section className="footerContainer">
            <p>Copyright by CodersLab</p>
            <img src={fbimage} alt="fbIcon" />
            <img src={instaimage} alt="instaIcon" />
        </section>
    );
}

export default HomeFooter;