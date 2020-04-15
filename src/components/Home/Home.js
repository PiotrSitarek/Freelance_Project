import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeInfoColumns from './HomeInfoColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeWeHelp from './HomeWeHelp';

const Home = () => {
    return (
        <div className="full_layout">
            <HomeHeader />
            <HomeInfoColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWeHelp />
            <HomeContact />
            <HomeFooter />
        </div>
    )
}
export default Home;
