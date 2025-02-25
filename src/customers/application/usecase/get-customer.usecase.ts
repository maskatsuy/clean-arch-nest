import { Customer } from '../../domain/model/customer';

export interface GetCustomersUseCase {
  execute(): Promise<Customer[]>;
}
