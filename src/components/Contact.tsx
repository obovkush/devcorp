import {Card, CardContent} from '@/components/ui/card';
import {Phone, Mail, MapPin, HelpCircle, Copy, Check} from 'lucide-react';
import {useScrollAnimation} from '@/hooks/useScrollAnimation';
import {useCopyToClipboard} from '@/hooks/useCopyToClipboard';
import {CONTACT_INFO} from '@/constants/contact';
import TelegramIcon from '../assets/icons/telegram.svg'
import WhatsappIcon from '../assets/icons/whatsapp.svg'

const Contact = () => {
    const {elementRef, isVisible} = useScrollAnimation();
    const {copyToClipboard, isCopied} = useCopyToClipboard();
    const whatsappImg = '/images/whatsapp.png';
    const telegramImg = '/images/telegram.png';
    return (
        <section id='contact' className='py-20'>
            <div ref={elementRef} className='container mx-auto px-4'>
                {/* Header Section */}
                <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
                    <h2 className='section-title mb-2'>Свяжитесь с нами</h2>
                    <p className='font-inter-medium text-foreground max-w-4xl mx-auto'>
                        Мы ценим ваши отзывы и запросы. Свяжитесь с нашей командой
                        <br />
                        для получения любой помощи или информации о наших услугах.
                    </p>
                </div>

                {/* Contact Details Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'scroll-fade-up scroll-animation-delay-100' : ''}`}>
                    {/* Phone */}
                    <div className='app-card p-8 text-center space-y-4'>
                        <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Phone className='w-8 h-8 text-card' />
                        </div>
                        <h3 className='font-inter text-3xl text-white'>Позвонить</h3>
                        <div className='space-y-3'>
                            <div className='relative flex items-center justify-center group'>
                                <a href={`tel:${CONTACT_INFO.phone}`} className='text-foreground hover:text-primary transition-colors'>
                                    {CONTACT_INFO.phone}
                                </a>
                                <button
                                    onClick={() => copyToClipboard(CONTACT_INFO.phone)}
                                    className='absolute opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary/10 rounded ml-2'
                                    style={{left: 'calc(50% + 70px)'}}
                                >
                                    {isCopied(CONTACT_INFO.phone) ? (
                                        <Check className='w-4 h-4 text-green-500' />
                                    ) : (
                                        <Copy className='w-4 h-4 text-muted-foreground hover:text-primary' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className='app-card p-8 text-center space-y-4'>
                        <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Mail className='w-8 h-8 text-card' />
                        </div>
                        <h3 className='font-inter text-3xl text-white'>Написать</h3>
                        <div className='space-y-3'>
                            <div className='relative flex items-center justify-center group'>
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className='text-inter text-foreground text-sm hover:text-primary transition-colors'
                                >
                                    {CONTACT_INFO.email}
                                </a>
                                <button
                                    onClick={() => copyToClipboard(CONTACT_INFO.email)}
                                    className='absolute opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary/10 rounded ml-10'
                                    style={{left: 'calc(50% + 70px)'}}
                                >
                                    {isCopied(CONTACT_INFO.email) ? (
                                        <Check className='w-4 h-4 text-green-500' />
                                    ) : (
                                        <Copy className='w-4 h-4 text-muted-foreground hover:text-primary' />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Messengers */}
                        <div className='flex items-center justify-center gap-10 mt-4'>
                            <a
                                href={CONTACT_INFO.messengers.whatsapp}
                                target='_blank'
                                rel='noopener noreferrer'
                                title='WhatsApp'
                                className='messenger-icon'
                            >
                                <img src={WhatsappIcon} alt="WhatsappLink" className='w-14 h-14' />
                            </a>
                            <a
                                href={CONTACT_INFO.messengers.telegram}
                                target='_blank'
                                rel='noopener noreferrer'
                                title='Telegram'
                                className='messenger-icon'
                            >
                                <img src={TelegramIcon} alt="TelegramLink" className='w-14 h-14' />
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className='app-card p-8 text-center space-y-4'>
                        <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto'>
                            <MapPin className='w-8 h-8 text-card' />
                        </div>
                        <h3 className='font-inter text-3xl text-white'>Встретиться</h3>
                        <p className='text-inter text-foreground text-sm'>{CONTACT_INFO.location}</p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className={`${isVisible ? 'scroll-fade-up scroll-animation-delay-200' : ''}`}>
                    <div className='text-center mb-12'>
                        <h3 className='section-title'>Часто задаваемые вопросы</h3>
                    </div>

                    <div className='relative max-w-4xl mx-auto p-8 md:p-10'>
                        <div className='relative flex flex-col gap-6'>
                            {[
                                {
                                    question: 'Какие отрасли обслуживает SOLARM Tech?',
                                    answer: 'Мы работаем с широким спектром отраслей и всегда подбираем технологии с учётом целей бизнеса, чтобы добиться измеримого результата.',
                                },
                                {
                                    question: 'Как узнать, какая услуга или технология подходит для моего бизнеса?',
                                    answer: 'Начинаем с консультации: обсуждаем задачи, ограничения и ожидания, после чего предлагаем оптимальный стек услуг и технологий.',
                                },
                                {
                                    question: 'Предлагаете ли вы индивидуальные решения?',
                                    answer: 'Да. Мы строим продукты итеративно, адаптируем стек под специфику проекта и фиксируем метрики эффективности на каждом этапе.',
                                },
                                {
                                    question: 'Как начать работу с SOLARM Tech?',
                                    answer: 'Свяжитесь удобным способом — мы подготовим роадмап, определим ресурсы и зафиксируем первые шаги в совместной работе.',
                                },
                            ].map((faq, index) => (
                                <div key={faq.question} className='space-y-4'>
                                    <div className='flex items-start gap-3 justify-end'>
                                        <div className=' bg-card px-5 py-4 shadow-lg rounded-lg'>
                                            <p className='font-inter-semibold text-base text-white mb-6'>{faq.question}</p>
                                            <p className='font-inter-semibold text-xs text-foreground leading-relaxed mb-6'>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
