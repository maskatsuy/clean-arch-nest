import { Injectable } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../../domain/model/customer';
import { CreateCustomerUseCase } from '../usecase/create-customer.usecase';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CreateCustomerInteractor implements CreateCustomerUseCase {
  constructor(private readonly customerService: CustomerService) {}

  async execute(dto: CreateCustomerDto): Promise<Customer> {
    return await this.customerService.createCustomer(dto);
  }
}
