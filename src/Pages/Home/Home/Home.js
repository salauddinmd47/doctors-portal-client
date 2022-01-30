import React from 'react';
import Footer from '../../../Shared/Navbar/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Contact from '../Contact/Contact';
import DentalService from '../DentalService/DentalService';
import Doctors from '../Doctors/Doctors';
import HomeBanner from '../HomeBanner/HomeBanner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
             <Navbar/>
             <HomeBanner></HomeBanner>
             <Services/>
             <DentalService></DentalService> 
             <AppointmentBanner/>
             <Testimonial></Testimonial>
             <Doctors></Doctors>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;