import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { OrderPipe } from "ngx-order-pipe";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppSettings } from "src/app/apiUrl";
import { BooksService } from "../../services/books.service";

@Component({
  selector: "app-book-list-cards",
  templateUrl: "./book-list-cards.component.html",
  styleUrls: ["./book-list-cards.component.scss"]
})
export class BookListCardsComponent implements OnInit {
  ELEMENT_DATA = [];
  isUser: any;
  file: File = null;
  sortedCollection: any[];
  selectedFile: File = null;
  comicsRec = [];
  ficRec = [];
  storyRec = [];

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 5,
    // "arrows":true,
    // prevArrow:
    //   "<i class='material-icons nav-btn prev-slide'>arrow_back_ios</i>",
    // nextArrow:
    //   "<i class='material-icons nav-btn next-slide'>arrow_forward_ios</i>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    dots: false,
    infinite: false,
    draggable: false,
    focusOnSelect: true,
    swipe: true,
    touchMove: true,
    zIndex: 1000,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true
  };
  constructor(
    private bookservice: BooksService,
    private http: HttpClient,
    private toastr: ToastrService,
    private orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.ELEMENT_DATA, "id");
  }

  ngOnInit() {
    this.isUser = localStorage.getItem("roleId");
    this.getbooks();
    // this.getRecommmendedbooks();
  }

  getbooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      this.ELEMENT_DATA = data.resultsMap.books;
      console.log(this.ELEMENT_DATA)
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        const element = this.ELEMENT_DATA[i];
        if (element.genreId == 2) {
          this.comicsRec.push(element);
        } else if (element.genreId == 3) {
          this.ficRec.push(element);
        } else if (element.genreId == 1) {
          this.storyRec.push(element);
        }
      }
    });
  }

  getRecommmendedbooks() {
    this.bookservice.getRecomendedBooks().subscribe((data: any) => {
      console.log("Recommended Books", data);
    });
  }

  checkC() {
    localStorage.setItem("cobC", "true");
    localStorage.setItem("isHome", "false");

  }

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
          console.log(data);
          this.toastr.success(data.resultsMap.message);
        },
        error => {
          this.toastr.warning(error.error.message);
        }
      );
  }

  slickInit(e) {
    // console.log("slick initialized");
  }

  breakpoint(e) {
    // console.log("breakpoint");
  }

  afterChange(e) {
    // console.log("afterChange");
  }

  beforeChange(e) {
    // console.log("beforeChange");
  }
}
