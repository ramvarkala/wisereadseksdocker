import { LoginService } from '../../services/login.service';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  name: any;
  show: any;
  isUser: any;
  searchTerm: FormControl = new FormControl();
  myBooks = [] as any;
  angForm: FormGroup;
  userID: any;
  allExpandState = false;

  constructor(  private breakpointObserver: BreakpointObserver,
                private router: Router,
                private searchService: SearchService,
                private loginService: LoginService
            ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  onKeyUp(boxInput: HTMLInputElement) {
    const length = boxInput.value.length ;
    console.log(length);
  }

  logOut() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  // to_be_delivered(){
  //   this.router.navigate([ '/book-status', this.userID, 1]);
  // }

  // delivered(){
  //   this.router.navigate([ '/book-status', this.userID, 2])
  // }

  // books_ready_to_pickup(){
  //   this.router.navigate([ '/book-status', this.userID, 3])
  // }
  userbooks(){
    // alert(this.userID)
    this.router.navigate(['/user-book-details', this.userID]);
  }
  ngOnInit() {

   this.name = localStorage.getItem('username');
   this.isUser = localStorage.getItem('roleId');
   this.userID = localStorage.getItem('UserId'); 

  //  search
   this.searchTerm.valueChanges.subscribe(
      term => {
        if (term && term !== '' && term.length >= 3) {
          this.searchService.search(term).subscribe(
            (data: any) => {
              this.myBooks = data.resultsMap.books as any[];
              // console.log(data[0].BookName);
              console.log("myBooks",this.myBooks)
          });
        } else {
          this.myBooks = [];
        }

    });
  }

  checkC(){
    localStorage.setItem("cobC","true");
  }

  tabChange(tabIndex){
    localStorage.setItem("id2",tabIndex);
  }
}
