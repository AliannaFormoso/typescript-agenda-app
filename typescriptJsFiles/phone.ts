export class Phone {
  private _phonetype: string
  private _phonenumber: number

  constructor(phonetype: string, phonenumber: number) {
    this._phonetype = phonetype
    this._phonenumber = phonenumber
  }

    public get phonetype(): string
 {
        return this._phonetype;
    }

    public set phonetype(phonetype: string
) {
        this._phonetype = phonetype;
    }

    public get phonenumber(): number {
        return this._phonenumber;
    }

    public set phonenumber(phonenumber: number) {
        this._phonenumber = phonenumber;
    }

    showPhone():void{
        console.log(`Phone type: ${this.phonetype}, Phone number: ${this.phonenumber}`)
    }


}
