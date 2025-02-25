import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CustomerRepository } from '../../domain/repository/customer.repository';
import { Customer } from '../../domain/model/customer';

@Injectable()
export class CustomerPrismaRepository implements CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(customer: Customer): Promise<Customer> {
    const created = await this.prisma.customer.create({
      data: {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phoneNumber: customer.phoneNumber,
      },
    });
    return new Customer(
      created.id,
      created.name,
      created.email,
      created.phoneNumber,
    );
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    return customer
      ? new Customer(
          customer.id,
          customer.name,
          customer.email,
          customer.phoneNumber,
        )
      : null;
  }

  async findAll(): Promise<Customer[]> {
    const customers = await this.prisma.customer.findMany();
    return customers.map(
      (customer) =>
        new Customer(
          customer.id,
          customer.name,
          customer.email,
          customer.phoneNumber,
        ),
    );
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    });
    return customer
      ? new Customer(
          customer.id,
          customer.name,
          customer.email,
          customer.phoneNumber,
        )
      : null;
  }

  async update(customer: Customer): Promise<Customer> {
    const updated = await this.prisma.customer.update({
      where: { id: customer.id },
      data: {
        name: customer.name,
        email: customer.email,
        phoneNumber: customer.phoneNumber,
      },
    });
    return new Customer(
      updated.id,
      updated.name,
      updated.email,
      updated.phoneNumber,
    );
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({ where: { id } });
  }
}
