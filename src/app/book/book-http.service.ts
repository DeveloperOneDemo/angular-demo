import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {

  // to work with HttpClient, we should include HttpClientModule in app.module.ts file
  constructor(private http: HttpClient) { }

  fetchAllBooks(): Observable<Book[]>{
    // we need to work with HttpClient to consume an endpoint
    return this.http.get<Book[]>("http://localhost:4040/api/books");
  }

  deleteBook(bookId: number): Observable<Book>{
    return this.http.delete<Book>("http://localhost:4040/api/books/"+bookId);
  }

  addBook(bookModel: Book): Observable<Book>{
    return this.http.post<Book>("http://localhost:4040/api/books", JSON.stringify(bookModel));
  }

  updateBook(bookModel: Book): Observable<Book>{
    return this.http.put<Book>("http://localhost:4040/api/books", JSON.stringify(bookModel));
  }

  fetchABook(bookId: number): Observable<Book>{
    return this.http.get<Book>("http://localhost:4040/api/books/"+bookId);
  }
}
