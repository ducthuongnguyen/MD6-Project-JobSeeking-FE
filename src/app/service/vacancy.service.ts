import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../model/vacancy';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>(environment.apiUrl + `/vacancies`);
  }
}
