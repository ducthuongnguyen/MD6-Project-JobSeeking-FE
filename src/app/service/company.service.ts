import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  update(id: any, company: any,image: any): Observable<Company> {
    const formData=new FormData();
    formData.append(
      "image",
      new Blob([image], {type: image.type}),
      image.name
    );
    formData.append(
      "company",
      new Blob([JSON.stringify(company)], {type:"application/json"})
    );
    console.log("form data", formData)
    return this.httpClient.put<Company>(`${API_URL}/companies/${id}`,formData);
  }
//đã đc duyệt
  findAllApprovedCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_APPROVED);
  }
//chờ duyệt
  findAllPendingCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_PENDING);
  }
//bị khóa
  findAllBlockCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_BLOCK);
  }

  updateStatus(id: string, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${this.API_COMPANY + '/update-status'}/${id}`, company)
  }

  findCompanyById(id: string): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_COMPANY}/${id}`)
  }

  findAllRecruiment(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST);
  }

  approveCompany(id: string): Observable<Company> {
    // @ts-ignore
    return this.httpClient.put<Company>(`${this.API_COMPANY + '/approve'}/${id}`)
  }
}

