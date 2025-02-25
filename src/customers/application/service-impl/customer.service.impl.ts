import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../domain/repository/customer.repository';
import { Customer } from '../../domain/model/customer';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { CustomerService } from '../service/customer.service';

@Injectable()
export class CustomerServiceImpl implements CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async validateUniqueEmail(email: string): Promise<boolean> {
    const existingCustomer = await this.customerRepository.findByEmail(email);
    return existingCustomer === null;
  }

  async createCustomer(dto: CreateCustomerDto): Promise<Customer> {
    if (!(await this.validateUniqueEmail(dto.email))) {
      throw new Error('このメールアドレスは既に使用されています');
    }

    const customer = new Customer(
      crypto.randomUUID(),
      dto.name,
      dto.email,
      dto.phoneNumber,
    );
    return this.customerRepository.create(customer);
  }

  async updateCustomer(id: string, dto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);
    if (!customer) {
      throw new Error('顧客が見つかりません');
    }

    if (dto.email && dto.email !== customer.email) {
      const isUnique = await this.validateUniqueEmail(dto.email);
      if (!isUnique) {
        throw new Error('このメールアドレスは既に使用されています');
      }
    }

    customer.update(
      dto.name ?? customer.name,
      dto.email ?? customer.email,
      dto.phoneNumber ?? customer.phoneNumber,
    );
    return this.customerRepository.update(customer);
  }
}
