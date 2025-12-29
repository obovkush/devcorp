import {Award, Target, Heart, LucideIcon} from 'lucide-react';
import {useScrollAnimation} from '@/hooks/useScrollAnimation';
import TeamMap from './TeamMap';

interface AboutCard {
    icon: LucideIcon;
    title: string;
    description: string[];
}

const aboutCards: AboutCard[] = [
    {
        icon: Target,
        title: 'Миссия',
        description: ['Делать полезные сервисы', 'доступными, понятными и', 'выгодными для каждого.'],
    },
    {
        icon: Award,
        title: 'Качество',
        description: ['Высочайшие стандарты', 'разработки и обслуживания', 'в каждом проекте.'],
    },
    {
        icon: Heart,
        title: 'Забота',
        description: ['Персональный подход', 'и поддержка наших', 'клиентов.'],
    },
];

const About = () => {
    const {elementRef, isVisible} = useScrollAnimation();

    return (
        <section id='about' className='section py-20 border-b border-border/50'>
            <div ref={elementRef} className='container mx-auto px-4 lg:px-8'>
                <div className='grid lg:grid-cols-1 gap-16 items-center'>
                    {/* Left Content */}
                    <div className={`space-y-8 ${isVisible ? 'scroll-fade-up' : ''}`}>
                        <div className='text-center mb-16'>
                            <h2 className='section-title mb-2'>Почему выбирают нас</h2>
                            <p className='section-description font-inter-medium text-foreground max-w-3xl mx-auto'>
                                Предоставляем услуги разработки с использованием передовых технологий.
                            </p>
                            <p className='section-description font-inter-medium text-foreground max-w-3xl mx-auto'>Опыт разработки более 10 лет.</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {aboutCards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <div key={index} className='flex gap-4 p-6 app-card rounded-xl hover:border-primary/20 transition-colors'>
                                        <div className='w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground text-card rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <Icon className='w-6 h-6 sm:w-8 sm:h-8' />
                                        </div>
                                        <div>
                                            <h3 className='text-base font-semibold text-primary-foreground transition-colors leading-tight break-words mb-2'>
                                                {card.title}
                                            </h3>
                                            <p className='card-content text-foreground'>
                                                {card.description.map((line, lineIndex) => (
                                                    <span key={lineIndex}>
                                                        {line}
                                                        {lineIndex < card.description.length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Team Map Section */}
                    <div className={`${isVisible ? 'scroll-fade-up scroll-animation-delay-200' : ''}`}>
                        <TeamMap />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
