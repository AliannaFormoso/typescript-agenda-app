"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(phonetype, phonenumber) {
        this._phonetype = phonetype;
        this._phonenumber = phonenumber;
    }
    Object.defineProperty(Phone.prototype, "phonetype", {
        get: function () {
            return this._phonetype;
        },
        set: function (phonetype) {
            this._phonetype = phonetype;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "phonenumber", {
        get: function () {
            return this._phonenumber;
        },
        set: function (phonenumber) {
            this._phonenumber = phonenumber;
        },
        enumerable: false,
        configurable: true
    });
    Phone.prototype.showPhone = function () {
        console.log("Phone type: ".concat(this.phonetype, ", Phone number: ").concat(this.phonenumber));
    };
    return Phone;
}());
exports.Phone = Phone;
