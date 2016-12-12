import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenService {

  private isLoggedin: boolean;

  url = 'http://localhost:8081/login';

  constructor(private http: Http) { }

  login(usercreds): Observable<boolean> {
    this.isLoggedin = false;
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url, usercreds, {headers}).map((res: Response) => {
      let token = res.json() && res.json().token;
      if (token) {
        localStorage.setItem('auth_key', res.json().token);
        return true;
      }else return false;
      })
    }

}
