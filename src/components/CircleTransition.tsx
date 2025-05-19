'use client';
import { config } from '@/lib/config';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CircleTransition.module.css';
import { cn } from '@/lib/utils';

interface CircleTransitionProps {
    className?: string;
}

export default function CircleTransition({ className }: CircleTransitionProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const gradientRef = useRef<SVGLinearGradientElement>(null);
    const circleRefs = useRef<SVGCircleElement[]>([]);

    // Configuração dos círculos: raios e cores
    const circles = [
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
        { r: 25, color: config.colors.primary },    // Grande
        { r: 20, color: config.colors.accent },     // Médio
        { r: 15, color: config.colors.neutral },    // Pequeno
    ];

    // Calcular posições cx dinamicamente
    let currentX = 20; // Margem inicial reduzida
    const spacing = 2; // Espaçamento reduzido entre círculos
    const cxValues = circles.map(({ r }) => {
        const cx = currentX + r;
        currentX += 2 * r + spacing;
        return cx;
    });

    useEffect(() => {
        // Inicializar circleRefs
        circleRefs.current = circleRefs.current.slice(0, circles.length);

        if (svgRef.current && gradientRef.current && circleRefs.current.length) {
            // Animação por círculo
            circleRefs.current.forEach((circle, index) => {
                if (circle) {
                    // Pulsação suave
                    gsap.to(circle, {
                        scale: 1.1,
                        duration: 3.5,
                        yoyo: true,
                        repeat: -1,
                        ease: 'sine.inOut',
                        delay: index * 0.15,
                    });
                }
            });
        }

        // Respeitar prefers-reduced-motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            gsap.killTweensOf(circleRefs.current);
        }

        const handleMediaChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                gsap.killTweensOf(circleRefs.current);
            } else {
                // Reiniciar animações
                circleRefs.current.forEach((circle, index) => {
                    if (circle) {
                        gsap.to(circle, {
                            scale: 1.1,
                            duration: 3.5,
                            yoyo: true,
                            repeat: -1,
                            ease: 'sine.inOut',
                            delay: index * 0.15,
                        });
                    }
                });
            }
        };

        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    return (
        <div className={cn("relative w-full h-32 overflow-hidden", className)}>
            <svg
                ref={svgRef}
                className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2"
                viewBox={`0 0 ${currentX + 20} 100`}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient
                        ref={gradientRef}
                        id="circleGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor={config.colors.primary} className={styles.gradientStop1} />
                        <stop offset="50%" stopColor={config.colors.accent} className={styles.gradientStop2} />
                        <stop offset="100%" stopColor={config.colors.neutral} className={styles.gradientStop3} />
                    </linearGradient>
                </defs>
                {circles.map((circle, index) => (
                    <circle
                        key={index}
                        ref={(el) => {
                            if (el) {
                                circleRefs.current[index] = el;
                            }
                        }}
                        cx={cxValues[index]}
                        cy="50"
                        r={circle.r}
                        fill={circle.color}
                        className={styles.circle}
                        opacity="0.8"
                    />
                ))}
            </svg>
        </div>
    );
}