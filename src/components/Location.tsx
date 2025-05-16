'use client';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Location() {
    const shouldReduceMotion = useReducedMotion();

    // // Animações
    // const titleAnimation = shouldReduceMotion
    //     ? {}
    //     : {
    //         initial: { opacity: 0, y: 50 },
    //         whileInView: { opacity: 1, y: 0 },
    //         transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    //         viewport: { once: true },
    //     };
    // Animações
    const titleAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true },
        };



    const formAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
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

    const contentAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
            viewport: { once: true },
        };

    //const shouldReduceMotion = useReducedMotion();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let hasError = false;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
            hasError = true;
        }
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail válido é obrigatório';
            hasError = true;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória';
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            // Simular envio (substituir por API real, ex.: Formspree, Netlify Forms)
            console.log('Formulário enviado:', formData);
            setFormData({ name: '', email: '', message: '' });
            alert('Mensagem enviada com sucesso!');
        }
    };

    const whatsAppLink = `https://wa.me/${config.telWhats
        }?text=Olá,%20quero%20entrar%20em%20contato!`;


    return (
        <section
            id="onde-estamos"
            className=" text-text py-20"
            aria-label="Seção Onde Estamos"
            role="region"
        >
            <div className="container mx-auto px-4 text-center">
                <ScrollAnimation variant="fade">
                    <h1
                        className="font-heading text-3xl mb-4 font-extrabold drop-shadow-md text-primary"
                        {...titleAnimation}
                    >
                        {config.location.title}
                    </h1>
                    <motion.p
                        className="font-body text-body max-w-2xl mx-auto text-center mb-12"
                        {...textAnimation}
                    >
                        {config.location.description}
                    </motion.p>
                    <motion.div
                        //className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        className="flex"
                        {...contentAnimation}
                    >
                        <ScrollAnimation variant="fade">

                            <motion.div
                                className="max-w-lg mx-auto"
                                {...formAnimation}
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Seu nome"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'name-error' : undefined}
                                            className="w-full"
                                        />
                                        {errors.name && (
                                            <p id="name-error" className="text-red-500 text-small mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Seu e-mail"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                            className="w-full"
                                        />
                                        {errors.email && (
                                            <p id="email-error" className="text-red-500 text-small mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Textarea
                                            placeholder="Sua mensagem"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? 'message-error' : undefined}
                                            className="w-full"
                                        />
                                        {errors.message && (
                                            <p id="message-error" className="text-red-500 text-small mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>
                                    <Button type="submit" className="w-full bg-primary text-primary-foreground">
                                        Enviar Mensagem
                                    </Button>
                                </form>
                                <Button
                                    asChild
                                    className="w-full mt-4 bg-background text-primary border border-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                    <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                                        Fale pelo WhatsApp
                                    </a>
                                </Button>
                            </motion.div>
                        </ScrollAnimation>
                        <ScrollAnimation variant="fade">

                            <motion.div
                                className="max-w-lg mx-auto"
                                {...formAnimation}
                            ><div>
                                    <div className="flex flex-col items-center lg:items-start">
                                        <div className="flex items-center mb-4">
                                            <MapPin className="h-6 w-6 text-primary mr-2" aria-hidden="true" />
                                            <h2 className="font-heading text-h2 text-text">Nosso Endereço</h2>
                                        </div>
                                        <p className="font-body text-body text-neutral text-center lg:text-left">
                                            {config.location.address}
                                        </p>
                                    </div>
                                    <div className="w-full h-[450px]">
                                        <iframe
                                            src={config.location.mapsUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-lg border border-neutralLight"
                                            aria-label="Mapa da localização da loja"
                                        ></iframe>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    </motion.div>
                </ScrollAnimation>
            </div>
        </section>
    );
}