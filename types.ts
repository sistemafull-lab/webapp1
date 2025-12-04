export enum AppStep {
  FORM = 'FORM',
  BUDGET = 'BUDGET',
  DOCUMENTS = 'DOCUMENTS',
  VERIFICATION = 'VERIFICATION',
  PAYMENT = 'PAYMENT',
  TRACKING = 'TRACKING'
}

export enum AppView {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  CREMATION_FLOW = 'CREMATION_FLOW',
  STATUS_LOOKUP = 'STATUS_LOOKUP',
  ADMIN_DB = 'ADMIN_DB'
}

// Datos del formulario del cliente
export interface ClientForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;

  deceasedName: string;
  deceasedAge: string;
  deceasedDNI: string;

  informantName: string;
  informantRelationship: string;
  informantDNI: string;

  dateOfDeath: string;
  timeOfDeath: string;
  placeOfDeath: string;
}

// Estimación de presupuesto
export interface BudgetEstimation {
  baseCost: number;
  urnType: string;
  ceremonyType: string;
  extras: string[];
  total: number;
}

// Documentos cargados / pendientes
export interface DocumentState {
  deathCertificate: File | null;
  informantId: File | null;
  witness1Id: File | null;
  witness2Id: File | null;
  relationshipProof: File | null;
}

// Estado general del caso
export type PaymentStatus = "PENDING" | "PAID";
export type ServiceStatus = "SCHEDULED" | "CREMATION" | "COMPLETED";

// Caso completo
export interface CaseRecord {
  id: string;
  clientData: ClientForm;
  budget: BudgetEstimation;
  documents: DocumentState;
  paymentStatus: PaymentStatus;
  serviceStatus: ServiceStatus;
  createdAt: string;
}

