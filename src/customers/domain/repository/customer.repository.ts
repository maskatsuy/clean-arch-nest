import { Customer } from '../model/customer';

export interface CustomerRepository {
  create(customer: Customer): Promise<Customer>;
  findById(id: string): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
  findByEmail(email: string): Promise<Customer | null>;
  update(customer: Customer): Promise<Customer>;
  delete(id: string): Promise<void>;
}
