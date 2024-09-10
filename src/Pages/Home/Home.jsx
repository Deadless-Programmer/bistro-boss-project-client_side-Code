import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularItems from './PopularItems/PopularItems';
import Featured from './Featured/Featured';
import Testmonial from '../Testmonial/Testmonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
         <title>
            Bistro Boss | Home
         </title>
       </Helmet>
            <Banner></Banner>
            <Category/>
            <PopularItems/>
            <Featured/>
            <Testmonial/>
        </div>
    );
};

export default Home;