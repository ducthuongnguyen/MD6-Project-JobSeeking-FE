import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Company} from '../model/company';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(environment.apiUrl + '/companies');
  }
}
