import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">50 Años de Trayectoria</h2>
        <div className="w-24 h-1 bg-brand-gold-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
           <img 
            src="https://images.unsplash.com/photo-1575033737035-154df663d23b?q=80&w=800" 
            alt="Edificio Rufino Pastor" 
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-brand-700">Nuestra Historia</h3>
          <p className="text-brand-600 leading-relaxed">
            Fundada en 1974 por Don Rufino Pastor, nuestra empresa nació con una misión clara: brindar un servicio fúnebre que priorizara la dignidad humana y el respeto por sobre todas las cosas.
          </p>
          <p className="text-brand-600 leading-relaxed">
            Lo que comenzó como una pequeña sala de velatorios en el corazón de la ciudad, ha crecido hasta convertirse en una referencia de servicios integrales de sepelio y cremación. Hoy, la segunda y tercera generación de la familia Pastor continúan el legado, incorporando tecnología moderna en los trámites y procesos, pero manteniendo intactos los valores tradicionales de empatía y calidez.
          </p>
        </div>
      </div>

      <div className="bg-brand-800 text-white rounded-xl p-10 md:p-16 text-center">
        <h3 className="text-2xl font-serif mb-8">Nuestros Valores</h3>
        <div className="grid md:grid-cols-3 gap-8">
           <div>
             <h4 className="font-bold text-brand-gold-400 text-lg mb-2">Respeto</h4>
             <p className="text-brand-200 text-sm">Tratamos cada vida con la solemnidad que merece.</p>
           </div>
           <div>
             <h4 className="font-bold text-brand-gold-400 text-lg mb-2">Transparencia</h4>
             <p className="text-brand-200 text-sm">Presupuestos claros y procesos informados paso a paso.</p>
           </div>
           <div>
             <h4 className="font-bold text-brand-gold-400 text-lg mb-2">Compromiso</h4>
             <p className="text-brand-200 text-sm">Estamos disponibles las 24 horas, los 365 días del año.</p>
           </div>
        </div>
      </div>
    </div>
  );
};