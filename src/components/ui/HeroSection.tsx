// import { Button } from '@/components/ui/button';
// import { config } from '@/lib/config';
// import ScrollAnimation from './ScrollAnimation';

// export default function HeroSection() {
//     return (
//         <section className="bg-primary text-primary-foreground py-20">
//             <div className="container mx-auto text-center">
//                 <ScrollAnimation variant="fade">
//                     <img src={config.logo} alt={config.brandName} className="mx-auto h-20 mb-4" />
//                     <h1 className="text-4xl font-bold mb-4">{config.brandName}</h1>
//                     <p className="text-xl mb-6">Os melhores produtos e serviços para você.</p>
//                     <Button asChild>
//                         <a href="/contact">Entre em contato</a>
//                     </Button>
//                 </ScrollAnimation>
//             </div>
//         </section>
//     );
// }

import { Button } from '@/components/ui/button';
import { config } from '@/lib/config';
import ScrollAnimation from './ScrollAnimation';
import { hexToRgba } from '@/lib/utils';
import WaveTransitionColor from './WaveTransitionColor';

export default function HeroSection() {
    return (
        <section
            className="relative bg-primary text-primary-foreground py-20"
            style={{
                backgroundImage: `url(${config.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* <WaveTransitionColor /> */}
            {/* Camada RGBA com transparência */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: hexToRgba(config.primaryColor, 0.6) }}
            />

            {/* Conteúdo */}
            <div className="relative container mx-auto text-center">
                <ScrollAnimation variant="fade">
                    <img
                        src={config.logo}
                        alt={config.brandName}
                        className="mx-auto h-16 md:h-20 mb-4"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {config.brandName}
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Os melhores produtos e serviços para você.
                    </p>
                    <Button asChild>
                        <a href="/contact">Entre em contato</a>
                    </Button>
                </ScrollAnimation>
            </div>
        </section>
    );
}