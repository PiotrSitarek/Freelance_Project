import React from "react";
import HomeHeader from "./HomeHeader";
import HomeInfoColumns from './HomeInfoColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter'

const Home = () => {
    return (
        <div className="full_layout">
            <HomeHeader />
            <HomeInfoColumns />
            <HomeFourSteps />
            <HomeAboutUs />

            {/* <Paginacja/> */}
            <HomeContact />
            <HomeFooter />
        </div>

    );
}

export default Home;
