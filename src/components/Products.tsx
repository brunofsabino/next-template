'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { hexToRgba } from '@/lib/utils';

export default function Products() {
    const shouldReduceMotion = useReducedMotion();
    const [isTouched, setIsTouched] = useState<boolean[]>([false, false, false]);

    // Reverter toque após 2 segundos
    useEffect(() => {
        const timers = isTouched.map((touched, index) =>
            touched
                ? setTimeout(() => {
                    setIsTouched((prev) => {
                        const newState = [...prev];
                        newState[index] = false;
                        return newState;
                    });
                }, 2000)
                : null
        );
        return () => timers.forEach((timer) => timer && clearTimeout(timer));
    }, [isTouched]);

    // Animações
    const titleAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true },
        };

    const textAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
            viewport: { once: true },
        };

    const cardAnimation = (index: number) =>
        shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.2 },
                viewport: { once: true },
            };

    const handleTouch = (index: number) => {
        setIsTouched((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
        });
    };

    const whatsAppLink = `https://wa.me/${config.telWhats
        }?text=Quero%20saber%20mais%20sobre%20os%20produtos!`;

    return (
        <section
            id="produtos"
            className="text-text py-12"
            aria-label="Seção Produtos"
            role="region"
        >
            <div className="container mx-auto px-4 text-center">
                <ScrollAnimation variant="fade">
                    <motion.h1 // Alterado de <h1> para <motion.h1>
                        className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary"
                        {...titleAnimation}
                    >
                        {config.products.title}
                    </motion.h1>
                    {/* <h1 className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary">
                        {config.products.title}
                    </h1> */}
                    <motion.p
                        className="font-body text-body max-w-2xl mx-auto text-center mb-12"
                        {...textAnimation}
                    >
                        {config.products.description}
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {config.products.items.map((product, index) => (
                            <motion.div key={index} {...cardAnimation(index)}>
                                <Card
                                    className={`group bg-background border-neutralLight shadow-md transition-all duration-300 ${isTouched[index] ? 'bg-primary' : 'bg-background'
                                        } hover:bg-primary cursor-pointer`}
                                    onClick={() => handleTouch(index)}
                                >
                                    <CardHeader>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <CardTitle
                                            className={`font-heading text-h2 text-center mt-4 transition-colors duration-300 ${isTouched[index]
                                                ? 'text-primary-foreground'
                                                : 'text-text group-hover:text-primary-foreground'
                                                }`}
                                        >
                                            {product.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p
                                            className={`font-body text-body mb-4 transition-colors duration-300 ${isTouched[index]
                                                ? 'text-primary-foreground'
                                                : 'text-neutral group-hover:text-primary-foreground'
                                                }`}
                                        >
                                            {product.description}
                                        </p>
                                        <Button
                                            asChild
                                            className={`${isTouched[index]
                                                ? 'bg-primary-foreground text-primary'
                                                : 'bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary'
                                                } hover:bg-accent hover:text-accent-foreground transition-colors duration-300`}
                                        >
                                            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                                                Saiba Mais
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}