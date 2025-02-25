export interface DeleteCustomerUseCase {
  execute(id: string): Promise<void>;
}
