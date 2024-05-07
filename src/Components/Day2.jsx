import React, { useState, useRef } from 'react';
import { gsap, Power3 } from 'gsap';

import { useGSAP } from '@gsap/react';

const Day2 = () => {

    const [isExpand, setIsExpand] = useState(false);

    const parentDiv = useRef(null);
    const redCircle = useRef(null);
    const yellowCircle = useRef(null);
    const greenCircle = useRef(null);

    const handleExpand = () => {
        gsap.to(yellowCircle.current, .8, { width: '6rem', height: '6rem', ease: Power3.easeInOut });
        setIsExpand(true);
    }

    const handleShrink = () => {
        gsap.to(yellowCircle.current, .8, { width: '2.5rem', height: '2.5rem', ease: Power3.easeInOut });
        setIsExpand(false);
    }

    useGSAP(() => {
        gsap.to(parentDiv.current, { css: { display: "flex", flexDirection: 'column' } });
        gsap.from(redCircle.current, { duration: 0.8, opacity: 0, x: 20, ease: Power3.easeInOut });
        gsap.from(yellowCircle.current, { duration: 0.8, opacity: 0, x: 20, ease: Power3.easeInOut, delay: 0.2 });
        gsap.from(greenCircle.current, { duration: 0.8, opacity: 0, x: 30, ease: Power3.easeInOut, delay: 0.4 });
        // gsap.staggerFrom([redCircle, yellowCircle, greenCircle], { duration: 0.8, opacity: 0, x: 20, ease: Power3.easeInOut });

    });

    return (
        <div className='w-full hidden' ref={parentDiv}>
            <div ref={redCircle} className="mx-auto my-5 h-10 w-10 rounded-full bg-red-500 opacity-100" />
            <div ref={yellowCircle} onClick={isExpand ? handleShrink : handleExpand} className="mx-auto my-5 h-10 w-10 rounded-full bg-yellow-500 opacity-100" />
            <div ref={greenCircle} className="mx-auto my-5 h-10 w-10 rounded-full bg-green-500 opacity-100" />
        </div>
    );
}

export default Day2;
