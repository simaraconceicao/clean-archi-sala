import { BookRepository } from '../../application/repositories/book-repository';
import { Book } from '../../domain/book';

export class Repository implements BookRepository {
  //seu codigo aqui
  private books: Book[] = [];
  
  save (book: Book): void {
    this.books.push(book);
  }

  findAll (): Array<Book> {
    return this.books;
  }

  update(id: string, bodyParams: Partial<Book>): Book | null {
    const bookToUpdate = this.books.find(book => book.id === id);

    if (bookToUpdate) {
      // Atualiza apenas os campos presentes no bodyParams, mantendo os existentes
      const updatedBook = { 
        ...bookToUpdate, //spread operator - espalhamento
        ...bodyParams 
      };
      
      const index = this.books.findIndex(book => book.id === id); //vou salvar no array original o meu livro depois de atualizar
      this.books[index] = updatedBook; //mantendo os valores originais que nao foram enviados no corpo da requisicao

      return updatedBook;
    }

    return null;
  }


  delete (id: string): Book[] {
    const filteredBooks = this.books.filter(item => item.id !== id)
    return filteredBooks
  }
}