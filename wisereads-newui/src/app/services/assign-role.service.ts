import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AssignRoleService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    }),
  };
  updateRoles(body) {
    return this.httpClient.post(AppSettings.URL + '/api/users/assign-roles', body, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }
}
