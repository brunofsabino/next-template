// 'use client';
// import { config } from '@/lib/config';
// import { motion, useReducedMotion } from 'framer-motion';
// import Link from 'next/link';

// export default function Footer() {
//     const shouldReduceMotion = useReducedMotion();

//     const animation = shouldReduceMotion
//         ? {}
//         : {
//             initial: { opacity: 0, y: 50 },
//             whileInView: { opacity: 1, y: 0 },
//             transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
//             viewport: { once: true },
//         };

//     return (
//         <footer className="bg-primary text-text py-12 border-t border-neutralLight">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     className="flex flex-col md:flex-row justify-between items-center"
//                     {...animation}
//                 >
//                     <div className="mb-6 md:mb-0">
//                         <img
//                             src={config.logo}
//                             alt={config.brandName}
//                             className="h-12"
//                         />
//                         <p className="font-body text-body text-neutral mt-2">
//                             &copy; {new Date().getFullYear()} {config.brandName}. Todos os direitos reservados.
//                         </p>
//                     </div>
//                     <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
//                         {config.footer.links.map((link, index) => (
//                             <Link
//                                 key={index}
//                                 href={link.href}
//                                 className="font-body text-body text-text hover:text-primary transition-colors"
//                             >
//                                 {link.label}
//                             </Link>
//                         ))}
//                     </nav>
//                     <div className="flex gap-4 mt-6 md:mt-0">
//                         <a
//                             href={config.social.facebook}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-text hover:text-primary transition-colors"
//                         >
//                             Facebook
//                         </a>
//                         <a
//                             href={config.social.instagram}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-text hover:text-primary transition-colors"
//                         >
//                             Instagram
//                         </a>
//                     </div>
//                 </motion.div>
//             </div>
//         </footer>
//     );
// }
'use client';
import { config } from '@/lib/config';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const shouldReduceMotion = useReducedMotion();

    const animation = shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
            viewport: { once: true },
        };

    return (
        <footer className="bg-primary text-white py-8 border-t border-neutralLight">
            <div className="container mx-auto px-6">
                <motion.div
                    className="flex flex-col items-center md:flex-row md:justify-between md:items-center"
                    {...animation}
                >
                    {/* Logo and Copyright */}
                    <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start gap-2">
                        <div className='flex items-center'>
                            <img
                                src={config.logo}
                                alt={config.brandName}
                                className="h-10 mr-3"
                            />
                            <h1 className="font-heading text-h1 text-accent font-bold">{config.brandName}</h1>
                        </div>

                        <p className="font-body text-sm text-white mt-4">
                            © {new Date().getFullYear()} {config.brandName}. Todos os direitos reservados.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 md:mb-0">
                        {config.footer.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="font-body text-sm text-white hover:text-gray-300 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href={config.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a
                            href={config.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}