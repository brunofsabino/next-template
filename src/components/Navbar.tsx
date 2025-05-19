// 'use client';
// import { Button } from '@/components/ui/button';
// import {
//     NavigationMenu,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     navigationMenuTriggerStyle,
// } from '@/components/ui/navigation-menu';
// import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
// import { config } from '@/lib/config';
// import Link from 'next/link';
// import { FaBars } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [targetSection, setTargetSection] = useState<string | null>(null);
//     const router = useRouter();

//     useEffect(() => {
//         if (targetSection) {
//             const element = document.getElementById(targetSection);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//             setTargetSection(null);
//         }
//     }, [targetSection]);

//     const handleLinkClick = (href: string) => {
//         setIsOpen(false);

//         // Se for um link com âncora (começa com /#)
//         if (href.startsWith('/#')) {
//             const targetId = href.substring(2); // Remove o /# do início

//             // Se não estiver na página inicial, navega primeiro
//             if (window.location.pathname !== '/') {
//                 router.push('/');
//                 // Armazena o ID da seção para scroll após a navegação
//                 setTargetSection(targetId);
//             } else {
//                 // Se já estamos na página inicial, faz o scroll imediatamente
//                 setTargetSection(targetId);
//             }
//         } else {
//             // Para links normais, usa o router
//             router.push(href);
//         }
//     };

//     return (
//         <nav className="bg-primary text-primary-foreground p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center">
//                     <img src={config.logo} alt={config.brandName} className="h-10 mr-3" />
//                     <h1 className="font-heading text-h1 text-accent font-bold">{config.brandName}</h1>
//                 </Link>

//                 {/* Menu Desktop */}
//                 <div className="hidden md:flex">
//                     <NavigationMenu>
//                         <NavigationMenuList>
//                             {config.navbar.links.map((link, index) => (
//                                 <NavigationMenuItem key={index}>
//                                     <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                                         <Link href={link.href}>{link.label}</Link>
//                                     </NavigationMenuLink>
//                                 </NavigationMenuItem>
//                             ))}
//                         </NavigationMenuList>
//                     </NavigationMenu>
//                 </div>

//                 {/* Menu Mobile (Hamburguer) */}
//                 <div className="md:hidden">
//                     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                         <SheetTrigger asChild>
//                             <Button variant="ghost" size="icon" aria-label="Abrir menu">
//                                 <FaBars className="h-6 w-6" />
//                             </Button>
//                         </SheetTrigger>
//                         <SheetContent side="top" className="bg-primary text-primary-foreground p-6">
//                             <VisuallyHidden>
//                                 <SheetTitle>Menu de Navegação</SheetTitle>
//                             </VisuallyHidden>
//                             <Link href="/" className="flex items-center">
//                                 <img src={config.logo} alt={config.brandName} className="h-10 mr-1.5" />
//                                 <h1 className="font-heading text-h1 text-accent">{config.brandName}</h1>
//                             </Link>
//                             <div className="flex flex-col space-y-4 mt-4">
//                                 {config.navbar.links.map((link, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className="w-full text-left py-2 px-4 hover:bg-primary-foreground/10 rounded-md"
//                                     >
//                                         {link.label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </SheetContent>
//                     </Sheet>
//                 </div>
//             </div>
//         </nav>
//     );
// }



// 'use client';
// import { Button } from '@/components/ui/button';
// import {
//     NavigationMenu,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     navigationMenuTriggerStyle,
// } from '@/components/ui/navigation-menu';
// import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
// import { config } from '@/lib/config';
// import Link from 'next/link';
// import { FaBars } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const router = useRouter();

//     const handleLinkClick = (href: string) => {
//         setIsOpen(false);

//         // Se for um link com âncora (começa com /#)
//         if (href.startsWith('/#')) {
//             const targetId = href.substring(2); // Remove o /# do início

//             // Primeiro, vamos para a página inicial se não estivermos nela
//             if (window.location.pathname !== '/') {
//                 router.push('/');
//             }

//             // Aguarda um momento para garantir que a página carregou
//             setTimeout(() => {
//                 const element = document.getElementById(targetId);
//                 if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                 }
//             }, 300);
//         } else {
//             // Para links normais, usa o router
//             router.push(href);
//         }
//     };

