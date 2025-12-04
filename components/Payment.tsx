import React, { useState } from 'react';
import { CreditCard, Lock, FileText } from 'lucide-react';
import { BudgetEstimation } from '../types';

interface Props {
  budget: BudgetEstimation;
  onPaid: () => void;
  caseId: string;
}

export const Payment: React.FC<Props> = ({ budget, onPaid, caseId }) => {
  const [processing, setProcessing] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      onPaid();
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-brand-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif text-brand-800">Confirmar Pago</h2>
        <div className="flex gap-1">
           <div className="w-8 h-5 bg-gray-200 rounded"></div>
           <div className="w-8 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="mb-6 bg-brand-50 rounded-lg overflow-hidden border border-brand-100">
        <div className="p-3 bg-brand-100 border-b border-brand-200 flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-600" />
            <span className="text-xs font-bold text-brand-600 uppercase">Solicitud Referencia</span>
        </div>
        <div className="p-4 flex justify-between items-center">
            <span className="text-lg font-mono font-bold text-brand-800">{caseId}</span>
            <span className="text-xs text-brand-400">(Guarde este número)</span>
        </div>
        <div className="border-t border-brand-200 p-4 flex justify-between items-center bg-white">
            <span className="text-brand-600 font-medium">Total</span>
            <span className="text-2xl font-bold text-brand-800">
            {new Intl.NumberFormat('es-AR', { style: 'currency', currency: budget.currency }).format(budget.estimatedCost)}
            </span>
        </div>
      </div>

      <form onSubmit={handlePay} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-brand-500 uppercase mb-1">Número de Tarjeta</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="0000 0000 0000 0000" 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-brand-500 uppercase mb-1">Vencimiento</label>
            <input 
              type="text" 
              placeholder="MM/AA" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-500 uppercase mb-1">CVV</label>
            <input 
              type="text" 
              placeholder="123" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              required
            />
          </div>
        </div>

        <div>
           <label className="block text-xs font-bold text-brand-500 uppercase mb-1">Titular</label>
            <input 
              type="text" 
              placeholder="Como figura en la tarjeta" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              required
            />
        </div>

        <button 
          type="submit" 
          disabled={processing}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex justify-center items-center gap-2 mt-4"
        >
          {processing ? (
            'Procesando...'
          ) : (
            <>
              <Lock className="w-4 h-4" /> Pagar y Confirmar
            </>
          )}
        </button>
      </form>
    </div>
  );
};