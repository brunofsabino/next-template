// import { Button } from '@/components/ui/button';
// import { config } from '@/lib/config';
// import ScrollAnimation from './ScrollAnimation';
// import { hexToRgba } from '@/lib/utils';
// import WaveTransitionColor from './WaveTransitionColor';

// export default function HeroSection() {
//     return (
//         <section
//             className="relative bg-primary text-primary-foreground py-20"
//             style={{
//                 backgroundImage: `url(${config.backgroundImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             {/* <WaveTransitionColor /> */}
//             {/* Camada RGBA com transparência */}
//             <div
//                 className="absolute inset-0"
//                 style={{ backgroundColor: hexToRgba(config.primaryColor, 0.7) }}
//             />

//             {/* Conteúdo */}
//             <div className="relative container mx-auto text-center">
//                 <ScrollAnimation variant="fade">
//                     <img
//                         src={config.logo}
//                         alt={config.brandName}
//                         className="mx-auto h-16 md:h-20 mb-4"
//                     />
//                     <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                         {config.brandName}
//                     </h1>
//                     <p className="text-lg md:text-xl mb-6">
//                         Os melhores produtos e serviços para você.
//                     </p>
//                     <Button asChild>
//                         <a href="/contact">Entre em contato</a>
//                     </Button>
//                 </ScrollAnimation>
//             </div>
//         </section>
//     );
// }
'use client';
import { Button } from '@/components/ui/button';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { hexToRgba } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
    const shouldReduceMotion = useReducedMotion();
    const whatsAppLink = `https://wa.me/${config.telWhats}?text=Olá,%20quero%20saber%20mais%20sobre%20seus%20serviços!`;
    // Configuração da animação do logo
    const logoAnimation = shouldReduceMotion
        ? {} // Sem animação se prefers-reduced-motion estiver ativo
        : {
            animate: { y: [-10, 10] }, // Subir (-10px) e descer (10px)
            transition: {
                y: {
                    repeat: Infinity, // Repetir infinitamente
                    repeatType: 'reverse' as const, // Voltar ao início
                    duration: 2.5, // 2.5 segundos por ciclo
                    ease: 'easeInOut', // Suavidade
                },
            },
        };

    return (
        <section
            className="relative text-text py-20"
            style={{
                backgroundImage: `url(${config.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="absolute inset-0"
                style={{ backgroundColor: hexToRgba(config.colors.primary, 0.7) }}
            />
            <div className="relative container mx-auto text-center">
                <ScrollAnimation variant="fade">
                    <motion.img
                        src={config.logo}
                        alt={config.brandName}
                        className="mx-auto h-16 md:h-20 mb-4"
                        {...logoAnimation}
                    />
                    <h1 className="font-heading mb-4 font-extrabold text-3xl text-accent drop-shadow-md">
                        {config.brandName}
                    </h1>
                    <p className="text-base md:text-xl font-extrabold  mb-6 text-accent">
                        Os melhores produtos e serviços para você.
                    </p>
                    <Button asChild className="bg-primary text-primary-foreground">
                        <a
                            href={whatsAppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        > <FaWhatsapp className="mr-2 h-5 w-5" aria-hidden="true" />{config.ctaText}</a>
                    </Button>
                </ScrollAnimation>
            </div>
        </section>
    );
}