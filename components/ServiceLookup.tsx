import React, { useState, useEffect } from 'react';
import { Search, Loader2, List, ChevronRight } from 'lucide-react';
import { getCaseById, getCases } from '../services/mockDb';
import { CaseRecord } from '../types';

export const ServiceLookup: React.FC = () => {
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState<CaseRecord | null | undefined>(undefined);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentCases, setRecentCases] = useState<CaseRecord[]>([]);

  useEffect(() => {
    // Load existing cases to help the user (Demo feature)
    setRecentCases(getCases());
  }, []);

  const handleSearch = (e: React.FormEvent | null, idOverride?: string) => {
    if(e) e.preventDefault();
    const idToSearch = idOverride || searchId;
    
    if(!idToSearch.trim()) return;
    
    // Update input if we used a click
    if(idOverride) setSearchId(idOverride);

    setLoading(true);
    setSearched(false);
    
    // Simulate network delay
    setTimeout(() => {
        const found = getCaseById(idToSearch.trim());
        setResult(found || null);
        setSearched(true);
        setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-brand-800">Consultar Estado de Trámite</h2>
        <p className="text-brand-600 mt-2">
          Ingrese el ID del caso o seleccione uno de la lista inferior.
        </p>
      </div>

      <form onSubmit={(e) => handleSearch(e)} className="flex gap-2 mb-8">
        <input 
          type="text" 
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Ingrese ID del Caso (ej: RUF-1234)"
          className="flex-grow p-4 border border-brand-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none text-lg"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-brand-700 text-white px-8 rounded-lg font-bold hover:bg-brand-800 transition-colors disabled:opacity-70"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Search />}
        </button>
      </form>

      {/* Result Display */}
      {searched && !result && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center border border-red-200 mb-8">
          No se encontró ningún servicio con el ID <strong>{searchId}</strong>. Por favor verifique y vuelva a intentar.
        </div>
      )}

      {searched && result && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-200 mb-8 animate-fade-in-up">
           <div className="flex justify-between items-start border-b border-brand-100 pb-4 mb-4">
             <div>
                <h3 className="text-xl font-bold text-brand-800">Caso #{result.id}</h3>
                <p className="text-sm text-brand-500">Iniciado el {new Date(result.createdAt).toLocaleDateString()}</p>
             </div>
             <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                 result.serviceStatus === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-brand-100 text-brand-800'
             }`}>
               {result.serviceStatus === 'DELIVERY_PENDING' ? 'Entrega Pendiente' : result.serviceStatus}
             </div>
           </div>

           <div className="space-y-3">
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <span className="block text-xs text-brand-400 uppercase font-bold">Fallecido</span>
                   <span className="text-brand-800 font-medium">{result.clientData.deceasedName}</span>
                </div>
                <div>
                   <span className="block text-xs text-brand-400 uppercase font-bold">Solicitante</span>
                   <span className="text-brand-800 font-medium">{result.clientData.informantName}</span>
                </div>
             </div>
             
             <div>
                <span className="block text-xs text-brand-400 uppercase font-bold mb-1">Estado del Pago</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${result.paymentStatus === 'PAID' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {result.paymentStatus === 'PAID' ? 'Pagado' : 'Pendiente de Pago'}
                </span>
             </div>

             <div className="mt-4 pt-4 border-t border-brand-50">
                <p className="text-sm text-brand-500 italic">
                    {result.serviceStatus === 'COMPLETED' 
                       ? 'Este servicio ha sido finalizado y entregado.' 
                       : 'Estamos trabajando en su servicio. Recibirá actualizaciones por email.'}
                </p>
             </div>
           </div>
        </div>
      )}

      {/* List of available cases for Demo/User convenience */}
      {!searched && recentCases.length > 0 && (
          <div className="mt-12">
            <h3 className="text-brand-800 font-serif font-bold mb-4 flex items-center gap-2">
                <List className="w-5 h-5" /> Trámites Recientes
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
                {recentCases.slice().reverse().slice(0, 5).map((c) => (
                    <div 
                        key={c.id}
                        onClick={() => handleSearch(null, c.id)}
                        className="p-4 border-b border-brand-50 hover:bg-brand-50 cursor-pointer flex justify-between items-center group transition-colors"
                    >
                        <div>
                            <span className="font-mono font-bold text-brand-600 block">{c.id}</span>
                            <span className="text-xs text-brand-400">Solicitante: {c.clientData.informantName}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-brand-300 group-hover:text-brand-600" />
                    </div>
                ))}
            </div>
          </div>
      )}
      
      {!searched && recentCases.length === 0 && (
         <div className="mt-8 text-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-400 italic">No hay trámites registrados aún.</p>
            <p className="text-xs text-gray-400 mt-2">Complete una solicitud de cremación para verla aquí.</p>
         </div>
      )}

    </div>
  );
};