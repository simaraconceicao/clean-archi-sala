import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';

export class UpdateBookUseCase {
 
  constructor (
    private bookRepository: BookRepository
  ){}

  execute(id: string, bodyParams: Partial<Book>) {
    return this.bookRepository.update(id, bodyParams);
  }
   
}