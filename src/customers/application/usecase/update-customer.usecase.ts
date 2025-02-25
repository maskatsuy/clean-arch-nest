import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { Customer } from '../../domain/model/customer';

export interface UpdateCustomerUseCase {
  execute(id: string, dto: UpdateCustomerDto): Promise<Customer>;
}
