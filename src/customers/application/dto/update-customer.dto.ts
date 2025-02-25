export class UpdateCustomerDto {
  constructor(
    public readonly name?: string,
    public readonly email?: string,
    public readonly phoneNumber?: string,
  ) {}
}
