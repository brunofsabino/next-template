'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    variant?: 'fade' | 'slideUp';
}

export default function ScrollAnimation({ children, variant = 'fade' }: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const variants = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
        },
        slideUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[variant]}
        >
            {children}
        </motion.div>
    );
}