import React, { useState } from 'react';
import { ServiceForm } from './ServiceForm';
import { BudgetResult } from './BudgetResult';
import { DocumentUpload } from './DocumentUpload';
import { AdminVerification } from './AdminVerification';
import { Payment } from './Payment';
import { Tracking } from './Tracking';

import { saveCase, generateCaseId } from '../services/mockDb';
import { AppStep, ClientForm, BudgetEstimation, DocumentState, CaseRecord } from '../types';

export const CremationFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.FORM);
  const [formData, setFormData] = useState<ClientForm | null>(null);
  const [budget, setBudget] = useState<BudgetEstimation | null>(null);
  const [docs, setDocs] = useState<DocumentState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCaseId, setCurrentCaseId] = useState<string>("");

  // Step 1: Handle Form Submit & Call Gemini & Generate ID early
  const handleFormSubmit = async (data: ClientForm) => {
    setIsLoading(true);
    setFormData(data);

    // genera el ID
    if (!currentCaseId) {
      setCurrentCaseId(generateCaseId());
    }

    // por ahora no llamamos gemini, pero el flujo continúa
    setCurrentStep(AppStep.BUDGET);
    setIsLoading(false);
  };

  // Step 2: Accept Budget
  const handleAcceptBudget = () => {
    setCurrentStep(AppStep.DOCUMENTS);
  };

  // Step 3: Docs Uploaded
  const handleDocsSubmit = (files: DocumentState) => {
    setDocs(files);
    setCurrentStep(AppStep.VERIFICATION);
  };

  // Step 4: Verification Done
  const handleVerificationComplete = () => {
    setCurrentStep(AppStep.PAYMENT);
  };

  // Step 5: Paid -> Save to DB
  const handlePaymentComplete = () => {
    if (formData && budget && docs && currentCaseId) {
      const newCase: CaseRecord = {
        id: currentCaseId,
        clientData: formData,
        budget: budget,
        documents: docs,
        paymentStatus: "PAID",
        serviceStatus: "SCHEDULED",
        createdAt: new Date().toISOString(),
      };

      saveCase(newCase);
      setCurrentStep(AppStep.TRACKING);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case AppStep.FORM:
        return <ServiceForm onSubmit={handleFormSubmit} isLoading={isLoading} initialData={formData} />;

      case AppStep.BUDGET:
        return (
          budget && (
            <BudgetResult
              budget={budget}
              onAccept={handleAcceptBudget}
              onDecline={() => setCurrentStep(AppStep.FORM)}
            />
          )
        );

      case AppStep.DOCUMENTS:
        return <DocumentUpload onSubmit={handleDocsSubmit} />;

      case AppStep.VERIFICATION:
        return <AdminVerification onVerified={handleVerificationComplete} />;

      case AppStep.PAYMENT:
        return budget ? <Payment budget={budget} onPaid={handlePaymentComplete} caseId={currentCaseId} /> : null;

      case AppStep.TRACKING:
        return <Tracking caseId={currentCaseId} />;

      default:
        return null;
    }
  };

  return (
    <div className="py-8 animate-fade-in">
      <h2 className="text-3xl font-serif text-brand-800 text-center mb-2">Solicitud de Servicio</h2>

      {currentCaseId && currentStep !== AppStep.TRACKING && (
        <p className="text-center text-sm text-brand-500 mb-6 font-mono">Solicitud #{currentCaseId}</p>
      )}

      {/* Progress Indicator */}
      {currentStep !== AppStep.TRACKING && (
        <div className="mb-8 max-w-2xl mx-auto flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest px-4">
          <span className={currentStep === AppStep.FORM ? "text-brand-600" : ""}>Datos</span>
          <div className="h-px bg-gray-300 w-full mx-2"></div>
          <span className={currentStep === AppStep.BUDGET ? "text-brand-600" : ""}>Presupuesto</span>
          <div className="h-px bg-gray-300 w-full mx-2"></div>
          <span className={currentStep === AppStep.DOCUMENTS ? "text-brand-600" : ""}>Docs</span>
          <div className="h-px bg-gray-300 w-full mx-2"></div>
          <span className={currentStep === AppStep.VERIFICATION ? "text-brand-600" : ""}>Verificación</span>
          <div className="h-px bg-gray-300 w-full mx-2"></div>
          <span className={currentStep === AppStep.PAYMENT ? "text-brand-600" : ""}>Pago</span>
        </div>
      )}

      {renderStep()}
    </div>
  );
};
