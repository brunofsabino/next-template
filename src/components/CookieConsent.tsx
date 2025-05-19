'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';

export default function CookieConsent() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Verifica se o cookie de consentimento existe
        const consent = Cookies.get('cookie_consent');
        if (!consent) {
            console.log('Cookie de consentimento não encontrado, exibindo aviso.');
            setIsOpen(true);
        } else {
            console.log('Cookie de consentimento encontrado:', consent);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            console.log('Renderizando toast de consentimento de cookies.');
            const toastId = toast.custom(
                (t) => (
                    <div className="fixed bottom-4 left-0 right-0 mx-auto min-w-[300px] w-full sm:w-[90%] max-w-[600px] bg-primary text-primary-foreground shadow-lg p-6 rounded-lg z-50">
                        <h3 className="text-lg font-semibold mb-2">Nós usamos cookies</h3>
                        <p className="text-sm mb-4">
                            Usamos cookies para registrar sua preferência de consentimento e podemos usá-los no futuro para melhorar sua experiência, como personalizar conteúdo ou analisar tráfego. Ao continuar, você concorda com nossa{' '}
                            <Link href="/politica-de-privacidade" className="underline hover:text-accent">
                                Política de Privacidade
                            </Link>
                            .
                        </p>
                        <div className="flex justify-end space-x-2">
                            <Button
                                onClick={() => {
                                    console.log('Aceitando cookies, definindo cookie_consent.');
                                    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
                                    toast.dismiss(t);
                                    setIsOpen(false);
                                }}
                                variant="secondary"
                                size="sm"
                            >
                                Aceitar
                            </Button>
                            <Button
                                onClick={() => {
                                    console.log('Fechando aviso sem aceitar.');
                                    toast.dismiss(t);
                                    setIsOpen(false);
                                }}
                                variant="outline"
                                size="sm"
                            >
                                Fechar
                            </Button>
                        </div>
                    </div>
                ),
                {
                    duration: Infinity, // Mantém até ser fechado
                    position: 'bottom-center', // Parte inferior, centralizado
                    style: { background: 'transparent', padding: 0 }, // Remove estilos padrão do Sonner
                }
            );

            // Cleanup ao desmontar
            return () => {
                console.log('Limpando toast:', toastId);
                toast.dismiss(toastId);
            };
        }
    }, [isOpen]);

    return null; // Não renderiza nada diretamente
}