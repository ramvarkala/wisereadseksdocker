(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-user-module-user-module-module"],{

/***/ "./src/app/Components/user-module/book-status/book-status.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/user-module/book-status/book-status.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section *ngIf=\"tableData.length > 0; else noData\">\n  <div class=\"item2\" fxFlex=\"50%\">\n    <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\" />\n    <h1 *ngIf=\"id2==1\" class=\"heading\">To be Delivered</h1>\n    <h1 *ngIf=\"id2==2\" class=\"heading\">Delivered</h1>\n    <h1 *ngIf=\"id2==3\" class=\"heading\">Ready to Pickup</h1>\n    <h1 *ngIf=\"id2==4\" class=\"heading\">History</h1>\n    </div>\n  <div class=\"filter\">\n      <input class=\"form-control\" placeholder=\"Search...\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n  </div>\n  <div class=\"table-responsive user-status-table\">\n  <table class=\"table\">\n    <thead> \n      <tr>\n          <!-- <th class=\"text-center\" style=\"width:7%\" [class.active]=\"order === 'bookId'\" (click)=\"setOrder('id')\">\n            Book Id <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n          </th> -->\n          <th class=\"text-center\" style=\"width:7%\" >\n              Book Id \n            </th>\n          <th class=\"text-center\" style=\"width:7%\">Order Id</th>\n          <!-- <th style=\"width:23%\"  [class.active]=\"order === 'title'\" (click)=\"setOrder('title')\"> \n            Book Name <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n          </th> -->\n          <th style=\"width:23%\"  > \n              Book Name \n            </th>\n          <!-- <th style=\"width:12%\" [class.active]=\"order === 'checkedOutDate'\" (click)=\"setOrder('info.checkedOutDate')\">\n            Checkout Date <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n          </th> -->\n          <th style=\"width:12%\">\n              Checkout Date \n            </th>\n          <!-- <th style=\"width:12%\" [class.active]=\"order === 'expReturnDate'\" (click)=\"setOrder('info.expReturnDate')\">\n            Due Date <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n            \n          </th> -->\n          <th style=\"width:12%\" >\n              Due Date \n              \n            </th>\n          <!-- <th class=\"text-center\" style=\"width:12%\" [class.active]=\"order === 'rentPerDay'\" (click)=\"setOrder('info.rentPerDay')\">\n              Rent Per Day <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n          </th> -->\n          <th class=\"text-center\" style=\"width:12%\" >\n              Rent Per Day\n          </th>\n          <th class=\"text-center\" style=\"width:12%\">Advance Paid</th>\n          <th class=\"text-center\" *ngIf=\"id2 == 1 || id2 == 2\">Due Amt</th>\n          <th class=\"text-center\"  *ngIf=\"id2 == 4\" style=\"width:8%\">Checkin Date</th>\n          <th class=\"text-center\"  *ngIf=\"id2 == 3 || id2 == 4\" style=\"width:12%\">Due Amt Paid</th>\n          <th *ngIf=\"id2 == 2\" class=\"text-center\">Action</th>\n          <!-- <th *ngIf=\"id2 == 3\" class=\"text-center\">Checkin Date</th> -->\n      </tr>\n    </thead>\n    <tbody >\n      <tr  *ngFor=\"let status of tableData | filter:filter | paginate: { itemsPerPage: 6, currentPage: p }; let i = index\">\n        <td class=\"text-center\">{{status.bookId}}</td>\n        <td class=\"text-center\">{{status.orderId}}</td>\n        <td tooltip=\"{{status.title}}\" placement=\"right\" show-delay=\"500\">\n          <a [routerLink]=\"['/book-detail', status.bookId]\">\n              {{status.title | shorten: 50: '...'}}\n          </a>\n        </td>\n        <td>{{status.checkedOutDate | date}}</td>\n        <td>{{status.expReturnDate | date}}</td>\n        <td class=\"text-center\">Rs.&nbsp;{{status.rentPerDay}}</td>\n        <td class=\"text-center\">Rs.&nbsp;{{status.advancePaid}}</td>\n        <td class=\"text-center\" *ngIf=\"id2 == 1 || id2 == 2\">\n            <span  *ngIf=\"status.dueAmount != null;else blank\">\n                Rs.&nbsp;{{status.dueAmount}}\n            </span>\n            <ng-template #blank>\n              <p>-</p>\n            </ng-template></td>\n            <!-- <td class=\"text-center\" *ngIf=\"id2 == 3 || id2 == 4\" >\n                <span  *ngIf=\"status.returnedDate != null;else blank\">\n                    &nbsp;{{status.returnedDate | date}}\n                </span>\n                <ng-template #blank>\n                  <p>-</p>\n                </ng-template>\n              </td> -->\n              <td class=\"text-center\" *ngIf=\"id2 == 4\">{{status.returnedDate | date}}</td>\n\n        <td class=\"text-center\" *ngIf=\"id2 == 3 || id2 == 4\" >\n          <span  *ngIf=\"status.amountPaid != null;else blank\">\n              Rs.&nbsp;{{status.amountPaid}}\n          </span>\n          <ng-template #blank>\n            <p>-</p>\n          </ng-template>\n        </td>\n        \n        <td class=\"text-center\" *ngIf=\"id2 == 2\">\n          <!-- <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openDialog(i)\">Checkin</button> -->\n          <button  class=\"checkout\" class=\"btn btn-primary\"  mat-button mat-raised-button (click)=\"openModal(template,i)\">Checkin</button>\n\n        </td>\n\n       \n      </tr>\n    </tbody>\n   \n  </table>\n  <pagination-controls style=\"float: right\" class=\"my-pagination\" (pageChange)=\"p = $event\"  maxSize=\"9\"\n  directionLinks=\"true\"\n  autoHide=\"true\"\n  responsive=\"true\"\n  previousLabel=\"Previous\"\n  nextLabel=\"Next\"\n  screenReaderPaginationLabel=\"Pagination\"\n  screenReaderPageLabel=\"page\"\n ></pagination-controls>\n\n </div>\n\n <!-- <button  class=\"checkout\" *ngIf=\"cobC=='true'\"   mat-button mat-raised-button (click)=\"openModal(template)\">CheckOut Now</button> -->\n \n <ng-template #template>\n   <div class=\"modal-header\">\n     <h4 class=\"modal-title pull-left\">CheckIn</h4>\n     <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n       <span aria-hidden=\"true\">&times;</span>\n     </button>\n   </div>\n   <div class=\"modal-body\">\n     <div >\n         <div class=\"example-container\">\n            <form name=\"myForm\">\n\n            Total Amount : {{ dialog2Content?.totalAmount }} <br> Adv Paid :\n            {{ dialog2Content?.advancePaid }} <br> Due Amount : {{ dialog2Content?.dueAmount }}  \n\n  <br> <br>\n  <button class=\"checkout\" class=\"btn\"  style=\"float:right; background-color: #2fc7f5 ;color: #ffffff; margin-left: 5px\" \n  mat-button mat-raised-button color=\"primary\" (click)=\"checkinbook()\">\n      Checkin\n    </button>\n  <button class=\"btn\" style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\" mat-button color=\"primary\" (click)=\"modalRef.hide()\"   >\n      Cancel\n    </button>\n    \n</form>\n           </div>\n   \n   </div>\n   </div>\n </ng-template>\n\n\n\n\n</section>\n\n\n\n<ng-template #noData>\n  <div class=\"no-data\">\n      No Data Found\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/Components/user-module/book-status/book-status.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/user-module/book-status/book-status.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.mat-dialog-container {\n  -webkit-transform: none;\n          transform: none;\n  width: 60%;\n  height: 40%;\n  min-height: auto; }\n\n.heading {\n  font-size: 24px;\n  font-weight: 500;\n  margin: 10px 16px;\n  color: #707070; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3VzZXItbW9kdWxlL2Jvb2stc3RhdHVzL2Jvb2stc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUl2QjtFQUNJLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHFIQUF5RztFQUN6RyxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxzQkFBYztVQUFkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFJckI7RUFDRyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFHbkM7RUFDQSx1QkFBZTtVQUFmLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVoQjtFQUNHLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQ0gsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdXNlci1tb2R1bGUvYm9vay1zdGF0dXMvYm9vay1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZD50cj50aCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVye1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjM2JjY2Y2O1xuICB9XG5cbi51c2VyLXN0YXR1cy10YWJsZXtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbnRoe1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzUwNTA1MDtcbn1cblxudGQsLmZhe1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzRiNGI0Yjtcbn1cblxuLmJvb2tuYW1le1xuICAgIGZsZXg6IDAgMCAyMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMjJweDtcbiB9XG5cblxuIC5uby1kYXRhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuXG4gfVxuIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gdHJhbnNmb3JtOiBub25lO1xuIHdpZHRoOiA2MCU7XG4gaGVpZ2h0OiA0MCU7XG4gbWluLWhlaWdodDogYXV0bztcbiB9ICBcbiAuaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDEwcHggMTZweDtcbiAgICBjb2xvcjogIzcwNzA3MFxuIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/Components/user-module/book-status/book-status.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/user-module/book-status/book-status.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BookStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStatusComponent", function() { return BookStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/check-out-book.service */ "./src/app/services/check-out-book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







// import { CheckinDialogComponent } from '../../checkin-dialog/checkin-dialog.component';



var BookStatusComponent = /** @class */ (function () {
    function BookStatusComponent(router, route, UserService, orderPipe, dialog, Checkoutservice, booksservice, modalService) {
        this.router = router;
        this.route = route;
        this.UserService = UserService;
        this.orderPipe = orderPipe;
        this.dialog = dialog;
        this.Checkoutservice = Checkoutservice;
        this.booksservice = booksservice;
        this.modalService = modalService;
        this.order = 'book Id';
        this.reverse = false;
        this.id2 = '';
        this.p = 1;
        this.tableData = [];
        this.closeStatusFlag = false;
        this.dialog2Content = [];
        this.myOptions = {
            'placement': 'right',
            'show-delay': 5000000
        };
        this.isUser = localStorage.getItem('username');
        // this.userid = this.route.snapshot.paramMap.get('id');
        this.userid = localStorage.getItem('UserId');
        localStorage.setItem("id", this.userid);
        this.sortedCollection = orderPipe.transform(this.tableData, 'bookId');
        // console.log(this.sortedCollection);
        // alert(this.bookstatus);
    }
    BookStatusComponent.prototype.openModal = function (template, inde) {
        this.modalRef = this.modalService.show(template);
        // this.checkinbook(inde);
        this.cIndex = inde;
        // console.log("cIndex",this.cIndex);
        this.dialog2Content = this.tableData[this.cIndex];
    };
    BookStatusComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    BookStatusComponent.prototype.bookStatus = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.UserService.userBookStatus(_this.userid, params['id2']);
        })
            .subscribe(function (data) {
            return _this.tableData = data.results;
        });
        this.dialog2Content = this.tableData[this.cIndex];
        // console.log("this.dialog2Content",this.dialog2Content);
    };
    BookStatusComponent.prototype.checkin = function (bo) {
        console.log("index", bo);
        this.closeStatusFlag = true;
    };
    // openDialog(index): void {
    //   console.log(index);
    //   let dialogBoxSettings: MatDialogConfig = {
    //     height: '20%',
    //     width: '50%',
    //     disableClose: true,
    //     hasBackdrop: true,
    //     data: {adv: this.tableData[index].advancePaid, dueAmt: this.tableData[index].amountPaid, totalAmt: this.tableData[index].totalAmount,sf:this.closeStatusFlag,
    //       tableData:this.tableData,index:index}
    //   };
    //   let dialogRef = this.dialog.open(CheckinDialogComponentt, dialogBoxSettings);
    //   console.log(dialogRef,dialogRef.componentInstance.data.tableData)
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     // this.adv = result.adv;
    //     this.dialog_data = result;
    //     console.log("dialog",this.dialog_data);
    //     this.bookStatus();
    //     // this.router.navigate([ '/book-status', this.userID, 3])
    //     // if(!this.closeStatusFlag){
    //     //  const data = this.checkinbook(index)
    //     //   }
    //     // const data = this.checkinbook(index)
    //     // console.log("adv",this.dialog_data.adv)
    //   });
    // }
    // checkinbook(index){
    // console.log(index);
    // alert("Ok");
    // }
    BookStatusComponent.prototype.bookList = function () {
        var _this = this;
        this.booksservice.getProduct(this.route.snapshot.params.id).subscribe(function (data) {
            console.log(data);
            _this.product = data.resultsMap.book;
        });
    };
    BookStatusComponent.prototype.checkinbook = function () {
        var _this = this;
        // console.log("checkin",this.dialog_data);
        var payload = this.formatPayload(this.tableData, this.cIndex);
        // console.log(this.tableData,this.cIndex,this.tableData[this.cIndex])
        this.dialog2Content = this.tableData[this.cIndex];
        // console.log("this.dialog2Content2",this.dialog2Content);
        this.Checkoutservice.CheckinBook(payload).subscribe(function (data) {
            // console.log("array", payload);
            // console.log("success", data.resultsMap);
            // this.dialogRef.close();
            _this.modalRef.hide();
            _this.bookStatus();
            // this.router.navigate([ '/book-status', userID, 3])
            // console.log("success", data.message);
            // if(data && data.message && data.resultsMap.orderDetails.checkedOutBooks.orderId){
            //   this.toastr.success("Sucessfully checkout");
            // }
            // else   this.toastr.error("Out of Stock");
        }, function (error) {
            alert('An Unexpected Error Occured.');
            // console.log(error.errors);  
        });
    };
    BookStatusComponent.prototype.formatPayload = function (product, index) {
        console.log("book", product, index, product[index]);
        var array = {
            "checkoutId": product[index].checkoutId,
            "orderId": product[index].orderId,
            "bookId": product[index].bookId,
            "inventoryId": product[index].inventoryId,
            "userId": product[index].userId,
            "amountPaid": product[index].amountPaid,
            "createdBy": this.isUser,
            "checkedItatusId": 3
        };
        console.log(JSON.stringify(array));
        return array;
    };
    BookStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = localStorage.getItem('UserId');
        this.bookStatus();
        this.id = setInterval(function () {
            _this.bookStatus();
        }, 10000);
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(params.get('id2'));
        })).subscribe(function (d) { return _this.id2 = d; });
        localStorage.setItem("id2", this.id2);
        localStorage.setItem("cobC", "false");
    };
    BookStatusComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    BookStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-status',
            template: __webpack_require__(/*! ./book-status.component.html */ "./src/app/Components/user-module/book-status/book-status.component.html"),
            styles: [__webpack_require__(/*! ./book-status.component.scss */ "./src/app/Components/user-module/book-status/book-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_2__["CheckOutBookService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            src_app_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_2__["CheckOutBookService"],
            src_app_services_books_service__WEBPACK_IMPORTED_MODULE_8__["BooksService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]])
    ], BookStatusComponent);
    return BookStatusComponent;
}());

