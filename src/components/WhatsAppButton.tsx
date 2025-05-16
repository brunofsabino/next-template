'use client';
import { config } from '@/lib/config';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (isTouched) {
            const timer = setTimeout(() => setIsTouched(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isTouched]);

    const whatsAppLink = `https://wa.me/${config.telWhats
        }?text=Olá,%20quero%20entrar%20em%20contato!`;

    return (
        <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg transition-transform duration-300 ${isTouched ? 'scale-110' : 'hover:scale-110'
                }`}
            onClick={() => setIsTouched(true)}
            aria-label="Fale pelo WhatsApp"
        >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </a>
    );
}