import React, { FC } from 'react'
import Header from 'sections/Header';
import OurEvent from 'sections/OurEvent';
import About from 'sections/About';
import Sesepuh from 'sections/Sesepuh';
import FAQ from 'sections/FAQ';
import Footer from 'sections/Footer';
import NavBar from 'components/NavBar';


interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({ }) => {
    return (
        <div className='HomePage Page'>
            <NavBar />
            <Header />
            <OurEvent />
            <About />
            <Sesepuh />
            <FAQ />
            <Footer />
        </div>
    )
}

export default HomePage;