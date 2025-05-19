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
    // Animações
    const titleAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true },
        };
    return (
        <section
            id="/"
            className="relative text-text py-20"
            style={{
                backgroundImage: `url(${config.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="absolute inset-0"
                style={{ backgroundColor: hexToRgba(config.colors.primary, 0.4) }}
            />
            <div className="relative container mx-auto text-center bg-[#bcbae1a1] rounded-4xl w-[fit-content] p-6">
                <ScrollAnimation variant="fade">
                    <motion.img
                        src={config.logo2}
                        alt={config.brandName}
                        className="mx-auto h-16 md:h-20 mb-4"
                        {...logoAnimation}
                    />
                    <motion.h1 // Alterado de <h1> para <motion.h1>
                        className="font-heading mb-4 font-bold text-3xl text-primary drop-shadow-md"
                        {...titleAnimation}
                    >
                        {config.brandName}
                    </motion.h1>
                    {/* <h1 className="font-heading mb-4 font-extrabold text-3xl text-accent drop-shadow-md">
                        {config.brandName}
                    </h1> */}
                    <p className="text-base md:text-xl font-semibold  mb-6 text-primary">
                        Moda feminina, masculina e acessórios para seu estilo.
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