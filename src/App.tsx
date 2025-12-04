import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ServicesPage } from './components/ServicesPage';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CremationFlow } from './components/CremationFlow';
import { ServiceLookup } from './components/ServiceLookup';
import { AdminDashboard } from './components/AdminDashboard';
import { AppView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onNavigate={setCurrentView} />;
      case AppView.SERVICES:
        return <ServicesPage onNavigate={setCurrentView} />;
      case AppView.ABOUT:
        return <About />;
      case AppView.CONTACT:
        return <Contact />;
      case AppView.CREMATION_FLOW:
        return <CremationFlow />;
      case AppView.STATUS_LOOKUP:
        return <ServiceLookup />;
      case AppView.ADMIN_DB:
        return <AdminDashboard />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-50 font-sans">
      <Header currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <footer className="bg-brand-900 text-brand-300 py-12 text-center text-sm border-t border-brand-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-left">
            <div>
              <h4 className="text-white font-serif font-bold text-lg mb-4">Rufino Pastor</h4>
              <p className="opacity-70">Servicios fúnebres de excelencia y calidez humana desde 1974.</p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Servicios</h5>
              <ul className="space-y-2 opacity-70">
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(AppView.SERVICES)}>Cremación Integral</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(AppView.SERVICES)}>Urnas</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(AppView.SERVICES)}>Traslados</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Empresa</h5>
              <ul className="space-y-2 opacity-70">
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(AppView.ABOUT)}>Nosotros</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(AppView.CONTACT)}>Contacto</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(AppView.STATUS_LOOKUP)}>Seguimiento de Trámite</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Acceso Interno</h5>
               <button 
                 onClick={() => setCurrentView(AppView.ADMIN_DB)}
                 className="text-xs bg-brand-800 px-3 py-1 rounded hover:bg-brand-700 transition-colors"
               >
                 Panel Administrativo
               </button>
            </div>
          </div>
          <div className="border-t border-brand-800 pt-8 opacity-50">
             <p>&copy; {new Date().getFullYear()} Rufino Pastor Servicios Fúnebres. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;