//     return (
//         <nav className="bg-primary text-primary-foreground p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center">
//                     <img src={config.logo} alt={config.brandName} className="h-10 mr-3" />
//                     <h1 className="font-heading text-h1 text-accent font-bold">{config.brandName}</h1>
//                 </Link>

//                 {/* Menu Desktop */}
//                 <div className="hidden md:flex">
//                     <NavigationMenu>
//                         <NavigationMenuList>
//                             {config.navbar.links.map((link, index) => (
//                                 <NavigationMenuItem key={index}>
//                                     <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                                         <Link href={link.href}>{link.label}</Link>
//                                     </NavigationMenuLink>
//                                 </NavigationMenuItem>
//                             ))}
//                         </NavigationMenuList>
//                     </NavigationMenu>
//                 </div>

//                 {/* Menu Mobile (Hamburguer) */}
//                 <div className="md:hidden">
//                     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                         <SheetTrigger asChild>
//                             <Button variant="ghost" size="icon" aria-label="Abrir menu">
//                                 <FaBars className="h-6 w-6" />
//                             </Button>
//                         </SheetTrigger>
//                         <SheetContent side="top" className="bg-primary text-primary-foreground p-6">
//                             <VisuallyHidden>
//                                 <SheetTitle>Menu de Navegação</SheetTitle>
//                             </VisuallyHidden>
//                             <Link href="/" className="flex items-center">
//                                 <img src={config.logo} alt={config.brandName} className="h-10 mr-1.5" />
//                                 <h1 className="font-heading text-h1 text-accent">{config.brandName}</h1>
//                             </Link>
//                             <div className="flex flex-col space-y-4 mt-4">
//                                 {config.navbar.links.map((link, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className="w-full text-left py-2 px-4 hover:bg-primary-foreground/10 rounded-md"
//                                     >
//                                         {link.label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </SheetContent>
//                     </Sheet>
//                 </div>
//             </div>
//         </nav>
//     );
// }

'use client';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { config } from '@/lib/config';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLinkClick = (href: string, e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
        }

        console.log('Link clicado:', href, 'Pathname atual:', window.location.pathname);

        // Se for um link com âncora (ex.: /#depoimentos)
        if (href.startsWith('/#')) {
            const targetId = href.substring(2); // Remove o /#

            // Fecha o menu primeiro
            setIsOpen(false);

            // Se já está na página inicial
            if (window.location.pathname === '/') {
                console.log('Já na página inicial, rolando para:', targetId);
                // Atualiza a URL sem recarregar
                window.history.pushState(null, '', `#${targetId}`);
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error('Elemento não encontrado:', targetId);
                    }
                }, 700); // Atraso para garantir que o Sheet fechou
            } else {
                // Navega para a página inicial com âncora
                console.log('Navegando para página inicial com âncora:', targetId);
                router.push(`/#${targetId}`);
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error('Elemento não encontrado após navegação:', targetId);
                    }
                }, 1000); // Atraso para carregamento da página
            }
        } else {
            // Para links normais (ex.: /produtos)
            console.log('Navegando para rota normal:', href);
            setIsOpen(false);
            router.push(href);
        }
    };

    // Efeito para lidar com âncoras na URL ao carregar a página
    useEffect(() => {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1); // Remove o #
            console.log('Âncora detectada na URL:', targetId);
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Elemento não encontrado na carga inicial:', targetId);
                }
            }, 1000);
        }
    }, []);

    return (
        <nav className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img src={config.logo} alt={config.brandName} className="h-10 mr-3" />
                    <h1 className="font-heading text-h1 text-accent font-bold">{config.brandName}</h1>
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {config.navbar.links.map((link, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Menu Mobile (Hamburguer) */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Abrir menu">
                                <FaBars className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="bg-primary text-primary-foreground p-6">
                            <VisuallyHidden>
                                <SheetTitle>Menu de Navegação</SheetTitle>
                            </VisuallyHidden>
                            <Link href="/" className="flex items-center">
                                <img src={config.logo} alt={config.brandName} className="h-10 mr-1.5" />
                                <h1 className="font-heading text-h1 text-accent">{config.brandName}</h1>
                            </Link>
                            <div className="flex flex-col space-y-4 mt-4">
                                {config.navbar.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(link.href, e)}
                                        className="w-full text-left py-2 px-4 hover:bg-primary-foreground/10 rounded-md"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}