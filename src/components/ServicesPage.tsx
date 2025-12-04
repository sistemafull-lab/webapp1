import React from 'react';
import { AppView } from '../types';
import { ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (view: AppView) => void;
}

export const ServicesPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-brand-50 py-16 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">Nuestros Servicios</h2>
        <p className="text-brand-600 max-w-2xl mx-auto px-4">
          Nos especializamos en servicios de cremación, ofreciendo una solución integral que resuelve 
          aspectos logísticos, legales y ceremoniales.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Service: Cremation */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1620409930722-e7d0f368c48a?q=80&w=800" 
               alt="Servicio de Cremación" 
               className="rounded-lg shadow-lg w-full h-80 object-cover"
             />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold text-brand-800 mb-4">Cremación Directa Integral</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold-500 font-bold">•</span>
                <span className="text-brand-600">Retiro del cuerpo en hospital, clínica o domicilio particular.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold-500 font-bold">•</span>
                <span className="text-brand-600">Gestión completa de Licencia de Inhumación y Cremación ante el Registro Civil.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold-500 font-bold">•</span>
                <span className="text-brand-600">Proceso de cremación en horno certificado bajo normas ambientales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold-500 font-bold">•</span>
                <span className="text-brand-600">Entrega de urna cineraria y documentación a domicilio.</span>
              </li>
            </ul>
            <button 
              onClick={() => onNavigate(AppView.CREMATION_FLOW)}
              className="bg-brand-700 text-white font-bold py-3 px-6 rounded-lg self-start flex items-center gap-2 hover:bg-brand-800 transition-colors"
            >
              Solicitar Presupuesto Ahora <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Urn Gallery */}
        <div className="border-t border-brand-100 pt-16">
          <h3 className="text-3xl font-serif font-bold text-center text-brand-800 mb-12">Catálogo de Urnas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-lg mb-4 bg-gray-100 h-64 flex items-center justify-center relative">
                 <img 
                   src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600" 
                   alt="Urna Madera" 
                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-800">Modelo Roble Clásico</h4>
              <p className="text-sm text-brand-500">Madera maciza, terminación satinada. Incluida en el servicio estándar.</p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg mb-4 bg-gray-100 h-64 flex items-center justify-center relative">
                 <img 
                   src="https://plus.unsplash.com/premium_photo-1661661619894-399a5e886989?q=80&w=600" 
                   alt="Urna Marmol" 
                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-800">Modelo Mármol Eterno</h4>
              <p className="text-sm text-brand-500">Piedra natural pulida. Ideal para columbarios. (Costo adicional).</p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg mb-4 bg-gray-100 h-64 flex items-center justify-center relative">
                 <img 
                   src="https://images.unsplash.com/photo-1605218427306-635ba2439af2?q=80&w=600" 
                   alt="Urna Biodegradable" 
                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-800">Modelo Bio-Retorno</h4>
              <p className="text-sm text-brand-500">Materiales compostables para plantar con un árbol.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};