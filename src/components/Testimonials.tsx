// 'use client';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { config } from '@/lib/config';
// import ScrollAnimation from './ScrollAnimation';
// import { motion, useReducedMotion } from 'framer-motion';
// import { Star } from 'lucide-react';

// export default function Testimonials() {
//     const shouldReduceMotion = useReducedMotion();

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

//     return (
//         <section
//             id="depoimentos"
//             className="bg-background text-text py-20"
//             aria-label="Seção Depoimentos"
//             role="region"
//         >
//             <div className="container mx-auto px-4">
//                 <ScrollAnimation variant="fade">
//                     <motion.h1
//                         className="font-heading text-h1 text-accent drop-shadow-md text-center mb-4"
//                         {...titleAnimation}
//                     >
//                         {config.testimonials.title}
//                     </motion.h1>
//                     <motion.p
//                         className="font-body text-body max-w-2xl mx-auto text-center mb-12"
//                         {...textAnimation}
//                     >
//                         {config.testimonials.description}
//                     </motion.p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {config.testimonials.items.map((testimonial, index) => (
//                             <motion.div key={index} {...cardAnimation(index)}>
//                                 <Card className="bg-background border-neutralLight shadow-md">
//                                     <CardHeader className="flex flex-col items-center">
//                                         <img
//                                             src={testimonial.image}
//                                             alt={testimonial.name}
//                                             className="w-20 h-20 rounded-full object-cover mb-4"
//                                         />
//                                         <h3 className="font-heading text-h2 text-text">{testimonial.name}</h3>
//                                     </CardHeader>
//                                     <CardContent className="text-center">
//                                         <div className="flex justify-center mb-2">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <Star
//                                                     key={i}
//                                                     className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary' : 'text-neutralLight'
//                                                         }`}
//                                                     fill={i < testimonial.rating ? config.colors.primary : 'none'}
//                                                     aria-hidden="true"
//                                                 />
//                                             ))}
//                                         </div>
//                                         <p className="font-body text-body text-neutral italic">
//                                             "{testimonial.text}"
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
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Avatar, AvatarFallback } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

