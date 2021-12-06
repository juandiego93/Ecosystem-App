export class UserLogin {
    public IDNumber: string
    public password: string
    constructor(object: any) {
        this.IDNumber = object.IDNumber ? object.IDNumber : null
        this.password = object.password ? object.password : null
    }
}