import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getDetails(): Observable<Array<Book>> {
    return this.httpClient.get<Array<Book>>('http://localhost:8085/books');
}  
 addDetails(b: Book): Observable<Book> {
      return this.httpClient.post<Book>('http://localhost:8085/books',b);
   }
}
