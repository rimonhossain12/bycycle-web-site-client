import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Testimonials from '../../Testimonial/Testimonial/Testimonials';
// import Testimonial from '../../Testimonial/Testimonial';
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
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;