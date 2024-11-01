export default class ItemModel{

    constructor(itemCode,description,qty,price) {
        this._itemCode = itemCode;
        this._description = description;
        this._qty = qty;
        this._price = price
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}