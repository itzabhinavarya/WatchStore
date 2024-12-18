import React from 'react'
import HeroSection from './herosection/HeroSection'
import Brands from './secondsection/Brands'
import ProductSection from './thirdsection/ProductSection'
import FourthSection from './fourthsection/FourthSection'
import FifthSection from './fivthsection/FivthSection'
import SixthSection from './sixthsection/SixthSection'
import SeventhSection from './seventhsection/SeventhSection'

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <Brands />
            <ProductSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
        </>
    )
}

export default LandingPage