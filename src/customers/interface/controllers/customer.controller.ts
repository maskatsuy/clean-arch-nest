import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { GetCustomersUseCase } from '../../application/usecase/get-customer.usecase';
import { UpdateCustomerUseCase } from '../../application/usecase/update-customer.usecase';
import { DeleteCustomerUseCase } from '../../application/usecase/delete-customer.usecase';
import { CreateCustomerDto } from '../../application/dto/create-customer.dto';
import { UpdateCustomerDto } from '../../application/dto/update-customer.dto';
import { CustomerPresenter } from '../presenter/customer.presenter';
import { CreateCustomerUseCase } from '../../application/usecase/create-customer.usecase';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly getCustomersUseCase: GetCustomersUseCase,
    private readonly updateCustomerUseCase: UpdateCustomerUseCase,
    private readonly deleteCustomerUseCase: DeleteCustomerUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateCustomerDto) {
    const customer = await this.createCustomerUseCase.execute(dto);
    return CustomerPresenter.toResponse(customer);
  }

  @Get()
  async getAll() {
    const customers = await this.getCustomersUseCase.execute();
    return customers.map(CustomerPresenter.toResponse);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    const updatedCustomer = await this.updateCustomerUseCase.execute(id, dto);
    return CustomerPresenter.toResponse(updatedCustomer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteCustomerUseCase.execute(id);
    return { message: 'Customer deleted successfully' };
  }
}
