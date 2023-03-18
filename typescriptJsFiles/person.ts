import { Address } from './address'
import { Mail } from './mail'
import { Phone } from './phone'

export class Person {
  private _name: string
  private _surname: string
  private _age: number
  private _id: string
  private _birthday: string
  private _color: string
  private _gender: string
  private _notes: string
  private _addresses: Address
  private _mails: Mail
  private _phones: Phone

  constructor(
    name: string,
    surname: string,
    age: number,
    id: string,
    birthday: string,
    color: string,
    gender: string,
    notes: string,
    addresses: Address,
    mails: Mail,
    phones: Phone,
  ) {
    this._name = name
    this._surname = surname
    this._age = age
    this._id = id
    this._birthday = birthday
    this._color = color
    this._gender = gender
    this._notes = notes
    this._addresses = addresses
    this._mails = mails
    this._phones = phones
  }

    public get name(): string
 {
        return this._name;
    }

    public set name(name: string
) {
        this._name = name;
    }

    public get surname(): string
 {
        return this._surname;
    }

    public set surname(surname: string
) {
        this._surname = surname;
    }

    public get age(): number
 {
        return this._age;
    }

    public set age(age: number
) {
        this._age = age;
    }

    public get id(): string
 {
        return this._id;
    }

    public set id(id: string
) {
        this._id = id;
    }

    public get birthday(): string
 {
        return this._birthday;
    }

    public set birthday(birthday: string
) {
        this._birthday = birthday;
    }

    public get color(): string
 {
        return this._color;
    }

    public set color(color: string
) {
        this._color = color;
    }

    public get gender(): string
 {
        return this._gender;
    }

    public set gender(gender: string
) {
        this._gender = gender;
    }

    public get notes(): string
 {
        return this._notes;
    }

    public set notes(notes: string
) {
        this._notes = notes;
    }

    public get addresses(): Address
 {
        return this._addresses;
    }

    public set addresses(addresses: Address
) {
        this._addresses = addresses;
    }

    public get mails(): Mail
 {
        return this._mails;
    }

    public set mails(mails: Mail
) {
        this._mails = mails;
    }

    public get phones(): Phone {
        return this._phones;
    }

    public set phones(phones: Phone) {
        this._phones = phones;
    }

    showPerson():void{
        console.log(`
Person's Details:

        Name: ${this.name}, 
        Surname: ${this.surname}, 
        Age: ${this.age}, 
        ID: ${this.id}, 
        Birthday: ${this.birthday}, 
        Favorite color: ${this.color}, 
        Gender: ${this.gender}, 
        Notes: ${this.notes}`)
        console.log(`Address' Details: `);
        this.addresses.showAddress();
        console.log(`Email's Details: `)
        this.mails.showMail();
        console.log(`Phone's Details: `);
        this.phones.showPhone();
        console.log('\n            -------------------------------------------------------------')
    }

    checkId(id:string):boolean{
        return id===this.id
    }

}
