import { Repository } from '../../infrastructure/database/repository';
import { CreateBookUseCase } from '../../application/use-cases/create-book-use-case';
import { IdentifierGenerator } from './id-generator';
import { BookController } from '../../interface/book-controller';
import { ListAllBooksUseCase } from '../../application/use-cases/list-all-books-use-case';
import { DeleteBookUseCase } from '../../application/use-cases/delete-book-use-case';
import { UpdateBookUseCase } from '../../application/use-cases/update-book-use-case';

export function configureDependencies() {
 //seu codigo aqui
 const bookRepository = new Repository();
 const idGenerator = new IdentifierGenerator();
 
 const createBookUseCase = new CreateBookUseCase(bookRepository, idGenerator);
 const listAllBooksUseCase = new ListAllBooksUseCase(bookRepository);
 const updateBookUseCase = new UpdateBookUseCase(bookRepository);
 const deleteBooksUseCase = new DeleteBookUseCase(bookRepository);
 
 const bookController = new BookController(createBookUseCase, listAllBooksUseCase, updateBookUseCase, deleteBooksUseCase);

 return {
  bookController
 }

} 