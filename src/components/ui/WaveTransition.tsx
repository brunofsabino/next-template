'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function WaveTransition() {
    useEffect(() => {
        gsap.to('#wave-path', {
            attr: { d: 'M0,160 C320,80 640,240 960,160 L960,0 L0,0 Z' },
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, []);

    return (
        <svg className="w-full h-32" viewBox="0 0 960 200" preserveAspectRatio="none">
            <path
                id="wave-path"
                fill="#2563EB"
                d="M0,160 C320,240 640,80 960,160 L960,0 L0,0 Z"
            />
        </svg>
    );
}