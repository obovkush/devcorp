import {Award, Target, Heart} from 'lucide-react';
import {useScrollAnimation} from '@/hooks/useScrollAnimation';
import TeamMap from './TeamMap';

const About = () => {
    const {elementRef, isVisible} = useScrollAnimation();

    return (
        <section id='about' className='py-20 border-b border-border/50'>
            <div ref={elementRef} className='container mx-auto px-4 lg:px-8'>
                <div className='grid lg:grid-cols-1 gap-16 items-center'>
                    {/* Left Content */}
                    <div className={`space-y-8 ${isVisible ? 'scroll-fade-up' : ''}`}>
                        <div className='text-center mb-16'>
                            <h2 className='section-title mb-2'>Почему выбирают нас</h2>
                            <p className='font-inter-medium text-foreground max-w-3xl mx-auto'>
                                Мы предоставляем услуги разработки с использованием передовых технологий.
                            </p>
                            <p className='font-inter-medium text-foreground max-w-3xl mx-auto'>Опыт разработки более 10 лет.</p>
                        </div>
                        {/* <div className="space-y-6">
                              <h2 className="section-title text-foreground">
                                Опыт разработки более{" "}
                                <span className="text-primary">
                                  10 лет
                                </span>
                              </h2>

                              <p className="text-lg text-muted-foreground leading-relaxed">
                                SOLARM Tech — помогаем технологиям помогать людям.
                              </p>

                            </div> */}

                        {/* Values */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='flex gap-4 p-6 app-card rounded-xl hover:border-primary/20 transition-colors'>
                                <div className='w-12 h-12 bg-primary-foreground text-card rounded-xl flex items-center justify-center flex-shrink-0'>
                                    <Target className='w-6 h-6' />
                                </div>
                                <div>
                                    <h3 className='text-3xl font-semibold text-primary-foreground transition-colors leading-tight break-words mb-2'>
                                        Миссия
                                    </h3>
                                    <p className='text-foreground text-sm'>
                                        Делать полезные сервисы
                                        <br /> доступными, понятными и<br /> выгодными для каждого.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 p-6 app-card rounded-xl hover:border-primary/20 transition-colors'>
                                <div className='w-12 h-12 bg-primary-foreground text-card rounded-xl flex items-center justify-center flex-shrink-0'>
                                    <Award className='w-6 h-6' />
                                </div>
                                <div>
                                    <h3 className='text-3xl font-semibold text-primary-foreground transition-colors leading-tight break-words mb-2'>
                                        Качество
                                    </h3>
                                    <p className='text-foreground text-sm'>
                                        Высочайшие стандарты
                                        <br /> разработки и обслуживания
                                        <br /> в каждом проекте.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 p-6 app-card rounded-xl hover:border-primary/20 transition-colors'>
                                <div className='w-12 h-12 bg-primary-foreground text-card rounded-xl flex items-center justify-center flex-shrink-0'>
                                    <Heart className='w-6 h-6' />
                                </div>
                                <div>
                                    <h3 className='text-3xl font-semibold text-primary-foreground transition-colors leading-tight break-words mb-2'>
                                        Забота
                                    </h3>
                                    <p className='text-foreground text-sm'>
                                        Персональный подход
                                        <br /> и поддержка наших
                                        <br /> клиентов.
                                    </p>
                                </div>
                            </div>
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
