import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface Props {
  onVerified: () => void;
}

export const AdminVerification: React.FC<Props> = ({ onVerified }) => {
  const [status, setStatus] = useState<'WAITING' | 'ASSIGNED' | 'CHECKING' | 'APPROVED'>('WAITING');

  useEffect(() => {
    // Simulation of backend process
    const timer1 = setTimeout(() => setStatus('ASSIGNED'), 1500);
    const timer2 = setTimeout(() => setStatus('CHECKING'), 3500);
    const timer3 = setTimeout(() => setStatus('APPROVED'), 6000);
    const timer4 = setTimeout(() => onVerified(), 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onVerified]);

  return (
    <div className="max-w-xl mx-auto bg-white p-12 rounded-xl shadow-lg border border-brand-100 text-center">
      <h2 className="text-2xl font-serif text-brand-800 mb-6">Verificando Información</h2>
      
      <div className="space-y-6">
        <div className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${status === 'WAITING' ? 'bg-blue-50 border border-blue-200' : 'bg-white'}`}>
          {status === 'WAITING' ? <Loader2 className="animate-spin text-blue-500" /> : <CheckCircle2 className="text-green-500" />}
          <span className={status === 'WAITING' ? 'font-bold text-blue-700' : 'text-gray-500'}>
            Enviando datos al sistema central...
          </span>
        </div>

        <div className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${status === 'ASSIGNED' ? 'bg-blue-50 border border-blue-200' : (status === 'WAITING' ? 'opacity-50' : 'bg-white')}`}>
          {status === 'ASSIGNED' ? <Loader2 className="animate-spin text-blue-500" /> : (status !== 'WAITING' && <CheckCircle2 className="text-green-500" />)}
          <span className={status === 'ASSIGNED' ? 'font-bold text-blue-700' : 'text-gray-500'}>
            Asesor asignado: María González
          </span>
        </div>

        <div className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${status === 'CHECKING' ? 'bg-blue-50 border border-blue-200' : (status === 'APPROVED' ? 'bg-white' : 'opacity-50')}`}>
          {status === 'CHECKING' ? <Loader2 className="animate-spin text-blue-500" /> : (status === 'APPROVED' && <CheckCircle2 className="text-green-500" />)}
          <span className={status === 'CHECKING' ? 'font-bold text-blue-700' : 'text-gray-500'}>
            Validando DNI y documentación de vínculos...
          </span>
        </div>

        {status === 'APPROVED' && (
          <div className="mt-4 p-4 bg-green-50 text-green-800 font-bold rounded-lg animate-pulse">
            ¡Documentación Aprobada! Redirigiendo a pagos...
          </div>
        )}
      </div>
    </div>
  );
};
