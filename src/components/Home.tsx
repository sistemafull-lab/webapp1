import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sun, Cloud } from 'lucide-react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

export const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Lighter, Peaceful */}
      <div className="relative bg-gradient-to-b from-brand-50 via-white to-white text-brand-900 py-20 lg:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-gold-100 rounded-full opacity-40 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4">
             <span className="bg-white/80 border border-brand-200 text-brand-600 px-4 py-1 rounded-full text-sm font-serif italic tracking-wide shadow-sm">
               50 años cuidando familias
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-brand-800">
            Despedidas con <br/>
            <span className="text-brand-gold-500 italic font-light">Respeto y Paz</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Brindamos servicios de cremación y acompañamiento integral, simplificando los trámites para que usted pueda honrar la memoria de su ser querido.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate(AppView.CREMATION_FLOW)}
              className="bg-brand-800 hover:bg-brand-700 text-white font-serif font-bold py-4 px-10 rounded-full shadow-xl shadow-brand-200/50 text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Solicitar Presupuesto <ArrowRight className="w-5 h-5" />
            </button>
            <button 
               onClick={() => onNavigate(AppView.SERVICES)}
               className="text-brand-600 hover:text-brand-800 font-bold py-4 px-8 underline decoration-brand-gold-400 decoration-2 underline-offset-4 hover:decoration-brand-800 transition-all"
            >
              Ver Servicios Disponibles
            </button>
          </div>
        </div>
      </div>

      {/* Features Section - Clean Cards */}
      <div className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-800 transition-colors duration-300">
                <ShieldCheck className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-800 mb-3">Gestión Integral</h3>
              <p className="text-brand-500 leading-relaxed">
                Nos ocupamos de todos los trámites burocráticos y legales. Usted no tendrá que moverse de su hogar.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 transform md:-translate-y-4">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold-500 transition-colors duration-300">
                <Heart className="w-7 h-7 text-brand-gold-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-800 mb-3">Calidez Humana</h3>
              <p className="text-brand-500 leading-relaxed">
                Entendemos el dolor. Nuestro equipo está capacitado para brindar contención y empatía en cada interacción.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <Cloud className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-800 mb-3">Paz Mental</h3>
              <p className="text-brand-500 leading-relaxed">
                Garantizamos transparencia total en costos y procesos. Sin sorpresas, con entrega certificada a los 10 días.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section - Soft Background */}
      <div className="bg-brand-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full border-x border-dashed border-brand-200 opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Sun className="w-12 h-12 text-brand-gold-400 mx-auto mb-8 animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-serif text-brand-800 italic mb-8 leading-snug">
            "En Rufino Pastor transformamos un momento difícil en un homenaje digno y sereno."
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-brand-300"></div>
             <p className="font-bold text-brand-600 uppercase tracking-widest text-sm">Desde 1974</p>
             <div className="h-px w-12 bg-brand-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};