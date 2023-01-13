import {EpisodeRegel} from "./EpisodeRegel.model";

export class Episode {
    private _id: number;
    private _patientId: number;
    private _datum: Date;
    private _beschrijving: string;
    private _icpcCode: icpcCode;

    constructor(id: number, patientId: number, datum: Date, beschrijving: string, icpcCode: icpcCode, {
    }) {
        this._id = id;
        this._patientId = patientId;
        this._datum = datum;
        this._beschrijving = beschrijving;
        this._icpcCode = icpcCode;
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

    get icpcCode(): icpcCode {
        return this._icpcCode;
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

    set icpcCode(value: icpcCode) {
        this._icpcCode = value;
    }
}

export class icpcCode {
    private _id: number;
    private _icpccode: string;
    private _icpomschrijving: string;

    constructor(id: number, icpccode: string, icpomschrijving: string) {
        this._id = id;
        this._icpccode = icpccode;
        this._icpomschrijving = icpomschrijving;
    }

    get id(): number {
        return this._id;
    }

    get icpccode(): string {
        return this._icpccode;
    }

    get icpomschrijving(): string {
        return this._icpomschrijving;
    }

}

export class PostEpisode {
  private _patientId: number;
  private _datum: Date;
  private _beschrijving: string;
  private _icpccode: number;

  constructor(patientId: number, datum: Date, beschrijving: string, icpccode: number) {
    this._patientId = patientId;
    this._datum = datum;
    this._beschrijving = beschrijving;
    this._icpccode = icpccode;
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

  get icpccode(): number {
    return this._icpccode;
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

  set icpcCode(value: number) {
    this._icpccode = value;
  }

}