export default function Testimonials() {
    const shouldReduceMotion = useReducedMotion();

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

    return (
        // <section
        //     id="depoimentos"
        //     className="text-center text-text py-20"
        //     aria-label="Seção Depoimentos"
        //     role="region"
        // >
        //     <div className="container mx-auto px-4">
        //         <ScrollAnimation variant="fade">
        //             {/* <motion.h1
        //                 className="font-heading text-h1 text-accent drop-shadow-md text-center mb-4"
        //                 {...titleAnimation}
        //             >
        //                 {config.testimonials.title}
        //             </motion.h1> */}
        //             <h1 className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary">
        //                 {config.testimonials.title}
        //             </h1>
        //             <motion.p
        //                 className="font-body text-body max-w-2xl mx-auto text-center mb-4"
        //                 {...textAnimation}
        //             >
        //                 {config.testimonials.description}
        //             </motion.p>
        //             <motion.div
        //                 className="flex justify-center mb-8"
        //                 {...textAnimation}
        //             >
        //                 <div className="flex justify-center mb-2">
        //                     {[...Array(5)].map((_, i) => (
        //                         <Star
        //                             key={i}
        //                             className={`h-5 w-5 `}
        //                             fill={"#333"}
        //                             aria-hidden="true"
        //                         />
        //                     ))}
        //                 </div>
        //                 <img
        //                     //src={config.testimonials.googleReviewsImage}
        //                     src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
        //                     alt="Google Reviews"
        //                     className="h-10 w-auto"
        //                 />
        //             </motion.div>
        //             <div className="block sm:hidden">
        //                 <Swiper
        //                     modules={[Navigation, Pagination]}
        //                     spaceBetween={16}
        //                     slidesPerView={1}
        //                     navigation
        //                     pagination={{ clickable: true }}
        //                     className="mySwiper"
        //                     aria-label="Carrossel de depoimentos"
        //                 >
        //                     {config.testimonials.items.map((testimonial, index) => (
        //                         <SwiperSlide key={index}>
        //                             <motion.div {...cardAnimation(index)}>
        //                                 <Card className="bg-background border-neutralLight shadow-md mx-4">
        //                                     <CardHeader className="flex flex-col items-center">
        //                                         <img
        //                                             src={testimonial.image}
        //                                             //src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
        //                                             alt={testimonial.name}
        //                                             className="w-20 h-20 rounded-full object-cover mb-4"
        //                                         />
        //                                         <h3 className="font-heading text-h2 text-text">{testimonial.name}</h3>
        //                                     </CardHeader>
        //                                     <CardContent className="text-center">
        //                                         <div className="flex justify-center mb-2">
        //                                             {[...Array(5)].map((_, i) => (
        //                                                 <Star
        //                                                     key={i}
        //                                                     className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary' : 'text-neutralLight'
        //                                                         }`}
        //                                                     fill={i < testimonial.rating ? config.colors.primary : 'none'}
        //                                                     aria-hidden="true"
        //                                                 />
        //                                             ))}
        //                                         </div>
        //                                         <p className="font-body text-body text-neutral italic">
        //                                             "{testimonial.text}"
        //                                         </p>
        //                                     </CardContent>
        //                                 </Card>
        //                             </motion.div>
        //                         </SwiperSlide>
        //                     ))}
        //                 </Swiper>
        //             </div>
        //             <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //                 {config.testimonials.items.map((testimonial, index) => (
        //                     <motion.div key={index} {...cardAnimation(index)}>
        //                         <Card className="bg-background border-neutralLight shadow-md">
        //                             <CardHeader className="flex flex-col items-center">
        //                                 <img
        //                                     src={testimonial.image}
        //                                     alt={testimonial.name}
        //                                     className="w-20 h-20 rounded-full object-cover mb-4"
        //                                 />
        //                                 <h3 className="font-heading text-h2 text-text">{testimonial.name}</h3>
        //                             </CardHeader>
        //                             <CardContent className="text-center">
        //                                 <div className="flex justify-center mb-2">
        //                                     {[...Array(5)].map((_, i) => (
        //                                         <Star
        //                                             key={i}
        //                                             className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary' : 'text-neutralLight'
        //                                                 }`}
        //                                             fill={i < testimonial.rating ? config.colors.primary : 'none'}
        //                                             aria-hidden="true"
        //                                         />
        //                                     ))}
        //                                 </div>
        //                                 <p className="font-body text-body text-neutral italic">
        //                                     "{testimonial.text}"
        //                                 </p>
        //                             </CardContent>
        //                         </Card>
        //                     </motion.div>
        //                 ))}
        //             </div>
        //         </ScrollAnimation>
        //     </div>
        // </section>
        <section
            id="depoimentos"
            className="text-center text-text py-10"
            aria-label="Seção Depoimentos"
            role="region"
        >
            <div className="container mx-auto px-4">
                <ScrollAnimation variant="fade">
                    <h1
                        className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary"
                        {...titleAnimation}
                    >
                        {config.testimonials.title}
                    </h1>
                    <motion.p
                        className="font-body text-body max-w-2xl mx-auto text-center mb-4"
                        {...textAnimation}
                    >
                        {config.testimonials.description}
                    </motion.p>
                    <motion.div
                        className="flex justify-center mb-8"
                        {...textAnimation}
                    >
                        <div className='flex flex-col items-center justify-center'>
                            <span className='font-bold'>Excelente</span>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5"
                                        fill="#FFD700" // Yellow fill for stars
                                        stroke="#FFD700" // Yellow stroke for stars
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <img
                                src={config.testimonials.googleReviewsImage}
                                alt="Google Reviews"
                                className="h-10 w-auto"
                            />
                        </div>

                    </motion.div>
                    <div className="block sm:hidden">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="mySwiper"
                            aria-label="Carrossel de depoimentos"
                        >
                            {config.testimonials.items.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div {...cardAnimation(index)}>
                                        <Card className="bg-background border-neutralLight shadow-md mx-4">
                                            <CardHeader className="flex flex-col items-center">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <h3 className="font-heading text-h2 text-text">{testimonial.name}</h3>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <div className="flex justify-center mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#FFD700]' : 'text-neutralLight'}`}
                                                            fill={i < testimonial.rating ? '#FFD700' : 'none'}
                                                            stroke={i < testimonial.rating ? '#FFD700' : '#D1D5DB'}
                                                            aria-hidden="true"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="font-body text-body text-neutral italic">
                                                    "{testimonial.text}"
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {config.testimonials.items.map((testimonial, index) => (
                            <motion.div key={index} {...cardAnimation(index)}>
                                <Card className="bg-background border-neutralLight shadow-md">
                                    <CardHeader className="flex flex-col items-center">
                                        {/* <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-20 h-20 rounded-full object-cover mb-4"
                                        /> */}
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <h3 className="font-heading text-h2 text-text">{testimonial.name}</h3>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className="flex justify-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#FFD700]' : 'text-neutralLight'}`}
                                                    fill={i < testimonial.rating ? '#FFD700' : 'none'}
                                                    stroke={i < testimonial.rating ? '#FFD700' : '#D1D5DB'}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="font-body text-body text-neutral italic">
                                            "{testimonial.text}"
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