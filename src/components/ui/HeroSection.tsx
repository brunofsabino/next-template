import { Button } from '@/components/ui/button';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';

export default function HeroSection() {
    return (
        <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto text-center">
                <ScrollAnimation variant="fade">
                    <img src={config.logo} alt={config.brandName} className="mx-auto h-20 mb-4" />
                    <h1 className="text-4xl font-bold mb-4">{config.brandName}</h1>
                    <p className="text-xl mb-6">Os melhores produtos e serviços para você.</p>
                    <Button asChild>
                        <a href="/contact">Entre em contato</a>
                    </Button>
                </ScrollAnimation>
            </div>
        </section>
    );
}