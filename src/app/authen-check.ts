import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthenCheck implements CanActivate {

  private isActivate: boolean = false;

  constructor(private router: Router){}

  canActivate() {
    if(window.localStorage.getItem('auth_key')) {
      console.log('loggined')
      this.isActivate = true;
      return true;
    }

    console.log('You must be login');
    this.router.navigate(['login']);
    this.isActivate = false;
    return false;
  }

}
