export class Patient {
  private _id: number;
  private _naam: string;
  private _adres: string;
  private _geboorteDatum: Date;
  private _bsn: string;
  private _telefoonNr: string;


  constructor(id: number, naam: string, adres: string, geboorteDatum: Date, bsn: string, telefoonNr: string) {
    this._id = id;
    this._naam = naam;
    this._adres = adres;
    this._geboorteDatum = geboorteDatum;
    this._bsn = bsn;
    this._telefoonNr = telefoonNr;
  }


  get id(): number {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }

  get adres(): string {
    return this._adres;
  }

  get geboorteDatum(): Date {
    return this._geboorteDatum;
  }

  get bsn(): string {
    return this._bsn;
  }

  get telefoonNr(): string {
    return this._telefoonNr;
  }
}
