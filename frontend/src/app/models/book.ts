import { Author } from './author';
import { Genre } from './genre';

export class Book {
  id?: string;
  title: string;
  author: Author;
  summary: string;
  isbn: string;
  genre: Genre[];
}
