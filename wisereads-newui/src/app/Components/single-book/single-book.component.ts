import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router, RouterStateSnapshot } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { SearchService } from "src/app/services/search.service";
import { LoginService } from "src/app/services/login.service";
import { BooksService } from "../../services/books.service";
import { CheckOutBookService } from "src/app/services/check-out-book.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-single-book",
  templateUrl: "./single-book.component.html",
  styleUrls: ["./single-book.component.scss"]
})
export class SingleBookComponent implements OnInit {
  modalRef: BsModalRef;
  id: any;
  isUser: any;
  isrole: any;
  checkoutdata: string;
  duedate: string;
  adv: any;
  product: [];
  cobC: string;
  form: FormGroup;
  roleId: any;
  isHome: any;
  returnUrl: string;
  searchTerm: FormControl = new FormControl();
  myBooks = [] as any;
  name: any;
  userID: any;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  id2: any;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private router: Router,
    private searchService: SearchService,
    private loginService: LoginService,
    private breakpointObserver: BreakpointObserver,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,

    private booksservice: BooksService,
    private Checkoutservice: CheckOutBookService
  ) {
    this.isUser = localStorage.getItem("username");
    this.isrole = localStorage.getItem("UserId");
    // this.roleId=localStorage.getItem('roleId');
    this.form = this.fb.group({
      checkoutdata: this.fb.control("", Validators.required),
      duedate: this.fb.control("", Validators.required),
      adv: this.fb.control("", Validators.required)
    });
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    console.log(snapshot.url);
    localStorage.setItem("url", snapshot.url);
  }

  ngOnInit() {
    // if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
    //   this.router.navigate([`/book-status/${localStorage.getItem('url')}`]);

    // } else {
    //   this.router.navigate(['/book_list']);
    // }
        localStorage.setItem("inBookDetail",'true');
    this.bookList();
    // localStorage.setItem("cobC",'true');

    this.cobC = localStorage.getItem("cobC");
    this.isHome = localStorage.getItem("isHome");
    this.roleId = localStorage.getItem("roleId");
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/app-dashboard";
    console.log("url", this.returnUrl, this.route.snapshot);

    this.search();
    this.name = localStorage.getItem("username");
    this.isUser = localStorage.getItem("roleId");
    this.userID = localStorage.getItem("UserId");
    this.id2 = localStorage.getItem("id2");
  }
  createForm(){
    this.form = this.fb.group({
      checkoutdata: this.fb.control("", Validators.required),
      duedate: this.fb.control("", Validators.required),
      adv: this.fb.control("", Validators.required)
    });
  }

  ngOnDestroy(){
        localStorage.setItem("inBookDetail",'false');

  }

  bookList() {
    // this.spinner.show();
    this.booksservice
      .getProduct(this.route.snapshot.params.id)
      .subscribe((data: any) => {
        this.product = data.resultsMap.book;
        console.log(this.product);
      });
  }

  search() {
    this.searchTerm.valueChanges.subscribe(term => {
      if (term && term !== "" && term.length >= 3) {
        this.searchService.search(term).subscribe((data: any) => {
          this.myBooks = data.resultsMap.books as any[];
        });
      } else {
        this.myBooks = [];
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.createForm();
    this.modalRef = this.modalService.show(template);
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CheckoutDialogComponent, {
  //     width: '250px',
  //     height:'150px',
  //     data: {checkoutdata: this.checkoutdata, duedate: this.duedate, adv: this.adv}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.adv = result.adv;
  //     this.dialog_data = result;
  //     console.log("dialog",this.dialog_data)
  //     // const data = this.checkoutbook()
  //     // console.log("adv",this.dialog_data.adv)
  //   });
  // }

  checkoutbook(formValue) {
    var data = {
      checkoutdata: this.checkoutdata,
      duedate: this.duedate,
      adv: this.adv
    };
    const payload = this.formatPayload(this.product, formValue);
    this.Checkoutservice.CheckoutBook(payload).subscribe(
      (data: any) => {
        this.toastr.success("Successfully checkedOut");
        this.modalRef.hide();
        if (this.roleId == 4) {
          this.router.navigateByUrl("/app-book-list-cards");
        } else if (this.roleId == 2) {
          this.router.navigateByUrl("/book_list");
        } else this.router.navigateByUrl("/book_list");
      },
      error => {
        console.log(error);
        this.modalRef.hide();
        this.createForm();
        this.toastr.warning("Book is out of stock");
      }
    );
  }

  formatPayload(product, dialog_data) {
    const array = {
      advancePaid: dialog_data.adv,
      createdBy: this.isUser,
      checkedOutBooksList: [
        {
          bookId: product.bookId,
          ownerId: product.ownerId,
          inventoryId: product.inventoryId,
          userId: parseInt(this.isrole),
          checkedOutDate: dialog_data.checkoutdata,
          expReturnDate: dialog_data.duedate,
          checkedItatusId: 1
        }
      ]
    };
    return array;
  }

  onKeyUp(){
  localStorage.setItem("cobC","true");
  }

  navigate() {
    localStorage.setItem("cobC", "false");
    this.router.navigateByUrl("/login");
  }

  routerNav() {
    if (this.roleId == 4) {
      this.router.navigateByUrl("/app-book-list-cards");
    } else if(this.roleId !=4){ 
    this.router.navigateByUrl("/book_list");
    }
    else this.router.navigateByUrl("/");
  }

  routerNav2() {
    if (this.id2 == 1 || this.id2 == 2 || this.id2 == 3 || this.id2 == 4) {
      this.router.navigateByUrl(`/book-status/${this.userID}/${this.id2}`);
    } 
    else this.router.navigateByUrl("/");
  }

  logOut() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(["/home"]);
  }
  reload(bookId){
    let inBookDetailC=localStorage.getItem('inBookDetail');
    if(inBookDetailC=='true')
    location.assign(`/book-detail/${bookId}`);
    else 
    this.router.navigate([`/book-detail/${bookId}`]);

  }
}
