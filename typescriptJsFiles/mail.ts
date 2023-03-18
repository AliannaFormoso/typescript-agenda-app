export class Mail {
  private _mailtype: string
  private _mailaddress: string

  constructor(mailtype: string, mailaddress: string) {
    this._mailtype = mailtype
    this._mailaddress = mailaddress
  }

    public get mailtype(): string
 {
        return this._mailtype;
    }

    public set mailtype(mailtype: string
) {
        this._mailtype = mailtype;
    }

    public get mailaddress(): string {
        return this._mailaddress;
    }

    public set mailaddress(mailaddress: string) {
        this._mailaddress = mailaddress;
    }

    showMail():void{
        console.log(`Email Type: ${this._mailtype}, Email address: ${this.mailaddress}`)
    }

}

