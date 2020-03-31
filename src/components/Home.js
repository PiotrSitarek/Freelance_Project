import React from "react";
import HomeHeader from "./HomeHeader";
import HomeInfoColumns from './HomeInfoColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';

const Home = () => {
    return (
        <div className="full_layout">
            <HomeHeader />
            <HomeInfoColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <p>Tutaj wszystkie 8 komponentów</p>
        </div>

    );
}

export default Home;
