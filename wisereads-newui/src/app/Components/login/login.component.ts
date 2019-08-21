import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  // user: object = {
  //   email: 'satish@omniwyse.com',
  //   password: 'satish'
  // };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
      this.router.navigate(['']);

    } else {
      this.router.navigate(['/login']);
    }
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app-dashboard';
    this.returnUrl = localStorage.getItem("url") || '/app-dashboard';

    console.log("returnUrl",this.returnUrl,this.route.snapshot.queryParams['returnUrl'])
  }

  get f() {
    return this.loginForm.controls;
  }

  signIn(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    localStorage.clear();
    this.loginService.logIn(this.user).subscribe(
      (data: any) => {
        // console.log(data, data.success);
        localStorage.setItem("Token", data.resultsMap.sessionToken);
        localStorage.setItem(
          "roleId",
          data.resultsMap.userDetails.userRoles[0].roleId
        );
        localStorage.setItem(
          "UserId",
          data.resultsMap.userDetails.userRoles[0].userId
        );
        localStorage.setItem(
          "createdBy",
          data.resultsMap.userDetails.userRoles[0].createdBy
        );
        localStorage.setItem("userEmail", data.resultsMap.userDetails.email);
        localStorage.setItem(
          "username",
          data.resultsMap.userDetails.firstName +
            " " +
            data.resultsMap.userDetails.lastName
        );
        localStorage.setItem("cobC",'true');
        localStorage.setItem("isHome",'false');

        if (data.success === true) {
          this.router.navigateByUrl(this.returnUrl);
          // location.assign('/app-dashboard')
        } else {
          this.toastr.error("Invalid credentials");
        }
      },
      error => {
        this.toastr.error("Please enter valid email and password");
      }
    );
  }
}
