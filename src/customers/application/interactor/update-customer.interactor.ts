import { Injectable } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { Customer } from '../../domain/model/customer';
import { UpdateCustomerUseCase } from '../usecase/update-customer.usecase';

@Injectable()
export class UpdateCustomerInteractor implements UpdateCustomerUseCase {
  constructor(private readonly customerService: CustomerService) {}

  async execute(id: string, dto: UpdateCustomerDto): Promise<Customer> {
    return await this.customerService.updateCustomer(id, dto);
  }
}
