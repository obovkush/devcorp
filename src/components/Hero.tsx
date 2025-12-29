import {Button} from '@/components/ui/button';

const Hero = () => {
    const handleContactClick = () => {
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
        }, 100);
    };
    return (
        <section className='section min-h-screen flex items-center justify-center py-20'>
            {/* Content */}
            <div className='relative z-10 container mx-auto px-4 lg:px-8'>
                <div className='grid lg:grid-cols-1 gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-12 animate-fade-in'>
                        {/* Company name */}
                        <h1 className='font-bruno-ace text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white leading-tight text-center lg:text-center'>
                            SOLARM TECH
                        </h1>
                        <div className='relative space-y-2'>
                            <div className='ellipse1' />
                            {/* Main Heading */}
                            <h1 className='section-description font-inter text-base md:text-xl lg:text-2xl text-primary leading-tight text-center lg:text-center'>
                                Профессиональная разработка программного обеспечения
                                <br />
                                для частных лиц и компаний
                            </h1>

                            {/* Subtitle */}
                            <p className='section-description font-inter text-base text-muted text-center'>
                                Создаем инновационные решения для вашего будущего <br />
                                Современные технологии и надежность в каждом проекте
                            </p>
                        </div>

                        {/* Contact Button */}
                        <div className='flex justify-center sm:hidden'>
                            <Button
                                onClick={handleContactClick}
                                className='bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-inter-medium transition-colors'
                            >
                                СВЯЗАТЬСЯ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
