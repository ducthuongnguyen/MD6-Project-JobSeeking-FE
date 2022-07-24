import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../model/company";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_USER = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) {

  }

  getById(id): Observable<User> {
    return this.httpClient.get<User>(this.API_USER + `/${id}`);
  }
}
