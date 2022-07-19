import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserToken} from "../model/user-token";
import {User} from "../model/user";
import {Company} from "../model/company";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;
  update = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(API_URL + '/signin-company', {email, password})
      .pipe(map(company => {
        localStorage.setItem('currentUser', JSON.stringify(company));
        this.currentUserSubject.next(company);
        // this.update.emit('login');
        return company;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('ACCESS_TOKEN');
    // this.currentUserSubject.next(null);
  }

  register(company: any): Observable<Company> {
    return this.http.post<User>("http://localhost:8080/signup-company", company);
  }
}
