import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecruitmentNews} from '../model/recruitment-news';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentNewsService {
  private API_RECRUIMENT_LIST = environment.apiUrl + '/recruitment-news';
  private API_RECRUIMENT_SETPROPOSE = environment.apiUrl + '/recruitment-news/set-propose';
  private API_RECRUIMENT_PROPOSE = environment.apiUrl + '/recruitment-news/proposal-news';

  constructor(private httpClient: HttpClient) {
  }


  findAll(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(environment.apiUrl + `/recruitment-news`);
  }

  findAllByCompanyId(): Observable<RecruitmentNews[]> {
    const id = localStorage.getItem('COMPANYID');
    console.log(id)
    return this.httpClient.get<RecruitmentNews[]>(`${environment.apiUrl}/recruitment-news/find-by-company/${id}`);
  }

  save(recruitment: RecruitmentNews): Observable<RecruitmentNews> {
    //@ts-ignore
    return this.httpClient.post<RecruitmentNews>(this.API_RECRUIMENT_LIST);
  }

  //danh sach tin bi khoa
  findAllLockedRecruitmentNews(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/locked-list`);
  }

  //danh sach tin khong khoa
  findUnlockRecruitmentNews():Observable<RecruitmentNews[]>{
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/unlocked-list`);
  }

  //chuyen trang thai
  updateStatus(id: string): Observable<RecruitmentNews> {
    // @ts-ignore
    return this.httpClient.put<RecruitmentNews>(`${environment.apiUrl}/recruitment-news/update-status/${id}`);
  }

  //tim tin tuyen dung theo ID
  findById(id: string): Observable<RecruitmentNews> {
    return this.httpClient.get<RecruitmentNews>(this.API_RECRUIMENT_LIST + `/${id}`);
  }

  //set tin tuyen dung la de xuat
  propose(id: string): Observable<RecruitmentNews> {
    // @ts-ignore
    return this.httpClient.put<RecruitmentNews>(this.API_RECRUIMENT_SETPROPOSE`${id}`);
  }

  //danh sach tin duoc de xuat
  findAllProposedNews(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_PROPOSE);
  }
  applyRecruitment(id: string, user: User): Observable<RecruitmentNews> {
    // @ts-ignore
    return this.httpClient.put<RecruitmentNews>(`${environment.apiUrl}/recruitment-news/apply/${id}`,user);
  }
}
