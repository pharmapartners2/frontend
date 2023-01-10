export class Appointment {
  private _userId: number;
  private _patientid: number;
  private _datum: Date;
  private _beschrijving: string;


  constructor(userId: number, patientId: number, datum: Date, beschrijving: string) {
    this._userId=userId;
    this._patientid=patientId;
    this._datum=datum;
    this._beschrijving=beschrijving;
  }

  get userid() : number {
    return this._userId;
  }
  get patientid() : number {
    return this._patientid;
  }
  get datum() : Date {
    return this._datum;
  }
  get beschrijving() : string {
    return this._beschrijving;
  }
}
