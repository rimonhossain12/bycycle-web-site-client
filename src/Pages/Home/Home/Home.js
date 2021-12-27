import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Navigation/>
            <Product/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;