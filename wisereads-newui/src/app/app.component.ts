import { Component } from '@angular/core';
import { PlatformLocation, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'WiseReads';

  // constructor(location: PlatformLocation, private router: Router) {
  //   location.onPopState(() => {
  //   // this.router.navigateByUrl('/');
  //   history.go();
  //   });
  // }
  // constructor(
  //   private locationStrategy: LocationStrategy
  // ) { 
  //   // history.pushState(null, null, location.href);
  //       this.locationStrategy.onPopState(() => {
  //         history.pushState(null, null, location.href);
  //       })
  // }

  //  constructor(loc: PlatformLocation, private router: Router ,private locationStrategy: LocationStrategy) {
  //   history.pushState(null, null, location.href);
  //   this.locationStrategy.onPopState(() => {
  //             // history.pushState(null, null, location.href);
  //             loc.onPopState(() => {
  //               // this.router.navigateByUrl('/');
  //               history.pushState(null, null, location.href);
  //               history.forward();
  //               });
  //           })
  //   // loc.onPopState(() => {
  //   // // this.router.navigateByUrl('/');
  //   // history.go();
  //   // });
  // }
}
