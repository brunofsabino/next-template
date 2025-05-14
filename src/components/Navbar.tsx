// // import { Button } from '@/components/ui/button';
// // import { config } from '@/lib/config';
// // import Link from 'next/link';

// // export default function Navbar() {
// //     return (
// //         <nav className="bg-primary text-primary-foreground p-4">
// //             <div className="container mx-auto flex justify-between items-center">
// //                 <Link href="/">
// //                     <img src={config.logo} alt={config.brandName} className="h-10" />
// //                 </Link>
// //                 <div className="space-x-4">
// //                     <Link href="/"><Button variant="ghost">Home</Button></Link>
// //                     <Link href="/about"><Button variant="ghost">Sobre</Button></Link>
// //                     <Link href="/services"><Button variant="ghost">Serviços</Button></Link>
// //                     <Link href="/contact"><Button variant="ghost">Contato</Button></Link>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // }

// 'use client';
// import { Button } from '@/components/ui/button';
// import {
//     NavigationMenu,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     navigationMenuTriggerStyle,
// } from '@/components/ui/navigation-menu';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { config } from '@/lib/config';
// import Link from 'next/link';
// import { FaBars } from 'react-icons/fa';
// import { useState } from 'react';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-primary text-primary-foreground p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <Link href="/" className='flex items-center'>
//                     <img src={config.logo} alt={config.brandName} className="h-10 mr-1.5" />
//                     <h1 className="font-heading text-h1 text-accent">{config.brandName}</h1>
//                 </Link>

//                 {/* Menu Desktop */}
//                 <div className="hidden md:flex">
//                     <NavigationMenu>
//                         <NavigationMenuList>
//                             <NavigationMenuItem>
//                                 <Link href="/" legacyBehavior passHref>
//                                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                         Home
//                                     </NavigationMenuLink>
//                                 </Link>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <Link href="/about" legacyBehavior passHref>
//                                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                         Sobre
//                                     </NavigationMenuLink>
//                                 </Link>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <Link href="/services" legacyBehavior passHref>
//                                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                         Serviços
//                                     </NavigationMenuLink>
//                                 </Link>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <Link href="/contact" legacyBehavior passHref>
//                                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                         Contato
//                                     </NavigationMenuLink>
//                                 </Link>
//                             </NavigationMenuItem>
//                         </NavigationMenuList>
//                     </NavigationMenu>
//                 </div>

//                 {/* Menu Mobile (Hamburguer) */}
//                 <div className="md:hidden">
//                     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                         <SheetTrigger asChild>
//                             <Button variant="ghost" size="icon">
//                                 <FaBars className="h-6 w-6" />
//                             </Button>
//                         </SheetTrigger>
//                         <SheetContent side="right" className="bg-primary text-primary-foreground">
//                             <div className="flex flex-col space-y-4 mt-4">
//                                 <Link href="/" onClick={() => setIsOpen(false)}>
//                                     <Button variant="ghost" className="w-full justify-start">
//                                         Home
//                                     </Button>
//                                 </Link>
//                                 <Link href="/about" onClick={() => setIsOpen(false)}>
//                                     <Button variant="ghost" className="w-full justify-start">
//                                         Sobre
//                                     </Button>
//                                 </Link>
//                                 <Link href="/services" onClick={() => setIsOpen(false)}>
//                                     <Button variant="ghost" className="w-full justify-start">
//                                         Serviços
//                                     </Button>
//                                 </Link>
//                                 <Link href="/contact" onClick={() => setIsOpen(false)}>
//                                     <Button variant="ghost" className="w-full justify-start">
//                                         Contato
//                                     </Button>
//                                 </Link>
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { config } from '@/lib/config';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className='flex items-center'>
                    <img src={config.logo} alt={config.brandName} className="h-10 mr-1.5" />
                    <h1 className="font-heading text-h1 text-accent">{config.brandName}</h1>
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/about">Sobre</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/services">Serviços</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/contact">Contato</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Menu Mobile (Hamburguer) */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <FaBars className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="bg-primary text-primary-foreground p-6">
                            <Link href="/" className='flex items-center'>
                                <img src={config.logo} alt={config.brandName} className="h-10 mr-1.5" />
                                <h1 className="font-heading text-h1 text-accent">{config.brandName}</h1>
                            </Link>
                            <div className="flex flex-col space-y-4 mt-4">

                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className="w-full justify-start">
                                        Home
                                    </Button>
                                </Link>
                                <Link href="/about" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className="w-full justify-start">
                                        Sobre
                                    </Button>
                                </Link>
                                <Link href="/services" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className="w-full justify-start">
                                        Serviços
                                    </Button>
                                </Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className="w-full justify-start">
                                        Contato
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
