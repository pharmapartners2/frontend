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

  private patientId: number;
  private code: number;
  private beschrijving: string;
  private episodeId: number;
  private datum: Date;


  constructor(patientId: number, code: number, beschrijving: string, episodeId: number, datum: Date) {
    this.patientId = patientId;
    this.code = code;
    this.beschrijving = beschrijving;
    this.episodeId = episodeId;
    this.datum = datum;
  }
}
