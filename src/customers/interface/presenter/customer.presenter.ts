import { Customer } from '../../domain/model/customer';
import { CustomerResponseDto } from '../../application/dto/customer-response.dto';

export class CustomerPresenter {
  static toResponse(customer: Customer): CustomerResponseDto {
    return new CustomerResponseDto(
      customer.id,
      customer.name,
      customer.email,
      customer.phoneNumber,
    );
  }
}
