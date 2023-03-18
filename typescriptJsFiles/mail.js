"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(mailtype, mailaddress) {
        this._mailtype = mailtype;
        this._mailaddress = mailaddress;
    }
    Object.defineProperty(Mail.prototype, "mailtype", {
        get: function () {
            return this._mailtype;
        },
        set: function (mailtype) {
            this._mailtype = mailtype;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "mailaddress", {
        get: function () {
            return this._mailaddress;
        },
        set: function (mailaddress) {
            this._mailaddress = mailaddress;
        },
        enumerable: false,
        configurable: true
    });
    Mail.prototype.showMail = function () {
        console.log("Email Type: ".concat(this._mailtype, ", Email address: ").concat(this.mailaddress));
    };
    return Mail;
}());
exports.Mail = Mail;
