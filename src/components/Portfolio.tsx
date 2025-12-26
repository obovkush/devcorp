import {Badge} from '@/components/ui/badge';
import {useTheme} from '@/contexts/ThemeContext';
import {Search} from 'lucide-react';
import {useScrollAnimation} from '@/hooks/useScrollAnimation';
import ImageGallery from './ImageGallery';
import {useState} from 'react';
import {projects} from '@/data/projects';

const Portfolio = () => {
    const {currentTheme} = useTheme();
    const {elementRef, isVisible} = useScrollAnimation();
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

    const getSectionClass = () => {
        switch (currentTheme) {
            case 'dark':
                return 'py-20 bg-background';
            default:
                return 'py-20 bg-background';
        }
    };

    const openGallery = (images: string[], initialIndex: number = 0) => {
        setGalleryImages(images);
        setGalleryInitialIndex(initialIndex);
        setGalleryOpen(true);
    };

    const closeGallery = () => {
        setGalleryOpen(false);
    };

    // Разделяем проекты на мобильные и десктопные
    const mobileProjects = projects.filter((p) => p.type === 'mobile');
    const desktopProjects = projects.filter((p) => p.type === 'desktop');

    return (
        <section id='portfolio' className={getSectionClass()}>
            <div ref={elementRef} className='container mx-auto px-4 lg:px-8'>
                <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
                    <h2 className='section-title mb-2'>ПОРТФОЛИО</h2>
                </div>

                {/* Верхний ряд - Мобильные приложения */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                    {mobileProjects.map((project, index) => (
                        <div
                            key={index}
                            className='app-card group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden relative'
                            onClick={() => openGallery(project.images, 0)}
                        >
                            <div className='relative overflow-hidden aspect-[4/3]'>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    loading='lazy'
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='bg-background/80 backdrop-blur-sm p-3 rounded-full'>
                                        <Search className='w-6 h-6 text-primary' />
                                    </div>
                                </div>

                                {/* Категория - верхний левый угол */}
                                <div className='absolute top-4 left-4'>
                                    <Badge
                                        variant='secondary'
                                        className='bg-background/90 text-foreground backdrop-blur-sm font-inter-medium text-xs uppercase'
                                    >
                                        {project.category}
                                    </Badge>
                                </div>

                                {/* Год - верхний правый угол */}
                                <div className='absolute top-4 right-4'>
                                    <Badge
                                        variant='outline'
                                        className='bg-background/90 border-foreground/20 text-foreground backdrop-blur-sm font-inter-medium text-xs'
                                    >
                                        {project.year}
                                    </Badge>
                                </div>
                            </div>

                            {/* Название проекта */}
                            <div className='p-6'>
                                <h3 className='font-inter-bold text-lg text-foreground uppercase'>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Нижний ряд - Десктопные приложения */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {desktopProjects.map((project, index) => (
                        <div
                            key={index}
                            className='app-card group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden relative'
                            onClick={() => openGallery(project.images, 0)}
                        >
                            <div className='relative overflow-hidden aspect-[4/3]'>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    loading='lazy'
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='bg-background/80 backdrop-blur-sm p-3 rounded-full'>
                                        <Search className='w-6 h-6 text-primary' />
                                    </div>
                                </div>

                                {/* Категория - верхний левый угол */}
                                <div className='absolute top-4 left-4'>
                                    <Badge
                                        variant='secondary'
                                        className='bg-background/90 text-foreground backdrop-blur-sm font-inter-medium text-xs uppercase'
                                    >
                                        {project.category}
                                    </Badge>
                                </div>

                                {/* Год - верхний правый угол */}
                                <div className='absolute top-4 right-4'>
                                    <Badge
                                        variant='outline'
                                        className='bg-background/90 border-foreground/20 text-foreground backdrop-blur-sm font-inter-medium text-xs'
                                    >
                                        {project.year}
                                    </Badge>
                                </div>
                            </div>

                            {/* Название проекта */}
                            <div className='p-6'>
                                <h3 className='font-inter-bold text-lg text-foreground uppercase'>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Gallery Modal */}
            <ImageGallery images={galleryImages} isOpen={galleryOpen} onClose={closeGallery} initialIndex={galleryInitialIndex} />
        </section>
    );
};

export default Portfolio;
