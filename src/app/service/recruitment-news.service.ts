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
    console.log(`${environment.apiUrl}/recruiment-news/findAllByCompanyId/${id}`);
    return this.httpClient.get<RecruitmentNews[]>(`${environment.apiUrl}/recruitment-news/findAllByCompanyId/${id}`);
  }
}
