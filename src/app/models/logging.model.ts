export class Logging {
    private _id: number;
    private _patientId: number;
    private _datetime: string;
    private _logline: string;


    constructor(id: number, patientId: number, logline: string, datetime: string, {
    }) {
        this._id = id;
        this._patientId = patientId;
        this._logline = logline;
        this._datetime = datetime;
    }

    get id(): number {
        return this._id;
    }

    get patientId(): number {
        return this._patientId;
    }

    get logline(): string {
        return this._logline;
    }

    get datetime(): string {
        return this._datetime;
    }

    set id(value: number) {
        this._id = value;
    }

    set patientId(value: number) {
        this._patientId = value;
    }

    set logline(value: string) {
        this._logline = value;
    }

    set datetime(value: string) {
        this._datetime = value;
    }
}