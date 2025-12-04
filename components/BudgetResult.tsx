import React from 'react';
import { BudgetEstimation } from '../types';
import { Check, HeartHandshake, ShieldCheck, Truck, FileCheck, ArrowLeft } from 'lucide-react';

interface Props {
  budget: BudgetEstimation;
  onAccept: () => void;
  onDecline: () => void;
}

export const BudgetResult: React.FC<Props> = ({ budget, onAccept, onDecline }) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-brand-700 p-6 text-white text-center">
          <HeartHandshake className="w-12 h-12 mx-auto mb-3 text-brand-200" />
          <p className="text-lg font-serif italic opacity-90">"{budget.empatheticMessage}"</p>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-serif text-brand-900 mb-6 text-center">Propuesta de Servicio Integral</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-bold text-brand-700 uppercase text-sm tracking-wider">Servicios Incluidos</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-brand-600">
                  <div className="bg-green-100 p-1 rounded-full"><FileCheck className="w-4 h-4 text-green-600" /></div>
                  Gestión completa de trámites de defunción
                </li>
                <li className="flex items-center gap-3 text-brand-600">
                  <div className="bg-green-100 p-1 rounded-full"><Truck className="w-4 h-4 text-green-600" /></div>
                  Traslado desde lugar de deceso al crematorio
                </li>
                <li className="flex items-center gap-3 text-brand-600">
                  <div className="bg-green-100 p-1 rounded-full"><ShieldCheck className="w-4 h-4 text-green-600" /></div>
                  Proceso de cremación certificado
                </li>
                <li className="flex items-center gap-3 text-brand-600">
                  <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                  Urna cineraria de calidad estándar
                </li>
                <li className="flex items-center gap-3 text-brand-600">
                  <div className="bg-green-100 p-1 rounded-full"><Truck className="w-4 h-4 text-green-600" /></div>
                  Entrega a domicilio (Documentación + Cenizas)
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-50 p-6 rounded-lg border border-brand-100 flex flex-col justify-center items-center">
              <span className="text-brand-500 text-sm font-medium uppercase mb-2">Presupuesto Total Estimado</span>
              <div className="text-4xl font-serif font-bold text-brand-800 mb-2">
                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: budget.currency }).format(budget.estimatedCost)}
              </div>
              <p className="text-xs text-center text-brand-400 mt-2 leading-relaxed">
                {budget.complexityReasoning}
              </p>
            </div>
          </div>

          <div className="border-t border-brand-100 pt-6 flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={onDecline}
              className="px-8 py-3 rounded-lg border border-brand-300 text-brand-600 font-medium hover:bg-brand-50 transition-colors flex items-center gap-2 justify-center"
            >
              <ArrowLeft className="w-4 h-4" /> Volver
            </button>
            <button 
              onClick={onAccept}
              className="px-8 py-3 rounded-lg bg-brand-700 text-white font-bold shadow-md hover:bg-brand-800 transition-colors hover:shadow-lg transform active:scale-95"
            >
              Aceptar Presupuesto y Continuar
            </button>
          </div>
          
          <p className="text-center text-brand-300 text-xs mt-6">
            Al aceptar, pasaremos a la etapa de documentación legal requerida por ley.
          </p>
        </div>
      </div>
    </div>
  );
};