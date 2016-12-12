import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  localLogin = {
    user: '',
    password: '',
  }

  constructor(private authService: AuthenService, private router: Router) {

  }

  ngOnInit() {
  }

  login() {
    console.log(this.localLogin)
    this.authService.login(this.localLogin).subscribe(res => {
      if(res) {
        this.router.navigate(['']);
      }
    })
  }

}
