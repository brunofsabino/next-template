// 'use client';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { config } from '@/lib/config';
// import ScrollAnimation from './ScrollAnimation';
// import { motion, useReducedMotion } from 'framer-motion';
// import { Shirt, Heart, CheckCircle } from 'lucide-react';
// import { useState, useEffect } from 'react';

// // Mapear ícones dinamicamente
// const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
//     Shirt,
//     Heart,
//     CheckCircle,
// };

// export default function AboutUs() {
//     const shouldReduceMotion = useReducedMotion();
//     const [isTouched, setIsTouched] = useState<boolean[]>([false, false, false]);

//     // Reverter toque após 2 segundos
//     useEffect(() => {
//         const timers = isTouched.map((touched, index) =>
//             touched
//                 ? setTimeout(() => {
//                     setIsTouched((prev) => {
//                         const newState = [...prev];
//                         newState[index] = false;
//                         return newState;
//                     });
//                 }, 2000)
//                 : null
//         );
//         return () => timers.forEach((timer) => timer && clearTimeout(timer));
//     }, [isTouched]);

//     // Animações para título e texto
//     const titleAnimation = shouldReduceMotion
//         ? {}
//         : {
//             initial: { opacity: 0, y: 20 },
//             whileInView: { opacity: 1, y: 0 },
//             transition: { duration: 0.8 },
//             viewport: { once: true },
//         };

//     const textAnimation = shouldReduceMotion
//         ? {}
//         : {
//             initial: { opacity: 0, y: 20 },
//             whileInView: { opacity: 1, y: 0 },
//             transition: { duration: 0.8, delay: 0.2 },
//             viewport: { once: true },
//         };

//     // Animações para cards
//     const cardAnimation = (index: number) =>
//         shouldReduceMotion
//             ? {}
//             : {
//                 initial: { opacity: 0, y: 30 },
//                 whileInView: { opacity: 1, y: 0 },
//                 transition: { duration: 0.8, delay: index * 0.2 },
//                 viewport: { once: true },
//             };

//     // Lidar com toque em mobile
//     const handleTouch = (index: number) => {
//         setIsTouched((prev) => {
//             const newState = [...prev];
//             newState[index] = true;
//             return newState;
//         });
//     };

//     return (
//         <section
//             className="text-text py-10"
//             aria-label="Seção Sobre Nós"
//             role="region"
//         >
//             <div className="container mx-auto px-4 text-center">
//                 <ScrollAnimation variant="fade">
//                     {/* <motion.h1
//                         className="font-heading text-h1 text-accent drop-shadow-md text-center mb-4"
//                         {...titleAnimation}
//                     >
//                         {config.about.title}
//                     </motion.h1> */}
//                     <h1 className="font-heading text-3xl mb-4  drop-shadow-md  text-primary ">Sobre Nós</h1>
//                     <motion.p
//                         className="font-body text-body max-w-2xl mx-auto text-center mb-12"
//                         {...textAnimation}
//                     >
//                         {config.about.description}
//                     </motion.p>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {config.about.cards.map((card, index) => {
//                             const Icon = iconMap[card.icon] || Shirt; // Fallback para Shirt
//                             return (
//                                 <motion.div key={index} {...cardAnimation(index)}>
//                                     <Card
//                                         className={`group bg-background border-neutralLight shadow-sm min-h-48 transition-colors duration-300 ${isTouched[index] ? 'bg-primary' : 'bg-background'
//                                             } hover:bg-primary cursor-pointer`}
//                                         onClick={() => handleTouch(index)}
//                                     >
//                                         <CardHeader className="flex items-center justify-center gap-3">
//                                             <Icon
//                                                 className={`h-8 w-8 transition-colors duration-300 ${isTouched[index]
//                                                     ? 'text-primary-foreground'
//                                                     : 'text-primary group-hover:text-primary-foreground'
//                                                     }`}
//                                                 aria-hidden="true"
//                                             />
//                                             <CardTitle
//                                                 className={`font-heading text-h2 transition-colors duration-300 ${isTouched[index]
//                                                     ? 'text-primary-foreground'
//                                                     : 'text-primary group-hover:text-primary-foreground'
//                                                     }`}
//                                             >
//                                                 {card.title}
//                                             </CardTitle>
//                                         </CardHeader>
//                                         <CardContent>
//                                             <p
//                                                 className={`font-body text-body transition-colors duration-300 pt-1 ${isTouched[index]
//                                                     ? 'text-primary-foreground'
//                                                     : 'text-text group-hover:text-primary-foreground'
//                                                     }`}
//                                             >
//                                                 {card.description}
//                                             </p>
//                                         </CardContent>
//                                     </Card>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </ScrollAnimation>
//             </div>
//         </section>
//     );
// }
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { motion, useReducedMotion } from 'framer-motion';
import { Shirt, Heart, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mapear ícones dinamicamente
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Shirt,
    Heart,
    CheckCircle,
};

export default function AboutUs() {
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

    // Animações inspiradas em https://drantoniocarvalho.com/
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

    // Lidar com toque em mobile
    const handleTouch = (index: number) => {
        setIsTouched((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
        });
    };

    return (
        <section
            className="text-text py-12"
            aria-label="Seção Sobre Nós"
            role="region"
        >
            <div className="container mx-auto px-4 text-center">
                <ScrollAnimation variant="fade">
                    <h1 className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md  text-primary ">Sobre Nós</h1>
                    <motion.p
                        className="font-body text-body max-w-2xl mx-auto text-center mb-12"
                        {...textAnimation}
                    >
                        {config.about.description}
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {config.about.cards.map((card, index) => {
                            const Icon = iconMap[card.icon] || Shirt; // Fallback para Shirt
                            return (
                                <motion.div key={index} {...cardAnimation(index)}>
                                    <Card
                                        className={`group bg-background border-neutralLight shadow-md transition-all duration-300 ${isTouched[index] ? 'bg-primary' : 'bg-background'
                                            } hover:bg-primary cursor-pointer`}
                                        onClick={() => handleTouch(index)}
                                    >
                                        <CardHeader className="flex flex-col items-center">
                                            <div className='flex item h-16 w-16 mb-4 justify-center border rounded-full'>
                                                <Icon
                                                    className={`w-12 h-full p-2 transition-colors duration-300 ${isTouched[index]
                                                        ? 'text-primary-foreground'
                                                        : 'text-primary group-hover:text-primary-foreground'
                                                        }`}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <CardTitle
                                                className={`font-heading text-h2 text-center transition-colors duration-300 ${isTouched[index]
                                                    ? 'text-primary-foreground'
                                                    : 'text-text group-hover:text-primary-foreground'
                                                    }`}
                                            >
                                                {card.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p
                                                className={`font-body text-body text-center transition-colors duration-300 ${isTouched[index]
                                                    ? 'text-primary-foreground'
                                                    : 'text-neutral group-hover:text-primary-foreground'
                                                    }`}
                                            >
                                                {card.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}