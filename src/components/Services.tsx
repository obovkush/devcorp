import {Code, Smartphone, Building2, Zap, CheckCircle, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useTheme} from '@/contexts/ThemeContext';
import {useScrollAnimation} from '@/hooks/useScrollAnimation';

const Services = () => {
    const {currentTheme} = useTheme();
    const {elementRef, isVisible} = useScrollAnimation();

    const services = [
        {
            icon: Code,
            title: 'Веб-разработка',
            // description: "Создаем современные веб-приложения для роста бизнеса.",
            features: [
                '+ Адаптивный дизайн для всех устройств',
                '+ Высокая производительность и скорость загрузки',
                '+ Безопасность и защита данных',
                '+ Интеграция с внешними сервисами и API',
            ],
            // benefits: "От консалтинга до запуска — полный цикл разработки с поддержкой на всех этапах."
        },
        {
            icon: Smartphone,
            title: 'Мобильные приложения',
            // description: "Разрабатываем нативные и кроссплатформенные приложения.",
            features: [
                '+ iOS и Android разработка',
                '+ Кроссплатформенные решения (Kotlin Multi Platform)',
                '+ Интуитивный UX/UI дизайн',
                '+ Интеграция платежей и аналитики',
            ],
            // benefits: "От идеи до публикации в App Store и Google Play — приложения, которые скачивают и используют ежедневно."
        },
        {
            icon: Building2,
            title: 'Корпоративные системы',
            // description: "Строим масштабируемые корпоративные решения.",
            features: [
                '+ Системы управления документооборотом',
                '+ CRM и ERP интеграции',
                '+ Платформы для командной работы',
                '+ Безопасное хранение и обработка данных',
            ],
            // benefits: "Централизованное управление бизнес-процессами с аналитикой и отчетностью в реальном времени."
        },
        {
            icon: Zap,
            title: 'Автоматизация бизнес-процессов',
            // description: "Устраняем рутину и повышаем продуктивность команды.",
            features: [
                '+ Автоматизация рабочих процессов',
                '+ Интеграция между системами',
                '+ Автоматические отчеты и уведомления',
                '+ Мониторинг и аналитика процессов',
            ],
            // benefits: "Экономия времени сотрудников, упрощая рутинные задачи и фокусируясь на стратегических целях."
        },
    ];

    const getSectionClass = () => {
        switch (currentTheme) {
            case 'dark':
                return 'pt-20 pb-60 border-b border-border/50';
            default:
                return 'py-20 bg-muted/30';
        }
    };

    return (
        <section id='services' className={`section ${getSectionClass()}`}>
            <div ref={elementRef} className='container mx-auto px-4 lg:px-40'>
                <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
                    <h2 className='section-title mb-2'>Наши услуги</h2>
                    <p className='section-description font-inter-medium text-foreground max-w-3xl mx-auto xs:text-xs'>
                        Комплексные решения для цифровой трансформации вашего бизнеса
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={index}
                                className={`app-card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col ${
                                    isVisible ? 'scroll-fade-up' : ''
                                }`}
                                style={{animationDelay: `${index * 0.15}s`}}
                            >
                                <CardHeader className='flex items-start lg:h-24 md:items-center pb-6 sm:pb-0'>
                                    <div className='flex items-center gap-3 md:gap-4 w-full'>
                                        <div className='p-3 rounded-xl bg-primary-foreground text-card transition-colors flex-shrink-0'>
                                            <Icon className='w-4 h-4 sm:w-8 sm:h-8' />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <CardTitle className='text-xl sm:text-2xl font-semibold text-primary-foreground transition-colors leading-tight break-words'>
                                                {service.title}
                                            </CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className='flex flex-col flex-grow space-y-6'>
                                    <div className='space-y-3 ml-11 sm:ml-16 pl-2 pr-6'>
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className='flex items-start gap-3'>
                                                <span className='card-content text-primary text-sm'>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
