import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { RecruitmentNews } from '../model/recruitment-news';
import {environment} from "../../environments/environment";
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentNewsService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(environment.apiUrl + `/recruitment-news`);
  }

  findAllByCompanyId(): Observable<RecruitmentNews[]> {
    const id = localStorage.getItem('COMPANYID');
    console.log(`${environment.apiUrl}/recruiment-news/findAllByCompanyId/${id}`);
    return this.httpClient.get<RecruitmentNews[]>(`${environment.apiUrl}/recruitment-news/findAllByCompanyId/${id}`);
  }

}
