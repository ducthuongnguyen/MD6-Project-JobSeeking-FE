import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecruitmentNews} from '../model/recruitment-news';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentNewsService {
  private API_RECRUIMENT_LIST = environment.apiUrl + '/recruitment-news';

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(environment.apiUrl + `/recruitment-news`);
  }

  findAllByCompanyId(): Observable<RecruitmentNews[]> {
    const id = localStorage.getItem('COMPANYID');
    console.log(`${environment.apiUrl}/recruiment-news/find-by-company/${id}`);
    return this.httpClient.get<RecruitmentNews[]>(`${environment.apiUrl}/recruitment-news/find-by-company/${id}`);
  }

  save(recruitment: RecruitmentNews): Observable<RecruitmentNews> {
    //@ts-ignore
    return this.httpClient.post<RecruitmentNews>(this.API_RECRUIMENT_LIST);
  }

  findAllLockedRecruitmentNews(): Observable<RecruitmentNews[]>{
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/locked-list`);
  }

  findById(id:number): Observable<RecruitmentNews>{
    return this.httpClient.get<RecruitmentNews>(this.API_RECRUIMENT_LIST+`/${id}`);
  }
}
