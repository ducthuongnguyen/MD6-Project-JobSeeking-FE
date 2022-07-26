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
  private API_COMPANY_APPROVED = environment.apiUrl + '/companies' + '/approved-company';
  private API_COMPANY_PENDING = environment.apiUrl + '/companies' + '/pending-company';
  private API_COMPANY_BLOCK = environment.apiUrl + '/companies' + '/locked-company';
  private API_COMPANY_UNBLOCK = environment.apiUrl + '/companies' + '/unlock-company';
  private API_COMPANY_UNBLOCK_PAGE = environment.apiUrl + '/companies' + '/unlock-company-page';
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

  findPageUnlockCompany(request){
    const params = request;
    return  this.httpClient.get(this.API_COMPANY_UNBLOCK_PAGE,{params});
  }

  findUnlockCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_UNBLOCK);
  }

//đã đc duyệt
  findApprovedCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_APPROVED);
  }

//chờ duyệt
  findPendingCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_PENDING);
  }

//bị khóa
  findBlockCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_BLOCK);
  }

//tim cong ty theo ID
  findCompanyById(id: string): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_COMPANY}/${id}`)
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
  findProposedCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.API_COMPANY_PROPOSED);
  }

  //set cong ty la de xuat
  proposeCompany(id: string): Observable<Company> {
    // @ts-ignore
    return this.httpClient.put<Company>(`${this.API_COMPANY_SETPROPOSE}/${id}`)
  }
}

