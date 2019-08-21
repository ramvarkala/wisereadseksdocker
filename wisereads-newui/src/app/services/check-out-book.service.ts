import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { AppSettings } from '../apiUrl';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CheckOutBookService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    }),
  };
  loadComboCheckedStatus(body) {
    return this.httpClient.post(AppSettings.URL + '/api/combo-box-tables', body, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  checkOutBooksList() {
    return this.httpClient.get(AppSettings.URL + '/api/checked-out-books', this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  updateBookStatus(obj) {
    return this.httpClient.put(AppSettings.URL + '/api/checked-out-books/order-details/book-status', obj, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }


  userBookList(id){
    return this.httpClient.get(`${AppSettings.URL}/api/checked-out-books/user/` +  id ,this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  // Get User checked out books by Status

  userBookStatus(userId , bookStatus){
      return this.httpClient.get(`${AppSettings.URL}/api/checked-out-books/users/` + userId + `/rentals?checkOutStatusId=` + bookStatus , this.httpOptions).pipe(map((res: Response) => {
        return res;
      }));
  }

  // checkout book

  CheckoutBook(data){
    return this.httpClient.post(`${AppSettings.URL}/api/checked-out-books/order-details`,data, this.httpOptions) 
  }

  CheckinBook(data){
    return this.httpClient.put(`${AppSettings.URL}/api/checked-out-books/order-details/book-status`,data, this.httpOptions) 
  }
  
  

}
