import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';


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