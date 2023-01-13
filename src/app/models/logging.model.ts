export class Logging {
    private _userId: number;
    private _datetime: Date;
    private _logline: string;


    constructor(userId: number, logline: string, datetime: Date) {
        this._userId = userId;
        this._logline = logline;
        this._datetime = datetime;
    }

    get userId(): number {
        return this._userId;
    }

    get logline(): string {
        return this._logline;
    }

    get datetime(): Date {
        return this._datetime;
    }

    set userId(value: number) {
        this._userId = value;
    }

    set logline(value: string) {
        this._logline = value;
    }

    set datetime(value: Date) {
        this._datetime = value;
    }
}