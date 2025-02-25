import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../domain/repository/customer.repository';
import { Customer } from '../../domain/model/customer';
import { GetCustomersUseCase } from '../usecase/get-customer.usecase';

@Injectable()
export class GetCustomersInteractor implements GetCustomersUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(): Promise<Customer[]> {
    return await this.customerRepository.findAll();
  }
}
