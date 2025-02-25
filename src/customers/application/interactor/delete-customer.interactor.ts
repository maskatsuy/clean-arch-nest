import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../domain/repository/customer.repository';
import { DeleteCustomerUseCase } from '../usecase/delete-customer.usecase';

@Injectable()
export class DeleteCustomerInteractor implements DeleteCustomerUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
