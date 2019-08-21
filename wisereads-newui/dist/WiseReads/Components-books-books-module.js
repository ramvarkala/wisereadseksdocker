(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-books-books-module"],{

/***/ "./src/app/Components/books/add-books/add-books.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/books/add-books/add-books.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='container-fluid'>\n\n  <div class=\"cards-heading\">\n  <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n  <h1 *ngIf=\"check\">Add Book</h1>\n  <h1 *ngIf=\"!check\">Edit Book</h1>\n\n  </div>\n\n  <div class=\"form\">\n      <form name=\"myForm\" #addBookForm=\"ngForm\"  novalidate>\n      \n          <div class=\"row form-group\">\n              <div class=\"col-md-6\">\n                  <input    type=\"text\" \n                            placeholder=\"Book Name\" \n                            name=\"title\"\n                            [(ngModel)]=\"model.title\"\n                             #title=\"ngModel\"\n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': addBookForm.submitted && title.invalid }\"\n                            required\n                            />\n                  <div *ngIf=\"addBookForm.submitted && title.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"title.errors.required\">Book Name is required</div>\n                  </div>\n                \n              </div>\n              <div class=\"col-md-6\">\n                    <input type=\"text\" \n                            placeholder=\"Publisher\" \n                            [(ngModel)]=\"model.publisher\"\n                             #publisher=\"ngModel\"\n                             required\n                             name=\"publisher\"\n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': addBookForm.submitted && publisher.invalid }\"\n                    />\n                    <div *ngIf=\"addBookForm.submitted && publisher.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"publisher.errors.required\">Publisher is required</div>\n                    </div>\n              </div>\n          </div>\n\n          <div class=\"row form-group\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" \n                        placeholder=\"ISBN Code\" \n                        [(ngModel)]=\"model.isbnCode\"\n                        #isbnCode=\"ngModel\"\n                        name=\"isbnCode\"\n                        required\n                        class=\"form-control\" \n                        [ngClass]=\"{ 'is-invalid': addBookForm.submitted && isbnCode.invalid }\"\n                        />\n                <div *ngIf=\"addBookForm.submitted && isbnCode.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"isbnCode.errors.required\">ISBN Code is required</div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"date\">\n                            <input  \n                                [matDatepicker]=\"picker\"  \n                                placeholder=\"Publication Date\" \n                                [(ngModel)]=\"model.publicationDate\"\n                                #publicationDate=\"ngModel\"\n                                name=\"publicationDate\"\n                                required\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && publicationDate.invalid }\"\n                            />\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker></mat-datepicker>\n                  </div>\n              \n                    <div *ngIf=\"addBookForm.submitted && publicationDate.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"publicationDate.errors.required\">Publication Date is required</div>\n                    </div>\n              </div>\n          </div>\n\n          <div class=\"row form-group\">\n              <div class=\"col-md-6\">\n                    <input type=\"text\" \n                            placeholder=\"Author Name\" \n                            [(ngModel)]=\"model.author\"\n                            #author=\"ngModel\"\n                            required\n                            name=\"author\"\n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': addBookForm.submitted && author.invalid }\" \n                    />\n                    <div *ngIf=\"addBookForm.submitted && author.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"author.errors.required\">Author Name is required</div>\n                    </div>\n              </div>\n              <div class=\"col-md-6\">\n                    <input type=\"text\" \n                            placeholder=\"Cover Page\" \n                            [(ngModel)]=\"model.bookCoverPage\"\n                            #bookCoverPage=\"ngModel\"\n                            name=\"bookCoverPage\"\n                            required\n                            class=\"form-control\" \n                            [ngClass]=\"{ 'is-invalid': addBookForm.submitted && bookCoverPage.invalid }\" \n                    />\n                    <div *ngIf=\"addBookForm.submitted && bookCoverPage.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"bookCoverPage.errors.required\">Cover Page is required</div>\n                    </div>\n              </div>\n          </div>\n\n          <div class=\"row form-group\">\n              <div class=\"col-md-6\">\n                    <textarea type=\"text\" \n                                placeholder=\"Description\" \n                                [(ngModel)]=\"model.bookDescription\"\n                                #bookDescription=\"ngModel\"\n                                required\n                                name=\"bookDescription\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && bookDescription.invalid }\"  >\n                    </textarea>\n                    <div *ngIf=\"addBookForm.submitted && bookDescription.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"bookDescription .errors.required\">Description is required</div>\n                    </div>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                                <input type=\"text\" \n                                        placeholder=\"No. of Pages\" \n                                        [(ngModel)]=\"model.numberOfPages\"\n                                        #numberOfPages=\"ngModel\"\n                                        required\n                                        name=\"numberOfPages\"\n                                        class=\"form-control\" \n                                        [ngClass]=\"{ 'is-invalid': addBookForm.submitted && numberOfPages.invalid }\"  \n                                        />\n                                <div *ngIf=\"addBookForm.submitted && numberOfPages.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"numberOfPages.errors.required\">No. of Pages is required</div>\n                                </div>\n                      </div>\n                      <div class=\"col-md-12 mt-3\">\n                              <input type=\"text\" \n                                    placeholder=\"Sample Page Url\" \n                                    [(ngModel)]=\"model.samplePageUrl\"\n                                    #samplePageUrl=\"ngModel\"\n                                    required\n                                    name=\"samplePageUrl\"\n                                    class=\"form-control\" \n                                    [ngClass]=\"{ 'is-invalid': addBookForm.submitted && samplePageUrl.invalid }\"  \n                                    />\n                              <div *ngIf=\"addBookForm.submitted && samplePageUrl.invalid\" class=\"invalid-feedback\">\n                                  <div *ngIf=\"samplePageUrl.errors.required\">Sample Page Url is required</div>\n                              </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"row form-group\">\n                  <div class=\"col-md-6\">\n                        <select placeholder=\"Select bookGenre\" \n                                name=\"bookGenre\" \n                                id=\"genreId\" \n                                [(ngModel)]=\"model.genreId\"\n                                #genreId=\"ngModel\"\n                                required\n                                name=\"genreId\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && genreId.invalid }\"   \n                        >\n                                <option value=\"undefined\" hidden>Select Genre</option>\n                                <option *ngFor=\"let id of comboBoxesbookGenre\" [value]=\"id.genre_id\"\n                                (onSelectionChange)=\"comboGenr($event,id)\">{{id.genre}}\n                                </option>\n                        </select>\n                        <div *ngIf=\"addBookForm.submitted && genreId.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"genreId .errors.required\">Select Genre is required</div>\n                        </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                        <input type=\"text\" \n                                placeholder=\"Image Url1\" \n                                [(ngModel)]=\"model.imagesUrl1\"\n                                #imagesUrl1=\"ngModel\"\n                                required\n                                name=\"imagesUrl1\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && imagesUrl1.invalid }\"   \n                        />\n                        <div *ngIf=\"addBookForm.submitted && imagesUrl1.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"imagesUrl1.errors.required\">Image Url1 is required</div>\n                        </div>\n                  </div>\n          </div>\n\n          <div class=\"row form-group\">\n                  <div class=\"col-md-6\">\n                        <input type=\"text\" \n                                placeholder=\"Edition\" \n                                [(ngModel)]=\"model.edition\"\n                                #edition=\"ngModel\"\n                                required\n                                name=\"edition\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && edition.invalid }\"  \n                        />\n                        <div *ngIf=\"addBookForm.submitted && edition.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"edition .errors.required\">Edition is required</div>\n                        </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                        <input type=\"text\" \n                                placeholder=\"Image Url2\" \n                                [(ngModel)]=\"model.imagesUrl2\"\n                                #imagesUrl2=\"ngModel\"\n                                required\n                                name=\"imagesUrl2\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && imagesUrl2.invalid }\"  \n                        />\n                        <div *ngIf=\"addBookForm.submitted && imagesUrl2.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"imagesUrl2.errors.required\">Image Url2 is required</div>\n                        </div>\n                  </div>\n          </div>\n\n\n          <div class=\"row form-group\">\n                  <div class=\"col-md-6\">\n                        <select placeholder=\"Select Owner\" \n                                name=\"ownerId\" \n                                id=\"ownerId\" \n                                [(ngModel)]=\"model.ownerId\"\n                                #ownerId=\"ngModel\"\n                                required\n                                name=\"ownerId\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && ownerId.invalid }\"   \n                         >\n                            <option value=\"undefined\" hidden>Select Owner</option>\n                            <option  value=\"1\">omniwyse</option>\n                        </select>\n                        <div *ngIf=\"addBookForm.submitted && ownerId.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"ownerId .errors.required\">Owner is required</div>\n                        </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                        <input type=\"text\" \n                                placeholder=\"Rental Value\" \n                                [(ngModel)]=\"model.rentPerDay\"\n                                #rentPerDay=\"ngModel\"\n                                required\n                                name=\"rentPerDay\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && rentPerDay.invalid }\" \n                        />\n                        <div *ngIf=\"addBookForm.submitted && rentPerDay.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rentPerDay.errors.required\">Rental Value is required</div>\n                        </div>\n                  </div>\n          </div>\n\n          <div class=\"row form-group\">\n                  <div class=\"col-md-6\">\n                        <input type=\"text\" \n                                placeholder=\"Price\" \n                                [(ngModel)]=\"model.bookPrice\"\n                                #bookPrice=\"ngModel\"\n                                required\n                                name=\"bookPrice\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && bookPrice.invalid }\" \n                        />\n                        <div *ngIf=\"addBookForm.submitted && bookPrice.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"bookPrice.errors.required\">Book Price is required</div>\n                        </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                        <input type=\"number\" \n                                placeholder=\"No.of Copies\" \n                                [(ngModel)]=\"model.stock\"\n                                #stock=\"ngModel\"\n                                required\n                                name=\"stock\"\n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': addBookForm.submitted && stock.invalid }\" \n                            />\n                        <div *ngIf=\"addBookForm.submitted && stock.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"stock.errors.required\">No.of Copies is required</div>\n                        </div>\n                  </div>\n          </div>\n\n          \n          <div class=\"form-group\">\n                <button mat-raised-button style=\"background-color: rgb(78, 75, 75) ;color: #ffffff; width: 8vw;height: 40px;\" (click)=\"cancel()\" \n                class=\" mr-3 mat-raised-button mat-warn mat-cancel\"> Cancel</button>\n          \n                <button mat-raised-button style=\"background-color: #2fc7f5 ;color: #ffffff;width: 8vw;height: 40px;\" *ngIf=\"check\" (click)=\"onSubmit()\"\n                 class=\"mr-3 mat-raised-button mat-primary\">Save</button>\n      \n                 <button mat-raised-button style=\"background-color: #2fc7f5 ;color: #ffffff;width: 8vw;height: 40px;\" *ngIf=\"!check\" (click)=\"editBooks(addBookForm)\" \n                 class=\"mat-raised-button mat-primary\">Update</button>\n          \n          </div>\n      </form>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/Components/books/add-books/add-books.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Components/books/add-books/add-books.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -webkit-justify-content: space-around;\n          justify-content: space-around; }\n\n.cards-heading {\n  display: -webkit-flex;\n  display: flex;\n  margin-left: 13px; }\n\n.cards-heading h1 {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 10px 16px;\n    color: #707070; }\n\n.form {\n  border-radius: 10px;\n  box-shadow: 0 3px 6px 0 rgba(157, 206, 255, 0.16);\n  background-color: #ffffff;\n  padding: 60px;\n  margin-top: 40px; }\n\n.form input {\n    height: 48px;\n    border-radius: 3px;\n    border: solid 1px #c8c8c8;\n    background-color: #ffffff; }\n\n.form textarea {\n    height: 110px;\n    border-radius: 3px;\n    border: solid 1px #c8c8c8;\n    background-color: #ffffff; }\n\n.form .date {\n    display: -webkit-flex;\n    display: flex; }\n\n.form mat-datepicker-toggle.mat-datepicker-toggle {\n    margin-left: -48px;\n    margin-top: 4px; }\n\n.mat-datepicker-input-container {\n  width: 300px;\n  height: 23vw; }\n\n.mat-calendar {\n  zoom: \"0.75\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2Jvb2tzL2FkZC1ib29rcy9hZGQtYm9va3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IscUNBQTZCO1VBQTdCLDZCQUE2QixFQUFBOztBQUkvQjtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLGlCQUFnQixFQUFBOztBQUZsQjtJQUlJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQ0YsRUFBQTs7QUFLSjtFQUNFLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQseUJBQXlCO0VBQ3pCLGFBQVk7RUFDWixnQkFBZSxFQUFBOztBQUxqQjtJQU9NLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QixFQUFBOztBQVYvQjtJQWNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QixFQUFBOztBQWpCN0I7SUFxQkkscUJBQVk7SUFBWixhQUFZLEVBQUE7O0FBckJoQjtJQXdCSSxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixZQUNGLEVBQUE7O0FBQ0E7RUFBZSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2Jvb2tzL2FkZC1ib29rcy9hZGQtYm9va3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHN7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBcbiAgfVxuXG4gIC5jYXJkcy1oZWFkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIG1hcmdpbi1sZWZ0OjEzcHg7XG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luOiAxMHB4IDE2cHg7XG4gICAgICBjb2xvcjogIzcwNzA3MFxuICAgIH1cbiAgfVxuXG5cblxuLmZvcm17XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMTU3LCAyMDYsIDI1NSwgMC4xNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6NjBweDtcbiAgbWFyZ2luLXRvcDo0MHB4O1xuICBpbnB1dHtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjOGM4Yzg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2M4YzhjODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLmRhdGV7XG4gICAgZGlzcGxheTpmbGV4O1xuICB9XG4gIG1hdC1kYXRlcGlja2VyLXRvZ2dsZS5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDhweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG59XG4ubWF0LWRhdGVwaWNrZXItaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIzdndcbn1cbi5tYXQtY2FsZW5kYXJ7IHpvb206XCIwLjc1XCIgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/books/add-books/add-books.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/books/add-books/add-books.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBooksComponent", function() { return AddBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_save_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/save-user.service */ "./src/app/services/save-user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var AddBooksComponent = /** @class */ (function () {
    function AddBooksComponent(formBuilder, books, router, saveUserService, route, toastr) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.books = books;
        this.router = router;
        this.saveUserService = saveUserService;
        this.route = route;
        this.toastr = toastr;
        this.submitted = false;
        this.model = {};
        this.check = true;
        this.route.params.subscribe(function (params) {
            if (params) {
                _this.regId = params.id;
                // console.log(this.regId)
            }
        });
    }
    AddBooksComponent.prototype.ngOnInit = function () {
        if (this.regId) {
            this.loadEditBook(this.regId);
        }
        this.loadComboBoxes();
    };
    AddBooksComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model.createdBy = localStorage.getItem('username');
        this.books.AddBooks(this.model).subscribe(function (data) {
            console.log(data);
            if (data.resultsMap.book) {
                _this.toastr.success("Book Details added successfully");
                _this.router.navigateByUrl('/book_list');
            }
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    AddBooksComponent.prototype.loadEditBook = function (regId) {
        var _this = this;
        this.check = false;
        this.books.loadbook(regId).subscribe(function (data) {
            console.log(data);
            _this.model = data.resultsMap.book;
            _this.model.publicationDate = data.resultsMap.book ? new Date(data.resultsMap.book.publicationDate) : '';
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    AddBooksComponent.prototype.editBooks = function (myForm) {
        var _this = this;
        if (myForm.valid) {
            this.model.createdBy = localStorage.getItem('username');
            this.books.editbook(this.model).subscribe(function (data) {
                // console.log('addUser Object', this.addUser);
                // console.log('edit books',data)
                if (data.resultsMap.book) {
                    _this.toastr.success(data.message);
                    _this.router.navigateByUrl('/book_list');
                }
                else {
                    _this.toastr.warning(data.message);
                }
            }, function (error) {
                console.log(error);
                _this.toastr.warning(error.error.message);
            });
        }
    };
    AddBooksComponent.prototype.loadComboBoxes = function () {
        var _this = this;
        var body = [
            'roles',
            'bookGenre',
            'gender',
            'bookCondition',
            'userStatus'
        ];
        this.saveUserService.loadComboDropDowns(body).subscribe(function (data) {
            if (data) {
                _this.comboBoxesbookGenre = data.result.bookGenre;
                // console.log('comboDropDowns', this.comboBoxesbookGenre);
            }
        });
    };
    AddBooksComponent.prototype.comboGenr = function ($event, id) {
        if ($event.source.selected) {
            this.addbook.genreId = id.genre_id;
        }
    };
    AddBooksComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/book_list');
    };
    AddBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-books',
            template: __webpack_require__(/*! ./add-books.component.html */ "./src/app/Components/books/add-books/add-books.component.html"),
            styles: [__webpack_require__(/*! ./add-books.component.scss */ "./src/app/Components/books/add-books/add-books.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_save_user_service__WEBPACK_IMPORTED_MODULE_5__["SaveUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AddBooksComponent);
    return AddBooksComponent;
}());



/***/ }),

/***/ "./src/app/Components/books/books-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Components/books/books-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_books_add_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-books/add-books.component */ "./src/app/Components/books/add-books/add-books.component.ts");




var routes = [
    {
        path: '', component: _add_books_add_books_component__WEBPACK_IMPORTED_MODULE_3__["AddBooksComponent"]
    },
];
var BooksRoutingModule = /** @class */ (function () {
    function BooksRoutingModule() {
    }
    BooksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BooksRoutingModule);
    return BooksRoutingModule;
}());



/***/ }),

/***/ "./src/app/Components/books/books.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Components/books/books.module.ts ***!
  \**************************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/Components/books/books-routing.module.ts");
/* harmony import */ var _add_books_add_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-books/add-books.component */ "./src/app/Components/books/add-books/add-books.component.ts");







var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_books_add_books_component__WEBPACK_IMPORTED_MODULE_6__["AddBooksComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _books_routing_module__WEBPACK_IMPORTED_MODULE_5__["BooksRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"]
            ]
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ })

}]);
//# sourceMappingURL=Components-books-books-module.js.map