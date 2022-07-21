import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Company} from '../model/company';
import {RecruitmentNews} from '../model/recruitment-news';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private API_COMPANY = environment.apiUrl + '/companies';
  private API_RECRUIMENT_LIST = environment.apiUrl + '/recruitment-news';
  private API_COMPANY_APPROVED = environment.apiUrl + '/companies' + '/approved-company';
  private API_COMPANY_PENDING = environment.apiUrl + '/companies' + '/pending-company';
  private API_COMPANY_BLOCK = environment.apiUrl + '/companies' + '/locked-company';

  constructor(private httpClient: HttpClient) {

  }

  getById(id): Observable<Company> {
    return this.httpClient.get<Company>(API_URL + `/companies/${id}`);
  }

  findAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY);
  }

  update(id: any, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${API_URL}/companies/${id}`, company);
  }

  findAllApprovedCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_APPROVED);
  }

  findAllPendingCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_PENDING);
  }

  findAllBlockCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_BLOCK);
  }

  updateStatus(id: string, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${this.API_COMPANY + '/update-status'}/${id}`, company);
  }

  findCompanyById(id: string): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_COMPANY}/${id}`);
  }

  findAllRecruiment(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST);
  }
}

