import * as fromReducer from './books.reducer';
import { retrievedBookList } from './allBooks.actions';
import { Book } from '../book-list/books.service';

describe('BooksReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown'
      };
      const state = fromReducer.booksReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('retrievedBookList action', () => {
    it('should retrieve all books and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<Book> = [
        {
          id: 'testString',
          volumeInfo: {
            title: 'testBook',
            authors: ['FirstName LastName']
          }
        }
      ];
      const action = retrievedBookList({ books: newState });
      const state = fromReducer.booksReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});