export class User {
    private _id: number;
    private _username: string;
    private _password: string;

    constructor(id: number, username: string, password: string){
        this._id = id;
        this._username = username;
        this._password = password;
    }

    get id(): number{
        return this._id;
    }

    get username(): string{
        return this._username;
    }

    get password(): string{
        return this._password;
    }
}