// src/services/mockDb.ts
import { CaseRecord } from "../types";

/**
 * Mock DB en memoria
 */
const mockCases: CaseRecord[] = [
  {
    id: "CASE-001",
    clientData: {
      fullName: "Juan Pérez",
      email: "juan.perez@example.com",
      phone: "1133445566",
      address: "Av. Siempre Viva 123",
      deceasedName: "María Pérez",
      deceasedAge: "78",
      deceasedDNI: "12345678",
      informantName: "Carlos Pérez",
      informantRelationship: "Hijo",
      informantDNI: "33555666",
      dateOfDeath: "2025-02-01",
      timeOfDeath: "10:30",
      placeOfDeath: "Domicilio",
    },
    budget: {
      baseCost: 150000,
      urnType: "Clásica",
      ceremonyType: "Sin ceremonia",
      extras: [],
      total: 150000,
    },
    documents: {
      deathCertificate: null,
      informantId: null,
      witness1Id: null,
      witness2Id: null,
      relationshipProof: null,
    },
    paymentStatus: "PENDING",
    serviceStatus: "SCHEDULED",
    createdAt: new Date().toISOString(),
  },
  {
    id: "CASE-002",
    clientData: {
      fullName: "Ana Gómez",
      email: "ana@example.com",
      phone: "1166778899",
      address: "Calle Falsa 321",
      deceasedName: "Carlos Gómez",
      deceasedAge: "82",
      deceasedDNI: "22445566",
      informantName: "Ana Gómez",
      informantRelationship: "Hija",
      informantDNI: "30445566",
      dateOfDeath: "2025-01-23",
      timeOfDeath: "18:45",
      placeOfDeath: "Hospital Central",
    },
    budget: {
      baseCost: 185000,
      urnType: "Premium",
      ceremonyType: "Con ceremonia privada",
      extras: ["Flores", "Traslado especial"],
      total: 215000,
    },
    documents: {
      deathCertificate: null,
      informantId: null,
      witness1Id: null,
      witness2Id: null,
      relationshipProof: null,
    },
    paymentStatus: "PAID",
    serviceStatus: "CREMATION",
    createdAt: new Date().toISOString(),
  },
];

/* -------------------------------------------------
   Funciones SÍNCRONAS (compatibles con tu UI actual)
   ------------------------------------------------- */
export function getCases(): CaseRecord[] {
  return [...mockCases];
}

export function getCaseById(id: string): CaseRecord | null {
  return mockCases.find((c) => c.id === id) ?? null;
}

/* -------------------------------------------------
   Guardado y generación de ID
   ------------------------------------------------- */
let caseCounter = mockCases.length + 1;

export function generateCaseId(): string {
  const id = `CASE-${caseCounter.toString().padStart(3, "0")}`;
  caseCounter++;
  return id;
}

export function saveCase(newCase: CaseRecord): CaseRecord {
  mockCases.push(newCase);
  return newCase;
}

/* -------------------------------------------------
   Versiones ASYNC opcionales (si querés simular delay)
   ------------------------------------------------- */
export function getCasesAsync(delay = 300): Promise<CaseRecord[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getCases()), delay)
  );
}

export function getCaseByIdAsync(id: string, delay = 300): Promise<CaseRecord | null> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getCaseById(id)), delay)
  );
}

export default {
  getCases,
  getCaseById,
  getCasesAsync,
  getCaseByIdAsync,
  generateCaseId,
  saveCase,
};
