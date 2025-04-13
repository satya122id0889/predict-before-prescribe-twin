
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Flame, Zap, Droplets, Clock, Thermometer, Pill } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface SymptomsPanelProps {
  bodyPart: string;
  onAddSymptom: (symptom: any) => void;
}

const SymptomsPanel = ({ bodyPart, onAddSymptom }: SymptomsPanelProps) => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [duration, setDuration] = useState(1);
  
  const symptoms: Record<string, Symptom[]> = {
    'Head': [
      { id: 'headache', name: 'Headache', icon: <Zap size={24} />, description: 'Pain in the head region' },
      { id: 'dizziness', name: 'Dizziness', icon: <Clock size={24} />, description: 'Feeling lightheaded or unsteady' },
      { id: 'fever', name: 'Fever', icon: <Thermometer size={24} />, description: 'Elevated body temperature' },
    ],
    'Chest': [
      { id: 'chest-pain', name: 'Chest Pain', icon: <Zap size={24} />, description: 'Pain or discomfort in the chest' },
      { id: 'shortness-of-breath', name: 'Shortness of Breath', icon: <Clock size={24} />, description: 'Difficulty breathing' },
      { id: 'palpitations', name: 'Palpitations', icon: <Flame size={24} />, description: 'Awareness of heartbeat' },
    ],
    'Abdomen': [
      { id: 'abdominal-pain', name: 'Abdominal Pain', icon: <Zap size={24} />, description: 'Pain in the abdomen' },
      { id: 'nausea', name: 'Nausea', icon: <Droplets size={24} />, description: 'Feeling of sickness with an inclination to vomit' },
      { id: 'diarrhea', name: 'Diarrhea', icon: <Clock size={24} />, description: 'Loose, watery stools' },
    ],
    // Add symptoms for other body parts
  };
  
  // Default symptoms if none are defined for the selected body part
  const defaultSymptoms: Symptom[] = [
    { id: 'pain', name: 'Pain', icon: <Zap size={24} />, description: 'General pain or discomfort' },
    { id: 'burning', name: 'Burning', icon: <Flame size={24} />, description: 'Burning sensation' },
    { id: 'swelling', name: 'Swelling', icon: <Droplets size={24} />, description: 'Abnormal enlargement' },
  ];
  
  const bodyPartSymptoms = symptoms[bodyPart] || defaultSymptoms;
  
  const handleSymptomClick = (symptomId: string) => {
    setSelectedSymptom(symptomId === selectedSymptom ? null : symptomId);
  };
  
  const handleAddSymptom = () => {
    if (!selectedSymptom) return;
    
    const symptom = bodyPartSymptoms.find(s => s.id === selectedSymptom);
    if (!symptom) return;
    
    onAddSymptom({
      id: `${symptom.id}-${Date.now()}`,
      symptomId: symptom.id,
      name: symptom.name,
      bodyPart,
      intensity,
      duration,
    });
    
    // Reset selection
    setSelectedSymptom(null);
    setIntensity(5);
    setDuration(1);
  };
  
  const getDurationLabel = (value: number) => {
    if (value < 2) return `${value} day`;
    if (value < 7) return `${value} days`;
    if (value < 4) return `${Math.floor(value / 7)} week`;
    return `${Math.floor(value / 7)} weeks`;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {bodyPart ? `Symptoms for ${bodyPart}` : 'Select a body part first'}
      </h3>
      
      {bodyPart ? (
        <>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {bodyPartSymptoms.map((symptom) => (
              <div
                key={symptom.id}
                className={cn(
                  "symptom-icon flex flex-col items-center",
                  selectedSymptom === symptom.id && "ring-2 ring-medical-teal"
                )}
                onClick={() => handleSymptomClick(symptom.id)}
              >
                <div className="bg-medical-light-blue p-3 rounded-full">
                  {symptom.icon}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-700">{symptom.name}</span>
              </div>
            ))}
          </div>
          
          {selectedSymptom && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intensity: {intensity}/10
                </label>
                <Slider
                  value={[intensity]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(values) => setIntensity(values[0])}
                  className="py-4"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration: {getDurationLabel(duration)}
                </label>
                <Slider
                  value={[duration]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(values) => setDuration(values[0])}
                  className="py-4"
                />
              </div>
              
              <Button 
                className="w-full bg-medical-teal hover:bg-medical-teal/90"
                onClick={handleAddSymptom}
              >
                <Pill className="mr-2 h-4 w-4" />
                Add Symptom
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-40 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Please select a body part first</p>
        </div>
      )}
    </div>
  );
};

export default SymptomsPanel;
