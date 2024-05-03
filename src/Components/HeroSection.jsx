//Day 1 - tweenMax and Power3
import React, { useRef, useEffect } from 'react';

//gsap
import { gsap, Power3 } from 'gsap';

//images
import HeroBg from '../images/HeroBg.jpg'

const HeroSection = () => {

    const HeroH1 = useRef(null);
    const HeroP = useRef(null);

    useEffect(() => {
        console.log(HeroH1);
        gsap.to(HeroH1.current, 1, { opacity: 1, y: -20, ease: Power3.easeInOut });
        gsap.to(HeroP.current, 1.5, { opacity: 1, y: 10, ease: Power3.easeIn });
    }, [])

    return (
        <>
            <div
                className='bg-cover bg-center flex justify-center items-center text-center'
                style={{ backgroundImage: `url(${HeroBg})`, height: '70vh', backgroundRepeat: 'no-repeat' }}
            >
                <div className='text-white'>
                    <h1 className='my-auto text-4xl opacity-0' ref={HeroH1}>Hey, Myself Kailas</h1>
                    <p className='mx-auto opacity-0' ref={HeroP}>this is my gsap animation page</p>
                </div>
            </div>
        </>
    )
}

export default HeroSection