// import {  Inject, ChangeDetectionStrategy } from "@angular/core";
// import {
//   MatDialogRef,
//   MAT_DIALOG_DATA
// } from "@angular/material/dialog";
// import {
//   FormControl,
//   FormGroup,
//   Validators,
//   FormBuilder
// } from "@angular/forms";
// export interface DialogData {
//   adv: string;
//   dueAmt: string;
//   totalAmt: string;
//   sf: boolean;
// }
// @Component({
//   selector: "app-checkin-dialog",
//   templateUrl: "./checkin-dialog.component.html",
//   // styleUrls: ["./checkin-dialog.component.scss"]
// })
// export class CheckinDialogComponentt implements OnInit {
//   dialog = this.data;
//   closeStatusFlag: boolean =false;
//   dialog_data: any;
//   tableData = [];
//   isUser: any;
//   userid: any;
//   constructor(    
//     private UserService: CheckOutBookService,
//     private route: ActivatedRoute,
//     private Checkoutservice: CheckOutBookService,
//     private booksservice: BooksService,
//     public dialogRef: MatDialogRef<CheckinDialogComponentt>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {
//     this.isUser= localStorage.getItem('username')
//     this.userid=localStorage.getItem("id");
//   }
//   addBook(dialog) {
//     console.log(dialog);
//     this.closeStatusFlag = true;
//      dialog.closeStatusFlag=true;
//     console.log("dl", dialog);
//     this.dialogRef.close(dialog);
//   }
//   closeDialog() {
//     this.closeStatusFlag = true;
//     this.dialogRef.close();
//     this.bookStatus();
//   }
//   bookStatus(){
//                   this.UserService.userBookStatus(this.userid, localStorage.getItem("id2") )
//     .subscribe((data :any) =>  
//                   this.tableData = data.results);
//                   console.log("tableData",this.tableData)
//   }
//   // checkinbook(inde){
//   //   // console.log("checkin",this.dialog_data);
//   //   const payload = this.formatPayload(this.dialog.tableData,inde);
//   //   console.log(this.dialog.tableData,inde,this.dialog.tableData[inde])
//   //   this.Checkoutservice.CheckinBook(payload).subscribe((data:any) => {
//   //     // console.log("array", payload);
//   //     console.log("success", data.resultsMap);
//   //     this.dialogRef.close();
//   //     this.bookStatus();
//   //     // this.router.navigate([ '/book-status', userID, 3])
//   //     // console.log("success", data.message);
//   //     // if(data && data.message && data.resultsMap.orderDetails.checkedOutBooks.orderId){
//   //     //   this.toastr.success("Sucessfully checkout");
//   //     // }
//   //     // else   this.toastr.error("Out of Stock");
//   //   },
//   //   error => {  
//   //     alert('An Unexpected Error Occured.');  
//   //     // console.log(error.errors);  
//   //   })
//   // }
//   // formatPayload(product,index) {
//   //   console.log("book",product,index,product[index])
//   //   const array = 
//   //    { 
//   //     "checkoutId": product[index].checkoutId,
// 	//     "orderId": product[index].orderId,
// 	//     "bookId": product[index].bookId,
//   //     "inventoryId": product[index].inventoryId,
//   //     "userId": product[index].userId,
// 	// 	  "amountPaid":product[index].amountPaid,
// 	// 	  "createdBy":this.isUser,
// 	// 	  "checkedItatusId": 3
//   //     }
//   //   console.log(JSON.stringify(array));
//   //   return array;
//   // }
//   ngOnInit(){
//     this.bookStatus();
//   }
// }


