"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(street, buildingnumber, floor, aptletter, zipcode, county, province) {
        this._street = street;
        this._buildingnumber = buildingnumber;
        this._floor = floor;
        this._aptletter = aptletter;
        this._zipcode = zipcode;
        this._county = county;
        this._province = province;
    }
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (street) {
            this._street = street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "buildingnumber", {
        get: function () {
            return this._buildingnumber;
        },
        set: function (buildingnumber) {
            this._buildingnumber = buildingnumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "floor", {
        get: function () {
            return this._floor;
        },
        set: function (floor) {
            this._floor = floor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "aptletter", {
        get: function () {
            return this._aptletter;
        },
        set: function (aptletter) {
            this._aptletter = aptletter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "zipcode", {
        get: function () {
            return this._zipcode;
        },
        set: function (zipcode) {
            this._zipcode = zipcode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "county", {
        get: function () {
            return this._county;
        },
        set: function (county) {
            this._county = county;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "province", {
        get: function () {
            return this._province;
        },
        set: function (province) {
            this._province = province;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.showAddress = function () {
        console.log("Street: ".concat(this.street, ", Building Number: ").concat(this.buildingnumber, ", Floor: ").concat(this.floor, ", Apt letter: ").concat(this.aptletter, ", Zip Code: ").concat(this.zipcode, ", County: ").concat(this.county, ", Province: ").concat(this.province));
    };
    return Address;
}());
exports.Address = Address;
