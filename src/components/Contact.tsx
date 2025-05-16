'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
    const shouldReduceMotion = useReducedMotion();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

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

    const formAnimation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
            viewport: { once: true },
        };

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
            id="contato"
            className="bg-background text-text py-20"
            aria-label="Seção Contato"
            role="region"
        >
            <div className="container mx-auto px-4">
                <ScrollAnimation variant="fade">
                    <motion.h1
                        className="font-heading text-h1 text-accent drop-shadow-md text-center mb-4"
                        {...titleAnimation}
                    >
                        {config.contact.title}
                    </motion.h1>
                    <motion.p
                        className="font-body text-body max-w-2xl mx-auto text-center mb-12"
                        {...textAnimation}
                    >
                        {config.contact.description}
                    </motion.p>
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
            </div>
        </section>
    );
}