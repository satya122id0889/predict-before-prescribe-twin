
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

  // More anatomically accurate body parts
  const bodyParts = {
    front: [
      { id: 'head', name: 'Head', d: 'M100,25 C130,25 140,45 140,65 C140,85 130,100 100,100 C70,100 60,85 60,65 C60,45 70,25 100,25' },
      { id: 'neck', name: 'Neck', d: 'M85,100 L115,100 L115,115 L85,115 Z' },
      { id: 'chest', name: 'Chest', d: 'M70,115 L130,115 L140,160 L130,175 L70,175 L60,160 Z' },
      { id: 'abdomen', name: 'Abdomen', d: 'M70,175 L130,175 L130,225 L70,225 Z' },
      { id: 'pelvis', name: 'Pelvis', d: 'M70,225 L130,225 L125,245 L75,245 Z' },
      { id: 'left-shoulder', name: 'Left Shoulder', d: 'M60,115 L70,115 L70,135 L60,135 Z' },
      { id: 'right-shoulder', name: 'Right Shoulder', d: 'M130,115 L140,115 L140,135 L130,135 Z' },
      { id: 'left-arm', name: 'Left Arm', d: 'M60,135 L70,135 L60,175 L50,200 L40,230 L30,245 L20,235 L30,220 L40,195 L50,165 Z' },
      { id: 'right-arm', name: 'Right Arm', d: 'M130,135 L140,135 L150,165 L160,195 L170,220 L180,235 L170,245 L160,230 L150,200 L140,175 Z' },
      { id: 'left-hand', name: 'Left Hand', d: 'M30,245 L20,235 L15,245 L10,255 L20,260 L30,255 Z' },
      { id: 'right-hand', name: 'Right Hand', d: 'M170,245 L180,235 L185,245 L190,255 L180,260 L170,255 Z' },
      { id: 'left-thigh', name: 'Left Thigh', d: 'M75,245 L100,245 L100,300 L85,300 L75,300 Z' },
      { id: 'right-thigh', name: 'Right Thigh', d: 'M100,245 L125,245 L125,300 L115,300 L100,300 Z' },
      { id: 'left-leg', name: 'Left Leg', d: 'M75,300 L85,300 L85,360 L75,370 L65,370 L65,350 Z' },
      { id: 'right-leg', name: 'Right Leg', d: 'M115,300 L125,300 L135,350 L135,370 L125,370 L115,360 Z' },
      { id: 'left-foot', name: 'Left Foot', d: 'M65,370 L75,370 L75,380 L60,385 L55,380 L60,370 Z' },
      { id: 'right-foot', name: 'Right Foot', d: 'M125,370 L135,370 L140,380 L145,385 L125,380 Z' },
    ],
    back: [
      { id: 'head-back', name: 'Head', d: 'M100,25 C130,25 140,45 140,65 C140,85 130,100 100,100 C70,100 60,85 60,65 C60,45 70,25 100,25' },
      { id: 'neck-back', name: 'Neck', d: 'M85,100 L115,100 L115,115 L85,115 Z' },
      { id: 'upper-back', name: 'Upper Back', d: 'M70,115 L130,115 L140,160 L130,175 L70,175 L60,160 Z' },
      { id: 'lower-back', name: 'Lower Back', d: 'M70,175 L130,175 L130,225 L70,225 Z' },
      { id: 'pelvis-back', name: 'Pelvis', d: 'M70,225 L130,225 L125,245 L75,245 Z' },
      { id: 'left-shoulder-back', name: 'Left Shoulder', d: 'M60,115 L70,115 L70,135 L60,135 Z' },
      { id: 'right-shoulder-back', name: 'Right Shoulder', d: 'M130,115 L140,115 L140,135 L130,135 Z' },
      { id: 'left-arm-back', name: 'Left Arm', d: 'M60,135 L70,135 L60,175 L50,200 L40,230 L30,245 L20,235 L30,220 L40,195 L50,165 Z' },
      { id: 'right-arm-back', name: 'Right Arm', d: 'M130,135 L140,135 L150,165 L160,195 L170,220 L180,235 L170,245 L160,230 L150,200 L140,175 Z' },
      { id: 'left-hand-back', name: 'Left Hand', d: 'M30,245 L20,235 L15,245 L10,255 L20,260 L30,255 Z' },
      { id: 'right-hand-back', name: 'Right Hand', d: 'M170,245 L180,235 L185,245 L190,255 L180,260 L170,255 Z' },
      { id: 'left-thigh-back', name: 'Left Thigh', d: 'M75,245 L100,245 L100,300 L85,300 L75,300 Z' },
      { id: 'right-thigh-back', name: 'Right Thigh', d: 'M100,245 L125,245 L125,300 L115,300 L100,300 Z' },
      { id: 'left-leg-back', name: 'Left Leg', d: 'M75,300 L85,300 L85,360 L75,370 L65,370 L65,350 Z' },
      { id: 'right-leg-back', name: 'Right Leg', d: 'M115,300 L125,300 L135,350 L135,370 L125,370 L115,360 Z' },
      { id: 'left-foot-back', name: 'Left Foot', d: 'M65,370 L75,370 L75,380 L60,385 L55,380 L60,370 Z' },
      { id: 'right-foot-back', name: 'Right Foot', d: 'M125,370 L135,370 L140,380 L145,385 L125,380 Z' },
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
          {/* Base body silhouette */}
          <path
            d="M100,25 C75,25 60,45 60,65 C60,85 75,100 100,100 C125,100 140,85 140,65 C140,45 125,25 100,25 Z
            M85,100 L115,100 L115,115 L85,115 Z
            M70,115 L130,115 L140,160 L130,175 L70,175 L60,160 Z
            M70,175 L130,175 L130,225 L70,225 Z
            M70,225 L130,225 L125,245 L75,245 Z
            M75,245 L100,245 L100,300 L85,300 L75,300 Z
            M100,245 L125,245 L125,300 L115,300 L100,300 Z
            M75,300 L85,300 L85,360 L75,370 L65,370 L65,350 Z
            M115,300 L125,300 L135,350 L135,370 L125,370 L115,360 Z
            M65,370 L75,370 L75,380 L60,385 L55,380 L60,370 Z
            M125,370 L135,370 L140,380 L145,385 L125,380 Z
            M60,115 L70,115 L70,135 L60,135 Z M130,115 L140,115 L140,135 L130,135 Z
            M60,135 L70,135 L60,175 L50,200 L40,230 L30,245 L20,235 L30,220 L40,195 L50,165 Z
            M130,135 L140,135 L150,165 L160,195 L170,220 L180,235 L170,245 L160,230 L150,200 L140,175 Z
            M30,245 L20,235 L15,245 L10,255 L20,260 L30,255 Z
            M170,245 L180,235 L185,245 L190,255 L180,260 L170,255 Z"
            className="fill-gray-200 stroke-gray-400 stroke-1"
          />
        
          {/* Clickable body parts */}
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
