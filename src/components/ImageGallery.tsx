import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw} from 'lucide-react';
import {Project} from '@/data/projects';

interface ImageGalleryProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

const ImageGallery = ({project, isOpen, onClose, initialIndex = 0}: ImageGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const images = project?.images || [];

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        if (!isOpen) {
            setIsZoomed(false);
            setZoomLevel(1);
        }
    }, [isOpen]);

    // Сброс индекса при изменении проекта
    useEffect(() => {
        setCurrentIndex(0);
    }, [project]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                goToPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                goToNext();
                break;
            case '+':
            case '=':
                e.preventDefault();
                handleZoomIn();
                break;
            case '-':
                e.preventDefault();
                handleZoomOut();
                break;
            case '0':
                e.preventDefault();
                handleResetZoom();
                break;
        }
    };

    // Функции для обработки свайпов
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentIndex < images.length - 1) {
            goToNext();
        }
        if (isRightSwipe && currentIndex > 0) {
            goToPrevious();
        }
    };

    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex, zoomLevel, onClose]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        handleResetZoom();
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        handleResetZoom();
    };

    const handleZoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 0.5, 3));
        setIsZoomed(true);
    };

    const handleZoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
        setIsZoomed(zoomLevel > 1);
    };

    const handleResetZoom = () => {
        setZoomLevel(1);
        setIsZoomed(false);
    };

    const handleImageClick = () => {
        if (zoomLevel === 1) {
            handleZoomIn();
        } else {
            handleResetZoom();
        }
    };

    const handleContactClick = () => {
        onClose();
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
        }, 100);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Закрываем галерею только если клик был именно на backdrop, а не на карточке
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen || !project) return null;

    return (
        <div className='fixed inset-0 z-50 bg-card/80 backdrop-blur-sm flex items-center justify-center p-4' onClick={handleBackdropClick}>
            <div className='w-full max-w-6xl bg-card overflow-hidden flex flex-col max-h-[90vh]' onClick={(e) => e.stopPropagation()}>
                {/* Top Section - Images with Navigation */}
                <div
                    className='relative flex-1 min-h-[60vh] flex items-center justify-center p-8 overflow-hidden'
                    style={{backgroundColor: 'hsl(176, 88%, 6%)'}}
                >
                    <div className='flex items-center gap-2 absolute right-0 top-0'>
                        {/* Image Counter */}
                        {images.length > 1 && (
                            <div className='text-white/70 text-sm bg-card backdrop-blur-sm px-3 rounded-md border border-border/30'>
                                {currentIndex + 1} / {images.length}
                            </div>
                        )}
                        {/* Zoom */}
                        {/* <Button variant='ghost' size='sm' onClick={handleZoomOut} className='text-white hover:bg-white/20'>
                            <ZoomOut className='w-4 h-4' />
                        </Button>
                        <Button variant='ghost' size='sm' onClick={handleResetZoom} className='text-white hover:bg-white/20'>
                            <RotateCcw className='w-4 h-4' />
                        </Button>
                        <Button variant='ghost' size='sm' onClick={handleZoomIn} className='text-white hover:bg-white/20'>
                            <ZoomIn className='w-4 h-4' />
                        </Button> */}
                        {/* Close button */}
                        <Button variant='ghost' size='sm' onClick={onClose} className='text-white hover:bg-white/5 rounded-none'>
                            <X className='w-4 h-4' />
                        </Button>
                    </div>
                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant='ghost'
                                onClick={goToPrevious}
                                className='absolute left-0 bottom-[-24px] sm:bottom-[-32px] -translate-y-1/2 z-10 text-white hover:bg-white/10 backdrop-blur-sm rounded-none p-0 w-12 h-12 [&_svg]:!w-10 [&_svg]:!h-10 sm:w-16 sm:h-16 sm:[&_svg]:!w-14 sm:[&_svg]:!h-14'
                                style={{backgroundColor: 'hsl(163, 76%, 13%)'}}
                            >
                                <ChevronLeft />
                            </Button>
                            <Button
                                variant='ghost'
                                onClick={goToNext}
                                className='absolute right-0 bottom-[-24px] sm:bottom-[-32px] -translate-y-1/2 z-10 text-white hover:bg-white/10 backdrop-blur-sm rounded-none p-0 w-12 h-12 [&_svg]:!w-10 [&_svg]:!h-10 sm:w-16 sm:h-16 sm:[&_svg]:!w-14 sm:[&_svg]:!h-14'
                                style={{backgroundColor: 'hsl(163, 76%, 13%)'}}
                            >
                                <ChevronRight />
                            </Button>
                        </>
                    )}
                    {/* Main Image */}
                    <div className='relative overflow-hidden '>
                        <img
                            src={images[currentIndex]}
                            alt={`${project.title} - Screenshot ${currentIndex + 1}`}
                            className={`h-full object-contain`}
                            style={{
                                transform: `scale(${zoomLevel})`,
                                maxWidth: '100%',
                            }}
                            onClick={handleImageClick}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        />
                    </div>
                </div>

                {/* Bottom Section - Project Info */}
                <div className='bg-card px-8 py-8'>
                    <div className='relative'>
                        {/* Category */}
                        <div className='mb-3'>
                            <span className='text-white font-inter text-11 sm:text-sm tracking-wider'>{project.category}</span>
                        </div>

                        {/* Title */}
                        <h2 className='font-inter text-base sm:text-3xl md:text-4xl text-white mb-6 pr-24'>{project.title}</h2>

                        {/* Description */}
                        <p className='font-inter-medium text-white/80 card-content sm:text-xl mb-6 pr-24'>{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
