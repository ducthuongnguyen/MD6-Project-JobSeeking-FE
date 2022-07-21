import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecruitmentNews} from '../model/recruitment-news';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Company} from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentNewsService {
  private API_RECRUIMENT_LIST = environment.apiUrl + '/recruitment-news';
  constructor(private httpClient: HttpClient) { }

}
