import { AddBooks } from "./../../models/add-books";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BooksService } from "../../services/books.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { AppSettings } from "src/app/apiUrl";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  isUser: any;
  isRole: any;
  isMobile: any;
  ELEMENT_DATA = [];
  file: File = null;
  sortedCollection: any[];
  order: string = "id";
  reverse: boolean = false;
  p: number = 1;

  constructor(
    private fb: FormBuilder,
    private bookservice: BooksService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.ELEMENT_DATA, "id");
    // console.log(this.sortedCollection);
  }
  ngOnInit() {
    this.isUser = localStorage.getItem("roleId");
    this.getbooks();
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  myOptions = {
    placement: "right",
    "show-delay": 5000000
  };
  selectedFile: File = null;

  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile.name);
  }

  onUpload() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': undefined,
        Authorization: "Bearer " + localStorage.getItem("Token")
      })
    };
    const fd = new FormData();
    fd.append("file", this.selectedFile, this.selectedFile.name);
    this.http
      .post(`${AppSettings.URL}/api/books/upload-books-file`, fd, httpOptions)
      .subscribe(
        (data: any) => {
          // console.log(data);
          this.toastr.success(data.resultsMap.message);
        },
        error => {
          this.toastr.warning(error.error.message);
        }
      );
  }

  getbooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      // console.log(data);
      this.ELEMENT_DATA = data.resultsMap.books;
      // console.log( this.ELEMENT_DATA)
    });
  }

  editBook(regId: string): void {
    this.router.navigate(["edit-book", regId]);
  }

  checkC() {
    localStorage.setItem("cobC", "true");
  }
}
