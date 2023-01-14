export class PhysicalExam {
    private _id: number;
    private _datum: Date;
    private _waarde: number;
    private _ddElement: ddElement;

    private _patientid: number;

    constructor(id: number, datum: Date, waarde: number, ddElement: ddElement, patientid: number) {
        this._id = id;
        this._datum = datum;
        this._waarde = waarde;
        this._ddElement = ddElement;
        this._patientid = patientid;
    }

    get id(): number {
        return this._id;
    }

    get datum(): Date {
        return this._datum;
    }

    get waarde(): number {
        return this._waarde;
    }

    get ddElement(): ddElement {
        return this._ddElement;
    }

    set id(value: number) {
        this._id = value;
    }

    set datum(value: Date) {
        this._datum = value;
    }

    set waarde(waarde: number) {
        this._waarde = waarde;
    }

  get patientid(): number {
    return this._patientid;
  }

  set patientid(value: number) {
    this._patientid = value;
  }

  set ddElement(value: ddElement) {
        this._ddElement = value;
    }
}

export class PostPhysicalExam {
  private _datum: Date;
  private _waarde: number;
  private _ddElement: ddElement;

  private _patientid: number;

  constructor(id: number, datum: Date, waarde: number, ddElement: ddElement, patientid: number) {
    this._datum = datum;
    this._waarde = waarde;
    this._ddElement = ddElement;
    this._patientid = patientid;
  }

  get datum(): Date {
    return this._datum;
  }

  get waarde(): number {
    return this._waarde;
  }

  get ddElement(): ddElement {
    return this._ddElement;
  }

  set datum(value: Date) {
    this._datum = value;
  }

  set waarde(waarde: number) {
    this._waarde = waarde;
  }

  get patientid(): number {
    return this._patientid;
  }

  set patientid(value: number) {
    this._patientid = value;
  }

  set ddElement(value: ddElement) {
    this._ddElement = value;
  }
}


export class ddElement {
    private _id: number;
    private _memocode: string;
    private _aolsort: number;
    private _eenheid: string;
    private _naam: string;

    constructor(id: number, memocode: string, aolsort: number, eenheid: string, naam: string) {
        this._id = id;
        this._memocode = memocode;
        this._aolsort = aolsort;
        this._eenheid = eenheid;
        this._naam = naam;
    }

    get id(): number {
        return this._id;
    }

    get memocode(): string {
        return this._memocode;
    }

    get aolsort(): number {
        return this._aolsort;
    }

    get eenheid(): string {
        return this._eenheid;
    }

    get naam(): string {
        return this._naam;
    }
}
