import { Customer } from '../../domain/model/customer';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

export interface CustomerService {
  validateUniqueEmail(email: string): Promise<boolean>;
  createCustomer(dto: CreateCustomerDto): Promise<Customer>;
  updateCustomer(id: string, dto: UpdateCustomerDto): Promise<Customer>;
}
