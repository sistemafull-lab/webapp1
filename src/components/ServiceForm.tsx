import React, { useState } from 'react';
import { ClientForm } from '../types';
import { MapPin, User, FileText, ArrowRight, Activity, Scale, Ruler } from 'lucide-react';

interface Props {
  onSubmit: (data: ClientForm) => void;
  isLoading: boolean;
  initialData?: ClientForm | null;
}

export const ServiceForm: React.FC<Props> = ({ onSubmit, isLoading, initialData }) => {
  const [formData, setFormData] = useState<ClientForm>(initialData || {
    informantName: '',
    informantLocation: '',
    deceasedName: '',
    deceasedLocation: '',
    weight: 70,
    height: 170,
    causeOfDeath: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'weight' || name === 'height' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-brand-100 animate-fade-in-up">
      <h2 className="text-2xl font-serif text-brand-800 mb-6 border-b border-brand-100 pb-4">
        Solicitud de Servicio de Cremación
      </h2>
      <p className="text-brand-500 mb-8">
        Por favor, complete la información inicial para brindarle un presupuesto inmediato y personalizado.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Section: Informant */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-brand-700 flex items-center gap-2">
            <User className="w-5 h-5 text-brand-400" /> Datos del Solicitante
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Su Nombre Completo</label>
              <input 
                type="text" 
                name="informantName"
                required
                className="w-full px-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                placeholder="Juan Pérez"
                value={formData.informantName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Su Ubicación (Domicilio)</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-brand-300" />
                <input 
                  type="text" 
                  name="informantLocation"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  placeholder="Ciudad, Provincia"
                  value={formData.informantLocation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Deceased */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-medium text-brand-700 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-400" /> Datos del Fallecido
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-600 mb-1">Nombre del Fallecido</label>
              <input 
                type="text" 
                name="deceasedName"
                required
                className="w-full px-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                value={formData.deceasedName}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-600 mb-1">Lugar de Retiro (Hospital/Domicilio)</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-brand-300" />
                <input 
                  type="text" 
                  name="deceasedLocation"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="Dirección exacta del deceso"
                  value={formData.deceasedLocation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Peso Aproximado (kg)</label>
              <div className="relative">
                <Scale className="absolute left-3 top-2.5 h-5 w-5 text-brand-300" />
                <input 
                  type="number" 
                  name="weight"
                  required
                  min="1"
                  className="w-full pl-10 pr-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
             <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Altura Aproximada (cm)</label>
              <div className="relative">
                <Ruler className="absolute left-3 top-2.5 h-5 w-5 text-brand-300" />
                <input 
                  type="number" 
                  name="height"
                  required
                  min="1"
                  className="w-full pl-10 pr-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-600 mb-1">Causa de Muerte</label>
              <div className="relative">
                <Activity className="absolute left-3 top-2.5 h-5 w-5 text-brand-300" />
                <input 
                  type="text" 
                  name="causeOfDeath"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="Ej: Paro cardiorrespiratorio, Causas naturales..."
                  value={formData.causeOfDeath}
                  onChange={handleChange}
                />
              </div>
              <p className="text-xs text-brand-400 mt-1">Esta información es necesaria para los trámites legales y sanitarios.</p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-brand-700 hover:bg-brand-800 text-white font-serif font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculando Presupuesto...
              </span>
            ) : (
              <>Consultar Presupuesto <ArrowRight className="w-5 h-5" /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};