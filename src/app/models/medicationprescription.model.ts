export class MedicationPrescription {
  private _id: number;
  private _patientId: number;
  private _datum: Date;
  private _beschrijving: string;
  private _medicationId: number;
  private _medications: Medication;

  constructor(id: number, patientId: number, datum: Date, beschrijving: string, medicationId: number, medications: Medication) {
    this._id = id;
    this._patientId = patientId;
    this._datum = datum;
    this._beschrijving = beschrijving;
    this._medicationId = medicationId;
    this._medications = medications;
  }


  get id(): number {
    return this._id;
  }

  get patientId(): number {
    return this._patientId;
  }

  get datum(): Date {
    return this._datum;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  get medicationId(): number {
    return this._medicationId;
  }


  get medications(): Medication {
    return this._medications;
  }

  set id(value: number) {
    this._id = value;
  }

  set patientId(value: number) {
    this._patientId = value;
  }

  set datum(value: Date) {
    this._datum = value;
  }

  set beschrijving(value: string) {
    this._beschrijving = value;
  }

  set medicationId(value: number) {
    this._medicationId = value;
  }

  set medications(value: Medication) {
    this._medications = value;
  }
}

export class postMedicationPrescription {
  private _patientId: number;
  private _datum: Date;
  private _beschrijving: string;
  private _bpCode: number;

  constructor(patientId: number, datum: Date, beschrijving: string, bpCode: number) {
    this._patientId = patientId;
    this._datum = datum;
    this._beschrijving = beschrijving;
    this._bpCode = bpCode;
  }

  get patientId(): number {
    return this._patientId;
  }

  get datum(): Date {
    return this._datum;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  get bpCode(): number {
    return this._bpCode;
  }

  set patientId(value: number) {
    this._patientId = value;
  }

  set datum(value: Date) {
    this._datum = value;
  }

  set beschrijving(value: string) {
    this._beschrijving = value;
  }

  set bpCode(value: number) {
    this._bpCode = value;
  }
}

export class Medication {
  private _id: number;
  private _bp: number;
  private _bpNaam: string;
  private _sterkteHv: number;
  private _sterkteEh: string;

  constructor(id: number, bp: number, bpNaam: string, sterkteHv: number, sterkteEh: string) {
    this._id = id;
    this._bp = bp;
    this._bpNaam = bpNaam;
    this._sterkteHv = sterkteHv;
    this._sterkteEh = sterkteEh;
  }

  get id(): number {
    return this._id;
  }

  get bp(): number {
    return this._bp;
  }

  get bpNaam(): string {
    return this._bpNaam;
  }

  get sterkteHv(): number {
    return this._sterkteHv;
  }

  get sterkteEh(): string {
    return this._sterkteEh;
  }
}
