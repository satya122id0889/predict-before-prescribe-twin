
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Pill, Clipboard, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Treatment {
  id: string;
  name: string;
  type: 'medication' | 'procedure' | 'lifestyle';
  description: string;
  timeframes: {
    short: string;
    medium: string;
    long: string;
  };
  efficacy: number;
  risks: string[];
}

interface TreatmentPanelProps {
  diagnoses: any[];
}

const TreatmentPanel = ({ diagnoses }: TreatmentPanelProps) => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState<'short' | 'medium' | 'long'>('short');
  
  // Mock treatments based on diagnoses
  const generateTreatments = (): Treatment[] => {
    if (diagnoses.length === 0) return [];
    
    const diagnosisIds = diagnoses.map(d => d.id);
    const treatments: Treatment[] = [];
    
    if (diagnosisIds.includes('influenza')) {
      treatments.push({
        id: 'oseltamivir',
        name: 'Oseltamivir (Tamiflu)',
        type: 'medication',
        description: 'Antiviral medication that blocks the actions of influenza virus in your body',
        timeframes: {
          short: 'Symptom relief within 24-48 hours',
          medium: 'Complete course of treatment (5 days)',
          long: 'Recovery within 7-10 days',
        },
        efficacy: 75,
        risks: ['Nausea', 'Vomiting', 'Headache'],
      });
      
      treatments.push({
        id: 'rest-fluids',
        name: 'Rest and Fluids',
        type: 'lifestyle',
        description: 'Adequate rest and increased fluid intake to help recovery',
        timeframes: {
          short: 'Immediate comfort',
          medium: 'Gradual symptom improvement',
          long: 'Supports overall recovery',
        },
        efficacy: 60,
        risks: ['None significant'],
      });
    }
    
    if (diagnosisIds.includes('angina')) {
      treatments.push({
        id: 'nitroglycerin',
        name: 'Nitroglycerin',
        type: 'medication',
        description: 'Relaxes and widens blood vessels to improve blood flow to the heart',
        timeframes: {
          short: 'Relief within minutes',
          medium: 'Continued management of symptoms',
          long: 'Long-term management with proper dosing',
        },
        efficacy: 85,
        risks: ['Headache', 'Dizziness', 'Lightheadedness'],
      });
      
      treatments.push({
        id: 'angioplasty',
        name: 'Angioplasty',
        type: 'procedure',
        description: 'Procedure to open narrowed or blocked coronary arteries',
        timeframes: {
          short: 'Immediate improvement in blood flow',
          medium: 'Recovery from procedure (1-2 weeks)',
          long: 'Sustained improvement in symptoms',
        },
        efficacy: 90,
        risks: ['Bleeding', 'Infection', 'Artery re-narrowing'],
      });
    }
    
    if (diagnosisIds.includes('gastritis')) {
      treatments.push({
        id: 'ppi',
        name: 'Proton Pump Inhibitors',
        type: 'medication',
        description: 'Reduces stomach acid production',
        timeframes: {
          short: 'Initial relief within days',
          medium: 'Continued healing of stomach lining',
          long: 'Prevention of recurrence with continued use',
        },
        efficacy: 80,
        risks: ['Headache', 'Nausea', 'Vitamin B12 deficiency with long-term use'],
      });
    }
    
    // Generic treatment for any condition
    if (treatments.length === 0) {
      treatments.push({
        id: 'symptomatic',
        name: 'Symptomatic Treatment',
        type: 'medication',
        description: 'Management of symptoms while further diagnosis is pursued',
        timeframes: {
          short: 'Temporary relief of symptoms',
          medium: 'Continued management',
          long: 'Further evaluation needed',
        },
        efficacy: 50,
        risks: ['May mask underlying condition', 'Side effects vary by medication'],
      });
    }
    
    return treatments;
  };
  
  const treatments = generateTreatments();
  const selectedTreatmentDetails = treatments.find(t => t.id === selectedTreatment);
  
  const getTreatmentTypeIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return <Pill className="h-4 w-4" />;
      case 'procedure':
        return <Clipboard className="h-4 w-4" />;
      case 'lifestyle':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Pill className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Treatment Options</h3>
      
      {diagnoses.length === 0 ? (
        <div className="flex items-center justify-center h-40 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Generate diagnoses to see treatment options</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className={cn(
                  "border rounded-lg p-4 cursor-pointer transition-colors",
                  selectedTreatment === treatment.id
                    ? "border-medical-teal bg-medical-light-blue/20"
                    : "border-gray-200 hover:border-medical-teal/50"
                )}
                onClick={() => setSelectedTreatment(treatment.id)}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-medical-light-blue rounded-full text-medical-teal">
                    {getTreatmentTypeIcon(treatment.type)}
                  </div>
                  <h4 className="font-medium text-gray-900">{treatment.name}</h4>
                </div>
                <p className="text-sm text-gray-500">{treatment.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-gray-500">
                    {treatment.type}
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                    Efficacy: {treatment.efficacy}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {selectedTreatmentDetails && (
            <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
              <h4 className="font-medium text-gray-900 mb-4">Treatment Timeline</h4>
              
              <Tabs value={timeframe} onValueChange={(v) => setTimeframe(v as any)}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="short">Short Term</TabsTrigger>
                  <TabsTrigger value="medium">Medium Term</TabsTrigger>
                  <TabsTrigger value="long">Long Term</TabsTrigger>
                </TabsList>
                
                <TabsContent value="short" className="mt-0">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      {selectedTreatmentDetails.timeframes.short}
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="medium" className="mt-0">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      {selectedTreatmentDetails.timeframes.medium}
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="long" className="mt-0">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      {selectedTreatmentDetails.timeframes.long}
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6">
                <h5 className="text-sm font-medium text-gray-700 mb-2">Potential Risks</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedTreatmentDetails.risks.map((risk, index) => (
                    <li key={index} className="text-sm text-gray-600">{risk}</li>
                  ))}
                </ul>
              </div>
              
              <Button className="mt-6 w-full bg-medical-teal hover:bg-medical-teal/90">
                Simulate This Treatment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TreatmentPanel;
