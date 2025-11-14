import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import mapImg from "@/assets/Map.png";
import pointImg from "@/assets/Point.png";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  description: string;
  // percentage coordinates relative to container (0-100)
  coordinates: { xPercent: number; yPercent: number };
}

const teamMembers: TeamMember[] = [
  {
    id: 'spain-valencia',
    name: 'Артём',
    role: 'Fullstack Developer',
    location: 'Валенсия, Испания',
    description: 'Серверная разработка и базы данных. Опыт работы с международными проектами.',
    coordinates: { xPercent: 12.5, yPercent: 52 }
  },
  {
    id: 'moscow',
    name: 'Роман',
    role: 'Fullstack Developer',
    location: 'Москва, Россия',
    description: 'Серверная разработка и базы данных. Клиент-серверные приложения.',
    coordinates: { xPercent: 30, yPercent: 37 }
  },
  {
    id: 'kirov',
    name: 'Лёха',
    role: 'Backend Developer',
    location: 'Киров, Россия',
    description: 'Серверная разработка и базы данных. Инфраструктура.',
    coordinates: { xPercent: 36, yPercent: 33 }
  },
  {
    id: 'krasnoyarsk',
    name: 'Сергей',
    role: 'Tech Lead',
    location: 'Красноярск, Россия',
    description: 'Архитектура и автоматизация развертывания. Управление командой.',
    coordinates: { xPercent: 52, yPercent: 45 }
  },
  {
    id: 'khabarovsk',
    name: 'Олег',
    role: 'Frontend Developer',
    location: 'Хабаровск, Россия',
    description: 'Разработка интерфейсов.',
    coordinates: { xPercent: 74, yPercent: 45 }
  },
  {
    id: 'moscow-2',
    name: 'Максим',
    role: 'Backend Developer',
    location: 'Москва, Россия',
    description: 'Серверная разработка и базы данных. Мобильные приложения',
    coordinates: { xPercent: 29, yPercent: 38 }
  },
  {
    id: 'saint-petersburg',
    name: 'Алёна',
    role: 'QA',
    location: 'Санкт-Петербург, Россия',
    description: 'Обеспечение качества программного обеспечения',
    coordinates: { xPercent: 24, yPercent: 30 }
  }
];

const TeamMap = () => {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150); // slight delay so map appears first
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      <Card className="contact-card p-6">
        <CardContent className="p-0">
          <h2 className="section-title text-foreground mb-6 text-center">
            Наша команда
          </h2>

          {/* Map with falling points */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
              <img
                src={mapImg}
                alt="Евразия - карта"
                className="w-full h-auto rounded-xl border border-border"
              />

              {/* Points positioned relative to the image */}
              {teamMembers.map((member, index) => {
                const left = `${member.coordinates.xPercent}%`;
                const top = `${member.coordinates.yPercent}%`;
                const delayMs = 150 + index * 120; // staggered
                return (
                  <div
                    key={member.id}
                    className="absolute"
                    style={{
                      left,
                      top,
                      transform: mounted ? 'translate(-50%, -50%)' : 'translate(-50%, calc(-50% - 16px))',
                      opacity: mounted ? 1 : 0,
                      transition: `transform 500ms ease, opacity 500ms ease ${delayMs}ms`,
                      zIndex: 2,
                    }}
                    onMouseEnter={() => setHoveredMember(member)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                  <img
                    src={pointImg}
                    alt={member.name}
                    className="cursor-pointer drop-shadow"
                    style={{
                      width: 'clamp(12px, 2vw, 28px)',
                      height: 'clamp(16px, 2.8vw, 40px)',
                    }}
                  />
                  </div>
                );
              })}
              {/* Hover tooltip */}
              {hoveredMember && (
                <div
                  className="absolute bg-background border border-border rounded-lg shadow-lg p-3 md:p-4 z-10 max-w-xs md:max-w-sm"
                  style={{
                    left: hoveredMember.coordinates.xPercent < 20 ? '1rem' :
                          hoveredMember.coordinates.xPercent > 80 ? 'auto' :
                          `${hoveredMember.coordinates.xPercent}%`,
                    right: hoveredMember.coordinates.xPercent > 80 ? '1rem' : 'auto',
                    top: `${hoveredMember.coordinates.yPercent}%`,
                    transform: hoveredMember.coordinates.xPercent < 20 ? 'translate(0, -120%)' :
                              hoveredMember.coordinates.xPercent > 80 ? 'translate(0, -120%)' :
                              'translate(-50%, -120%)',
                    maxWidth: 'calc(100vw - 2rem)',
                  }}
                >
                  <h4 className="font-medium text-foreground mb-1 text-sm md:text-base">{hoveredMember.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">{hoveredMember.role}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{hoveredMember.location}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{hoveredMember.description}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMap;
