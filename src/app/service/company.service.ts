import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../model/company";
import {environment} from "../../environments/environment";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class authenticationService {


  constructor(private httpClient: HttpClient) {

  }

  getById(id): Observable<Company> {
    return this.httpClient.get<Company>(API_URL + `/companies/${id}`);
  }


  update(id: any, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${API_URL}/companies/${id}`, company);
  }
}
