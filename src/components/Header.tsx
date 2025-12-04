import React from 'react';
import { Menu, X } from 'lucide-react';
import { AppView } from '../types';

interface Props {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Header: React.FC<Props> = ({ currentView, onChangeView }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const NavLink = ({ view, label }: { view: AppView; label: string }) => (
    <button
      onClick={() => {
        onChangeView(view);
        setIsMenuOpen(false);
      }}
      className={`text-sm font-medium transition-colors hover:text-brand-800 ${
        currentView === view ? 'text-brand-800 font-bold border-b-2 border-brand-800' : 'text-brand-500'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-brand-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onChangeView(AppView.HOME)}
          >
            {/* Logo Icon mockup */}
            <div className="relative w-12 h-12 bg-brand-400 rounded-md flex items-center justify-center mr-3 shadow-inner border border-brand-300">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-white">
                 <path d="M12 4c-3 0-5 2-5 5c0 4 5 11 5 11s5-7 5-11c0-3-2-5-5-5z" />
                 <path d="M12 8a3 3 0 0 0-3-3" strokeOpacity="0.5"/>
               </svg>
               <div className="absolute -top-2 -right-2 bg-white text-brand-800 rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-bold shadow-sm border border-brand-200">
                 50
               </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-white tracking-wide leading-none group-hover:text-brand-200 transition-colors">
                Rufino Pastor
              </span>
              <span className="text-[10px] bg-brand-400 text-white px-1 py-0.5 rounded-sm w-fit mt-1 tracking-widest uppercase font-sans">
                Servicios Fúnebres
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <button onClick={() => onChangeView(AppView.HOME)} className={`text-sm ${currentView === AppView.HOME ? 'text-white font-bold' : 'text-brand-200 hover:text-white'}`}>Inicio</button>
            <button onClick={() => onChangeView(AppView.SERVICES)} className={`text-sm ${currentView === AppView.SERVICES ? 'text-white font-bold' : 'text-brand-200 hover:text-white'}`}>Servicios</button>
            <button onClick={() => onChangeView(AppView.ABOUT)} className={`text-sm ${currentView === AppView.ABOUT ? 'text-white font-bold' : 'text-brand-200 hover:text-white'}`}>Nosotros</button>
            <button onClick={() => onChangeView(AppView.CONTACT)} className={`text-sm ${currentView === AppView.CONTACT ? 'text-white font-bold' : 'text-brand-200 hover:text-white'}`}>Contacto</button>
            <div className="w-px bg-brand-600 h-5 my-auto"></div>
             <button onClick={() => onChangeView(AppView.STATUS_LOOKUP)} className={`text-sm ${currentView === AppView.STATUS_LOOKUP ? 'text-white font-bold' : 'text-brand-200 hover:text-white'}`}>Consultar Trámite</button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-200 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-900 border-t border-brand-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <button onClick={() => { onChangeView(AppView.HOME); setIsMenuOpen(false); }} className="block px-3 py-2 text-brand-200 hover:text-white text-left">Inicio</button>
            <button onClick={() => { onChangeView(AppView.SERVICES); setIsMenuOpen(false); }} className="block px-3 py-2 text-brand-200 hover:text-white text-left">Servicios</button>
            <button onClick={() => { onChangeView(AppView.ABOUT); setIsMenuOpen(false); }} className="block px-3 py-2 text-brand-200 hover:text-white text-left">Nosotros</button>
             <button onClick={() => { onChangeView(AppView.CONTACT); setIsMenuOpen(false); }} className="block px-3 py-2 text-brand-200 hover:text-white text-left">Contacto</button>
            <button onClick={() => { onChangeView(AppView.STATUS_LOOKUP); setIsMenuOpen(false); }} className="block px-3 py-2 text-brand-200 hover:text-white text-left border-t border-brand-800 mt-2 pt-2">Consultar Estado</button>
          </div>
        </div>
      )}
    </header>
  );
};