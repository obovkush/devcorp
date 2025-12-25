import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';

const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden py-20'>

            {/* Background Image (local responsive) */}
            {/* <picture>
        <source
          type="image/avif"
          srcSet="/images/hero/hero-512.avif 512w, /images/hero/hero-1024.avif 1024w, /images/hero/hero-2048.avif 2048w, /images/hero/hero-4096.avif 4096w, /images/hero/hero-5760.avif 5760w"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero/hero-5760.avif"
          sizes="(max-width: 640px) 512px, (max-width: 1024px) 1024px, (max-width: 1440px) 2048px, (max-width: 1920px) 4096px, 5760px"
          alt="Hero background"
        />
      </picture> */}

            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-background/20"></div> */}

            {/* Content */}
            <div className='relative z-10 container mx-auto px-4 lg:px-8'>
                <div className='grid lg:grid-cols-1 gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-12 animate-fade-in'>
                        {/* Company name */}
                        <h1 className='font-bruno-ace text-l md:text-xl lg:text-9xl text-white leading-tight text-center lg:text-center'>
                            SOLARM TECH
                        </h1>
                        <div className='space-y-2'>
                            {/* Main Heading */}
                            <h1 className='font-inter text-base md:text-xl lg:text-2xl text-primary leading-tight text-center lg:text-center'>
                                Профессиональная разработка программного обеспечения
                                <br />
                                для частных лиц и компаний
                            </h1>

                            {/* Subtitle */}
                            <p className='font-inter text-base text-muted text-center'>
                                Создаем инновационные решения для вашего будущего <br />
                                Современные технологии и надежность в каждом проекте
                            </p>
                        </div>

                        {/* CTA Button */}
                        {/* <div className="flex justify-center">
              <Button
                className="app-button-primary btn-contact-wrap btn-cta"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Начать проект
                <span className="btn-contact-circle">
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </span>
              </Button>
            </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
