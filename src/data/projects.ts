import smeta0 from '@/assets/img/smeta/smeta-0.png';
import smeta1 from '@/assets/img/smeta/smeta-1.png';
import smeta2 from '@/assets/img/smeta/smeta-2.png';
import smeta3 from '@/assets/img/smeta/smeta-3.png';
import smeta4 from '@/assets/img/smeta/smeta-4.png';
import smeta5 from '@/assets/img/smeta/smeta-5.png';
import sot0 from '@/assets/img/sot/sot-0.png';
import sot1 from '@/assets/img/sot/sot-1.png';
import sot2 from '@/assets/img/sot/sot-2.png';
import sot3 from '@/assets/img/sot/sot-3.png';
import sot4 from '@/assets/img/sot/sot-4.png';
import sot5 from '@/assets/img/sot/sot-5.png';
import sot6 from '@/assets/img/sot/sot-6.png';
import sot7 from '@/assets/img/sot/sot-7.png';
import sot8 from '@/assets/img/sot/sot-8.png';
import sot9 from '@/assets/img/sot/sot-9.png';
import sot10 from '@/assets/img/sot/sot-10.png';
import sot11 from '@/assets/img/sot/sot-11.png';
import sot12 from '@/assets/img/sot/sot-12.png';
import sot13 from '@/assets/img/sot/sot-13.png';
import sot14 from '@/assets/img/sot/sot-14.png';
import sot15 from '@/assets/img/sot/sot-15.png';
import sot16 from '@/assets/img/sot/sot-16.png';
import sot17 from '@/assets/img/sot/sot-17.png';
import asia0 from '@/assets/img/asia/asia-0.png';
import asia1 from '@/assets/img/asia/asia-1.png';
import asia2 from '@/assets/img/asia/asia-2.png';
import asia3 from '@/assets/img/asia/asia-3.png';
import asia4 from '@/assets/img/asia/asia-4.png';
import asia5 from '@/assets/img/asia/asia-5.png';
import parfume0 from '@/assets/img/parfume/parfume-0.png';
import parfume1 from '@/assets/img/parfume/parfume-1.png';
import parfume2 from '@/assets/img/parfume/parfume-2.png';
import parfume3 from '@/assets/img/parfume/parfume-3.png';
import parfume4 from '@/assets/img/parfume/parfume-4.png';
import parfume5 from '@/assets/img/parfume/parfume-5.png';
import parfume6 from '@/assets/img/parfume/parfume-6.png';
import parfume7 from '@/assets/img/parfume/parfume-7.png';
import bakery0 from '@/assets/img/bakery/bakery-0.png';
import bakery1 from '@/assets/img/bakery/bakery-1.png';
import bakery2 from '@/assets/img/bakery/bakery-2.png';
import bakery3 from '@/assets/img/bakery/bakery-3.png';
import bakery4 from '@/assets/img/bakery/bakery-4.png';
import bakery5 from '@/assets/img/bakery/bakery-5.png';

export interface Project {
    title: string;
    description: string;
    mainImage: string;
    images: string[];
    category: string;
    year: string;
    type: 'mobile' | 'desktop';
}

export const projects: Project[] = [
    {
        title: 'МАГАЗИН ПАРФЮМЕРИИ',
        description: 'Мобильное приложение для покупки парфюмерии и косметики с доставкой на дом.',
        mainImage: parfume0,
        images: [parfume1, parfume2, parfume3, parfume4, parfume5, parfume6, parfume7],
        category: 'E-COMMERCE',
        year: '2024',
        type: 'mobile',
    },
    {
        title: 'БРИТАНСКИЕ ПЕКАРНИ',
        description: 'Мобильное приложение для заказа свежей выпечки и десертов из британских пекарен.',
        mainImage: bakery0,
        images: [bakery1, bakery2, bakery3, bakery4, bakery5],
        category: 'FOOD & BEVERAGE',
        year: '2024',
        type: 'mobile',
    },
    {
        title: 'МАГАЗИН АЗИАТСКОЙ КУХНИ',
        description: 'Мобильное приложение для заказа блюд из кафе и ресторанов азиатской кухни.',
        mainImage: asia0,
        images: [asia1, asia2, asia3, asia4, asia5],
        category: 'FOOD & BEVERAGE',
        year: '2024',
        type: 'mobile',
    },
    {
        title: 'КАЛЬКУЛЯТОР СМЕТЫ',
        description: 'Комплексная платформа для расчета сметных работ с формированием печатных форм.',
        mainImage: smeta0,
        images: [smeta1, smeta2, smeta3, smeta4, smeta5],
        category: 'ENTERPRISE',
        year: '2025',
        type: 'desktop',
    },
    {
        title: 'СИСТЕМЫ ОХРАНЫ ТРУДА',
        description: 'Мульти-модульная система автоматизации процессов и ведения документов по охране труда.',
        mainImage: sot0,
        images: [sot1, sot2, sot3, sot4, sot5, sot6, sot7, sot8, sot9, sot10, sot11, sot12, sot13, sot14, sot15, sot16, sot17],
        category: 'ENTERPRISE',
        year: '2024',
        type: 'desktop',
    },
];
