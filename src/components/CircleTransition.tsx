// 'use client';
// import { config } from '@/lib/config';
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import styles from './SpinnerTransition.module.css';

// export default function SpinnerTransition() {
//     const svgRef = useRef<SVGSVGElement>(null);
//     const gradientRef = useRef<SVGLinearGradientElement>(null);

//     useEffect(() => {
//         if (svgRef.current && gradientRef.current) {
//             // Oscilação
//             gsap.to(svgRef.current, {
//                 rotation: 15,
//                 duration: 8,
//                 yoyo: true,
//                 repeat: -1,
//                 ease: 'sine.inOut',
//             });

//             // Pulsação
//             gsap.to(svgRef.current, {
//                 scale: 1.1,
//                 duration: 4,
//                 yoyo: true,
//                 repeat: -1,
//                 ease: 'sine.inOut',
//             });

//             // Gradiente: Movimento
//             gsap.to(gradientRef.current, {
//                 attr: {
//                     x1: '100%',
//                     y1: '100%',
//                     x2: '0%',
//                     y2: '0%',
//                 },
//                 duration: 8,
//                 repeat: -1,
//                 yoyo: true,
//                 ease: 'sine.inOut',
//             });
//         }

//         // Respeitar prefers-reduced-motion
//         const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//         if (mediaQuery.matches) {
//             gsap.killTweensOf([svgRef.current, gradientRef.current]);
//         }

//         const handleMediaChange = (e: MediaQueryListEvent) => {
//             if (e.matches) {
//                 gsap.killTweensOf([svgRef.current, gradientRef.current]);
//             } else {
//                 gsap.to(svgRef.current, {
//                     rotation: 15,
//                     duration: 8,
//                     yoyo: true,
//                     repeat: -1,
//                     ease: 'sine.inOut',
//                 });
//                 gsap.to(svgRef.current, {
//                     scale: 1.1,
//                     duration: 4,
//                     yoyo: true,
//                     repeat: -1,
//                     ease: 'sine.inOut',
//                 });
//                 gsap.to(gradientRef.current, {
//                     attr: {
//                         x1: '100%',
//                         y1: '100%',
//                         x2: '0%',
//                         y2: '0%',
//                     },
//                     duration: 8,
//                     repeat: -1,
//                     yoyo: true,
//                     ease: 'sine.inOut',
//                 });
//             }
//         };

//         mediaQuery.addEventListener('change', handleMediaChange);
//         return () => mediaQuery.removeEventListener('change', handleMediaChange);
//     }, []);

//     return (
//         <div className="relative w-full h-40 bg-background overflow-hidden">
//             <svg
//                 ref={svgRef}
//                 className="absolute top-0 left-0 w-full h-full"
//                 viewBox="0 0 200 200"
//                 preserveAspectRatio="xMidYMid meet"
//             >
//                 <defs>
//                     <linearGradient
//                         ref={gradientRef}
//                         id="spinnerGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                         gradientUnits="userSpaceOnUse"
//                     >
//                         <stop offset="0%" stopColor={config.colors.primary} className={styles.gradientStop1} />
//                         <stop offset="50%" stopColor={config.colors.accent} className={styles.gradientStop2} />
//                         <stop offset="100%" stopColor={config.colors.neutral} className={styles.gradientStop3} />
//                     </linearGradient>
//                 </defs>
//                 <path
//                     d="
//             M100,60
//             C120,40 150,40 170,60 C190,80 190,120 170,140 C150,160 120,160 100,140
//             C80,160 50,160 30,140 C10,120 10,80 30,60 C50,40 80,40 100,60
//             M100,90
//             C110,80 130,80 140,90 C150,100 150,120 140,130 C130,140 110,140 100,130
//             C90,140 70,140 60,130 C50,120 50,100 60,90 C70,80 90,80 100,90
//           "
//                     fill="url(#spinnerGradient)"
//                     className={styles.spinnerPath}
//                 />
//             </svg>
//         </div>
//     );
// }
'use client';
import { config } from '@/lib/config';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CircleTransition.module.css';
import { cn } from '@/lib/utils'; // Importar cn de Shadcn/UI

interface CircleTransitionProps {
    className?: string;
}

export default function CircleTransition({ className }: CircleTransitionProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const gradientRef = useRef<SVGLinearGradientElement>(null);
    const circleRefs = useRef<SVGCircleElement[]>([]);

    // Configuração dos círculos: raios
    const circles = [
        { r: 20 }, // Grande
        { r: 15 }, // Médio
        { r: 10 }, // Pequeno
        { r: 20 }, // Grande
        { r: 15 }, // Médio
        { r: 10 }, // Pequeno
        { r: 20 }, // Grande
        { r: 15 }, // Médio
        { r: 10 }, // Pequeno
    ];

    // Calcular posições cx dinamicamente
    let currentX = 20; // Margem inicial
    const spacing = 1;
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
                    // Oscilação vertical
                    gsap.to(circle, {
                        y: 10,
                        duration: 8,
                        yoyo: true,
                        repeat: -1,
                        ease: 'sine.inOut',
                        delay: index * 0.1,
                    });

                    // Pulsação
                    gsap.to(circle, {
                        scale: 1.1,
                        duration: 4,
                        yoyo: true,
                        repeat: -1,
                        ease: 'sine.inOut',
                        delay: index * 0.1,
                    });
                }
            });

            // Gradiente: Movimento
            gsap.to(gradientRef.current, {
                attr: {
                    x1: '100%',
                    y1: '100%',
                    x2: '0%',
                    y2: '0%',
                },
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }

        // Respeitar prefers-reduced-motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            gsap.killTweensOf([...circleRefs.current, gradientRef.current]);
        }

        const handleMediaChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                gsap.killTweensOf([...circleRefs.current, gradientRef.current]);
            } else {
                circleRefs.current.forEach((circle, index) => {
                    if (circle) {
                        gsap.to(circle, {
                            y: 10,
                            duration: 8,
                            yoyo: true,
                            repeat: -1,
                            ease: 'sine.inOut',
                            delay: index * 0.1,
                        });
                        gsap.to(circle, {
                            scale: 1.1,
                            duration: 4,
                            yoyo: true,
                            repeat: -1,
                            ease: 'sine.inOut',
                            delay: index * 0.1,
                        });
                    }
                });
                gsap.to(gradientRef.current, {
                    attr: {
                        x1: '100%',
                        y1: '100%',
                        x2: '0%',
                        y2: '0%',
                    },
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });
            }
        };

        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    return (
        <div className={cn('relative w-full h-24 overflow-hidden', className)}>
            <svg
                ref={svgRef}
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 400 60"
                preserveAspectRatio="xMinYMid meet"
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
                {circles.map(({ r }, index) => (
                    <circle
                        key={index}
                        ref={(el) => {
                            if (el) circleRefs.current[index] = el;
                        }}
                        cx={cxValues[index]}
                        cy="30"
                        r={r}
                        fill="url(#circleGradient)"
                        className={styles.circle}
                    />
                ))}
            </svg>
        </div>
    );
}