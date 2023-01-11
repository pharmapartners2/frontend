export class Logging {
    private _userId: number;
    private _datetime: string;
    private _logline: string;


    constructor(userId: number, logline: string, datetime: string, {
    }) {
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

    get datetime(): string {
        return this._datetime;
    }

    set userId(value: number) {
        this._userId = value;
    }

    set logline(value: string) {
        this._logline = value;
    }

    set datetime(value: string) {
        this._datetime = value;
    }
}