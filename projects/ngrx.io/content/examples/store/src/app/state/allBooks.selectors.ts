import { createSelector } from '@ngrx/store';
import { AppState } from './state';
import { Book } from '../book-list/books.service';

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionIds = (state: AppState) => state.collection;

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionIds,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map(id => books.find(book => book.id === id))
  }
);