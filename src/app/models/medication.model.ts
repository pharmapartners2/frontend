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
