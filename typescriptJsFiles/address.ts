export class Address {
  private _street: string
  private _buildingnumber: number
  private _floor: string
  private _aptletter: string
  private _zipcode: number
  private _county: string
  private _province: string

  constructor(
    street: string,
    buildingnumber: number,
    floor: string,
    aptletter: string,
    zipcode: number,
    county: string,
    province: string,
  ) {
    this._street = street
    this._buildingnumber = buildingnumber
    this._floor = floor
    this._aptletter = aptletter
    this._zipcode = zipcode
    this._county = county
    this._province = province
  }

    public get street(): string
 {
        return this._street;
    }

    public set street(street: string
) {
        this._street = street;
    }

    public get buildingnumber(): number
 {
        return this._buildingnumber;
    }

    public set buildingnumber(buildingnumber: number
) {
        this._buildingnumber = buildingnumber;
    }

    public get floor(): string
 {
        return this._floor;
    }

    public set floor(floor: string
) {
        this._floor = floor;
    }

    public get aptletter(): string
 {
        return this._aptletter;
    }

    public set aptletter(aptletter: string
) {
        this._aptletter = aptletter;
    }

    public get zipcode(): number
 {
        return this._zipcode;
    }

    public set zipcode(zipcode: number
) {
        this._zipcode = zipcode;
    }

    public get county(): string
 {
        return this._county;
    }

    public set county(county: string
) {
        this._county = county;
    }

    public get province(): string {
        return this._province;
    }

    public set province(province: string) {
        this._province = province;
    }

    showAddress():void{
        console.log(`Street: ${this.street}, Building Number: ${this.buildingnumber}, Floor: ${this.floor}, Apt letter: ${this.aptletter}, Zip Code: ${this.zipcode}, County: ${this.county}, Province: ${this.province}`)
    }

}
