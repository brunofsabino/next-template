import { Button } from '@/components/ui/button';
import { config } from '@/lib/config';
//import config from 'next/config';
import Link from 'next/link';
//import { config } from '@/lib/config';

export default function Navbar() {
    return (
        <nav className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <img src={config.logo} alt={config.brandName} className="h-10" />
                </Link>
                <div className="space-x-4">
                    <Link href="/"><Button variant="ghost">Home</Button></Link>
                    <Link href="/about"><Button variant="ghost">Sobre</Button></Link>
                    <Link href="/services"><Button variant="ghost">Serviços</Button></Link>
                    <Link href="/contact"><Button variant="ghost">Contato</Button></Link>
                </div>
            </div>
        </nav>
    );
}