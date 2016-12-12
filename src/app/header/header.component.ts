import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenCheck } from '../authen-check';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authenCheck: AuthenCheck) {
  }

  ngOnInit() {
  }

  logout() {
    window.localStorage.removeItem('auth_key');
    this.authenCheck.canActivate();
    this.router.navigate(['login'])
  }

}
