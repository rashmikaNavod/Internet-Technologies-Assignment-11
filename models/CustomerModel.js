export default class CustomerModel{
    constructor(mobileNumber,name,email,address){
        this._mobileNumber = mobileNumber;
        this._name = name;
        this._email = email;
        this._address = address;
    }
    
    get mobileNumber() {
        return this._mobileNumber;
    }

    set mobileNumber(mobileNumber) {
        this._mobileNumber = mobileNumber;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }
}