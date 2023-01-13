export class EpisodeRegel {
    private _id: number;
    private _patientId: number;
    private _code: string;
    private _beschrijving: string;
    private _datum: Date;


    constructor(id: number, patientId: number, beschrijving: string, code: string, datum: Date) {
        this._id = id;
        this._patientId = patientId;
        this._beschrijving = beschrijving;
        this._code = code;
        this._datum = datum;
    }

    get id(): number {
        return this._id;
    }

    get patientId(): number {
        return this._patientId;
    }

    get beschrijving(): string {
        return this._beschrijving;
    }

    get code(): string {
        return this._code;
    }

    get datum(): Date {
        return this._datum;
    }

    set id(value: number) {
        this._id = value;
    }

    set patientId(value: number) {
        this._patientId = value;
    }

    set beschrijving(value: string) {
        this._beschrijving = value;
    }

    set code(value: string) {
        this._code = value;
    }

    set datum(value: Date) {
        this._datum = value;
    }
}

export class PostEpisodeRegel {
  get episodeId(): Number {
    return this._episodeId;
  }

  set episodeId(value: Number) {
    this._episodeId = value;
  }
  private _code: string;
  private _beschrijving: string;
  private _datum: Date;
  private _episodeId: Number

  constructor(patientId: number, beschrijving: string, code: string, datum: Date, episodeId: number) {
    this._beschrijving = beschrijving;
    this._code = code;
    this._datum = datum;
    this._episodeId = episodeId
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  get code(): string {
    return this._code;
  }

  get datum(): Date {
    return this._datum;
  }

  set beschrijving(value: string) {
    this._beschrijving = value;
  }

  set code(value: string) {
    this._code = value;
  }

  set datum(value: Date) {
    this._datum = value;
  }
}
