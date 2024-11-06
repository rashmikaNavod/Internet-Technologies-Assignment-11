export default class OrderModel{

    constructor(orderId,date,customerNumber,itemCode,unitPrice,iqty){
        this._orderId = orderId;
        this._data = date;
        this._customerNumber = customerNumber;
        this._itemCode = itemCode;
        this._unitPrice = unitPrice;
        this._iqty = iqty;
    }


    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get customerNumber() {
        return this._customerNumber;
    }

    set customerNumber(value) {
        this._customerNumber = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get iqty() {
        return this._iqty;
    }

    set iqty(value) {
        this._iqty = value;
    }
}