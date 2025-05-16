// 'use client'

// import { useScroll, useTransform, motion } from 'framer-motion'
// import { useRef } from 'react'

// export default function ScrollMarquee() {
//     const containerRef = useRef(null)

//     // Pegamos a posição de scroll do container
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start end', 'end start'], // define a faixa de animação
//     })

//     // Criamos transformações de movimento horizontal baseadas no scroll vertical
//     const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
//     const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

//     return (
//         <div ref={containerRef} className="overflow-hidden bg-white py-12">
//             <motion.div style={{ x: x1 }} className="whitespace-nowrap text-4xl font-bold uppercase text-black py-4">
//                 Texto em movimento para esquerda • Texto em movimento para esquerda •
//             </motion.div>
//             <motion.div style={{ x: x2 }} className="whitespace-nowrap text-4xl font-bold uppercase text-black py-4">
//                 Texto em movimento para direita • Texto em movimento para direita •
//             </motion.div>
//         </div>
//     )
// }
'use client'

import { config } from '@/lib/config'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function LeatherBeltText() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

    return (
        <div className="relative py-8 ">
            {/* Faixa do cinto */}
            <div
                ref={containerRef}
                //className="w-full bg-[#5c4033] border-y-4 border-dashed border-yellow-100 rounded-full py-4 overflow-hidden" bg-[url('/couro-textura.jpg')]
                className="w-full bg-[#2563EB] bg-cover border-y-4 border-dashed border-yellow-100 rounded-full py-4 overflow-hidden"
            >
                {/* Texto animado se movendo dentro do cinto */}
                <motion.div
                    style={{ x }}
                    className="whitespace-nowrap text-white text-2xl font-semibold uppercase tracking-widest px-6"
                >
                    • {config.brandName} • NOVA COLEÇÃO DISPONÍVEL • {config.brandName} • CONFIRA AS NOVIDADES • {config.brandName} • NOVA COLEÇÃO DISPONÍVEL • {config.brandName} • CONFIRA AS NOVIDADES •
                </motion.div>
            </div>
            {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-200 border-4 border-yellow-700 rounded-md shadow-inner z-10" /> */}
            <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                width="90"
                height="76"
                viewBox="0 0 90 80"
                xmlns="http://www.w3.org/2000/svg"
            >

                <rect x="2" y="2" width="86" height="76" rx="12" stroke="#0f172b" strokeWidth="12" fill="none" />
                <line x1="45" y1="10" x2="45" y2="70" stroke="#0f172b" strokeWidth="8" />
                <circle cx="10" cy="10" r="4" fill="#0f172b" />
                <circle cx="80" cy="10" r="4" fill="#0f172b" />
                <circle cx="10" cy="70" r="4" fill="#0f172b" />
                <circle cx="80" cy="70" r="4" fill="#0f172b" />

            </svg>


        </div>
    )
}

