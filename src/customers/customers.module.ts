import { Module } from '@nestjs/common';
import { CustomerController } from './interface/controllers/customer.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerInteractor } from './application/interactor/create-customer.interactor';
import { CustomerServiceImpl } from './application/service-impl/customer.service.impl';
import { CustomerPrismaRepository } from './infrastructure/repositories/customer-prisma.repository';

@Module({
  controllers: [CustomerController],
  providers: [
    PrismaService,
    { provide: 'CreateCustomerUseCase', useClass: CreateCustomerInteractor },
    { provide: 'CustomerService', useClass: CustomerServiceImpl },
    { provide: 'CustomerRepository', useClass: CustomerPrismaRepository },
  ],
  exports: ['CustomerService'],
})
export class CustomersModule {}