/***/ }),

/***/ "./src/app/Components/user-module/user-module-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/user-module/user-module-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModuleRoutingModule", function() { return UserModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _book_status_book_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-status/book-status.component */ "./src/app/Components/user-module/book-status/book-status.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '', component: _book_status_book_status_component__WEBPACK_IMPORTED_MODULE_1__["BookStatusComponent"]
    }
];
var UserModuleRoutingModule = /** @class */ (function () {
    function UserModuleRoutingModule() {
    }
    UserModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], UserModuleRoutingModule);
    return UserModuleRoutingModule;
}());



/***/ }),

/***/ "./src/app/Components/user-module/user-module.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/user-module/user-module.module.ts ***!
  \**************************************************************/
/*! exports provided: UserModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModuleModule", function() { return UserModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_module_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-module-routing.module */ "./src/app/Components/user-module/user-module-routing.module.ts");
/* harmony import */ var _book_status_book_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-status/book-status.component */ "./src/app/Components/user-module/book-status/book-status.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");












var UserModuleModule = /** @class */ (function () {
    function UserModuleModule() {
    }
    UserModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_book_status_book_status_component__WEBPACK_IMPORTED_MODULE_4__["BookStatusComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_module_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserModuleRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_7__["Ng2OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_9__["NgPipesModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"]
            ]
        })
    ], UserModuleModule);
    return UserModuleModule;
}());



/***/ })

}]);
//# sourceMappingURL=Components-user-module-user-module-module.js.map