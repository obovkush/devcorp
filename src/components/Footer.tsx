import {Copy, Check} from 'lucide-react';
import {useCopyToClipboard} from '@/hooks/useCopyToClipboard';
import {CONTACT_INFO} from '@/constants/contact';
import logoIcon from '@/assets/icons/logo.svg';
import TelegramIcon from '../assets/icons/telegram.svg';
import WhatsappIcon from '../assets/icons/whatsapp.svg';

const Footer = () => {
    const {copyToClipboard, isCopied} = useCopyToClipboard();

    return (
        <footer className='footer-app py-12'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Logo and Description */}
                    <div className='col-span-1 md:col-span-2'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <img src={logoIcon} alt='SOLARM Tech' className='h-6 w-auto md:h-7 object-contain' />
                            <span className='font-bruno-ace text-sm text-white'>SOLARM Tech</span>
                        </div>
                        <p className='font-inter text-sm max-w-md'>Помогаем технологиям помогать бизнесу.</p>
                    </div>

                    {/* Services */}
                    <div>
                        {/* <h4 className="font-inter-medium text-primary-foreground mb-4">Услуги</h4>
                              <ul className="space-y-2">
                                <li>
                                  <a
                                    href="#services"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="transition-colors hover:text-primary-foreground"
                                  >
                                    Веб-разработка
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#services"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="transition-colors hover:text-primary-foreground"
                                  >
                                    Мобильные приложения
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#services"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="transition-colors hover:text-primary-foreground"
                                  >
                                    Корпоративные системы
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#services"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="transition-colors hover:text-primary-foreground"
                                  >
                                    Автоматизация бизнес-процессов
                                  </a>
                                </li>
                              </ul> */}
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className='font-inter-medium text-primary-foreground mb-4'>Контакты</h4>
                        <ul className='space-y-3'>
                            <li>
                                <div className='flex gap-5 items-center justify-start group'>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className='font-inter text-sm muted-text transition-colors'>
                                        {CONTACT_INFO.email}
                                    </a>
                                    <button
                                        onClick={() => copyToClipboard(CONTACT_INFO.email)}
                                        className='opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded'
                                    >
                                        {isCopied(CONTACT_INFO.email) ? (
                                            <Check className='w-3 h-3 text-white' />
                                        ) : (
                                            <Copy className='w-3 h-3 text-white/60 hover:text-foreground' />
                                        )}
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-3 items-center justify-start group'>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className='font-inter text-sm muted-text transition-colors'>
                                        {CONTACT_INFO.phone}
                                    </a>
                                    <button
                                        onClick={() => copyToClipboard(CONTACT_INFO.phone)}
                                        className='opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded'
                                    >
                                        {isCopied(CONTACT_INFO.phone) ? (
                                            <Check className='w-3 h-3 text-white' />
                                        ) : (
                                            <Copy className='w-3 h-3 text-white/60 hover:text-foreground' />
                                        )}
                                    </button>
                                </div>
                            </li>
                        </ul>

                        {/* Messengers */}
                        <div className='flex items-center gap-6 mt-6'>
                            <a
                                href={CONTACT_INFO.messengers.whatsapp}
                                target='_blank'
                                rel='noopener noreferrer'
                                title='WhatsApp'
                                className='messenger-icon'
                            >
                                <img src={WhatsappIcon} alt='WhatsappLink' />
                            </a>
                            <a
                                href={CONTACT_INFO.messengers.telegram}
                                target='_blank'
                                rel='noopener noreferrer'
                                title='Telegram'
                                className='messenger-icon'
                            >
                                <img src={TelegramIcon} alt='TelegramLink' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border-t border-white/50 mt-8 pt-8 text-center'>
                    {/* <p className='font-bruno-ace muted-text'>© 2025 SOLARM Tech. Все права защищены.</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
