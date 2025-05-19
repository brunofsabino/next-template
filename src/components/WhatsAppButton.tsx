'use client';
import { config } from '@/lib/config';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (isTouched) {
            const timer = setTimeout(() => setIsTouched(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isTouched]);

    const whatsAppLink = `https://wa.me/${config.telWhats}?text=Olá,%20quero%20entrar%20em%20contato!`;

    return (
        <motion.a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg z-99"
            onClick={() => setIsTouched(true)}
            aria-label="Fale pelo WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </motion.a>
    );
}