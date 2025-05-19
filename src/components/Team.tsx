// 'use client';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { config } from '@/lib/config';
// import ScrollAnimation from './ScrollAnimation';
// import { motion, useReducedMotion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// export default function Team() {
//     const shouldReduceMotion = useReducedMotion();
//     const [isTouched, setIsTouched] = useState<boolean[]>([false, false, false, false]);

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

//     // Animações
//     const titleAnimation = shouldReduceMotion
//         ? {}
//         : {
//             initial: { opacity: 0, y: 50 },
//             whileInView: { opacity: 1, y: 0 },
//             transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
//             viewport: { once: true },
//         };

//     const textAnimation = shouldReduceMotion
//         ? {}
//         : {
//             initial: { opacity: 0, y: 50 },
//             whileInView: { opacity: 1, y: 0 },
//             transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
//             viewport: { once: true },
//         };

//     const cardAnimation = (index: number) =>
//         shouldReduceMotion
//             ? {}
//             : {
//                 initial: { opacity: 0, y: 50 },
//                 whileInView: { opacity: 1, y: 0 },
//                 transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.2 },
//                 viewport: { once: true },
//             };

//     const handleTouch = (index: number) => {
//         setIsTouched((prev) => {
//             const newState = [...prev];
//             newState[index] = true;
//             return newState;
//         });
//     };

//     return (
//         <section
//             id="equipe"
//             className="bg-background text-text py-20"
//             aria-label="Seção Equipe"
//             role="region"
//         >
//             <div className="container mx-auto px-4">
//                 <ScrollAnimation variant="fade">
//                     <motion.h1
//                         className="font-heading text-h1 text-accent drop-shadow-md text-center mb-4"
//                         {...titleAnimation}
//                     >
//                         {config.team.title}
//                     </motion.h1>
//                     <motion.p
//                         className="font-body text-body max-w-2xl mx-auto text-center mb-12"
//                         {...textAnimation}
//                     >
//                         {config.team.description}
//                     </motion.p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {config.team.members.map((member, index) => (
//                             <motion.div key={index} {...cardAnimation(index)}>
//                                 <Card
//                                     className={`group bg-background border-neutralLight shadow-md transition-all duration-300 ${isTouched[index] ? 'bg-primary' : 'bg-background'
//                                         } hover:bg-primary cursor-pointer`}
//                                     onClick={() => handleTouch(index)}
//                                 >
//                                     <CardHeader className="flex flex-col items-center">
//                                         <img
//                                             src={member.image}
//                                             alt={member.name}
//                                             className="w-24 h-24 rounded-full object-cover mb-4"
//                                         />
//                                         <CardTitle
//                                             className={`font-heading text-h2 text-center transition-colors duration-300 ${isTouched[index]
//                                                 ? 'text-primary-foreground'
//                                                 : 'text-text group-hover:text-primary-foreground'
//                                                 }`}
//                                         >
//                                             {member.name}
//                                         </CardTitle>
//                                         <p
//                                             className={`font-body text-small text-center transition-colors duration-300 ${isTouched[index]
//                                                 ? 'text-primary-foreground'
//                                                 : 'text-neutral group-hover:text-primary-foreground'
//                                                 }`}
//                                         >
//                                             {member.role}
//                                         </p>
//                                     </CardHeader>
//                                     <CardContent>
//                                         <p
//                                             className={`font-body text-body text-center transition-colors duration-300 ${isTouched[index]
//                                                 ? 'text-primary-foreground'
//                                                 : 'text-neutral group-hover:text-primary-foreground'
//                                                 }`}
//                                         >
//                                             {member.description}
//                                         </p>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         ))}
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
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Team() {
    const shouldReduceMotion = useReducedMotion();
    const [isTouched, setIsTouched] = useState<boolean[]>([false, false, false, false]);

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

    return (
        <section
            id="equipe"
            className=" text-text py-10"
            aria-label="Seção Equipe"
            role="region"
        >
            <div className="container mx-auto px-4 text-center">
                <ScrollAnimation variant="fade">
                    <motion.h1 // Alterado de <h1> para <motion.h1>
                        className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary"
                        {...titleAnimation}
                    >
                        {config.team.title}
                    </motion.h1>
                    {/* <h1
                        className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary"
                        {...titleAnimation}
                    >
                        {config.team.title}
                    </h1> */}
                    <motion.p
                        className="font-body text-body max-w-2xl mx-auto text-center mb-12"
                        {...textAnimation}
                    >
                        {config.team.description}
                    </motion.p>
                    <div className="block sm:hidden">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="mySwiper"
                            aria-label="Carrossel da equipe"
                        >
                            {config.team.members.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div {...cardAnimation(index)}>
                                        <Card
                                            className={`group bg-background border-neutralLight shadow-md transition-all duration-300 ${isTouched[index] ? 'bg-primary' : 'bg-background'
                                                } hover:bg-primary cursor-pointer mx-4`}
                                            onClick={() => handleTouch(index)}
                                        >
                                            <CardHeader className="flex flex-col items-center">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-30 h-30 rounded-full object-cover mb-4"
                                                />
                                                <CardTitle
                                                    className={`font-heading text-h2 text-center transition-colors duration-300 ${isTouched[index]
                                                        ? 'text-primary-foreground'
                                                        : 'text-text group-hover:text-primary-foreground'
                                                        }`}
                                                >
                                                    {member.name}
                                                </CardTitle>
                                                <p
                                                    className={`font-body text-small text-center transition-colors duration-300 ${isTouched[index]
                                                        ? 'text-primary-foreground'
                                                        : 'text-neutral group-hover:text-primary-foreground'
                                                        }`}
                                                >
                                                    {member.role}
                                                </p>
                                            </CardHeader>
                                            <CardContent>
                                                <p
                                                    className={`font-body text-body text-center transition-colors duration-300 ${isTouched[index]
                                                        ? 'text-primary-foreground'
                                                        : 'text-neutral group-hover:text-primary-foreground'
                                                        }`}
                                                >
                                                    {member.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {config.team.members.map((member, index) => (
                            <motion.div key={index} {...cardAnimation(index)}>
                                <Card
                                    className={`group bg-background border-neutralLight shadow-md transition-all duration-300 ${isTouched[index] ? 'bg-primary' : 'bg-background'
                                        } hover:bg-primary cursor-pointer`}
                                    onClick={() => handleTouch(index)}
                                >
                                    <CardHeader className="flex flex-col items-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full object-cover mb-4"
                                        />
                                        <CardTitle
                                            className={`font-heading text-h2 text-center transition-colors duration-300 ${isTouched[index]
                                                ? 'text-primary-foreground'
                                                : 'text-text group-hover:text-primary-foreground'
                                                }`}
                                        >
                                            {member.name}
                                        </CardTitle>
                                        <p
                                            className={`font-body text-small text-center transition-colors duration-300 ${isTouched[index]
                                                ? 'text-primary-foreground'
                                                : 'text-neutral group-hover:text-primary-foreground'
                                                }`}
                                        >
                                            {member.role}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p
                                            className={`font-body text-body text-center transition-colors duration-300 ${isTouched[index]
                                                ? 'text-primary-foreground'
                                                : 'text-neutral group-hover:text-primary-foreground'
                                                }`}
                                        >
                                            {member.description}
                                        </p>
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