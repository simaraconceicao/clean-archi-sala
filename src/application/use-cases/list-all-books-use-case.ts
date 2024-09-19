import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';

export class ListAllBooksUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository
  ) {}

  execute(): Array<Book> {
    const books = this.bookRepository.findAll();
    return books
  }

}