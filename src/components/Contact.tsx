import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-serif font-bold text-brand-800 mb-6">Contáctenos</h2>
          <p className="text-brand-600 mb-8">
            Estamos disponibles las 24 horas para atender urgencias. Para consultas administrativas, nuestro horario es de Lunes a Viernes de 9 a 18hs.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-800">Teléfono (24hs)</h4>
                <p className="text-brand-600">0800-555-RUFINO</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-800">Email</h4>
                <p className="text-brand-600">contacto@rufinopastor.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-800">Oficinas Centrales</h4>
                <p className="text-brand-600">Av. Libertador 2300, CABA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-brand-100">
          <h3 className="text-xl font-bold text-brand-800 mb-4">Envíenos un mensaje</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Nombre</label>
              <input type="text" className="w-full border border-brand-200 rounded-lg p-2 focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Teléfono</label>
              <input type="tel" className="w-full border border-brand-200 rounded-lg p-2 focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-600 mb-1">Mensaje</label>
              <textarea rows={4} className="w-full border border-brand-200 rounded-lg p-2 focus:ring-2 focus:ring-brand-500 outline-none"></textarea>
            </div>
            <button className="w-full bg-brand-700 text-white font-bold py-3 rounded-lg hover:bg-brand-800 transition-colors">
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};