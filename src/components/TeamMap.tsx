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
    description: 'Серверная разработка, опыт работы с международными проектами.',
    coordinates: { xPercent: 12.5, yPercent: 52 }
  },
  {
    id: 'moscow',
    name: 'Роман',
    role: 'Fullstack Developer',
    location: 'Москва, Россия',
    description: 'Клиент-сервисные приложения.',
    coordinates: { xPercent: 30, yPercent: 37 }
  },
  {
    id: 'kirov',
    name: 'Максим',
    role: 'Backend Developer',
    location: 'Киров, Россия',
    description: 'Серверная разработка и базы данных.',
    coordinates: { xPercent: 36, yPercent: 33 }
  },
  {
    id: 'krasnoyarsk',
    name: 'Сергей',
    role: 'Tech Lead',
    location: 'Красноярск, Россия',
    description: 'Архитектура и автоматизация развертывания. Упарвление командой.',
    coordinates: { xPercent: 52, yPercent: 45 }
  },
  {
    id: 'khabarovsk',
    name: 'Олег',
    role: 'Frontend Developer',
    location: 'Хабаровск, Россия',
    description: 'Создает интерфейсы.',
    coordinates: { xPercent: 74, yPercent: 45 }
  },
  {
    id: 'saint-petersburg',
    name: 'Лёха',
    role: 'Backend Developer',
    location: 'Москва, Россия',
    description: 'Просто хороший парень.',
    coordinates: { xPercent: 29, yPercent: 38 }
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
          <h3 className="text-2xl font-ksbistra text-foreground mb-6 text-center">
            Наша команда
          </h3>

          {/* Map with falling points */}
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={mapImg}
              alt="Евразия - карта"
              className="w-full h-auto rounded-xl border border-border"
            />

            {/* Points */}
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
                  <img src={pointImg} alt={member.name} className="w-5 h-7 cursor-pointer drop-shadow" />
                </div>
              );
            })}

            {/* Hover tooltip */}
            {hoveredMember && (
              <div
                className="absolute bg-background border border-border rounded-lg shadow-lg p-4 z-10 max-w-xs"
                style={{
                  left: `${hoveredMember.coordinates.xPercent}%`,
                  top: `${hoveredMember.coordinates.yPercent}%`,
                  transform: 'translate(-50%, -120%)'
                }}
              >
                <h4 className="font-medium text-foreground mb-1">{hoveredMember.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{hoveredMember.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{hoveredMember.location}</p>
                <p className="text-xs text-muted-foreground">{hoveredMember.description}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMap;
