import { CreateCustomerDto } from '../dto/create-customer.dto';
import { Customer } from '../../domain/model/customer';

export interface CreateCustomerUseCase {
  execute(dto: CreateCustomerDto): Promise<Customer>;
}
