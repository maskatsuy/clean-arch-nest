export class Customer {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public phoneNumber: string,
  ) {}

  update(name: string, email: string, phoneNumber: string) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
