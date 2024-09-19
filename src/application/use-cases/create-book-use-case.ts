import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';
import { IdGenerator } from '../repositories/id-generator-interface';

export class CreateBookUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository,
    private idGenerator: IdGenerator
  ){}

  execute(bookParams: Partial<Book>): Book {
    const book = {
      id: this.getId(),
      createdAt: this.getDate(),
      ...bookParams
    } as Book;

    this.bookRepository.save(book);
    return book;
  } 

  private getDate() {
    return new Date().toLocaleDateString('PT-br');
  }

  private getId() {
    return this.idGenerator.generate();
  }
}
