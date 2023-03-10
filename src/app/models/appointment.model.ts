import { DatePipe } from '@angular/common';
import { Patient } from './patient.model';
export class Appointment {
  private _userId: number;
  private _id: number;
  private _patientid: number;
  private _datum: Date;
  private _beschrijving: string;
  private _patientModel: Patient;


  constructor(public datepipe: DatePipe, userId: number, patientId: number, datum: Date, beschrijving: string, patient:Patient) {
    this._userId=userId;
    this._patientid=patientId;
    this._datum=datum;
    this._beschrijving=beschrijving;
    this._patientModel=patient;
  }

  get userId() : number {
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

  get patientModel(): Patient {
    return this._patientModel;
  }


}


