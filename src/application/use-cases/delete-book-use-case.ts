import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';

export class DeleteBookUseCase {
  constructor(
    private bookRepository: BookRepository
  ) {}

  execute(id: string): Array<Book> {
   return this.bookRepository.delete(id);
  }
}