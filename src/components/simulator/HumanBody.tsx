
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface BodyPartProps {
  id: string;
  d: string;
  name: string;
  onSelect: (id: string, name: string) => void;
  isSelected: boolean;
}

const BodyPart = ({ id, d, name, onSelect, isSelected }: BodyPartProps) => {
  return (
    <path
      id={id}
      d={d}
      className={cn(
        "body-highlight",
        isSelected ? "fill-medical-teal" : "fill-gray-300"
      )}
      onClick={() => onSelect(id, name)}
    />
  );
};

interface HumanBodyProps {
  onSelectBodyPart: (id: string, name: string) => void;
  selectedParts: string[];
}

const HumanBody = ({ onSelectBodyPart, selectedParts }: HumanBodyProps) => {
  const [view, setView] = useState<'front' | 'back'>('front');

  // Simplified body map with key body parts
  const bodyParts = {
    front: [
      { id: 'head', name: 'Head', d: 'M100,30 C130,30 140,60 140,75 C140,90 130,100 100,100 C70,100 60,90 60,75 C60,60 70,30 100,30' },
      { id: 'chest', name: 'Chest', d: 'M70,100 L130,100 L140,140 L130,180 L70,180 L60,140 Z' },
      { id: 'abdomen', name: 'Abdomen', d: 'M70,180 L130,180 L130,230 L70,230 Z' },
      { id: 'left-arm', name: 'Left Arm', d: 'M60,100 L70,100 L60,140 L50,180 L40,230 L30,250 L20,240 L30,220 L40,180 L50,140 Z' },
      { id: 'right-arm', name: 'Right Arm', d: 'M130,100 L140,100 L150,140 L160,180 L170,230 L180,250 L190,240 L180,220 L170,180 L160,140 Z' },
      { id: 'left-leg', name: 'Left Leg', d: 'M70,230 L100,230 L100,330 L90,380 L80,380 L70,330 Z' },
      { id: 'right-leg', name: 'Right Leg', d: 'M100,230 L130,230 L130,330 L120,380 L110,380 L100,330 Z' },
    ],
    back: [
      { id: 'head-back', name: 'Head', d: 'M100,30 C130,30 140,60 140,75 C140,90 130,100 100,100 C70,100 60,90 60,75 C60,60 70,30 100,30' },
      { id: 'upper-back', name: 'Upper Back', d: 'M70,100 L130,100 L140,140 L130,180 L70,180 L60,140 Z' },
      { id: 'lower-back', name: 'Lower Back', d: 'M70,180 L130,180 L130,230 L70,230 Z' },
      { id: 'left-arm-back', name: 'Left Arm', d: 'M60,100 L70,100 L60,140 L50,180 L40,230 L30,250 L20,240 L30,220 L40,180 L50,140 Z' },
      { id: 'right-arm-back', name: 'Right Arm', d: 'M130,100 L140,100 L150,140 L160,180 L170,230 L180,250 L190,240 L180,220 L170,180 L160,140 Z' },
      { id: 'left-leg-back', name: 'Left Leg', d: 'M70,230 L100,230 L100,330 L90,380 L80,380 L70,330 Z' },
      { id: 'right-leg-back', name: 'Right Leg', d: 'M100,230 L130,230 L130,330 L120,380 L110,380 L100,330 Z' },
    ]
  };

  const currentBodyParts = view === 'front' ? bodyParts.front : bodyParts.back;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 bg-gray-100 rounded-full p-1">
        <div className="flex">
          <button
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium",
              view === 'front' ? "bg-white shadow-sm text-medical-teal" : "text-gray-500"
            )}
            onClick={() => setView('front')}
          >
            Front View
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium",
              view === 'back' ? "bg-white shadow-sm text-medical-teal" : "text-gray-500"
            )}
            onClick={() => setView('back')}
          >
            Back View
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-md w-full">
        <svg
          viewBox="0 0 200 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[500px]"
        >
          {currentBodyParts.map((part) => (
            <BodyPart
              key={part.id}
              id={part.id}
              d={part.d}
              name={part.name}
              onSelect={onSelectBodyPart}
              isSelected={selectedParts.includes(part.id)}
            />
          ))}
        </svg>
      </div>
      
      <p className="mt-4 text-sm text-gray-500">
        Click on a body part to select it
      </p>
    </div>
  );
};

export default HumanBody;
