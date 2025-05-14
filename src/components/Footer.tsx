//import { config } from '/lib/config';
import { config } from '@/lib/config';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground p-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} {config.brandName}. Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href={config.social.facebook}><FaFacebook size={24} /></a>
                    <a href={config.social.instagram}><FaInstagram size={24} /></a>
                </div>
            </div>
        </footer>
    );
}