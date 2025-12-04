// /services/geminiService.ts

// Esta función simula un presupuesto automático usando reglas fijas.
// Después podemos reemplazarla con IA real si querés.
export async function generateSmartBudget(clientData: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const baseCost = 150000;

      const urnPrice =
        clientData.urnType === "Premium"
          ? 45000
          : clientData.urnType === "Clásica"
          ? 25000
          : 0;

      const ceremonyCost =
        clientData.ceremonyType === "Con ceremonia privada"
          ? 30000
          : clientData.ceremonyType === "Con ceremonia pública"
          ? 50000
          : 0;

      const extrasCost = (clientData.extras || []).length * 10000;

      resolve({
        baseCost,
        urnPrice,
        ceremonyCost,
        extrasCost,
        total: baseCost + urnPrice + ceremonyCost + extrasCost,
      });
    }, 500); // simula tiempo de cálculo
  });
}
