import React from 'react';
import { Calendar, Truck, Flame, CheckCircle, Package } from 'lucide-react';

interface Props {
  caseId?: string;
}

export const Tracking: React.FC<Props> = ({ caseId }) => {
  // Mock dates
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 10);

  const steps = [
    { icon: CheckCircle, label: "Pago y Verificación", date: today.toLocaleDateString(), active: true, completed: true },
    { icon: Truck, label: "Traslado al Crematorio", date: "En proceso", active: true, completed: false },
    { icon: Flame, label: "Proceso de Cremación", date: "Pendiente", active: false, completed: false },
    { icon: Package, label: "Preparación de Urna", date: "Pendiente", active: false, completed: false },
    { icon: Truck, label: "Entrega a Domicilio", date: deliveryDate.toLocaleDateString(), active: false, completed: false },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-brand-800 mb-4">Servicio en Curso</h2>
        {caseId && (
            <div className="mb-4 inline-block bg-brand-100 text-brand-800 px-4 py-2 rounded-lg font-mono font-bold">
                ID DE SEGUIMIENTO: {caseId}
            </div>
        )}
        <p className="text-brand-600">
          Hemos recibido su solicitud correctamente y el pago ha sido acreditado. <br/>
          La entrega final está programada estimativamente para el <span className="font-bold">{deliveryDate.toLocaleDateString()}</span>.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                step.completed ? 'bg-green-500 border-green-500 text-white' : 
                (step.active ? 'bg-white border-brand-500 text-brand-500' : 'bg-gray-100 border-gray-200 text-gray-400')
              } transition-all duration-500 mb-4 shadow-sm`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h4 className={`font-bold text-center mb-1 ${step.active || step.completed ? 'text-brand-800' : 'text-gray-400'}`}>
                {step.label}
              </h4>
              <span className="text-xs text-gray-500">{step.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-white p-6 rounded-lg border border-brand-200 shadow-sm flex items-start gap-4">
        <div className="bg-brand-100 p-3 rounded-full">
          <Calendar className="w-6 h-6 text-brand-600" />
        </div>
        <div>
          <h4 className="font-bold text-brand-800 mb-1">Próximos Pasos</h4>
          <p className="text-sm text-brand-600">
            Un asesor se pondrá en contacto con usted en las próximas 2 horas para confirmar los detalles de la logística de traslado.
            Guarde su <strong>ID de Seguimiento</strong> para futuras consultas en nuestra web.
          </p>
        </div>
      </div>
    </div>
  );
};