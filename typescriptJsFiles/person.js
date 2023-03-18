"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, age, id, birthday, color, gender, notes, addresses, mails, phones) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._id = id;
        this._birthday = birthday;
        this._color = color;
        this._gender = gender;
        this._notes = notes;
        this._addresses = addresses;
        this._mails = mails;
        this._phones = phones;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (surname) {
            this._surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (birthday) {
            this._birthday = birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (notes) {
            this._notes = notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            return this._addresses;
        },
        set: function (addresses) {
            this._addresses = addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mails) {
            this._mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phones", {
        get: function () {
            return this._phones;
        },
        set: function (phones) {
            this._phones = phones;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.showPerson = function () {
        console.log("\nPerson's Details:\n\n        Name: ".concat(this.name, ", \n        Surname: ").concat(this.surname, ", \n        Age: ").concat(this.age, ", \n        ID: ").concat(this.id, ", \n        Birthday: ").concat(this.birthday, ", \n        Favorite color: ").concat(this.color, ", \n        Gender: ").concat(this.gender, ", \n        Notes: ").concat(this.notes));
        console.log("Address' Details: ");
        this.addresses.showAddress();
        console.log("Email's Details: ");
        this.mails.showMail();
        console.log("Phone's Details: ");
        this.phones.showPhone();
        console.log('\n            -------------------------------------------------------------');
    };
    Person.prototype.checkId = function (id) {
        return id === this.id;
    };
    return Person;
}());
exports.Person = Person;
