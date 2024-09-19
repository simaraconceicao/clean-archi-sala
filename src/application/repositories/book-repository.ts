import { Book } from '../../domain/book';

export interface BookRepository {
 save(book: Book): void;
 findAll(): Book[];
 update(id: string, bodyParams: Partial<Book>): Book | null
 delete(id: string): Book[];
}