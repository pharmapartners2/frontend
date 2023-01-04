export class Intolerantie {
    private _id: number;
    private _patientId: number;
    private _code: string;
    private _beschrijving: string;


    constructor(id: number, patientId: number, beschrijving: string, code: string, {
    }) {
        this._id = id;
        this._patientId = patientId;
        this._beschrijving = beschrijving;
        this._code = code;
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
}