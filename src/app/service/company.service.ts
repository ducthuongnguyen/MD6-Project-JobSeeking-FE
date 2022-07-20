import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Company} from '../model/company';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private API_COMPANY = environment.apiUrl + '/companies';

  constructor(private httpClient: HttpClient) {

  }

  getById(id): Observable<Company> {
    return this.httpClient.get<Company>(API_URL + `/companies/${id}`);
  }


  update(id: any, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${API_URL}/companies/${id}`, company);
  }

  findAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY);
  }

  updateStatus(id: string, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${this.API_COMPANY + '/update-status'}/${id}`, company)
  }

  findCompanyById(id: string): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_COMPANY}/${id}`)
  }
}

