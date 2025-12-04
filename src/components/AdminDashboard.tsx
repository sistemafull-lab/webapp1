import React, { useEffect, useState } from 'react';
import { getCases } from '../services/mockDb';
import { CaseRecord } from '../types';
import { Database, FileText, User } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [cases, setCases] = useState<CaseRecord[]>([]);

  useEffect(() => {
    setCases(getCases());
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-brand-800 p-3 rounded-lg text-white">
            <Database className="w-6 h-6" />
        </div>
        <div>
            <h2 className="text-2xl font-serif font-bold text-brand-800">Base de Datos de Servicios</h2>
            <p className="text-brand-500 text-sm">Registro histórico de operaciones.</p>
        </div>
      </div>

      {cases.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-brand-300">
           <p className="text-brand-400">No hay registros en la base de datos aún.</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-brand-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-brand-200">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">Fallecido</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">Solicitante</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">Costo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-brand-100">
                {cases.map((record) => (
                  <tr key={record.id} className="hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-brand-800">
                      {record.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600">
                      {new Date(record.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                          <User className="w-4 h-4 text-brand-400 mr-2" />
                          <span className="text-sm font-medium text-brand-900">{record.clientData.deceasedName}</span>
                       </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600">
                      {record.clientData.informantName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600">
                      ${record.budget.estimatedCost.toLocaleString('es-AR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        record.serviceStatus === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {record.serviceStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};