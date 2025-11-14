import smeta1 from "@/assets/smeta/smeta-1.png";
import smeta2 from "@/assets/smeta/smeta-2.png";
import smeta3 from "@/assets/smeta/smeta-3.png";
import smeta4 from "@/assets/smeta/smeta-4.png";
import smeta5 from "@/assets/smeta/smeta-5.png";
import smeta6 from "@/assets/smeta/smeta-6.png";
import smeta7 from "@/assets/smeta/smeta-7.png";
import sot1 from "@/assets/sot/sot-1.png";
import sot2 from "@/assets/sot/sot-2.png";
import sot3 from "@/assets/sot/sot-3.png";
import sot4 from "@/assets/sot/sot-4.png";
import sot5 from "@/assets/sot/sot-5.png";
import sot6 from "@/assets/sot/sot-6.png";
import sot7 from "@/assets/sot/sot-7.png";
import sot8 from "@/assets/sot/sot-8.png";
import sot9 from "@/assets/sot/sot-9.png";
import sot10 from "@/assets/sot/sot-10.png";
import sot11 from "@/assets/sot/sot-11.png";
import asia1 from "@/assets/asia/asia-1.png";
import asia2 from "@/assets/asia/asia-2.png";
import asia3 from "@/assets/asia/asia-3.png";
import asia4 from "@/assets/asia/asia-4.png";
import asia5 from "@/assets/asia/asia-5.png";
import parfume1 from "@/assets/parfume/parfume-1.png";
import parfume2 from "@/assets/parfume/parfume-2.png";
import parfume3 from "@/assets/parfume/parfume-3.png";
import parfume4 from "@/assets/parfume/parfume-4.png";
import parfume5 from "@/assets/parfume/parfume-5.png";
import parfume6 from "@/assets/parfume/parfume-6.png";
import parfume7 from "@/assets/parfume/parfume-7.png";
import backery1 from "@/assets/backery/backery-1.png";
import backery2 from "@/assets/backery/backery-2.png";
import backery3 from "@/assets/backery/backery-3.png";
import backery4 from "@/assets/backery/backery-4.png";
import backery5 from "@/assets/backery/backery-5.png";

export interface Project {
  title: string;
  description: string;
  images: string[];
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Британские пекарни",
    description: "Мобильное приложение для заказа свежей выпечки и десертов из британских пекарен.",
    images: [backery1, backery2, backery3, backery4, backery5],
    category: "Food & beverage",
    year: "2024"
  },
  {
    title: "Системы охраны труда",
    description: "Мульти-модульная система автоматизации процессов и ведения документов по охране труда.",
    images: [sot1, sot2, sot3, sot4, sot5, sot6, sot7, sot8, sot9, sot10, sot11],
    category: "Enterprise",
    year: "2024"
  },
  {
    title: "Магазин парфюмерии",
    description: "Мобильное приложение для покупки парфюмерии и косметики с доставкой на дом.",
    images: [parfume1, parfume2, parfume3, parfume4, parfume5, parfume6, parfume7],
    category: "E-commerce",
    year: "2024"
  },
  {
    title: "Калькулятор сметы",
    description: "Комплексная платформа для расчета сметных работ с формированием печатных форм.",
    images: [smeta1, smeta2, smeta3, smeta4, smeta5, smeta6, smeta7],
    category: "Enterprise",
    year: "2025"
  },
  {
    title: "Магазин азиатской кухни",
    description: "Мобильное приложение для заказа блюд из кафе и ресторанов азиатской кухни.",
    images: [asia1, asia2, asia3, asia4, asia5],
    category: "Food & beverage",
    year: "2024"
  },
];
