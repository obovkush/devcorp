import {Copy, Check} from 'lucide-react';
import {useCopyToClipboard} from '@/hooks/useCopyToClipboard';
import {CONTACT_INFO} from '@/constants/contact';
import logoDark from '@/assets/icons/logo.svg';

const Footer = () => {
    const {copyToClipboard, isCopied} = useCopyToClipboard();

    return (
        <footer className='footer-app py-12'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Logo and Description */}
                    <div className='col-span-1 md:col-span-2'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <img src={logoDark} alt='SOLARM Tech' className='h-6 w-auto md:h-7 object-contain' />
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
                        <div className='flex items-center gap-3 mt-6'>
                            <a
                                href={CONTACT_INFO.messengers.whatsapp}
                                target='_blank'
                                rel='noopener noreferrer'
                                title='WhatsApp'
                                className='messenger-icon'
                            >
                                <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M25.6703 21.0175C25.3186 20.8427 23.0329 19.794 22.6813 19.6192C22.3296 19.4444 21.978 19.4444 21.6263 19.794C21.2747 20.1436 20.5714 21.1923 20.2197 21.5418C20.0439 21.8914 19.6923 21.8914 19.3406 21.7166C18.1099 21.1923 16.8791 20.4931 15.8241 19.6192C14.945 18.7453 14.0659 17.6966 13.3626 16.6479C13.1868 16.2984 13.3626 15.9488 13.5384 15.774C13.7143 15.5993 13.8901 15.2497 14.2417 15.0749C14.4176 14.9001 14.5934 14.5506 14.5934 14.3758C14.7692 14.201 14.7692 13.8514 14.5934 13.6767C14.4176 13.5019 13.5384 11.4045 13.1868 10.5306C13.011 9.30712 12.6593 9.30712 12.3077 9.30712H11.4286C11.0769 9.30712 10.5494 9.65668 10.3736 9.83146C9.31866 10.8801 8.79119 12.1036 8.79119 13.5019C8.96702 15.0749 9.49449 16.6479 10.5494 18.0462C12.4835 20.8427 14.945 23.1149 17.934 24.5131C18.8132 24.8627 19.5164 25.2122 20.3956 25.387C21.2747 25.7366 22.1538 25.7366 23.2087 25.5618C24.4395 25.387 25.4945 24.5131 26.1978 23.4644C26.5494 22.7653 26.5494 22.0662 26.3736 21.367L25.6703 21.0175ZM30.0659 5.11236C23.2087 -1.70412 12.1318 -1.70412 5.27472 5.11236C-0.351648 10.7054 -1.40659 19.2697 2.46153 26.0861L0 35L9.31866 32.5531C11.956 33.9513 14.7692 34.6504 17.5824 34.6504C27.2527 34.6504 34.9889 26.96 34.9889 17.3471C35.1648 12.8027 33.2307 8.43321 30.0659 5.11236ZM25.3186 29.5818C23.0329 30.98 20.3956 31.8539 17.5824 31.8539C14.945 31.8539 12.4835 31.1548 10.1978 29.9313L9.67031 29.5818L4.21977 30.98L5.62636 25.7366L5.27472 25.2122C1.05494 18.221 3.16483 9.4819 10.022 5.11236C16.8791 0.742822 25.6703 3.01498 29.8901 9.65668C34.1098 16.4732 32.1758 25.387 25.3186 29.5818Z'
                                        fill='white'
                                        fill-opacity='0.86'
                                    />
                                </svg>
                            </a>
                            <a
                                href={CONTACT_INFO.messengers.telegram}
                                target='_blank'
                                rel='noopener noreferrer'
                                title='Telegram'
                                className='messenger-icon'
                            >
                                <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M17.5 6.02943e-08C14.0388 6.02943e-08 10.6554 1.02636 7.77753 2.94928C4.89967 4.87221 2.65665 7.60533 1.33212 10.803C0.00758247 14.0007 -0.338976 17.5194 0.336265 20.9141C1.01151 24.3087 2.67822 27.4269 5.12564 29.8744C7.57306 32.3218 10.6913 33.9885 14.0859 34.6637C17.4806 35.339 20.9993 34.9924 24.197 33.6679C27.3947 32.3433 30.1278 30.1003 32.0507 27.2225C33.9736 24.3446 35 20.9612 35 17.5C35.0002 15.2018 34.5477 12.9261 33.6683 10.8028C32.7889 8.67953 31.4999 6.75027 29.8748 5.1252C28.2497 3.50014 26.3205 2.21111 24.1972 1.33172C22.0739 0.45233 19.7982 -0.000190713 17.5 6.02943e-08ZM23.0641 26.5168C22.9986 26.6801 22.899 26.8276 22.7718 26.9492C22.6447 27.0709 22.493 27.164 22.327 27.2222C22.1609 27.2805 21.9843 27.3026 21.809 27.287C21.6338 27.2714 21.4638 27.2186 21.3106 27.1319L16.56 23.4405L13.5109 26.2535C13.4402 26.3058 13.3574 26.3394 13.2703 26.3513C13.1831 26.3632 13.0943 26.353 13.0122 26.3216L13.5967 21.0918L13.6154 21.1067L13.6273 21.0034C13.6273 21.0034 22.1761 13.2203 22.5243 12.8887C22.8769 12.5579 22.7606 12.4862 22.7606 12.4862C22.7806 12.0827 22.1279 12.4862 22.1279 12.4862L10.801 19.7732L6.0839 18.1667C6.0839 18.1667 5.3594 17.9069 5.29115 17.3355C5.2194 16.7685 6.10751 16.4605 6.10751 16.4605L24.8623 9.00986C24.8623 9.00986 26.404 8.32295 26.404 9.4605L23.0641 26.5168Z'
                                        fill='white'
                                        fill-opacity='0.86'
                                    />
                                </svg>
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
