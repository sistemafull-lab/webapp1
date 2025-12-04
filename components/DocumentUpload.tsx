import React, { useState } from 'react';
import { Upload, CheckCircle, FileText } from 'lucide-react';
import { DocumentState } from '../types';

interface Props {
  onSubmit: (files: DocumentState) => void;
}

export const DocumentUpload: React.FC<Props> = ({ onSubmit }) => {
  const [files, setFiles] = useState<DocumentState>({
    deceasedId: null,
    informantId: null,
    witness1Id: null,
    witness2Id: null,
    relationshipProof: null
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof DocumentState) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({ ...prev, [key]: e.target.files![0] }));
    }
  };

  const isComplete = Object.values(files).every(f => f !== null);

  const FileInput = ({ label, fileKey, description }: { label: string, fileKey: keyof DocumentState, description: string }) => (
    <div className="bg-brand-50 p-4 rounded-lg border border-brand-100 hover:border-brand-300 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-medium text-brand-800">{label}</h4>
          <p className="text-xs text-brand-500">{description}</p>
        </div>
        {files[fileKey] && <CheckCircle className="w-5 h-5 text-green-500" />}
      </div>
      <label className="flex items-center justify-center w-full h-24 border-2 border-dashed border-brand-300 rounded-md cursor-pointer hover:bg-white transition-colors">
        <div className="text-center p-2">
          {files[fileKey] ? (
            <span className="text-sm text-brand-700 font-medium truncate w-full block">
              {files[fileKey]?.name}
            </span>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="w-6 h-6 text-brand-400 mb-1" />
              <span className="text-xs text-brand-500">Click para subir foto/PDF</span>
            </div>
          )}
        </div>
        <input 
          type="file" 
          accept="image/*,application/pdf"
          className="hidden" 
          onChange={(e) => handleFileChange(e, fileKey)}
        />
      </label>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-brand-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif text-brand-800 mb-2">Documentación Legal Requerida</h2>
        <p className="text-brand-500">
          Para proceder con los trámites legales y la cremación, necesitamos validar la identidad de las partes involucradas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <FileInput 
          label="DNI del Fallecido" 
          fileKey="deceasedId" 
          description="Frente y dorso legible."
        />
        <FileInput 
          label="DNI del Solicitante" 
          fileKey="informantId" 
          description="Frente y dorso. Quien inicia el trámite."
        />
        <FileInput 
          label="Vínculo Familiar" 
          fileKey="relationshipProof" 
          description="Libreta de matrimonio, partida de nacimiento, etc."
        />
        <div className="hidden md:block"></div> {/* Spacer */}
        <FileInput 
          label="Testigo 1 - DNI" 
          fileKey="witness1Id" 
          description="Mayor de edad, no familiar directo."
        />
        <FileInput 
          label="Testigo 2 - DNI" 
          fileKey="witness2Id" 
          description="Mayor de edad, no familiar directo."
        />
      </div>

      <div className="flex flex-col gap-3">
        <button 
          onClick={() => onSubmit(files)}
          disabled={!isComplete}
          className="w-full bg-brand-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-brand-800 disabled:bg-brand-300 disabled:cursor-not-allowed transition-all"
        >
          Enviar Documentación para Verificación
        </button>
        {!isComplete && (
          <p className="text-center text-xs text-red-400">Por favor adjunte todos los archivos requeridos para continuar.</p>
        )}
      </div>
    </div>
  );
};
