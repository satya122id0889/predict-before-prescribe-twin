
import React from 'react';
import { X, Thermometer, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectedItemsPanelProps {
  symptoms: any[];
  testResults: any[];
  onRemoveSymptom: (id: string) => void;
  onRemoveTestResult: (id: string) => void;
}

const SelectedItemsPanel = ({
  symptoms,
  testResults,
  onRemoveSymptom,
  onRemoveTestResult
}: SelectedItemsPanelProps) => {
  const hasItems = symptoms.length > 0 || testResults.length > 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Selected Items</h3>
      
      {!hasItems ? (
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No items selected yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {symptoms.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <Activity className="h-4 w-4 mr-2" />
                Symptoms
              </h4>
              <div className="space-y-2">
                {symptoms.map((symptom) => (
                  <div 
                    key={symptom.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">{symptom.name}</span>
                        <span className="ml-2 px-2 py-0.5 bg-medical-light-blue text-medical-teal text-xs rounded-full">
                          {symptom.bodyPart}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Intensity: {symptom.intensity}/10 · Duration: {symptom.duration} {symptom.duration === 1 ? 'day' : 'days'}
                      </div>
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => onRemoveSymptom(symptom.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {testResults.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <Thermometer className="h-4 w-4 mr-2" />
                Test Results
              </h4>
              <div className="space-y-2">
                {testResults.map((result) => (
                  <div 
                    key={result.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                  >
                    <div>
                      <span className="font-medium text-gray-900">{result.testType}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        Value: {result.value} {result.unit}
                      </div>
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => onRemoveTestResult(result.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectedItemsPanel;
