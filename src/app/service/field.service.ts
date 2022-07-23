import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Field} from '../model/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Field[]> {
    return this.httpClient.get<Field[]>(environment.apiUrl + `/fields`);
  }
}
