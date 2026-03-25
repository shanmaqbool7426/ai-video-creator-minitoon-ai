import { useEffect, useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

export function VideoGenerationProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Analyzing topic', duration: 1000 },
    { label: 'Generating script', duration: 2000 },
    { label: 'Creating scenes', duration: 2500 },
    { label: 'Adding voice narration', duration: 1500 },
    { label: 'Finalizing video', duration: 1000 },
  ];

  useEffect(() => {
    let totalTime = 0;
    steps.forEach((step, index) => {
      totalTime += step.duration;
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, totalTime);
    });
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Generating Your Video</h3>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : isCurrent ? (
                  <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
                ) : (
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                )}
              </div>

              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">
          {Math.round((currentStep / steps.length) * 100)}% Complete
        </p>
      </div>
    </div>
  );
}
