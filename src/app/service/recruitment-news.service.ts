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
    const id = localStorage.getItem('ID');
    console.log(id)
    return this.httpClient.get<RecruitmentNews[]>(`${environment.apiUrl}/recruitment-news/find-by-company/${id}`);
  }

  // Thêm tin tuyển dụng
  save(recruitment: RecruitmentNews): Observable<RecruitmentNews> {
    return this.httpClient.post<RecruitmentNews>(this.API_RECRUIMENT_LIST, recruitment);
  }

  // Sửa tin tuyển dụng
  update(id: string, recruitment: RecruitmentNews): Observable<RecruitmentNews> {
    return this.httpClient.put<RecruitmentNews>(`${this.API_RECRUIMENT_LIST}/${id}`, recruitment);
  }

  // danh sach tin bi khoa
  findAllLockedRecruitmentNews(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/locked-list`);
  }

  // danh sach tin khong khoa
  findUnlockRecruitmentNews(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/unlocked-list`);
  }

  // danh sach tin khong khoa phan trang
  findPageUnlockRecruitmentNews(request): Observable<RecruitmentNews[]> {
    const params = request;
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/unlocked-list-page`, {params});
  }

  // chuyen trang thai
  updateStatus(id: string): Observable<RecruitmentNews> {
    // @ts-ignore
    return this.httpClient.put<RecruitmentNews>(`${environment.apiUrl}/recruitment-news/update-status/${id}`);
  }

  // tim tin tuyen dung theo ID
  findById(id: string): Observable<RecruitmentNews> {
    return this.httpClient.get<RecruitmentNews>(this.API_RECRUIMENT_LIST + `/${id}`);
  }

  // tim theo title va place
  findByTitleWorkingPlace(title: string, cities: string): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/find-by-title-place?title=` + title + `&place=` + cities);
  }

  //set tin tuyen dung la de xuat
  propose(id: string): Observable<RecruitmentNews> {
    // @ts-ignore
    return this.httpClient.put<RecruitmentNews>(this.API_RECRUIMENT_SETPROPOSE + `/${id}`);
  }

  // danh sach tin duoc de xuat
  findAllProposedNews(): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_PROPOSE);
  }

  applyRecruitment(id: string, user: User): Observable<RecruitmentNews> {
    // @ts-ignore
    return this.httpClient.put<RecruitmentNews>(`${environment.apiUrl}/recruitment-news/apply/${id}`, user);
  }

  //tìm theo job title, salary range, kinh nghiệm, thành phố, chuyen nganh (field)
  findAllByTitleSalaryExperiencePlaceField(title: string, from: number, to: number, experience: string, place: string, fieldId: string): Observable<RecruitmentNews[]> {
    return this.httpClient.get<RecruitmentNews[]>(this.API_RECRUIMENT_LIST + `/find-6-criteria?title=` + title + `&from=` + from + `&to=` + to + `&experience=` + experience + `&place=` + place + `&fieldId=` + fieldId);
  }
}
