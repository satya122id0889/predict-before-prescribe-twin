
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { 
  Flame, Zap, Droplets, Clock, Thermometer, Pill, 
  Skull, Dizzy, Wind, HeartPulse, Stethoscope, 
  Lung, Utensils, Trash, Activity, AlertTriangle,
  Grab, Eye, LucideIcon
} from 'lucide-react';

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
      { id: 'dizziness', name: 'Dizziness', icon: <Dizzy size={24} />, description: 'Feeling lightheaded or unsteady' },
      { id: 'fever', name: 'Fever', icon: <Thermometer size={24} />, description: 'Elevated body temperature' },
      { id: 'migraine', name: 'Migraine', icon: <Skull size={24} />, description: 'Severe throbbing pain, usually on one side of the head' },
      { id: 'blurred-vision', name: 'Blurred Vision', icon: <Eye size={24} />, description: 'Lack of sharpness of vision' },
    ],
    'Neck': [
      { id: 'neck-pain', name: 'Neck Pain', icon: <Zap size={24} />, description: 'Pain in the neck area' },
      { id: 'stiffness', name: 'Stiffness', icon: <Grab size={24} />, description: 'Limited range of motion or rigid feeling' },
      { id: 'swollen-glands', name: 'Swollen Glands', icon: <Droplets size={24} />, description: 'Enlarged lymph nodes in the neck' },
    ],
    'Chest': [
      { id: 'chest-pain', name: 'Chest Pain', icon: <Zap size={24} />, description: 'Pain or discomfort in the chest' },
      { id: 'shortness-of-breath', name: 'Shortness of Breath', icon: <Wind size={24} />, description: 'Difficulty breathing' },
      { id: 'palpitations', name: 'Palpitations', icon: <HeartPulse size={24} />, description: 'Awareness of heartbeat' },
      { id: 'cough', name: 'Cough', icon: <Stethoscope size={24} />, description: 'Sudden expulsion of air from the lungs' },
      { id: 'wheezing', name: 'Wheezing', icon: <Wind size={24} />, description: 'High-pitched whistling sound when breathing' },
    ],
    'Abdomen': [
      { id: 'abdominal-pain', name: 'Abdominal Pain', icon: <Zap size={24} />, description: 'Pain in the abdomen' },
      { id: 'nausea', name: 'Nausea', icon: <Droplets size={24} />, description: 'Feeling of sickness with an inclination to vomit' },
      { id: 'diarrhea', name: 'Diarrhea', icon: <Trash size={24} />, description: 'Loose, watery stools' },
      { id: 'constipation', name: 'Constipation', icon: <Clock size={24} />, description: 'Difficulty passing stool' },
      { id: 'bloating', name: 'Bloating', icon: <Droplets size={24} />, description: 'Feeling of fullness or swelling in the abdomen' },
      { id: 'loss-of-appetite', name: 'Loss of Appetite', icon: <Utensils size={24} />, description: 'Reduced desire to eat' },
    ],
    'Back': [
      { id: 'back-pain', name: 'Back Pain', icon: <Zap size={24} />, description: 'Pain in the back area' },
      { id: 'muscle-spasm', name: 'Muscle Spasm', icon: <Activity size={24} />, description: 'Sudden, involuntary contraction of muscles' },
      { id: 'stiffness', name: 'Stiffness', icon: <Grab size={24} />, description: 'Limited range of motion or rigid feeling' },
    ],
    'Upper Back': [
      { id: 'upper-back-pain', name: 'Upper Back Pain', icon: <Zap size={24} />, description: 'Pain in the upper back area' },
      { id: 'muscle-tension', name: 'Muscle Tension', icon: <Grab size={24} />, description: 'Tightness in the muscles' },
      { id: 'stiffness', name: 'Stiffness', icon: <Clock size={24} />, description: 'Limited range of motion or rigid feeling' },
    ],
    'Lower Back': [
      { id: 'lower-back-pain', name: 'Lower Back Pain', icon: <Zap size={24} />, description: 'Pain in the lower back area' },
      { id: 'sciatica', name: 'Sciatica', icon: <AlertTriangle size={24} />, description: 'Pain that radiates along the sciatic nerve' },
      { id: 'muscle-spasm', name: 'Muscle Spasm', icon: <Activity size={24} />, description: 'Sudden, involuntary contraction of muscles' },
    ],
    'Pelvis': [
      { id: 'pelvic-pain', name: 'Pelvic Pain', icon: <Zap size={24} />, description: 'Pain in the pelvis area' },
      { id: 'pressure', name: 'Pressure', icon: <Droplets size={24} />, description: 'Feeling of heaviness or fullness in the pelvis' },
      { id: 'urinary-problems', name: 'Urinary Problems', icon: <Droplets size={24} />, description: 'Difficulty or pain when urinating' },
    ],
    'Arm': [
      { id: 'arm-pain', name: 'Arm Pain', icon: <Zap size={24} />, description: 'Pain in the arm' },
      { id: 'weakness', name: 'Weakness', icon: <Activity size={24} />, description: 'Lack of strength in the arm' },
      { id: 'numbness', name: 'Numbness', icon: <Droplets size={24} />, description: 'Loss of sensation in the arm' },
    ],
    'Leg': [
      { id: 'leg-pain', name: 'Leg Pain', icon: <Zap size={24} />, description: 'Pain in the leg' },
      { id: 'swelling', name: 'Swelling', icon: <Droplets size={24} />, description: 'Abnormal enlargement' },
      { id: 'numbness', name: 'Numbness', icon: <Droplets size={24} />, description: 'Loss of sensation in the leg' },
      { id: 'cramps', name: 'Cramps', icon: <Activity size={24} />, description: 'Sudden, involuntary contraction of muscles' },
    ],
    'Foot': [
      { id: 'foot-pain', name: 'Foot Pain', icon: <Zap size={24} />, description: 'Pain in the foot' },
      { id: 'swelling', name: 'Swelling', icon: <Droplets size={24} />, description: 'Abnormal enlargement' },
      { id: 'numbness', name: 'Numbness', icon: <Droplets size={24} />, description: 'Loss of sensation in the foot' },
    ],
    'Hand': [
      { id: 'hand-pain', name: 'Hand Pain', icon: <Zap size={24} />, description: 'Pain in the hand' },
      { id: 'stiffness', name: 'Stiffness', icon: <Grab size={24} />, description: 'Limited range of motion or rigid feeling' },
      { id: 'weakness', name: 'Weakness', icon: <Activity size={24} />, description: 'Lack of strength in the hand' },
      { id: 'numbness', name: 'Numbness', icon: <Droplets size={24} />, description: 'Loss of sensation in the hand' },
    ],
    'Shoulder': [
      { id: 'shoulder-pain', name: 'Shoulder Pain', icon: <Zap size={24} />, description: 'Pain in the shoulder' },
      { id: 'limited-motion', name: 'Limited Motion', icon: <Clock size={24} />, description: 'Restricted movement of the shoulder' },
      { id: 'stiffness', name: 'Stiffness', icon: <Grab size={24} />, description: 'Rigid feeling in the shoulder' },
    ],
    'Thigh': [
      { id: 'thigh-pain', name: 'Thigh Pain', icon: <Zap size={24} />, description: 'Pain in the thigh' },
      { id: 'muscle-strain', name: 'Muscle Strain', icon: <Activity size={24} />, description: 'Overstretched or torn muscle' },
      { id: 'numbness', name: 'Numbness', icon: <Droplets size={24} />, description: 'Loss of sensation in the thigh' },
    ],
  };
  
  // Default symptoms if none are defined for the selected body part
  const defaultSymptoms: Symptom[] = [
    { id: 'pain', name: 'Pain', icon: <Zap size={24} />, description: 'General pain or discomfort' },
    { id: 'burning', name: 'Burning', icon: <Flame size={24} />, description: 'Burning sensation' },
    { id: 'swelling', name: 'Swelling', icon: <Droplets size={24} />, description: 'Abnormal enlargement' },
    { id: 'stiffness', name: 'Stiffness', icon: <Grab size={24} />, description: 'Limited range of motion or rigid feeling' },
    { id: 'numbness', name: 'Numbness', icon: <Droplets size={24} />, description: 'Loss of sensation' },
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
          <div className="grid grid-cols-3 gap-4 mb-6 max-h-60 overflow-y-auto">
            {(symptoms[bodyPart] || defaultSymptoms).map((symptom) => (
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
