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
  private API_COMPANY_UNBLOCK = environment.apiUrl + '/companies' + '/unlock-company';
  private API_COMPANY_PROPOSED = environment.apiUrl + '/companies' + '/proposal-company';
  private API_COMPANY_SETPROPOSE = environment.apiUrl + '/companies' + '/set-propose';

  constructor(private httpClient: HttpClient) {

  }

  getById(id): Observable<Company> {
    return this.httpClient.get<Company>(API_URL + `/companies/${id}`);
  }

  findAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY);
  }


  findAllUnlockCompany() {
    return this.httpClient.get(this.API_COMPANY_UNBLOCK);
  }

  update(id: any, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${API_URL}/companies/${id}`, company);
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

//tim cong ty theo ID
  findCompanyById(id: string): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_COMPANY}/${id}`)
  }

//tin tat ca tin tuyen dung
  findAllRecruiment(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST);
  }

//duyet cong ty
  approveCompany(id: string): Observable<Company> {
    // @ts-ignore
    return this.httpClient.put<Company>(`${this.API_COMPANY + '/approve'}/${id}`);
  }

//khoa cong ty
  updateStatus(id: string): Observable<Company> {
    // @ts-ignore
    return this.httpClient.put<Company>(`${this.API_COMPANY + '/update-status'}/${id}`);
  }

  //danh sach tin de xuat
  findAllProposedCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_PROPOSED);
  }

  //set cong ty la de xuat
  proposeCompany(id: string): Observable<Company> {
    // @ts-ignore
    return this.httpClient.put<Company>(`${this.API_COMPANY_SETPROPOSE}/${id}`)
  }
}

