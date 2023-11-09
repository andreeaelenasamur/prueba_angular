import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }


  getUserList(): Observable<User[]> {
    return this.http.get<{ [key: string]: User[] }>('/assets/data/users.json')
    .pipe(
      map(({usuarios}) => usuarios)
    );
  }

}
