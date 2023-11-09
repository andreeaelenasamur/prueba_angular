import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserFilter } from '../interfaces/user-filter';
import { UserPagination } from '../interfaces/user-pagination';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }


  getUserList(currentPage: number, itemsPerPage: number, filters?: UserFilter): Observable<UserPagination> {
    return this.http.post<UserPagination>(`${environment.API_URL}:${environment.API_PORT}/api/users/list`, { filters, currentPage, itemsPerPage });
  }

}
