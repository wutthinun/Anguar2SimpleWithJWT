import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  private url = 'http://localhost:8081/users'

  constructor(private http: Http) { }

  getData(): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer '+window.localStorage.getItem('auth_key'));

    return this.http.get(this.url,{headers}).map((res: Response) => {
      return res;
    })
  }

}
