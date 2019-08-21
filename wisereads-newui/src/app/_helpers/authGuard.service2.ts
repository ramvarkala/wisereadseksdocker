import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SigninService2 implements CanActivate {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
      return this.router.navigate(['']);
    } 
    else {
      this.router.navigate(['home']);
    }
  }

  // ngOnInit(){
  //   if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
  //     this.router.navigate(['']);
  
  //   } else {
  //     this.router.navigate(['/home']);
  //   }
  // }

}
