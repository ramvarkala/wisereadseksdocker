(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Components/books/books.module": [
		"./src/app/Components/books/books.module.ts",
		"Components-books-books-module"
	],
	"./Components/user-module/user-module.module": [
		"./src/app/Components/user-module/user-module.module.ts",
		"Components-user-module-user-module-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-header></app-header>\n\n  <div class=\"container\">\n    <div class=\"\" style=\"padding-top: 70px\">\n      <div class=\"blog-right-grids\" style=\"padding-top: 70px\">\n        <img\n          style=\"float: left ;padding-right: 25px;\"\n          src=\"../../../assets/images/students.jpg\"\n          alt=\"\"\n          height=\"220px\"\n        />\n        <h1 style=\"color:#000;\">About us</h1>\n\n        <p>\n          Wisereads is proud to introduce one of the most awaited and affordable\n          book rental platform for individuals, kids, students, and corporates\n          across the country. Wisereads Book Rental Library provides hassle-free\n          availability of books at a very affordable price.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"\">\n      <div class=\"blog-right-grids\">\n        <img\n          style=\"float: left ;padding-right: 25px;\"\n          src=\"../../../assets/images/kids.jpg\"\n          alt=\"\"\n          height=\"220px\"\n        />\n\n        <h1 style=\"color:#000;\">Best Book Rental Library</h1>\n\n        <p>\n          Large selection of Children, Corporate and great People\n          Recommendations. Convenience of home delivery with FREE shipping.\n          Numerous book rental plans to fit your needs. No due dates when\n          renting books. Superior customer service.No more manual trips to the\n          physical library . No more costly payments to the local bookstore.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <br />\n\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/Components/about-us/about-us.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/about-us/about-us.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  padding: 10px;\n  box-sizing: border-box; }\n\n.tile {\n  background-color: #ccc;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 800;\n  width: 400px;\n  background-repeat: no-repeat;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  min-height: 30vw !important;\n  background-size: cover !important; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  left: 20px; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  right: 20px; }\n\n.header-section {\n  display: -webkit-flex;\n  display: flex;\n  background-color: #f6f6f6;\n  width: 100%;\n  z-index: 9999;\n  box-shadow: 0 0 3px #000;\n  position: fixed;\n  height: 69px; }\n\n.header-section .wisereads-logo {\n    display: -webkit-flex;\n    display: flex; }\n\n.header-section .fa-sign-in {\n    color: #0b4f82; }\n\n.header-section .link-section {\n    margin-left: auto;\n    margin-top: 8px;\n    padding: 3vh; }\n\n.header-section a {\n    padding: 10px;\n    font-size: 18px;\n    color: #0b4f82; }\n\n.main-service {\n  padding: 7.5em 3em;\n  color: #fff; }\n\n.about-img {\n  background: url('students.jpg') no-repeat center; }\n\n.about-img h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.about-img2 {\n  background: url('kids.jpg') no-repeat center;\n  border: 1px solid #ffffff70; }\n\n.about-img2 h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.blog-right-grids {\n  padding: 6em 0em; }\n\n.blog-right-grids p {\n  font-size: 14px;\n  color: #888888;\n  line-height: 25px; }\n\n.below-footer {\n  background-color: #000;\n  min-height: 60px; }\n\n.below-footer h6 {\n  text-align: center;\n  padding-top: 4vh;\n  color: #ffff; }\n\n.wisereads-logo img {\n  padding: 10px 0 10px 50px;\n  width: 300px;\n  height: inherit !important; }\n\n.align {\n  margin-top: -23px;\n  margin-left: 18px; }\n\n.footer_align {\n  margin-top: 18px; }\n\n.input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.example-card {\n  max-width: 400px;\n  max-height: 450px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.slick-slider {\n  width: 100%;\n  height: 40%;\n  padding-left: 50px; }\n\n.card {\n  width: 150px;\n  height: 150px; }\n\n.slick-slider {\n  margin: 0px -15px; }\n\n.slick-slide {\n  padding: 10px;\n  text-align: center;\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.slick-slide.slick-active:first-child, .slick-slide.slick-active:last-child {\n  margin: 0; }\n\n.arrow_next {\n  color: red; }\n\n.arrow_prev {\n  color: red; }\n\n.slick-arrow {\n  color: green; }\n\n.rec_heading {\n  height: 29px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3bccf6;\n  padding-left: 39px; }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n.search-input {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 16px;\n  padding: 0px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-bottom: 1px solid #9f9f9f;\n  border-radius: 20px; }\n\n.search-bar {\n  display: -webkit-flex;\n  display: flex; }\n\n.alignSearch {\n  padding-top: 33px;\n  margin-left: 36pc; }\n\n.fa-search {\n  font-size: 25px;\n  color: #9f9f9f;\n  padding-left: 6px;\n  padding-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsaUNBQWlDLEVBQUE7O0FBR3JDO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFQaEI7SUFVUSxxQkFBYTtJQUFiLGFBQWEsRUFBQTs7QUFWckI7SUFhUSxjQUFjLEVBQUE7O0FBYnRCO0lBZ0JRLGlCQUFpQjtJQUNqQixlQUFjO0lBQ2QsWUFBWSxFQUFBOztBQWxCcEI7SUFxQlEsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGdEQUFxRSxFQUFBOztBQUR6RTtJQUdRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLDRDQUFpRTtFQUNqRSwyQkFBMkIsRUFBQTs7QUFGL0I7SUFJUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHaEI7RUFFUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDBCQUF5QixFQUFBOztBQUdqQztFQUNBLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFVcEI7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBYztVQUFkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFLdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUhBQXlHO0VBQ3pHLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUtoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUlsQztFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFtQ3BCO0VBQ0UsWUFBVztFQUNYLGFBQWEsRUFBQTs7QUFJakI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFZO0VBRVosa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxTQUFTLEVBQUE7O0FBR1g7RUFDSSxVQUVKLEVBQUE7O0FBRUE7RUFDRSxVQUNGLEVBQUE7O0FBRUE7RUFDSSxZQUNKLEVBQUE7O0FBRUE7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBRU0sb0NBQWtDO0VBQ2xDLDJEQUF5RDtFQUN6RCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVUsRUFBQTs7QUFLbEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUNKLEVBQUE7O0FBQ0E7RUFDRSxxQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFJZjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMzB2dyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmxlZnRScyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG4ucmlnaHRScyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICByaWdodDogMjBweDtcbn1cblxuLmhlYWRlci1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogNjlweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBwYXBheWF3aGlwO1xuICAgIC53aXNlcmVhZHMtbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5mYS1zaWduLWluIHtcbiAgICAgICAgY29sb3I6ICMwYjRmODI7XG4gICAgfVxuICAgIC5saW5rLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDo4cHg7XG4gICAgICAgIHBhZGRpbmc6IDN2aDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMwYjRmODI7XG4gICAgfVxufVxuXG4ubWFpbi1zZXJ2aWNlIHtcbiAgICBwYWRkaW5nOiA3LjVlbSAzZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hYm91dC1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0dWRlbnRzLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBoMSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3MDtcbiAgICAgICAgbWFyZ2luOiA1ZW0gM2VtO1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uYWJvdXQtaW1nMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMva2lkcy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjcwO1xuICAgIGgxIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjcwO1xuICAgICAgICBtYXJnaW46IDVlbSAzZW07XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5ibG9nLXJpZ2h0LWdyaWRzIHtcbiAgICBwYWRkaW5nOiA2ZW0gMGVtO1xufVxuXG4uYmxvZy1yaWdodC1ncmlkcyBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5iZWxvdy1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmJlbG93LWZvb3RlciBoNiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0dmg7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuXG4ud2lzZXJlYWRzLWxvZ28ge1xuICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDUwcHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0IWltcG9ydGFudDtcbiAgICB9XG59XG4uYWxpZ257XG5tYXJnaW4tdG9wOiAtMjNweDtcbm1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuXG4uZm9vdGVyX2FsaWdue1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cblxuXG5cblxuXG5cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gICAgaGVpZ2h0OiAyLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLmZpbGUtaW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgLmJvb2tuYW1le1xuICAgIGZsZXg6IDAgMCAyMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMjJweDtcbiB9XG5cblxuXG50aGVhZD50cj50aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcntcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjM2JjY2Y2O1xufVxuXG4udXNlci1zdGF0dXMtdGFibGV7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbnRoe1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxudGQsLmZhe1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cblxuXG5cbi5uby1kYXRhe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuXG59XG5cbi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWF4LWhlaWdodDogNDUwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5zbGljay1zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBhZGRpbmctbGVmdDo1MHB4IDtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzQsIDIzNCk7XG4gIH1cbiAgIFxuLy8gICAubmF2LWJ0biB7XG4vLyAgICAgaGVpZ2h0OiA0N3B4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMjZweDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgdG9wOiAxMDBweCAhaW1wb3J0YW50O1xuLy8gICB9XG4gICBcbi8vICAgLnByZXYtc2xpZGUuc2xpY2stZGlzYWJsZWQsXG4vLyAgIC5uZXh0LXNsaWRlLnNsaWNrLWRpc2FibGVkIHtcbi8vICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vICAgICBvcGFjaXR5OiAwLjI7XG4vLyAgIH1cbiAgIFxuLy8gICAucHJldi1zbGlkZSB7XG4vLyAgICAgYmFja2dyb3VuZDogdXJsKCkgbm8tcmVwZWF0IHNjcm9sbCAwIDA7XG4vLyAgICAgbGVmdDogLTMzcHg7XG4vLyAgIH1cbiAgIFxuLy8gICAubmV4dC1zbGlkZSB7XG4vLyAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXJyb3ctcG9pbnQtdG8tcmlnaHQucG5nKSBuby1yZXBlYXQgc2Nyb2xsIC0yNHB4IDBweDtcbi8vICAgICByaWdodDogLTMzcHg7XG4vLyAgIH1cbiAgIFxuLy8gICAucHJldi1zbGlkZTpob3ZlciB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4O1xuLy8gICB9XG4gICBcbi8vICAgLm5leHQtc2xpZGU6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IC01M3B4O1xuLy8gICB9XG4gIC5jYXJke1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwcHhcbn1cblxuLnNsaWNrLXNsaWRlciB7XG4gICAgbWFyZ2luOjBweCAtMTVweDtcbn1cblxuLnNsaWNrLXNsaWRlIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZTpmaXJzdC1jaGlsZCwgLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZTpsYXN0LWNoaWxkeyBcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYXJyb3dfbmV4dHtcbiAgICAgIGNvbG9yOnJlZFxuXG4gIH1cblxuICAuYXJyb3dfcHJldntcbiAgICBjb2xvcjogcmVkXG4gIH1cblxuICAuc2xpY2stYXJyb3d7XG4gICAgICBjb2xvcjpncmVlblxuICB9XG5cbiAgLnJlY19oZWFkaW5ne1xuICAgIC8vIHdpZHRoOiAzMjRweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjM2JjY2Y2O1xuICAgIHBhZGRpbmctbGVmdDogMzlweDtcbiAgfVxuXG4gIC5mbGV4LWl0ZW0ge1xuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDlweCAxMnB4IDFweCByZ2JhKDUwLCA1MCwgNTAsIC4yKSFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbiAgfVxuXG5cbi5zZWFyY2gtaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWY5ZjlmO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweFxufVxuLnNlYXJjaC1iYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuXG4uYWxpZ25TZWFyY2h7XG4gIHBhZGRpbmctdG9wOiAzM3B4O1xuICBtYXJnaW4tbGVmdDogMzZwYztcbn1cbi5mYS1zZWFyY2gge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjOWY5ZjlmO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myBooks = [];
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['/app-about-us']);
        }
        localStorage.removeItem("url");
        this.search();
    };
    AboutUsComponent.prototype.search = function () {
        var _this = this;
        this.searchTerm.valueChanges.subscribe(function (term) {
            if (term && term !== '' && term.length >= 3) {
                _this.searchService.search(term).subscribe(function (data) {
                    _this.myBooks = data.resultsMap.books;
                    // console.log(data[0].BookName);
                    console.log("myBooks", _this.myBooks);
                });
            }
            else {
                _this.myBooks = [];
            }
        });
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/Components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/Components/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/Components/add-user/add-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/add-user/add-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout\n  fxLayout.xs=\"column\"\n  fxLayoutAlign=\"left\"\n  fxLayoutGap=\"10px\"\n  fxLayoutGap.xs=\"0\"\n>\n  <div class=\"item item-1\" fxFlex=\"50%\">\n    <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\" />\n    <h1 *ngIf=\"check\">Add User</h1>\n    <h1 *ngIf=\"!check\">Edit User</h1>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"First Name\"\n        type=\"text\"\n        name=\"firstName\"\n        [(ngModel)]=\"addUser.firstName\"\n        #firstName=\"ngModel\"\n        pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n        required\n        maxlength=\"40\"\n      />\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Last Name\"\n        type=\"text\"\n        name=\"lastName\"\n        [(ngModel)]=\"addUser.lastName\"\n        #lastName=\"ngModel\"\n        pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n        required\n        maxlength=\"40\"\n      />\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <mat-select\n        placeholder=\"Select Gender\"\n        name=\"genderId\"\n        id=\"genderId\"\n        [(ngModel)]=\"addUser.genderId\"\n        #genderId=\"ngModel\"\n      >\n        <mat-option\n          *ngFor=\"let id of comboBoxesDataGender\"\n          [value]=\"id.gender_id\"\n          (onSelectionChange)=\"comboGender($event, id)\"\n          >{{ id.gender }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Phone Number\"\n        name=\"contactNumber\"\n        [(ngModel)]=\"addUser.contactNumber\"\n        #contactNumber=\"ngModel\"\n        pattern=\"^[a-zA-Z0-9-]{10}$\"\n        required\n        maxlength=\"10\"\n      />\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\" *ngIf=\"check\">\n    <mat-form-field>\n      <mat-select\n        placeholder=\"Select Role\"\n        name=\"roleId\"\n        id=\"roleId\"\n        [(ngModel)]=\"addUser.roleId\"\n        #roleId=\"ngModel\"\n      >\n        <mat-option\n          *ngFor=\"let id of comboBoxesDataRole\"\n          [value]=\"id.role_id\"\n          (onSelectionChange)=\"comboRoles($event, id)\"\n          >{{ id.role }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <mat-select\n        placeholder=\"Status\"\n        name=\"userStatusId\"\n        id=\"userStatusId\"\n        [(ngModel)]=\"addUser.userStatusId\"\n        #userStatusId=\"ngModel\"\n      >\n        <mat-option\n          *ngFor=\"let id of comboBoxesDataStatus\"\n          [value]=\"id.user_status_id\"\n          (onSelectionChange)=\"comboStatus($event, id)\"\n          >{{ id.status }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Email\"\n        type=\"text\"\n        name=\"email\"\n        [(ngModel)]=\"addUser.email\"\n        #email=\"ngModel\"\n        required\n        email\n        maxlength=\"40\"\n      />\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"House Address\"\n        type=\"text\"\n        name=\"address\"\n        [(ngModel)]=\"addUser.address\"\n        #address=\"ngModel\"\n        required\n      />\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Company Name\"\n        type=\"text\"\n        name=\"company\"\n        [(ngModel)]=\"addUser.companyName\"\n        #company=\"ngModel\"\n        pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n        required\n        maxlength=\"40\"\n      />\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-md-6\">\n    <mat-form-field *ngIf=\"check\">\n      <input\n        matInput\n        placeholder=\"Password\"\n        type=\"text\"\n        name=\"password\"\n        [(ngModel)]=\"addUser.password\"\n        #password=\"ngModel\"\n        required\n        maxlength=\"40\"\n      />\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-md-6\" *ngIf=\"check\">\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Confirm Password\"\n        type=\"text\"\n        name=\"confirmPassword\"\n        required\n        maxlength=\"40\"\n      />\n    </mat-form-field>\n  </div>\n  <br />\n  <div fxLayoutAlign=\"end none\" fxLayoutGap=\"15px\" class=\"btn_aln\">\n    <button\n      mat-raised-button\n      style=\"background-color: rgb(78, 75, 75) ;color: #ffffff; width: 8vw;height: 40px;\"\n      (click)=\"cancel()\"\n      class=\"mat-raised-button mat-warn mat-cancel\"\n    >\n      Cancel\n    </button>\n\n    <button\n      mat-raised-button\n      style=\"background-color: #2fc7f5 ;color: #ffffff;width: 8vw;height: 40px;\"\n      *ngIf=\"check\"\n      (click)=\"saveUser()\"\n      class=\"mat-raised-button mat-primary\"\n    >\n      Save\n    </button>\n\n    <button\n      mat-raised-button\n      style=\"background-color: #2fc7f5 ;color: #ffffff;width: 8vw;height: 40px;\"\n      *ngIf=\"!check\"\n      (click)=\"editUser()\"\n      class=\"mat-raised-button mat-primary\"\n    >\n      Update\n    </button>\n  </div>\n</div>\n\n<div class=\"column\">\n  <div class=\"col-md-6\">\n    <!-- <mat-form-field>\n                <input matInput placeholder=\"Date of Birth\" name=\"dateOfBirth\" [matDatepicker]=\"picker2\"\n                [(ngModel)]=\"addUser.dateOfBirth\" #dateOfBirth=\"ngModel\" [min]=\"minDate2\"\n                [max]=\"maxDate\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2></mat-datepicker>\n            </mat-form-field> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/add-user/add-user.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/add-user/add-user.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_aln {\n  place-content: stretch flex-end;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: flex;\n  margin-top: 80px;\n  margin-left: 225px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQStCO0VBQy9CLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIscUJBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fYWxue1xuICAgIHBsYWNlLWNvbnRlbnQ6IHN0cmV0Y2ggZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogMjI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/add-user/add-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/add-user/add-user.component.ts ***!
  \***********************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_save_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/save-user.service */ "./src/app/services/save-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(saveUserService, router, route, toastr) {
        var _this = this;
        this.saveUserService = saveUserService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.addUser = {};
        this.check = true;
        this.minDate2 = new Date(new Date().getFullYear() - 50, new Date().getMonth() - 2, 1);
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.route.params.subscribe(function (params) {
            if (params) {
                _this.regId = params.id;
            }
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
        if (this.regId) {
            this.loadEditUser(this.regId);
        }
        this.loadComboBoxes();
    };
    AddUserComponent.prototype.loadComboBoxes = function () {
        var _this = this;
        var body = [
            "roles",
            "bookGenre",
            "gender",
            "bookCondition",
            "userStatus"
        ];
        this.saveUserService.loadComboDropDowns(body).subscribe(function (data) {
            if (data) {
                _this.comboBoxesDataGender = data.result.gender;
                _this.comboBoxesDataRole = data.result.roles;
                _this.comboBoxesDataStatus = data.result.userStatus;
            }
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    AddUserComponent.prototype.loadEditUser = function (regId) {
        var _this = this;
        this.check = false;
        this.saveUserService.loaduser(regId).subscribe(function (data) {
            _this.addUser = data.result;
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    AddUserComponent.prototype.saveUser = function () {
        var _this = this;
        this.addUser.createdBy = localStorage.getItem("userEmail");
        this.saveUserService.saveuser(this.addUser).subscribe(function (data) {
            if (data && data.resultsMap && data.resultsMap.user) {
                _this.toastr.success("Added User Successfully");
                _this.router.navigateByUrl("/app-dashboard");
            }
            else if (data.resultsMap.emailExistError) {
                _this.toastr.warning(data.resultsMap.emailExistError);
            }
        }, function (error) {
            // this.toastr.warning(error.error.message);
        });
    };
    AddUserComponent.prototype.editUser = function () {
        var _this = this;
        this.addUser.createdBy = localStorage.getItem("userEmail");
        this.saveUserService.edituser(this.addUser).subscribe(function (data) {
            if (data && data.resultsMap && data.resultsMap.user) {
                _this.toastr.success(data.message);
                _this.router.navigateByUrl("/app-dashboard");
            }
            else if (data.resultsMap.emailExistError) {
                _this.toastr.warning(data.resultsMap.emailExistError);
            }
        }, function (error) {
            console.log(error);
            _this.toastr.warning("Error!");
        });
    };
    AddUserComponent.prototype.comboGender = function ($event, id) {
        if ($event.source.selected) {
            this.addUser.genderId = id.gender_id;
        }
    };
    AddUserComponent.prototype.comboRoles = function ($event, id) {
        if ($event.source.selected) {
            this.addUser.roleId = id.role_id;
        }
    };
    AddUserComponent.prototype.comboStatus = function ($event, id) {
        if ($event.source.selected) {
            this.addUser.userStatusId = id.user_status_id;
        }
    };
    AddUserComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/app-users-list");
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-user",
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/Components/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/Components/add-user/add-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_save_user_service__WEBPACK_IMPORTED_MODULE_2__["SaveUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/Components/assign-roles/assign-roles.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/assign-roles/assign-roles.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <section >\n      <div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\" >\n        <div class=\"item item-1\" fxFlex=\"50%\">\n          <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n          <h1>Add Roles</h1>\n        </div>\n        <div class=\"item item-2\" fxFlex=\"50%\">\n          <button class=\"action-button\" routerLink='/app-add-user' mat-button mat-raised-button>Update</button>\n        </div>\n      </div>\n      \n      <div class=\"example-container mat-elevation-z8\">\n<mat-table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    \n  \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"admin\">\n      <th mat-header-cell *matHeaderCellDef> Admin </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <mat-checkbox [checked]=\"isAdmin(element?.userRoles)\"></mat-checkbox>\n      </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"superAdmin\">\n      <th mat-header-cell *matHeaderCellDef> Super Admin </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <mat-checkbox (change)=\"assignRoles($event, 1)\" [checked]=\"isSuperAdmin(element?.userRoles)\"></mat-checkbox>\n      </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"user\">\n      <th mat-header-cell *matHeaderCellDef> user </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <mat-checkbox [checked]=\"isUser(element?.userRoles)\"></mat-checkbox>\n      </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"agent\">\n      <th mat-header-cell *matHeaderCellDef> Agent </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <mat-checkbox [checked]=\"isAgent(element?.userRoles)\"></mat-checkbox>\n      </td>\n    </ng-container>\n  \n      <ng-container matColumnDef=\"owner\">\n      <th mat-header-cell *matHeaderCellDef> Owner </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <mat-checkbox [checked]=\"isOwner(element?.userRoles)\"></mat-checkbox>\n      </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n        >\n    </tr>\n  </mat-table> -->\n  \n  \n\n\n\n\n  <section >\n      <div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\" >\n        <div class=\"item item-1\" fxFlex=\"50%\">\n          <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n          <h1>Add Roles</h1>\n        </div>\n        <div class=\"item item-2\" fxFlex=\"50%\">\n          <!-- <button class=\"mr-2 action-button\" mat-button mat-raised-button>Import Books</button> -->\n          <button class=\"action-button\" (click)=\"updateRoles()\" mat-button mat-raised-button>Update</button>\n        </div>\n      </div>\n      \n      <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\" [class.isMobile]=\"isMobile\">\n      \n          <ng-container matColumnDef=\"userId\">\n            <mat-header-cell *matHeaderCellDef> User ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.userId}}\n            </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"userName\">\n            <mat-header-cell *matHeaderCellDef> User Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.firstName}} {{element.lastName}}\n            </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"admin\">\n            <mat-header-cell *matHeaderCellDef> Admin </mat-header-cell>\n            <mat-cell *matCellDef=\"let element;let i=index\">\n                <!-- <input type=\"checkbox\" (change)=\"isChecked(element?.userRoles, 1)\" [checked]=\"isChecked(element?.userRoles, 1)\"> -->\n\n                <mat-checkbox [checked] = \"isChecked(element?.userRoles, 2,element.userId) ? 'true' : 'false'\"></mat-checkbox>\n                <!-- <form [formGroup]=\"formGroup\">\n                    <mat-checkbox id=\"Value1\" class=\"Value1\" color=\"primary\"\n                                  formControlName=\"isChecked(element?.userRoles, 2)\" ></mat-checkbox>\n                  </form> -->\n                  <!-- <pre>{{formGroup.value | json}}</pre>  -->\n\n                  <!-- <form [formGroup]=\"myForm\">\n                      <mat-checkbox   formControlName=\"checked\" checked=\"false\"></mat-checkbox>\n                    </form> -->\n            </mat-cell>\n          </ng-container>\n      \n      \n          <ng-container matColumnDef=\"superadmin\">\n            <mat-header-cell *matHeaderCellDef> Super Admin </mat-header-cell>\n            <mat-cell *matCellDef=\"let element;let i=index\">\n                <!-- <mat-checkbox (change)=\"assignRoles($event, 1)\" [checked]=\"isChecked(element?.userRoles, 1)\"></mat-checkbox> -->\n                <mat-checkbox [checked]=\"isChecked(element?.userRoles, 1,element) ? 'true' : 'false'\"></mat-checkbox>\n\n              </mat-cell> \n          </ng-container>\n      \n          <ng-container matColumnDef=\"user\">\n            <mat-header-cell *matHeaderCellDef> User</mat-header-cell>\n            <mat-cell *matCellDef=\"let element;let i=index\">\n                <mat-checkbox [checked]=\"isChecked(element?.userRoles, 4,element) ? 'true' : 'false'\"></mat-checkbox>\n              </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"agent\">\n            <mat-header-cell *matHeaderCellDef> Agent</mat-header-cell>\n            <mat-cell *matCellDef=\"let element;let i=index\">\n                <mat-checkbox [checked]=\"isChecked(element?.userRoles, 5,element) ? 'true' : 'false'\"></mat-checkbox>\n              </mat-cell> \n          </ng-container>\n      \n          <ng-container matColumnDef=\"owner\">\n            <mat-header-cell *matHeaderCellDef> Owner </mat-header-cell>\n            <mat-cell *matCellDef=\"let element;let i=index\">\n                <mat-checkbox [checked]=\"isChecked(element?.userRoles, 3,element) ? 'true' : 'false'\"></mat-checkbox>\n                \n                     </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      \n        <mat-paginator #paginator [pageSize]=\"[5]\" showFirstLastButtons></mat-paginator>\n      </div>\n      </section>\n  \n  \n  \n      "

/***/ }),

/***/ "./src/app/Components/assign-roles/assign-roles.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Components/assign-roles/assign-roles.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXNzaWduLXJvbGVzL2Fzc2lnbi1yb2xlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/assign-roles/assign-roles.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/assign-roles/assign-roles.component.ts ***!
  \*******************************************************************/
/*! exports provided: AssignRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRolesComponent", function() { return AssignRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_save_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/save-user.service */ "./src/app/services/save-user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_assign_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assign-role.service */ "./src/app/services/assign-role.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AssignRolesComponent = /** @class */ (function () {
    function AssignRolesComponent(userService, assignRolesService, toastr) {
        this.userService = userService;
        this.assignRolesService = assignRolesService;
        this.toastr = toastr;
        this.ELEMENT_DATA = [];
        this.displayedColumns = [
            "userId",
            "userName",
            "admin",
            "superadmin",
            "user",
            "agent",
            "owner"
        ];
        this.checkBox = {};
        this.checkBoxData = [];
        this.moreRoles = [];
        this.checkBoxData2 = [];
        this.markFields = [];
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            checked: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        console.log("markFields", this.markFields);
    }
    AssignRolesComponent.prototype.ngOnInit = function () {
        this.loadUsersList();
        // this.createForm();
    };
    AssignRolesComponent.prototype.loadUsersList = function () {
        var _this = this;
        this.userService.usersList().subscribe(function (data) {
            console.log("data", data);
            _this.ELEMENT_DATA = data.results;
            for (var i = 0; i < _this.ELEMENT_DATA.length; i++) {
                for (var j = 0; j < _this.ELEMENT_DATA[i].userRoles.length; j++) {
                    if (_this.ELEMENT_DATA[i].userRoles.length > 1) {
                        var element2 = _this.ELEMENT_DATA[i].userRoles[j];
                        _this.moreRoles.push(element2);
                    }
                    // if(data.results[i].userId == this.ELEMENT_DATA[i].userRoles[j].userId ){
                    var element_1 = _this.ELEMENT_DATA[i].userRoles[j];
                    // console.log('element', element);
                    _this.checkBoxData2.push(element_1);
                    _this.checkBoxData.push({
                        userId: data.results[i].userId,
                        roleId: _this.ELEMENT_DATA[i].userRoles[j].roleId
                    });
                    // }
                    // const element = this.ELEMENT_DATA[i].userRoles[j];
                    // console.log('element', element);
                    // this.checkBoxData.push(element)
                }
            }
            // this.checkBoxData[i].roleId=='2'
            console.log("checkBoxData", _this.checkBoxData, _this.moreRoles, _this.checkBoxData2);
            // this.checkBox=data.results[0].userRoles[0].roleId;
            // console.log('checkBox', this.checkBox);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
        }),
            function (err) {
                // this.toastr.error(err.error.message);
                console.log(err);
            };
    };
    // createForm(): void {
    //   this.formGroup = this.fb.group({
    //     Value1: [false],
    //    });
    // }
    AssignRolesComponent.prototype.isChecked = function (e, roleId, element) {
        // console.log(e.filter((e)=> e.roleId == roleId));
        return e.filter(function (e) { return e.roleId == roleId; }) && e.filter(function (e) { return e.userId == element.userId; });
    };
    AssignRolesComponent.prototype.isIAdmin = function (e) {
        return e.filter(function (e) { return e.roleId == 1; });
    };
    AssignRolesComponent.prototype.isAdmin = function (event, e, element) {
        if (event.checked == true) {
            var obj = {
                "userId": element.userId,
                "roleId": 2,
                "roleStatus": event.checked == true ? 1 : 2,
                "createdBy": localStorage.getItem('Name')
            };
            this.markFields.push(obj);
            return e.filter(function (e) { return e.roleId == 2; }),
                e.filter(function (e) { return e.roleId; });
        }
        else {
            this.checkAdmin = false;
        }
        // return e.filter(e => e.roleId == 2);
    };
    AssignRolesComponent.prototype.isSuperAdmin = function (event, e, element) {
        if (event.checked == true) {
            var obj = {
                "userId": element.userId,
                "roleId": 1,
                "roleStatus": 2,
                "createdBy": "satish"
            };
            this.markFields.push(obj);
            return e.filter(function (e) { return e.roleId == 1; });
        }
        else
            this.checkSuperAdmin = false;
        // return e.filter(e => e.roleId == 1);
    };
    AssignRolesComponent.prototype.isUser = function (event, e, element) {
        if (event.checked == true) {
            var obj = {
                "userId": element.userId,
                "roleId": 4,
                "roleStatus": 2,
                "createdBy": "satish"
            };
            this.markFields.push(obj);
            return e.filter(function (e) { return e.roleId == 4; });
        }
        else {
            this.checkUser = false;
        }
        // return e.filter(e => e.roleId == 4);
    };
    AssignRolesComponent.prototype.isAgent = function (event, e, element) {
        if (event.checked == true) {
            var obj = {
                "userId": element.userId,
                "roleId": 5,
                "roleStatus": 2,
                "createdBy": "satish"
            };
            this.markFields.push(obj);
            return e.filter(function (e) { return e.roleId == 5; });
        }
        else {
            this.checkAgent = false;
        }
        //return e.filter(e => e.roleId == 5);
    };
    AssignRolesComponent.prototype.isOwner = function (event, e, element) {
        if (event.checked == true) {
            var obj = {
                "userId": element.userId,
                "roleId": 3,
                "roleStatus": 2,
                "createdBy": "satish"
            };
            this.markFields.push(obj);
            return e.filter(function (e) { return e.roleId == 3; });
        }
        else {
            this.checkOwner = false;
        }
        //return e.filter(e => e.roleId == 3);
    };
    AssignRolesComponent.prototype.assignRoles = function (e, roleId) {
        console.log(e, roleId);
        if (e.checked == true) {
            return true;
        }
        else
            return false;
        // return (e => e.checked==true);
    };
    AssignRolesComponent.prototype.updateRoles = function () {
        var _this = this;
        this.assignRolesService.updateRoles(this.markFields).subscribe(function (data) {
            _this.toastr.success('Status Updated Successfully');
        });
    };
    AssignRolesComponent.prototype.toggleEditable = function (event) {
        console.log(event, event.target.checked);
        if (event.target.checked) {
            this.contentEditable = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AssignRolesComponent.prototype, "paginator", void 0);
    AssignRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-assign-roles",
            template: __webpack_require__(/*! ./assign-roles.component.html */ "./src/app/Components/assign-roles/assign-roles.component.html"),
            styles: [__webpack_require__(/*! ./assign-roles.component.scss */ "./src/app/Components/assign-roles/assign-roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_save_user_service__WEBPACK_IMPORTED_MODULE_2__["SaveUserService"],
            src_app_services_assign_role_service__WEBPACK_IMPORTED_MODULE_4__["AssignRoleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AssignRolesComponent);
    return AssignRolesComponent;
}());



/***/ }),

/***/ "./src/app/Components/book-list-cards/book-list-cards.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Components/book-list-cards/book-list-cards.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"ELEMENT_DATA.length > 0; else noData\">\n  <div class=\"row\">\n    <div class=\"item item-1 col-lg-3 col-md-3 col-sm-12\">\n      <img class=\"dashboard-img\" src=\"../../../assets/images/metrics (1).png\" />\n      <h1>Book List</h1>\n    </div>\n\n    <div\n      class=\"item item-2 col-lg-9 col-md-9 col-sm-12\"\n      *ngIf=\"isUser == 2 || isUser == 1\"\n    >\n      <div class=\"input-container\">\n        <input type=\"file\" id=\"real-input\" (change)=\"onSelectFile($event)\" />\n      </div>\n      <button\n        class=\"mr-2 action-button\"\n        (click)=\"onUpload()\"\n        mat-button\n        mat-raised-button\n      >\n        Import Books\n      </button>\n      <button\n        class=\"action-button\"\n        routerLink=\"/add-book\"\n        mat-button\n        mat-raised-button\n      >\n        Add Books\n      </button>\n    </div>\n    <!-- <div class=\"filter col-lg-9 col-md-9 col-sm-12\" *ngIf=\"isUser == 3 ||  isUser == 4\">\n                    <input class=\"form-control\" placeholder=\"filter\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n            </div> -->\n  </div>\n  <h3 class=\"rec_heading\">\n    Comic Books\n    <a style=\"margin-left: 82.5%;\" routerLink=\"/app-comic-books-view-all\"\n      >View All</a\n    >\n  </h3>\n  <div style=\"margin-left: -19px\">\n    <ngx-slick-carousel\n      class=\"carousel\"\n      #slickModal=\"slick-carousel\"\n      [config]=\"slideConfig\"\n      (init)=\"slickInit($event)\"\n      (breakpoint)=\"breakpoint($event)\"\n      (afterChange)=\"afterChange($event)\"\n      (beforeChange)=\"beforeChange($event)\"\n    >\n      <div ngxSlickItem *ngFor=\"let slide of comicsRec\">\n        <!-- <div class=\"card\"> -->\n        <div class=\"flex-item\" *ngIf=\"slide.imagesUrl1 != ''; else default\">\n          <img\n            src=\"{{ slide.imagesUrl1 }} \"\n            alt=\"\"\n            height=\"200px\"\n            [routerLink]=\"['/book-detail', slide.bookId]\"\n            style=\"cursor: pointer \"\n            onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n            (click)=\"checkC()\"\n          />\n        </div>\n        <ng-template #default>\n          <img src=\"../../../assets/images/default-book.png\" height=\"200px\" />\n        </ng-template>\n        <!-- </div> -->\n      </div>\n    </ngx-slick-carousel>\n  </div>\n  <br /><br />\n\n  <h3 class=\"rec_heading\">\n    Fiction Books\n    <a style=\"margin-left: 82.5%;\" routerLink=\"/app-fiction-books-view-all\"\n      >View All</a\n    >\n  </h3>\n  <div style=\"margin-left: -19px\">\n    <ngx-slick-carousel\n      class=\"carousel\"\n      #slickModal=\"slick-carousel\"\n      [config]=\"slideConfig\"\n      (init)=\"slickInit($event)\"\n      (breakpoint)=\"breakpoint($event)\"\n      (afterChange)=\"afterChange($event)\"\n      (beforeChange)=\"beforeChange($event)\"\n    >\n      <div ngxSlickItem *ngFor=\"let slide of ficRec\">\n        <!-- <div class=\"card\"> -->\n        <div class=\"flex-item\" *ngIf=\"slide.imagesUrl1 != ''; else default\">\n          <img\n            src=\"{{ slide.imagesUrl1 }} \"\n            alt=\"\"\n            height=\"200px\"\n            [routerLink]=\"['/book-detail', slide.bookId]\"\n            style=\"cursor: pointer \"\n            onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n            (click)=\"checkC()\"\n          />\n        </div>\n        <ng-template #default>\n          <img src=\"../../../assets/images/default-book.png\" height=\"200px\" />\n        </ng-template>\n        <!-- </div> -->\n      </div>\n    </ngx-slick-carousel>\n  </div>\n\n  <br /><br />\n\n  <div>\n    <h3 class=\"rec_heading\">\n      Story Books\n      <a style=\"margin-left: 83.5%;\" routerLink=\"/app-story-books-view-all\"\n        >View All</a\n      >\n    </h3>\n  </div>\n  <div style=\"margin-left: -19px\">\n    <ngx-slick-carousel\n      class=\"carousel\"\n      #slickModal=\"slick-carousel\"\n      [config]=\"slideConfig\"\n      (init)=\"slickInit($event)\"\n      (breakpoint)=\"breakpoint($event)\"\n      (afterChange)=\"afterChange($event)\"\n      (beforeChange)=\"beforeChange($event)\"\n    >\n      <div ngxSlickItem *ngFor=\"let slide of storyRec\">\n        <!-- <div class=\"card\"> -->\n        <div class=\"flex-item\" *ngIf=\"slide.imagesUrl1 != ''; else default\">\n          <img\n            src=\"{{ slide.imagesUrl1 }} \"\n            alt=\"\"\n            height=\"200px\"\n            [routerLink]=\"['/book-detail', slide.bookId]\"\n            style=\"cursor: pointer \"\n            onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n            (click)=\"checkC()\"\n          />\n        </div>\n        <ng-template #default>\n          <img src=\"../../../assets/images/default-book.png\" height=\"200px\" />\n        </ng-template>\n        <!-- </div> -->\n      </div>\n    </ngx-slick-carousel>\n  </div>\n</section>\n\n<!-- <ng-template #noData>\n  <div class=\"no-data\">\n    No Data Found\n  </div>\n</ng-template> -->\n\n<!-- <div class=\"flex-container flex-wrap\">\n<div *ngFor=\"let book of ELEMENT_DATA\">\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{book.title | shorten: 50: '...'}}</mat-card-title>\n      <mat-card-subtitle>{{book.author}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{book.imagesUrl1}}\" alt=\"\">\n    <mat-card-content>\n      \n    </mat-card-content>\n    <mat-card-actions>\n     \n    </mat-card-actions>\n  </mat-card>\n</div>\n</div> -->\n\n<!-- <button (click)=\"addSlide()\">Add</button>\n<button (click)=\"removeSlide()\">Remove</button>\n<button (click)=\"slickModal.slickGoTo(2)\">slickGoto 2</button>\n<button (click)=\"slickModal.unslick()\">unslick</button> -->\n"

/***/ }),

/***/ "./src/app/Components/book-list-cards/book-list-cards.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Components/book-list-cards/book-list-cards.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.example-card {\n  max-width: 400px;\n  max-height: 450px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.slick-slider {\n  width: 100%;\n  height: 40%;\n  padding-left: 50px; }\n\n.card {\n  width: 150px;\n  height: 150px; }\n\n.slick-slider {\n  margin: 0px -15px; }\n\n.slick-slide {\n  padding: 10px;\n  text-align: center;\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.slick-slide.slick-active:first-child, .slick-slide.slick-active:last-child {\n  margin: 0; }\n\n.arrow_next {\n  color: red; }\n\n.arrow_prev {\n  color: red; }\n\n.slick-arrow {\n  color: green; }\n\n.rec_heading {\n  height: 29px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3bccf6;\n  padding-left: 39px; }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2Jvb2stbGlzdC1jYXJkcy9ib29rLWxpc3QtY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBYztVQUFkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFLdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUhBQXlHO0VBQ3pHLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUtoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUlsQztFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFtQ3BCO0VBQ0UsWUFBVztFQUNYLGFBQWEsRUFBQTs7QUFJakI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFZO0VBRVosa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxTQUFTLEVBQUE7O0FBR1g7RUFDSSxVQUVKLEVBQUE7O0FBRUE7RUFDRSxVQUNGLEVBQUE7O0FBRUE7RUFDSSxZQUNKLEVBQUE7O0FBRUE7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBRU0sb0NBQWtDO0VBQ2xDLDJEQUF5RDtFQUN6RCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYm9vay1saXN0LWNhcmRzL2Jvb2stbGlzdC1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xuICAgIGhlaWdodDogMi41dnc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5maWxlLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbiAgXG4gIC5ib29rbmFtZXtcbiAgICBmbGV4OiAwIDAgMjB2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XG4gfVxuXG5cblxudGhlYWQ+dHI+dGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXJ7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cblxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzNiY2NmNjtcbn1cblxuLnVzZXItc3RhdHVzLXRhYmxle1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG50aHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG5cbnRkLC5mYXtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG5cblxuXG4ubm8tZGF0YXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcblxufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuc2xpY2stc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBwYWRkaW5nLWxlZnQ6NTBweCA7XG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIzOCwgMjM0LCAyMzQpO1xuICB9XG4gICBcbi8vICAgLm5hdi1idG4ge1xuLy8gICAgIGhlaWdodDogNDdweDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDI2cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIHRvcDogMTAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuICAgXG4vLyAgIC5wcmV2LXNsaWRlLnNsaWNrLWRpc2FibGVkLFxuLy8gICAubmV4dC1zbGlkZS5zbGljay1kaXNhYmxlZCB7XG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyAgICAgb3BhY2l0eTogMC4yO1xuLy8gICB9XG4gICBcbi8vICAgLnByZXYtc2xpZGUge1xuLy8gICAgIGJhY2tncm91bmQ6IHVybCgpIG5vLXJlcGVhdCBzY3JvbGwgMCAwO1xuLy8gICAgIGxlZnQ6IC0zM3B4O1xuLy8gICB9XG4gICBcbi8vICAgLm5leHQtc2xpZGUge1xuLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fycm93LXBvaW50LXRvLXJpZ2h0LnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMjRweCAwcHg7XG4vLyAgICAgcmlnaHQ6IC0zM3B4O1xuLy8gICB9XG4gICBcbi8vICAgLnByZXYtc2xpZGU6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNTNweDtcbi8vICAgfVxuICAgXG4vLyAgIC5uZXh0LXNsaWRlOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtNTNweDtcbi8vICAgfVxuICAuY2FyZHtcbiAgICB3aWR0aDoxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4XG59XG5cbi5zbGljay1zbGlkZXIge1xuICAgIG1hcmdpbjowcHggLTE1cHg7XG59XG5cbi5zbGljay1zbGlkZSB7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmVkO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG59XG5cbi5zbGljay1zbGlkZS5zbGljay1hY3RpdmU6Zmlyc3QtY2hpbGQsIC5zbGljay1zbGlkZS5zbGljay1hY3RpdmU6bGFzdC1jaGlsZHsgXG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmFycm93X25leHR7XG4gICAgICBjb2xvcjpyZWRcblxuICB9XG5cbiAgLmFycm93X3ByZXZ7XG4gICAgY29sb3I6IHJlZFxuICB9XG5cbiAgLnNsaWNrLWFycm93e1xuICAgICAgY29sb3I6Z3JlZW5cbiAgfVxuXG4gIC5yZWNfaGVhZGluZ3tcbiAgICAvLyB3aWR0aDogMzI0cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMi41O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzNiY2NmNjtcbiAgICBwYWRkaW5nLWxlZnQ6IDM5cHg7XG4gIH1cblxuICAuZmxleC1pdGVtIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA5cHggMTJweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAuMikhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/book-list-cards/book-list-cards.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/book-list-cards/book-list-cards.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookListCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListCardsComponent", function() { return BookListCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/apiUrl */ "./src/app/apiUrl.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");







var BookListCardsComponent = /** @class */ (function () {
    function BookListCardsComponent(bookservice, http, toastr, orderPipe) {
        this.bookservice = bookservice;
        this.http = http;
        this.toastr = toastr;
        this.orderPipe = orderPipe;
        this.ELEMENT_DATA = [];
        this.file = null;
        this.selectedFile = null;
        this.comicsRec = [];
        this.ficRec = [];
        this.storyRec = [];
        this.slideConfig = {
            slidesToShow: 6,
            slidesToScroll: 5,
            // "arrows":true,
            // prevArrow:
            //   "<i class='material-icons nav-btn prev-slide'>arrow_back_ios</i>",
            // nextArrow:
            //   "<i class='material-icons nav-btn next-slide'>arrow_forward_ios</i>",
            "prevArrow": "<div class='nav-btn prev-slide'></div>",
            "nextArrow": "<div class='nav-btn next-slide'></div>",
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
        this.sortedCollection = orderPipe.transform(this.ELEMENT_DATA, "id");
    }
    BookListCardsComponent.prototype.ngOnInit = function () {
        this.isUser = localStorage.getItem("roleId");
        this.getbooks();
        // this.getRecommmendedbooks();
    };
    BookListCardsComponent.prototype.getbooks = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (data) {
            _this.ELEMENT_DATA = data.resultsMap.books;
            console.log(_this.ELEMENT_DATA);
            for (var i = 0; i < _this.ELEMENT_DATA.length; i++) {
                var element = _this.ELEMENT_DATA[i];
                if (element.genreId == 2) {
                    _this.comicsRec.push(element);
                }
                else if (element.genreId == 3) {
                    _this.ficRec.push(element);
                }
                else if (element.genreId == 1) {
                    _this.storyRec.push(element);
                }
            }
        });
    };
    BookListCardsComponent.prototype.getRecommmendedbooks = function () {
        this.bookservice.getRecomendedBooks().subscribe(function (data) {
            console.log("Recommended Books", data);
        });
    };
    BookListCardsComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
        localStorage.setItem("isHome", "false");
    };
    BookListCardsComponent.prototype.onSelectFile = function (event) {
        this.selectedFile = event.target.files[0];
        // console.log(this.selectedFile.name);
    };
    BookListCardsComponent.prototype.onUpload = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                // 'Content-Type': undefined,
                Authorization: "Bearer " + localStorage.getItem("Token")
            })
        };
        var fd = new FormData();
        fd.append("file", this.selectedFile, this.selectedFile.name);
        this.http
            .post(src_app_apiUrl__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].URL + "/api/books/upload-books-file", fd, httpOptions)
            .subscribe(function (data) {
            console.log(data);
            _this.toastr.success(data.resultsMap.message);
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    BookListCardsComponent.prototype.slickInit = function (e) {
        // console.log("slick initialized");
    };
    BookListCardsComponent.prototype.breakpoint = function (e) {
        // console.log("breakpoint");
    };
    BookListCardsComponent.prototype.afterChange = function (e) {
        // console.log("afterChange");
    };
    BookListCardsComponent.prototype.beforeChange = function (e) {
        // console.log("beforeChange");
    };
    BookListCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-book-list-cards",
            template: __webpack_require__(/*! ./book-list-cards.component.html */ "./src/app/Components/book-list-cards/book-list-cards.component.html"),
            styles: [__webpack_require__(/*! ./book-list-cards.component.scss */ "./src/app/Components/book-list-cards/book-list-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPipe"]])
    ], BookListCardsComponent);
    return BookListCardsComponent;
}());



/***/ }),

/***/ "./src/app/Components/book-list/book-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/book-list/book-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"container-fluid\" >\n    <div class=\"row\">\n        <div class=\"item item-1 col-lg-3 col-md-3 col-sm-12\">\n            <img class=\"dashboard-img\" src=\"../../assets/images/methics (1).png\">\n            <h1>Book List</h1>\n        </div>\n        <div *ngIf=\"isUser == 2 ||  isUser == 1\" class=\"item item-2 col-lg-9 col-md-9 col-sm-12\">\n            <div class=\"input-container\">\n                <input type=\"file\" id=\"real-input\" (change)=\"onSelectFile($event)\">\n            </div>\n            <button class=\"mr-2 action-button\" (click)=\"onUpload()\" mat-button mat-raised-button>Import Books</button>\n            <button class=\"action-button\" routerLink=\"/add-book\" mat-button mat-raised-button>Add Books</button>\n        </div>\n    </div>\n\n\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\" [class.isMobile]=\"isMobile\">\n\n            <ng-container matColumnDef=\"bookid\">\n                <mat-header-cell fxFlex=\"0 0 5%\" *matHeaderCellDef> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 5%\">\n                    <span class=\"mobile-label\">Book ID:</span> {{element.bookId}}\n                </mat-cell>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"bookname\">\n                <mat-header-cell *matHeaderCellDef [ngClass]=\"' bookname'\"> Book Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" [ngClass]=\"' bookname'\">\n                    <span class=\"mobile-label\">Book Name:</span>\n                    <div  title=\"{{element.title }}\">\n                            {{element.title  | shorten: 35: '...'  }}\n                        </div> \n                </mat-cell>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"author\">\n                <mat-header-cell *matHeaderCellDef> Author </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <span class=\"mobile-label\">Author:</span> {{element.author}}\n                </mat-cell>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"gnere\">\n                <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 10%\"> Genre </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 10%\">\n                    <span class=\"mobile-label\">Genre:</span> {{element.genre}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"publisher\">\n                <mat-header-cell *matHeaderCellDef> Publisher </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <span class=\"mobile-label\">Publisher:</span> {{element.publisher}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"owner\">\n                <mat-header-cell *matHeaderCellDef> Owner</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <span class=\"mobile-label\">Owner:</span> <a href=\"mailto:{{element.owner}}\">{{element.owner}}</a>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n                <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 10%\"> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 10%\">\n                    <span class=\"mobile-label\">Actions:</span>\n                    <button class=\"edit-button\" (click)=\"editBook(element.bookId)\" mat-button mat-raised-button>Edit</button>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *mathowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n        <mat-paginator  [pageSize]=\"[10]\" showFirstLastButtons></mat-paginator>\n    </div>\n\n</section> -->\n\n\n\n<section>\n        <div class=\"row\">\n                <div class=\"item item-1 col-lg-3 col-md-3 col-sm-12\">\n                    <img class=\"dashboard-img\" src=\"../../../assets/images/metrics (1).png\">\n                    <h1>Book List</h1>\n                </div>\n\n                <div class=\"item item-2 col-lg-9 col-md-9 col-sm-12\" *ngIf=\"isUser == 2 ||  isUser == 1\">\n                    <div class=\"input-container\">\n                        <input type=\"file\" id=\"real-input\" (change)=\"onSelectFile($event)\">\n                    </div>\n                    <button class=\"mr-2 action-button\" (click)=\"onUpload()\" mat-button mat-raised-button>Import Books</button>\n                    <button class=\"action-button\" routerLink=\"/add-book\" mat-button mat-raised-button>Add Books</button>\n                </div>\n                <div class=\"filter col-lg-9 col-md-9 col-sm-12\" *ngIf=\"isUser == 3 ||  isUser == 4\">\n                        <input class=\"form-control\" placeholder=\"Search...\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n                </div>\n            </div>\n  \n        <div class=\"table-responsive user-status-table mb-5\">\n          <table class=\"table \">\n            <thead>\n                <tr>\n                    <th  style=\"width:6%\" [class.active]=\"order === 'id'\" (click)=\"setOrder('id')\">\n                        Id <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th style=\"width:25%\" [class.active]=\"order === 'title'\" (click)=\"setOrder('title')\"\n                        >Book Name <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th style=\"width:13%\" [class.active]=\"order === 'author'\" (click)=\"setOrder('author')\">\n                        Author <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th  style=\"width:13%\" [class.active]=\"order === 'genre'\" (click)=\"setOrder('genre')\">\n                        Genre <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th style=\"width:15%\">Publisher</th>\n                    <th class=\"text-center\" style=\"width:14%\" [class.active]=\"order === 'owner'\" (click)=\"setOrder('owner')\"  *ngIf=\"isUser == 1 ||  isUser == 2\">\n                            Owner <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th class=\"text-center\" style=\"width:14%\" [class.active]=\"order === 'availability'\" (click)=\"setOrder('availability')\" *ngIf=\"isUser == 3 ||  isUser == 4\">\n                        Availability <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th class=\"text-center\" [class.active]=\"order === 'rent'\" (click)=\"setOrder('rent')\" *ngIf=\"isUser == 3 ||  isUser == 4\">\n                        Rental Value <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                    </th>\n                    <th class=\"text-center\"  *ngIf=\"isUser == 1 ||  isUser == 2\">\n                            Action \n                    </th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let data of ELEMENT_DATA | orderBy: order:reverse:'case-insensitive'  | filter:filter | paginate: { itemsPerPage: 8, currentPage: p }; let i = index\">\n                    <td >{{data.bookId}}</td>\n                    <td tooltip=\"{{data.title}}\" placement=\"right\" show-delay=\"500\">\n                            <a [routerLink]=\"['/book-detail', data.bookId]\" (click)=\"checkC()\">\n                                {{data.title | shorten: 50: '...'}}\n                            </a>\n                    </td>\n                    <td *ngIf=\"data.author != null; else nodata\">{{data.author}}</td>\n                    <td *ngIf=\"data.genre != null; else nodata\">{{data.genre}}</td>\n                    <td *ngIf=\"data.publisher != null; else nodata\">{{data.publisher}}</td>\n                    <td class=\"text-center\" *ngIf=\"isUser == 3 ||  isUser == 4\" >\n                        <ng-container  *ngIf=\"data.availability != null; else nodata\" >\n                            <!-- <span *ngIf=\"data.availabilityId==0\">No</span>\n                            <span *ngIf=\"data.availabilityId==1\">Yes</span>                 -->\n                            <!-- {{data.availability}} -->\n                        </ng-container>\n                    </td>\n                    <td class=\"text-center\"  *ngIf=\"isUser == 1 ||  isUser == 2\" >\n                            <ng-container  *ngIf=\"data.owner != null; else nodata\">                                   \n                                    <ng-template #OwnerrContent>\n                                             Phone: <b> {{data.ownerContactNumber}}</b> <br> Email:<b> {{data.owner}}</b>\n                                          </ng-template>\n                                           \n                                          <span [tooltip]=\"OwnerrContent\" placement=\"right\" show-delay=\"500\" offset=\"4\" content-type=\"template\" >\n                                              <a>  {{data.ownerFirstName}} {{data.ownerLastName}} </a>\n                                          </span>\n                            </ng-container>\n\n                            \n                    </td>\n                    <ng-template #nodata>\n                        <p class=\"text-center\"> - </p>\n                    </ng-template>\n                    <td class=\"text-center\" *ngIf=\"isUser == 3 ||  isUser == 4\">{{data.rentPerDay}}</td>\n                    <td class=\"text-center\"  *ngIf=\"isUser == 1 ||  isUser == 2\">\n                            <button class=\"edit-button\" (click)=\"editBook(data.bookId)\" mat-button mat-raised-button>Edit</button>\n                    </td>\n                </tr>\n            </tbody>\n          </table>\n          <pagination-controls style=\"float: right\" class=\"my-pagination\" (pageChange)=\"p = $event\"  maxSize=\"9\"\n                                directionLinks=\"true\"\n                                autoHide=\"true\"\n                                responsive=\"true\"\n                                previousLabel=\"Previous\"\n                                nextLabel=\"Next\"\n                                screenReaderPaginationLabel=\"Pagination\"\n                                screenReaderPageLabel=\"page\"\n         ></pagination-controls>\n        </div>\n  </section>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/Components/book-list/book-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Components/book-list/book-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBYztVQUFkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFLdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUhBQXlHO0VBQ3pHLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUtoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gICAgaGVpZ2h0OiAyLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLmZpbGUtaW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgLmJvb2tuYW1le1xuICAgIGZsZXg6IDAgMCAyMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMjJweDtcbiB9XG5cblxuXG50aGVhZD50cj50aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcntcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjM2JjY2Y2O1xufVxuXG4udXNlci1zdGF0dXMtdGFibGV7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbnRoe1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxudGQsLmZhe1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRiNGI0Yjtcbn1cblxuXG5cbi5uby1kYXRhe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/Components/book-list/book-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/book-list/book-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/apiUrl */ "./src/app/apiUrl.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");









var BookListComponent = /** @class */ (function () {
    function BookListComponent(fb, bookservice, http, router, toastr, orderPipe) {
        this.fb = fb;
        this.bookservice = bookservice;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.orderPipe = orderPipe;
        this.ELEMENT_DATA = [];
        this.file = null;
        this.order = "id";
        this.reverse = false;
        this.p = 1;
        this.myOptions = {
            placement: "right",
            "show-delay": 5000000
        };
        this.selectedFile = null;
        this.sortedCollection = orderPipe.transform(this.ELEMENT_DATA, "id");
        // console.log(this.sortedCollection);
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.isUser = localStorage.getItem("roleId");
        this.getbooks();
    };
    BookListComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    BookListComponent.prototype.onSelectFile = function (event) {
        this.selectedFile = event.target.files[0];
        // console.log(this.selectedFile.name);
    };
    BookListComponent.prototype.onUpload = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // 'Content-Type': undefined,
                Authorization: "Bearer " + localStorage.getItem("Token")
            })
        };
        var fd = new FormData();
        fd.append("file", this.selectedFile, this.selectedFile.name);
        this.http
            .post(src_app_apiUrl__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].URL + "/api/books/upload-books-file", fd, httpOptions)
            .subscribe(function (data) {
            // console.log(data);
            _this.toastr.success(data.resultsMap.message);
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    BookListComponent.prototype.getbooks = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (data) {
            // console.log(data);
            _this.ELEMENT_DATA = data.resultsMap.books;
            // console.log( this.ELEMENT_DATA)
        });
    };
    BookListComponent.prototype.editBook = function (regId) {
        this.router.navigate(["edit-book", regId]);
    };
    BookListComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-book-list",
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/Components/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.scss */ "./src/app/Components/book-list/book-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderPipe"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/Components/cards/cards.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/cards/cards.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid card-dashboard\">\n  <div class=\"cards-heading\">\n    <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n    <h1>Dashboard</h1>\n </div>\n      \n  <div class=\"cards-item\"  fxLayout=\"row wrap\"  fxLayout.lt-sm=\"column\" fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n      <mat-card class=\"total-books\" fxFlex=\"0 1 calc(33.3% - 32px)\"\n      fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n      fxFlex.lt-sm=\"100%\">\n          <mat-card-header>\n            <mat-card-title>\n                <img class=\"books\" src=\"../../assets/images/books.png\">\n            </mat-card-title>\n            <mat-card-subtitle>Total Books</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            6345\n          </mat-card-content>\n          <mat-card-footer>\n            <p>Increased by 60% </p>\n          </mat-card-footer>\n        </mat-card>\n\n        <mat-card class=\"checkout-book\" fxFlex=\"0 1 calc(33.3% - 32px)\"\n        fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n        fxFlex.lt-sm=\"100%\">\n            <mat-card-header>\n                <mat-card-title>\n                    <img class=\"books\" src=\"../../assets/images/checkout.png\">\n                </mat-card-title>\n                <mat-card-subtitle>Checkout Books List</mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                2345\n              </mat-card-content>\n              <mat-card-footer>\n                <p>Increased by 30% </p>\n              </mat-card-footer>\n        </mat-card>\n\n        <mat-card class=\"users\" fxFlex=\"0 1 calc(33.3% - 32px)\"\n        fxFlex.lt-md=\"0 1 calc(50% - 32px)\"\n        fxFlex.lt-sm=\"100%\">\n           <mat-card-header>\n            <mat-card-title>\n                <img class=\"books\" src=\"../../assets/images/team.png\">\n            </mat-card-title>\n            <mat-card-subtitle>Users</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            25000\n          </mat-card-content>\n          <mat-card-footer>\n            <p>Increased by 80% </p>\n          </mat-card-footer>\n        </mat-card>\n  </div>\n</section>\n  \n\n\n"

/***/ }),

/***/ "./src/app/Components/cards/cards.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/cards/cards.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-dashboard .mat-card-header-text {\n  margin: 0px !important; }\n\n.card-dashboard .cards-heading {\n  display: -webkit-flex;\n  display: flex;\n  margin-left: 13px; }\n\n.card-dashboard .cards-heading h1 {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 10px 16px;\n    color: #707070; }\n\n.card-dashboard .total-books {\n  border-radius: 13px;\n  margin-top: 45px;\n  background-image: linear-gradient(91deg, #c694f9, #ab64f4);\n  padding: 54px 49px; }\n\n.card-dashboard .checkout-book {\n  border-radius: 13px;\n  margin-top: 45px;\n  background-image: linear-gradient(to right, #6aa5e3, #6866e9);\n  padding: 54px 49px; }\n\n.card-dashboard .users {\n  border-radius: 13px;\n  margin-top: 45px;\n  background-image: linear-gradient(to right, #feb683, #ff8993);\n  padding: 54px 49px; }\n\n.card-dashboard .books {\n  width: 37.9px;\n  height: 37.9px;\n  color: #fff; }\n\n.card-dashboard .dashboard-img {\n  width: 49px;\n  height: 45.6px; }\n\n.card-dashboard .mat-card-subtitle {\n  font-size: 24px;\n  font-weight: 600;\n  color: #ffffff;\n  margin: 0px !important;\n  padding-top: 3px; }\n\n.card-dashboard .mat-card-content {\n  font-size: 36px;\n  font-weight: 600;\n  color: #ffffff;\n  margin: 0px; }\n\n.card-dashboard .mat-card-footer {\n  font-size: 24px;\n  font-weight: 600;\n  color: #ffffff;\n  padding-top: 40px; }\n\n.card-dashboard .mat-card-header-text {\n  margin: 0px !important; }\n\n.card-dashboard .mat-card-footer {\n  display: block;\n  margin: 0px !important; }\n\n.card-dashboard .mat-card-header-text {\n  margin: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUksc0JBQXNCLEVBQUE7O0FBRjFCO0VBTUkscUJBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWdCLEVBQUE7O0FBUHBCO0lBU00sZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FDRixFQUFBOztBQWJKO0VBdUJJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMERBTzREO0VBTjVELGtCQUFpQixFQUFBOztBQTFCckI7RUF1QkksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2REFXK0Q7RUFWL0Qsa0JBQWlCLEVBQUE7O0FBMUJyQjtFQXVCSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZEQWUrRDtFQWQvRCxrQkFBaUIsRUFBQTs7QUExQnJCO0VBNENJLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVSxFQUFBOztBQTlDZDtFQWtERSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQW5EaEI7RUF1REUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFlLEVBQUE7O0FBM0RqQjtFQStERSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFVLEVBQUE7O0FBbEVaO0VBc0VFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFnQixFQUFBOztBQXpFbEI7RUE4RUUsc0JBQXNCLEVBQUE7O0FBOUV4QjtFQWtGRSxjQUFjO0VBQ2Isc0JBQXNCLEVBQUE7O0FBbkZ6QjtFQXVGRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAuY2FyZC1kYXNoYm9hcmR7XG4gICAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkcy1oZWFkaW5ne1xuICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICBtYXJnaW4tbGVmdDoxM3B4O1xuICAgICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwXG4gICAgICB9XG4gICAgfVxuICBcblxuICBcbiAgXG4gICBcbiAgXG4gICAgQG1peGluIGNhcmQtY29sb3IoJGJhY2tncm91bmQpIHtcbiAgIFxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmFja2dyb3VuZDtcbiAgICAgIHBhZGRpbmc6NTRweCA0OXB4O1xuICAgICAgQG1lZGlhKG1heC13aWR0aDoxNDQwcHgpe1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAudG90YWwtYm9va3Mge1xuICAgICAgQGluY2x1ZGUgY2FyZC1jb2xvcihsaW5lYXItZ3JhZGllbnQoOTFkZWcsICNjNjk0ZjksICNhYjY0ZjQpKTtcbiAgICB9XG4gIFxuICAgIC5jaGVja291dC1ib29re1xuICAgICAgQGluY2x1ZGUgY2FyZC1jb2xvcihsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YWE1ZTMsICM2ODY2ZTkpKTtcbiAgICB9XG4gIFxuICAgIC51c2Vyc3tcbiAgICAgIEBpbmNsdWRlIGNhcmQtY29sb3IobGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmViNjgzLCAjZmY4OTkzKSk7XG4gICAgfVxuICBcbiAgICAuYm9va3N7XG4gICAgICB3aWR0aDogMzcuOXB4O1xuICAgICAgaGVpZ2h0OiAzNy45cHg7XG4gICAgICBjb2xvcjojZmZmO1xuICAgIH1cbiAgXG4gIC5kYXNoYm9hcmQtaW1ne1xuICAgIHdpZHRoOiA0OXB4O1xuICAgIGhlaWdodDogNDUuNnB4O1xuICB9XG4gIFxuICAubWF0LWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDozcHg7XG4gIH1cbiAgIFxuICAubWF0LWNhcmQtY29udGVudHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46MHB4O1xuICB9XG4gIFxuICAubWF0LWNhcmQtZm9vdGVye1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmctdG9wOjQwcHg7XG4gIH1cbiAgXG4gIFxuICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7IFxuICB9XG4gIFxuICAubWF0LWNhcmQtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/Components/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/Components/cards/cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/Components/check-out-books/check-out-books.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Components/check-out-books/check-out-books.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout\n  fxLayout.xs=\"column\"\n  fxLayoutAlign=\"left\"\n  fxLayoutGap=\"10px\"\n  fxLayoutGap.xs=\"0\"\n>\n  <div class=\"item item-1\" fxFlex=\"50%\">\n    <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\" />\n    <h1>Checkout-Checkin List</h1>\n  </div>\n  <mat-select\n    placeholder=\"All\"\n    name=\"checked_status_id\"\n    id=\"checked_status_id\"\n    class=\"fliter-box\"\n    [value]=\"cId\"\n  >\n  <mat-option (click)=\"loadAll()\">All</mat-option>\n\n    <mat-option\n      *ngFor=\"let id of comboBoxesDataCheckedStatus\"\n      [value]=\"id.checked_status_id\"\n      (click)=\"applyFilter(id.checked_status_id)\"\n      >{{ id.checked_status }}\n    </mat-option>\n  </mat-select>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" [class.isMobile]=\"isMobile\">\n    <ng-container matColumnDef=\"invId\">\n      <mat-header-cell *matHeaderCellDef> Inv ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        {{ element.inventoryId }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"orderId\">\n      <mat-header-cell *matHeaderCellDef> Order ID</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        {{ element.orderId }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"bookName\">\n      <mat-header-cell *matHeaderCellDef> Book Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span\n          class=\"ellipses\"\n          tooltip=\"{{ element.title }}\"\n          placement=\"right\"\n          show-delay=\"500\"\n          theme=\"dark\"\n        >\n          <a [routerLink]=\"['/book-detail', element.bookId]\">\n            {{ element.title | shorten: 50:\"...\" }}\n          </a>\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef> User Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <ng-template #UserContent>\n          User Id: <b>{{ element.userId }}</b> <br />\n          Phone: <b>{{ element.contactNumber }}</b> <br />\n          Email:<b>{{ element.userEmail }}</b>\n        </ng-template>\n\n        <span\n          [tooltip]=\"UserContent\"\n          placement=\"right\"\n          show-delay=\"500\"\n          offset=\"4\"\n          content-type=\"template\"\n        >\n          <a> {{ element.userFirstName }} {{ element.userLastName }} </a>\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"checkOutDate\">\n      <mat-header-cell *matHeaderCellDef> CheckOut Date</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        {{ element.checkedOutDate | date }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dueDate\">\n      <mat-header-cell *matHeaderCellDef> Due Date </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span *ngIf=\"element.expReturnDate != null\">{{\n          element.expReturnDate | date\n        }}</span>\n        <span *ngIf=\"element.expReturnDate == null\"> -</span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dueAmt\">\n      <mat-header-cell *matHeaderCellDef> Due Amt </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        {{ element.dueAmount }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"returnDate\">\n      <mat-header-cell *matHeaderCellDef> Return Date </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span *ngIf=\"element.returnedDate != null\"\n          >{{ element.returnedDate | date: \"dd/MM/yyyy\" }}\n        </span>\n        <span *ngIf=\"element.returnedDate == null\"> -</span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef> Status</mat-header-cell>\n      <mat-cell *matCellDef=\"let element; let i = index\">\n        <mat-select\n          [disabled]=\"element.checkedItatusId == '4'\"\n          name=\"checked_status_id\"\n          id=\"checked_status_id\"\n          [value]=\"element.checkedItatusId\"\n        >\n          <mat-option\n            [disabled]=\"id.checked_status_id <= element.checkedItatusId\"\n            *ngFor=\"let id of comboBoxesDataCheckedStatus\"\n            [value]=\"id.checked_status_id\"\n            (click)=\"checkedStatusId($event,id, i)\"\n            \n            >{{ id.checked_status }}\n          </mat-option>\n        </mat-select> -->\n\n        <!-- <mat-form-field> -->\n        <!-- <select style=\"width: 108px;\" matNativeControl [disabled]=\"element.checkedItatusId=='4'\" name=\"checked_status_id\" id=\"checked_status_id\"  required>\n    <option  *ngFor=\"let id of comboBoxesDataCheckedStatus\" selected=\"id.checked_status_id\" [value]=\"id.checked_status_id\" (onSelectionChange)=\"checkedStatusId($event,id)\">{{id.checked_status}}</option>\n  </select> -->\n        <!-- \n\n  <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\n      <option value=\"\" selected></option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select> -->\n        <!-- </mat-form-field> -->\n\n        <!-- <h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field> -->\n      <!-- </mat-cell>\n    </ng-container> -->\n\n\n    <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef> Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let element; let i = index\">\n          <!-- <mat-select\n            [disabled]=\"element.checkedItatusId == '4'\"\n            name=\"checked_status_id\"\n            id=\"checked_status_id\"\n            [value]=\"element.checkedItatusId\"\n          >\n            <mat-option\n              [disabled]=\"id.checked_status_id <= element.checkedItatusId\"\n              *ngFor=\"let id of comboBoxesDataCheckedStatus\"\n              [value]=\"id.checked_status_id\"\n              (click)=\"checkedStatusId($event,id, i)\"\n              \n              >{{ id.checked_status }}\n            </mat-option>\n          </mat-select> -->\n          {{element.checkedStatus}}\n\n          <!-- <mat-chip-list aria-label=\"\">\n\n              <mat-chip *ngIf=\"element.checkedItatusId=='1'\" style=\"background-color: rgb(68, 155, 226)\" >{{element.checkedStatus}}</mat-chip>\n              <mat-chip *ngIf=\"element.checkedItatusId=='2'\" style=\"background-color: yellow\" >{{element.checkedStatus}}</mat-chip>\n              <mat-chip *ngIf=\"element.checkedItatusId=='3'\" style=\"background-color: steelblue\" >{{element.checkedStatus}}</mat-chip>\n              <mat-chip *ngIf=\"element.checkedItatusId=='4'\" style=\"background-color: green\" >{{element.checkedStatus}}</mat-chip>\n    \n            </mat-chip-list> -->\n        </mat-cell>\n      </ng-container>\n\n    <!-- <ng-container matColumnDef=\"totalAmtPaid\">\n      <mat-header-cell *matHeaderCellDef> Total Amt paid </mat-header-cell>\n      <mat-cell *matCellDef=\"let element; let i = index\">\n        <ng-container>\n          <mat-form-field\n            *ngIf=\"\n              this.checkOut.checkedItatusId == '4' && this.selectIndex == i\n            \"\n          >\n            <input\n              [disabled]=\"element.checkedItatusId == '4' || disableSubmit\"\n              matInput\n              type=\"text\"\n              name=\"amountPaid\"\n              [(ngModel)]=\"amountPaid[i]\"\n              pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n              required\n              maxlength=\"6\"\n              (keydown)=\"check($event)\"\n            />\n          </mat-form-field>\n        </ng-container>\n        <ng-container *ngIf=\"element.checkedItatusId == '4'\">\n          <span style=\"padding-left: 40px\" *ngIf=\"element.amountPaid != null\">{{\n            element.amountPaid\n          }}</span>\n        </ng-container>\n        <ng-container *ngIf=\"element.checkedItatusId == '4'\">\n          <span style=\"padding-left: 40px\" *ngIf=\"element.amountPaid == null\"\n            >0</span\n          >\n        </ng-container>\n      </mat-cell>\n    </ng-container> -->\n\n\n    <ng-container matColumnDef=\"totalAmtPaid\">\n        <mat-header-cell *matHeaderCellDef> Total Amt paid </mat-header-cell>\n        <mat-cell *matCellDef=\"let element; let i = index\">\n          <ng-container>\n            <mat-form-field\n              *ngIf=\"\n                element.checkedItatusId=='3'\n              \"\n            >\n              <input\n              placeholder=\"Enter amount\"\n                [disabled]=\"element.checkedItatusId == '4' \"\n                matInput\n                type=\"text\"\n                name=\"amountPaid\"\n                [(ngModel)]=\"amountPaid[i]\"\n                pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n                required\n                maxlength=\"6\"\n                (keydown)=\"check($event)\"\n              />\n            </mat-form-field>\n          </ng-container>\n          <ng-container *ngIf=\"element.checkedItatusId == '4';else dash\">\n            <span style=\"padding-left: 40px\" *ngIf=\"element.amountPaid != null\">{{\n              element.amountPaid\n            }}</span>\n            <!-- <span style=\"padding-left: 40px\" *ngIf=\"element.amountPaid == null\"\n              >0</span\n            > -->\n          </ng-container>\n          <ng-container *ngIf=\"element.checkedItatusId == '4'\">\n            <span style=\"padding-left: 40px\" *ngIf=\"element.amountPaid == null\"\n              >0</span\n            >\n          </ng-container>\n          <ng-template #dash>\n            <span style=\"padding-left: 40px\">-</span>\n          </ng-template>\n        </mat-cell>\n      </ng-container>\n\n    <!-- <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n      <mat-cell *matCellDef=\"let element; let i = index\">\n        <button\n          [disabled]=\"\n            element.amountPaid ||\n            element.checkedItatusId == '4' ||\n            (!this.checkOut.checkedItatusId || this.selectIndex != i) ||\n            disableButton || disableSubmit\n          \"\n          class=\"edit-button\"\n          (click)=\"submit(i, element)\"\n          mat-button\n          mat-raised-button\n        >\n          Submit\n        </button> -->\n        <!-- <button *ngIf=\"this.checkOut.checkedItatusId\" [disabled]=\"this.checkOut.checkedItatusId\"  class=\"edit-button\" (click)=\"submit(i,element)\" mat-button mat-raised-button>2</button> -->\n        <!-- <button *ngIf=\"element.checkedItatusId=='3'\" [disabled]=\"(!this.checkOut.checkedItatusId || this.selectIndex!=i)\"  class=\"edit-button\" (click)=\"submit(i,element)\" mat-button mat-raised-button>3</button>\n        <button *ngIf=\"element.checkedItatusId=='2'\"  [disabled]=\"(!this.checkOut.checkedItatusId || this.selectIndex!=i)\"  class=\"edit-button\" (click)=\"submit(i,element)\" mat-button mat-raised-button>2</button>\n        <button *ngIf=\"element.checkedItatusId=='1'\"  [disabled]=\"(!this.checkOut.checkedItatusId || this.selectIndex!=i)\"  class=\"edit-button\" (click)=\"submit(i,element)\" mat-button mat-raised-button>1</button> -->\n      <!-- </mat-cell>\n    </ng-container> -->\n\n\n    <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let element; let i = index\">\n          <!-- <button\n            [disabled]=\"\n              element.amountPaid ||\n              element.checkedItatusId == '4' ||\n              (!this.checkOut.checkedItatusId || this.selectIndex != i) ||\n              disableButton || disableSubmit\n            \"\n            class=\"edit-button\"\n            (click)=\"submit(i, element)\"\n            mat-button\n            mat-raised-button\n          >\n            Submit\n          </button> -->\n          <button class=\"edit-btn\"\n          (click)=\"submit(i, element)\"\n          mat-button\n          mat-raised-button \n          *ngIf=\"element.checkedItatusId=='1'\"\n          >Check Out\n        </button>\n          <!-- <button class=\"edit-btn\"\n          [disabled]=\"(element.checkedItatusId=='2')\"\n          (click)=\"submit(i, element)\"\n          mat-button\n          mat-raised-button\n          *ngIf=\"element.checkedItatusId=='2'\"\n          >Ready to Pickup\n        </button> -->\n          <button class=\"edit-btn\"\n          [disabled]=\"!amountPaid[i]\"\n          (click)=\"submit(i, element)\"\n          mat-button\n          mat-raised-button\n          *ngIf=\"element.checkedItatusId=='3'\"\n          >CheckIn\n        </button>\n        <!-- <button class=\"edit-btn\"\n        [disabled]=\"element.checkedItatusId=='4'\"\n          (click)=\"submit(i, element)\"\n          mat-button\n          mat-raised-button\n          *ngIf=\"element.checkedItatusId=='4'\"\n          >CheckIn\n        </button> -->\n\n        </mat-cell>\n      </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n\n  <mat-paginator\n    #paginator\n    [pageSize]=\"[6]\"\n    showFirstLastButtons\n  ></mat-paginator>\n</div>\n\n<!-- TABLE -->\n\n<!-- <section>\n   \n        <div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"left\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n            <div class=\"item item-1\" fxFlex=\"50%\">\n              <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n              <h1>Checkout Books</h1>\n            </div>\n            <mat-select  placeholder=\"Select Status\" name=\"checked_status_id\" id=\"checked_status_id\" class=\"fliter-box\">\n                <mat-option *ngFor=\"let id of comboBoxesDataCheckedStatus\" [value]=\"id.checked_status_id\" (click)=\"applyFilter(id.checked_status_id)\">{{id.checked_status}}\n                </mat-option>\n            </mat-select>\n          </div>\n    <div class=\"table-responsive user-status-table mb-5\">\n      <table class=\"table \">\n        <thead>\n            <tr>\n                <th  style=\"width:6%\" [class.active]=\"order === 'id'\" (click)=\"setOrder('id')\">\n                    Inv ID \n                </th>\n                <th style=\"width:13%\" [class.active]=\"order === 'author'\" (click)=\"setOrder('author')\">\n                    Order Id \n                </th>\n                <th style=\"width:25%\" [class.active]=\"order === 'title'\" (click)=\"setOrder('title')\"\n                    >Book Name\n                </th>\n                \n                <th  style=\"width:13%\" [class.active]=\"order === 'genre'\" (click)=\"setOrder('genre')\">\n                    User Name \n                </th>\n                <th class=\"text-center\" style=\"width:14%\" [class.active]=\"order === 'owner'\" (click)=\"setOrder('owner')\"  >\n                        CheckOut Date\n                </th>\n                <th class=\"text-center\" style=\"width:14%\" [class.active]=\"order === 'availability'\" (click)=\"setOrder('availability')\" >\n                    Due Date \n                </th>\n                <th class=\"text-center\" [class.active]=\"order === 'rent'\" (click)=\"setOrder('rent')\">\n                    Due Amt \n                </th>\n                <th class=\"text-center\" [class.active]=\"order === 'rent'\" (click)=\"setOrder('rent')\" >\n                    Return Date \n                </th>\n                <th class=\"text-center\" [class.active]=\"order === 'rent'\" (click)=\"setOrder('rent')\" >\n                    Status \n                </th>\n\n                <th class=\"text-center\" [class.active]=\"order === 'rent'\" (click)=\"setOrder('rent')\" >\n                    Total Amt Paid \n                </th>\n                <th class=\"text-center\"  >\n                        Action \n                </th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let data of ELEMENT_DATA | orderBy: order:reverse:'case-insensitive'  | filter:filter | paginate: { itemsPerPage: 4, currentPage: p }; let i = index\">\n                <td >{{data.inventoryId}}</td>\n                <td >{{data.orderId}}</td>\n\n                <td >\n                        <span class=\"ellipses\" tooltip=\"{{data.title}}\" placement=\"right\" show-delay=\"500\" theme=\"dark\" >\n                            <a [routerLink]=\"['/book-detail', data.bookId]\">\n                              {{data.title | shorten: 18 : '...'}}\n                          </a>\n                        </span>\n                </td>\n                <td *ngIf=\"data.userFirstName != null; else nodata\">\n                    <ng-template #UserContent>\n                        User Id: <b>{{data.userId}}</b> <br> Phone: <b>{{data.contactNumber}}</b> <br> Email:<b>{{data.userEmail}}</b>\n                      </ng-template>\n                       \n                      <span [tooltip]=\"UserContent\" placement=\"right\" show-delay=\"500\" offset=\"4\" content-type=\"template\" >\n                          <a> {{data.userFirstName}} {{data.userLastName}} </a>\n                      </span>\n                  </td>\n                <td *ngIf=\"data.checkedOutDate != null; else nodata\">{{data.checkedOutDate| date}}</td>\n                <td *ngIf=\"data.expReturnDate != null; else nodata\">{{data.expReturnDate| date}}</td>\n                <td class=\"text-center\"  >\n                    <ng-container  *ngIf=\"data.totalAmount != null; else nodata\">\n                            {{data.totalAmount}}\n                    </ng-container>\n                </td>\n                <td class=\"text-center\"   >\n                        <ng-container  *ngIf=\"data.returnedDate != null; else nodata\">                                   \n                                {{data.returnedDate| date}}\n                        </ng-container>                        \n                </td>\n                <ng-template #nodata>\n                    <p class=\"text-center\"> - </p>\n                </ng-template>\n                <td class=\"text-center\" > -->\n<!-- <mat-select [disabled]=\"data.checkedItatusId=='4'\" name=\"checked_status_id\" id=\"checked_status_id\" [value]=\"data.checkedItatusId\">\n                        <mat-option *ngFor=\"let id of comboBoxesDataCheckedStatus\" [value]=\"id.checked_status_id\" (onSelectionChange)=\"checkedStatusId($event,id)\" >{{id.checked_status}}\n                        </mat-option>\n                      </mat-select>\n                      <select style=\"width: 90px;\" matNativeControl [disabled]=\"data.checkedItatusId=='4'\" name=\"checked_status_id\" id=\"checked_status_id\"  required>\n                          <option  *ngFor=\"let id of comboBoxesDataCheckedStatus\" selected=\"id.checked_status_id\" [value]=\"id.checked_status_id\" (onSelectionChange)=\"checkedStatusId($event,id)\">{{id.checked_status}}</option>\n                        </select> -->\n<!-- <mat-select style=\"width: 100px\" [disabled]=\"data.checkedItatusId=='4'\" name=\"checked_status_id\" id=\"checked_status_id\" [value]=\"data.checkedItatusId\">\n                            <mat-option *ngFor=\"let id of comboBoxesDataCheckedStatus\" [value]=\"id.checked_status_id\" (onSelectionChange)=\"checkedStatusId($event,id)\" >{{id.checked_status}}\n                            </mat-option>\n                          </mat-select>\n                </td>\n                <td class=\"text-center\"  >\n                    <ng-container  *ngIf=\"checkOut.checkedItatusId=='4'\" >\n                          <div *ngIf=\"data.checkedItatusId!='4'\">\n                            <input  [disabled] =\"data.amountPaid && data.checkedItatusId=='4'\" style=\"text-align: left;width: 68px;\" matInput type=\"text\" name=\"amountPaid\" [(ngModel)]=\"amountPaid[i]\"\n                              pattern=\"^[a-zA-Z0-9- ]{1,30}$\" required maxlength=\"6\" (keydown)=\"check($event)\" />\n                      </div>\n                    </ng-container>\n                   <ng-container *ngIf=\"data.checkedItatusId=='4'\">\n                    <span *ngIf='data.amountPaid!=null'>{{data.amountPaid}}</span> \n                   </ng-container>\n                   <ng-container *ngIf=\"data.checkedItatusId=='4' && amountPaid==null\">\n                        <span *ngIf='data.amountPaid==null'></span>\n                     </ng-container>\n                </td>\n\n                <td class=\"text-center\"  >\n                        <button [disabled]=\"data.amountPaid || data.checkedItatusId=='4'\"  class=\"edit-button\" (click)=\"submit(i,data)\" mat-button mat-raised-button>Submit</button>\n                </td>\n            </tr>\n        </tbody>\n      </table>\n      <pagination-controls  class=\"my-pagination\" (pageChange)=\"p = $event\"  maxSize=\"9\"\n                            directionLinks=\"true\"\n                            autoHide=\"true\"\n                            responsive=\"true\"\n                            previousLabel=\"Previous\"\n                            nextLabel=\"Next\"\n                            screenReaderPaginationLabel=\"Pagination\"\n                            screenReaderPageLabel=\"page\"\n     ></pagination-controls>\n    </div>\n</section> -->\n\n<!-- <--   Ngx Data Table -->\n<!-- <div\n  fxLayout\n  fxLayout.xs=\"column\"\n  fxLayoutAlign=\"left\"\n  fxLayoutGap=\"10px\"\n  fxLayoutGap.xs=\"0\"\n>\n  <div class=\"item item-1\" fxFlex=\"50%\">\n    <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\" />\n    <h1>Checkout Books</h1>\n  </div>\n  <mat-select\n    placeholder=\"Select Status\"\n    name=\"checked_status_id\"\n    id=\"checked_status_id\"\n    class=\"fliter-box\"\n  >\n    <mat-option\n      *ngFor=\"let id of comboBoxesDataCheckedStatus\"\n      [value]=\"id.checked_status_id\"\n      (click)=\"applyFilter(id.checked_status_id)\"\n      >{{ id.checked_status }}\n    </mat-option>\n  </mat-select>\n</div>\n<ngx-datatable\n  class=\"material striped\"\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"50\"\n  [limit]=\"5\"\n  [scrollbarH]=\"true\"\n  >>\n  <ngx-datatable-column name=\"invId\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{ row.inventoryId }}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"orderId\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{ row.orderId }}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"bookName\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <div class=\"ellipses\" title=\"{{ row.title }}\">\n        {{ row.title }}\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"userName\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <div class=\"ellipses\" title=\"{{ row.orderId }}\">\n        {{ row.orderId }}\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"checkOutDate\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{ row.checkedOutDate | date: \"dd/MM/yyyy\" }}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"DueDate\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <span *ngIf=\"row.expReturnDate != null\">{{\n        row.expReturnDate | date: \"dd/MM/yyyy\"\n      }}</span>\n      <span *ngIf=\"row.expReturnDate == null\"> -</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"dueAmt\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{ row.totalAmount }}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"returnDate\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <span *ngIf=\"row.returnedDate != null\"\n        >{{ row.returnedDate | date: \"dd/MM/yyyy\" }}\n      </span>\n      <span *ngIf=\"row.returnedDate == null\"> -</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"status\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <mat-select [disabled]=\"row.checkedItatusId=='4'\" name=\"checked_status_id\" id=\"checked_status_id\" [value]=\"row.checkedItatusId\">\n          <mat-option *ngFor=\"let id of comboBoxesDataCheckedStatus\" [value]=\"id.checked_status_id\" (onSelectionChange)=\"checkedStatusId($event,id)\" >{{id.checked_status}}\n          </mat-option>\n        </mat-select>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"totalAmtPaid\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <ng-container *ngIf=\"row.checkedItatusId=='4'\">\n            <mat-form-field class=\"mff\">\n                <input [disabled] =\"row.amountPaid && row.checkedItatusId=='4'\" style=\"text-align: left;\" matInput type=\"text\" name=\"amountPaid\" [(ngModel)]=\"amountPaid[i]\"\n                  pattern=\"^[a-zA-Z0-9- ]{1,30}$\" required maxlength=\"6\" (keydown)=\"check($event)\" />\n            </mat-form-field>\n        </ng-container>\n       <ng-container *ngIf=\"row.checkedItatusId=='4'\">\n        <span *ngIf='row.amountPaid!=null'>{{row.amountPaid}}</span> \n          <span *ngIf='row.amountPaid==null'>-</span>\n       </ng-container>    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"actions\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <button [disabled]=\"row.amountPaid || row.checkedItatusId=='4'\"  class=\"edit-button\" (click)=\"submit(i,row)\" >Submit</button>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable> -->\n"

/***/ }),

/***/ "./src/app/Components/check-out-books/check-out-books.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Components/check-out-books/check-out-books.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 50%;\n  padding-left: 5px; }\n\n.mff {\n  width: 46px;\n  padding-left: 5px; }\n\n.fliter-box {\n  border: 1px solid #c6c6c6;\n  height: 40px;\n  padding: 10px;\n  width: 400px;\n  /* float: right; */\n  margin-left: auto;\n  margin-top: 10px; }\n\n.tooltip-inner {\n  white-space: pre-wrap; }\n\n.mat-tooltip {\n  white-space: pre-line; }\n\n.some-container .tooltip .tooltip-inner {\n  width: 7em;\n  white-space: normal; }\n\n.wider-tooltip {\n  width: 1300px; }\n\n.wider-tooltip .tooltip-inner {\n    max-width: content; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.ellipses {\n  white-space: nowrap;\n  width: 8em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  font-size: 16px;\n  transition: 0.3s;\n  transition: 0.2s;\n  /* color: black; */\n  font-size: 1.0em;\n  font-weight: 300; }\n\n.edit-btn {\n  height: 31px;\n  background-image: linear-gradient(to bottom, #c694f9, #ab64f4);\n  color: #fff;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2NoZWNrLW91dC1ib29rcy9jaGVjay1vdXQtYm9va3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsaUJBQ0osRUFBQTs7QUFDQTtFQUNJLFdBQVc7RUFDWCxpQkFDSixFQUFBOztBQUdBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQixFQUFBOztBQUdyQjtFQUNJLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhLEVBQUE7O0FBRGY7SUFHSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxxSEFBeUc7RUFDekcsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBS2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsbUJBQW1CO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBRXZCLGVBQWU7RUFFZixlQUFlO0VBQ2YsZ0JBQWdCO0VBRWhCLGdCQUFnQjtFQUNoQixrQkFBQTtFQUNBLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFRaEI7RUFFRSxZQUFZO0VBQ1osOERBQThEO0VBQzlELFdBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2hlY2stb3V0LWJvb2tzL2NoZWNrLW91dC1ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHhcbn1cbi5tZmZ7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHggXG59XG5cblxuLmZsaXRlci1ib3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udG9vbHRpcC1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubWF0LXRvb2x0aXAge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB9XG5cbiAgICAuc29tZS1jb250YWluZXIgLnRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xuICAgICAgICB3aWR0aDogN2VtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICAud2lkZXItdG9vbHRpcCB7XG4gICAgICAgIHdpZHRoOiAxMzAwcHg7XG4gICAgICAgIC50b29sdGlwLWlubmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnVzZXItc3RhdHVzLXRhYmxle1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgfVxuXG4gICAgICB0aHtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRkLC5mYXtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAubm8tZGF0YXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbiAgICAgIFxuICAgICAgfVxuICAgICAgLmVsbGlwc2VzIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogOGVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgICAvLyAuZWxsaXBzZXM6aG92ZXIge29wYWNpdHk6IDF9XG5cbiAgICAvLyBtYXQtZm9ybS1maWVsZHtcbiAgICAvLyAgIHdpZHRoOjE1cHg7XG4gICAgLy8gfVxuXG4gICAgLmVkaXQtYnRuIHtcbiAgICAgIC8vIHdpZHRoOiA5MXB4O1xuICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2M2OTRmOSwgI2FiNjRmNCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/Components/check-out-books/check-out-books.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/check-out-books/check-out-books.component.ts ***!
  \*************************************************************************/
/*! exports provided: CheckOutBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutBooksComponent", function() { return CheckOutBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_check_out_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/check-out-book.service */ "./src/app/services/check-out-book.service.ts");





var CheckOutBooksComponent = /** @class */ (function () {
    // columns = [
    //   { name: "invId" },
    //   { name: "orderId" },
    //   { name: "bookName" },
    //   { name: "userName" },
    //   { name: "checkOutDate" },
    //   { name: "dueDate" },
    //   { name: "dueAmt" },
    //   { name: "returnDate" },
    //   { name: "status" },
    //   { name: "totalAmtPaid" },
    //   { name: "actions" }
    // ];
    // foods = [
    //   { value: "steak-0", viewValue: "Steak" },
    //   { value: "pizza-1", viewValue: "Pizza" },
    //   { value: "tacos-2", viewValue: "Tacos" }
    // ];
    function CheckOutBooksComponent(checkOutBooksSerive, toastr) {
        this.checkOutBooksSerive = checkOutBooksSerive;
        this.toastr = toastr;
        this.displayedColumns = [
            "invId",
            "orderId",
            "bookName",
            "userName",
            "checkOutDate",
            "dueDate",
            "dueAmt",
            "returnDate",
            "status",
            "totalAmtPaid",
            "actions"
        ];
        this.checkOut = {};
        this.amountPaid = [];
        this.allowedChars = new Set("0123456789".split("").map(function (c) { return c.charCodeAt(0); }));
        this.cId = 1;
        this.disableButton = false;
        this.disableSubmit = false;
    }
    CheckOutBooksComponent.prototype.ngOnInit = function () {
        this.loadUsersList();
        this.loadComboCheckedStatus();
        localStorage.setItem("cobC", "false");
    };
    CheckOutBooksComponent.prototype.loadUsersList = function () {
        var _this = this;
        this.checkOutBooksSerive.checkOutBooksList().subscribe(function (data) {
            _this.ELEMENT_DATA = data.results;
            _this.dropDownSearch = _this.ELEMENT_DATA.filter(function (item) { return item.checkedItatusId === _this.cId; });
            console.log(_this.dropDownSearch);
            _this.loadUsersListSearch(_this.dropDownSearch);
            // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
            // this.dataSource.paginator = this.paginator;
        });
    };
    CheckOutBooksComponent.prototype.loadComboCheckedStatus = function () {
        var _this = this;
        var body = ["bookCheckedStatus"];
        this.checkOutBooksSerive.loadComboCheckedStatus(body).subscribe(function (data) {
            if (data) {
                _this.comboBoxesDataCheckedStatus = data.result.bookCheckedStatus;
            }
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    CheckOutBooksComponent.prototype.loadUsersListSearch = function (search) {
        // this.checkOutBooksSerive.checkOutBooksList().subscribe((data: any) => {
        //   this.ELEMENT_DATA = data.results;
        //   this.dataSource = new MatTableDataSource(search);
        //   this.dataSource.paginator = this.paginator;
        // });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](search);
        this.dataSource.paginator = this.paginator;
    };
    CheckOutBooksComponent.prototype.loadAll = function () {
        var _this = this;
        this.checkOutBooksSerive.checkOutBooksList().subscribe(function (data) {
            _this.ELEMENT_DATA = data.results;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    // updateBookStatus(index, objData, id): void {
    //   const obj = {
    //     checkoutId: objData.checkoutId,
    //     orderId: objData.orderId,
    //     bookId: objData.bookId,
    //     inventoryId: objData.inventoryId,
    //     userId: objData.userId,
    //     amountPaid: this.amountPaid[index],
    //     createdBy: objData.createdBy,
    //     checkedItatusId: this.checkOut.checkedItatusId
    //   };
    //   this.checkOutBooksSerive.updateBookStatus(obj).subscribe((data: any) => {
    //     this.ELEMENT_DATA = data;
    //     this.toastr.success("Status");
    //     this.loadUsersList();
    //   }),
    //     err => {
    //       this.toastr.error(err.error.message);
    //     };
    // }
    CheckOutBooksComponent.prototype.check = function (event) {
        // 31 and below are control keys, don't block them.
        if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
            // alert(event.keyCode)
            if (!((event.keyCode > 95 && event.keyCode < 106) ||
                event.keyCode === 37 ||
                event.keyCode === 39)) {
                event.preventDefault();
            }
        }
    };
    CheckOutBooksComponent.prototype.applyFilter = function (filterValue) {
        this.disableSubmit = true;
        console.log(filterValue);
        this.dropDownSearch = this.ELEMENT_DATA.filter(function (item) { return item.checkedItatusId === filterValue; });
        console.log(this.dropDownSearch);
        this.loadUsersListSearch(this.dropDownSearch);
    };
    // submit(index, objData) {
    //   if (this.checkOut.checkedItatusId == 1) {
    //     this.cId = 1;
    //   } else if (this.checkOut.checkedItatusId == 2) {
    //     this.cId = 2;
    //   } else if (this.checkOut.checkedItatusId == 3) {
    //     this.cId = 3;
    //   } else if (this.checkOut.checkedItatusId == 4) {
    //     this.cId = 4;
    //   }
    //   const obj = {
    //     checkoutId: objData.checkoutId,
    //     orderId: objData.orderId,
    //     bookId: objData.bookId,
    //     inventoryId: objData.inventoryId,
    //     userId: objData.userId,
    //     amountPaid: this.amountPaid[index],
    //     createdBy: objData.createdBy,
    //     checkedItatusId: this.cId
    //   };
    //   this.checkOutBooksSerive.updateBookStatus(obj).subscribe((data: any) => {
    //     this.ELEMENT_DATA = data;
    //     this.toastr.success("Status Updated Successfully");
    //     this.amountPaid = [];
    //     this.comboBoxesDataCheckedStatus = [];
    //     this.disableButton = true;
    //     this.loadUsersList();
    //     // this.applyFilter(this.cId);
    //     // this.loadUsersListSearch();
    //     this.loadComboCheckedStatus();
    //   }),
    //     err => {
    //       this.toastr.error(err.error.message);
    //     };
    // }
    CheckOutBooksComponent.prototype.submit = function (index, objData) {
        var _this = this;
        if (objData.checkedItatusId == 1) {
            this.cId = 1;
        }
        else if (objData.checkedItatusId == 2) {
            this.cId = 2;
        }
        else if (objData.checkedItatusId == 3) {
            this.cId = 3;
        }
        else if (objData.checkedItatusId == 4) {
            this.cId = 4;
        }
        var obj = {
            checkoutId: objData.checkoutId,
            orderId: objData.orderId,
            bookId: objData.bookId,
            inventoryId: objData.inventoryId,
            userId: objData.userId,
            amountPaid: this.amountPaid[index],
            createdBy: objData.createdBy,
            checkedItatusId: objData.checkedItatusId + 1
        };
        this.checkOutBooksSerive.updateBookStatus(obj).subscribe(function (data) {
            _this.ELEMENT_DATA = data;
            _this.toastr.success("Status Updated Successfully");
            _this.amountPaid = [];
            _this.comboBoxesDataCheckedStatus = [];
            _this.disableButton = true;
            _this.loadUsersList();
            // this.applyFilter(this.cId);
            // this.loadUsersListSearch();
            _this.loadComboCheckedStatus();
        }),
            function (err) {
                _this.toastr.error(err.error.message);
            };
    };
    CheckOutBooksComponent.prototype.checkedStatusId = function ($event, id, index) {
        this.disableSubmit = false;
        this.disableButton = false;
        // if ($event.source.selected) {
        this.checkOut.checkedItatusId = id.checked_status_id;
        this.selectIndex = index;
        // console.log(this.checkOut.checkedItatusId, index, this.selectIndex);
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CheckOutBooksComponent.prototype, "paginator", void 0);
    CheckOutBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-check-out-books",
            template: __webpack_require__(/*! ./check-out-books.component.html */ "./src/app/Components/check-out-books/check-out-books.component.html"),
            styles: [__webpack_require__(/*! ./check-out-books.component.scss */ "./src/app/Components/check-out-books/check-out-books.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_4__["CheckOutBookService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CheckOutBooksComponent);
    return CheckOutBooksComponent;
}());



/***/ }),

/***/ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/comic-books-view-all/comic-books-view-all.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardList\">\n  <div *ngFor=\"let book of comicsRec\">\n    <mat-card\n      class=\"cardListItem example-card flex-item mat-elevation-z8\"\n      [routerLink]=\"['/book-detail', book.bookId]\"\n      style=\"cursor: pointer \"\n    >\n\n    <mat-card-content>\n        <img\n          src=\"{{ book.imagesUrl1 }}\"\n          alt=\"\"\n          width=\"78%\"\n          height=\"178px\"\n          onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n          (click)=\"checkC()\"\n        />\n      </mat-card-content>\n      <mat-card-header>\n        <!-- <div  class=\"example-header-image\"></div> -->\n        <mat-card-title *ngIf=\"book.title != null; else noTitle\">\n          <span\n            class=\"ellipses\"\n            tooltip=\"{{ book.title }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n          >\n            {{ book.title | shorten: 15:\"...\" }}\n          </span>\n        </mat-card-title>\n        <mat-card-subtitle *ngIf=\"book.author != null; else noSubTitle\">\n          <span\n            class=\"ellipses\"\n            tooltip=\"{{ book.author }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n          >\n            {{ book.author | shorten: 10:\"...\" }}\n          </span>\n        </mat-card-subtitle>\n        <ng-template #noTitle>NA</ng-template>\n        <ng-template #noSubTitle>NA</ng-template>\n      </mat-card-header>\n\n      \n      <mat-card-actions> </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/comic-books-view-all/comic-books-view-all.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  /* max-width: 300px; */\n  /* max-height: 278px; */\n  width: 213px;\n  height: 260px;\n  margin-bottom: 20px; }\n\n.cardList {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start; }\n\n/* Column Gap */\n\n.cardList > * {\n  box-sizing: border-box; }\n\n.cardList > *:not(:last-child) {\n  margin-right: 32px; }\n\n/* Item sizing */\n\n.cardListItem {\n  -webkit-flex: 0 1 calc(33.3% - 32px);\n          flex: 0 1 calc(33.3% - 32px); }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2NvbWljLWJvb2tzLXZpZXctYWxsL2NvbWljLWJvb2tzLXZpZXctYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDSix1QkFBQTtFQUNBLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRW5CO0VBQ0EscUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1QkFBZTtVQUFmLGVBQWU7RUFDZixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRTNCLGVBQUE7O0FBQ0E7RUFDQSxzQkFBc0IsRUFBQTs7QUFFdEI7RUFDQSxrQkFBa0IsRUFBQTs7QUFFbEIsZ0JBQUE7O0FBQ0E7RUFDQSxvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBSTVCO0VBRUksb0NBQWtDO0VBQ2xDLDJEQUF5RDtFQUN6RCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY29taWMtYm9va3Mtdmlldy1hbGwvY29taWMtYm9va3Mtdmlldy1hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICAvKiBtYXgtd2lkdGg6IDMwMHB4OyAqL1xuLyogbWF4LWhlaWdodDogMjc4cHg7ICovXG53aWR0aDogMjEzcHg7XG5oZWlnaHQ6IDI2MHB4O1xubWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jYXJkTGlzdCB7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmZsZXgtd3JhcDogd3JhcDtcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi8qIENvbHVtbiBHYXAgKi9cbi5jYXJkTGlzdCA+ICoge1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jYXJkTGlzdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG5tYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4vKiBJdGVtIHNpemluZyAqL1xuLmNhcmRMaXN0SXRlbSB7XG5mbGV4OiAwIDEgY2FsYygzMy4zJSAtIDMycHgpO1xufVxuXG5cbi5mbGV4LWl0ZW0ge1xuJjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDlweCAxMnB4IDFweCByZ2JhKDUwLCA1MCwgNTAsIC4yKSFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XG4gICAgei1pbmRleDogOTtcbn1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/comic-books-view-all/comic-books-view-all.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ComicBooksViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicBooksViewAllComponent", function() { return ComicBooksViewAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ComicBooksViewAllComponent = /** @class */ (function () {
    function ComicBooksViewAllComponent(bookservice, router) {
        this.bookservice = bookservice;
        this.router = router;
        this.ELEMENT_DATA = [];
        this.comicsRec = [];
    }
    ComicBooksViewAllComponent.prototype.ngOnInit = function () {
        this.loadComicBooks();
    };
    ComicBooksViewAllComponent.prototype.loadComicBooks = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (data) {
            // console.log(data);
            _this.ELEMENT_DATA = data.resultsMap.books;
            for (var i = 0; i < _this.ELEMENT_DATA.length; i++) {
                var element = _this.ELEMENT_DATA[i];
                if (element.genreId == 2) {
                    _this.comicsRec.push(element);
                }
            }
        });
    };
    ComicBooksViewAllComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
        localStorage.setItem("isHome", "false");
    };
    ComicBooksViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comic-books-view-all",
            template: __webpack_require__(/*! ./comic-books-view-all.component.html */ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.html"),
            styles: [__webpack_require__(/*! ./comic-books-view-all.component.scss */ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ComicBooksViewAllComponent);
    return ComicBooksViewAllComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar class=\"main-name\">\n            <img src=\"../../../assets/images/wiseReads.svg\" style=\"width: 300px;height: 44px;    box-shadow: none;cursor: pointer;\" routerLink=\"/\">\n    </mat-toolbar>\n    <mat-nav-list class=\"menu-items\">\n      <a mat-list-item style=\"cursor: pointer\" routerLink=\"/cards\" [routerLinkActive]=\"['is-active']\">Dashboard</a>\n      \n      <!-- <a mat-list-item >Recommended Books</a> -->\n      <div  *ngIf=\"isUser == 4\">\n\n            <!-- <a mat-list-item  style=\"cursor: pointer\" routerLink=\"/book_list\" [routerLinkActive]=\"['is-active']\">Book List</a> -->\n\n<!--             <a mat-list-item  style=\"cursor: pointer\" routerLink=\"/book_list\" [routerLinkActive]=\"['is-active']\">Book List</a> -->\n            <a mat-list-item routerLink=\"/app-book-list-cards\" [routerLinkActive]=\"['is-active']\">Book List</a>\n\n            <!-- <a mat-list-item style=\"cursor: pointer\" (click)=\"userbooks()\" [routerLinkActive]=\"['is-active']\">Checkout & Checkin List</a> -->\n\n      </div>\n    \n      <div *ngIf=\"isUser == 2 || isUser == 1\">\n            <a mat-list-item style=\"cursor: pointer\" routerLink=\"/book_list\" [routerLinkActive]=\"['is-active']\">Book List</a>\n            <!-- <a mat-list-item routerLink=\"/app-book-list-cards\" [routerLinkActive]=\"['is-active']\">Book List Cards</a> -->\n\n<!--             <a mat-list-item routerLink=\"/app-book-list-cards\" [routerLinkActive]=\"['is-active']\">Book List</a>\n -->\n            <a mat-list-item  style=\"cursor: pointer\" routerLink=\"/inventory\" [routerLinkActive]=\"['is-active']\">Inventory</a>\n            \n            <a  mat-list-item style=\"cursor: pointer\" routerLink=\"/checkout-books\" [routerLinkActive]=\"['is-active']\">Checkout & Checkin List</a>\n\n            <!-- <a mat-list-item >Owners</a> -->\n\n            <a mat-list-item routerLink=\"/app-users-list\" [routerLinkActive]=\"['is-active']\">Users</a>\n            <!-- <a mat-list-item routerLink=\"/app-assign-roles\" [routerLinkActive]=\"['is-active']\">Assign Roles</a> -->\n\n            <!-- <a mat-list-item class=\"mt-4\" style=\"cursor: pointer\" routerLink=\"/add-book\" [routerLinkActive]=\"['is-active']\">\n                <button class=\"add-bookbtn\" mat-button mat-raised-button>Add Books</button>\n            </a> -->\n      </div>\n      <mat-expansion-panel  [expanded]=\"allExpandState\" (opened)=\"allExpandState = true\" (closed)=\"allExpandState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n           My books\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n      \n        <a mat-list-item style=\"cursor: pointer\" [routerLink]=\"[ '/book-status', userID, 1]\" (click)=\"tabChange(1)\" [routerLinkActive]=\"['is-active']\" >To be delivered</a>\n\n        <a mat-list-item  style=\"cursor: pointer\" [routerLink]=\"[ '/book-status', userID, 2]\" (click)=\"tabChange(2)\" [routerLinkActive]=\"['is-active']\" >Delivered</a>\n        \n        <a mat-list-item style=\"cursor: pointer\" [routerLink]=\"[ '/book-status', userID, 3]\" (click)=\"tabChange(3)\" [routerLinkActive]=\"['is-active']\" >Ready to pickup</a>\n      \n      </mat-expansion-panel>\n      <a mat-list-item style=\"cursor: pointer\" [routerLink]=\"[ '/book-status', userID, 4]\" (click)=\"tabChange(4)\" [routerLinkActive]=\"['is-active']\">My History</a>\n     \n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar class=\"menu-bar\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n     \n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\"\n      fxLayoutGap.xs=\"0\" style=\"width: 100vw;\">\n           \n            <div fxFlex=\"30%\">\n                   \n                <form>\n                    <div>\n                        <div class=\"search-bar\">\n                                <input class=\"search-input\" type=\"text\" placeholder=\"Search Book / Genre / Author\"\n                                    [formControl]=\"searchTerm\" \n                                    #box (keyup)=\"onKeyUp(box)\"\n                                    [matAutocomplete]=\"auto\" \n                                >  \n                                <i class=\"fa fa-search\"></i>\n\n                        </div>\n                       \n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                                \n                                <ng-container *ngIf=\"myBooks.length > 0\">\n                                    <mat-option *ngFor=\"let books of myBooks\" [value]=\"books.value\"  [routerLink]=\"['/book-detail', books.bookId]\" (click)=\"checkC()\">\n                                            {{ books.title }}\n                                    </mat-option>\n                                    \n                                </ng-container>\n                                <ng-container *ngIf=\"myBooks.length == 0 && box.value.length >= 3\" >\n                                        <mat-option class=\"option-result\">\n                                           <p class=\"noresult\">No Result Found</p>\n                                        </mat-option> \n                                </ng-container>\n                                \n                        </mat-autocomplete>\n              \n                    </div>\n                </form>\n            </div>\n\n            <div class=\"logout-section\" fxFlex=\"70%\">\n                    <div class=\"float-right\">\n\n                    <!-- <div class=\"w3-dropdown-hover w3-right\">\n                            <button class=\"w3-black\">{{name}}</button>\n                            <div class=\"w3-dropdown-content  w3-border\" style=\"right:0\">\n                              <a (click)=\"logOut()\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n                              <a href=\"#\" class=\"w3-bar-item w3-button\">Link 2</a>\n                              <a href=\"#\" class=\"w3-bar-item w3-button\">Link 3</a>\n                            </div>\n                          </div> -->\n                          <!-- <section class=\"main\">\n                                <div class=\"wrapper-demo\">\n                                    <div id=\"dd\" class=\"wrapper-dropdown-5\" tabindex=\"1\">John Doe\n                                        <ul class=\"dropdown\">\n                                            <li><a href=\"#\"><i class=\"icon-user\"></i>Profile</a></li>\n                                            <li><a href=\"#\"><i class=\"icon-cog\"></i>Settings</a></li>\n                                            <li><a href=\"#\"><i class=\"icon-remove\"></i>Log out</a></li>\n                                        </ul>\n                                    </div>\n                                ​</div>\n                            </section> -->\n                            <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"menu\" aria-label=\"Example icon-button with a menu\">\n                                    <mat-icon>more_vert</mat-icon>\n                                  </button>\n                                  <mat-menu #menu=\"matMenu\">\n                                    <button mat-menu-item>\n                                      <mat-icon>dialpad</mat-icon>\n                                      <span>Redial</span>\n                                    </button>\n                                    <button mat-menu-item disabled>\n                                      <mat-icon>voicemail</mat-icon>\n                                      <span>Check voice mail</span>\n                                    </button>\n                                    <button mat-menu-item>\n                                      <mat-icon>notifications_off</mat-icon>\n                                      <span>Disable alerts</span>\n                                    </button>\n                                  </mat-menu> -->\n                                  <!-- <a class=\"float-right\" (click)=\"logOut()\" mat-list-item routerLinkActive=\"active\" >\n                    <i class=\"fa fa-sign-out\"></i> <span>Logout</span>\n                </a> -->\n\n\n\n                <div class=\"btn-group\" dropdown>\n                    <div id=\"button-basic\" dropdownToggle style=\"cursor: pointer\" class=\"btn  dropdown-toggle\"\n                            aria-controls=\"dropdown-basic\"> \n                            <!-- <img mat-card-avatar src=\"../../../assets/images/support.png\" alt=\"img\"> -->\n                     <b >{{name}}</b>  <span class=\"caret\"></span>\n                </div>\n                    <ul id=\"dropdown-alignment\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\"\n                    role=\"menu\" aria-labelledby=\"button-alignment\">\n                      <!-- <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                      <li class=\"divider dropdown-divider\"></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                        <a class=\"dropdown-item\" (click)=\"logOut()\" mat-list-item routerLinkActive=\"active\" >\n                            <i class=\"fa fa-sign-out\"></i> <span>Logout</span>\n                        </a>\n                      </li> -->\n                      <li role=\"menuitem\">\n                      \n                        <a class=\"dropdown-item\" (click)=\"logOut()\" mat-list-item routerLinkActive=\"active\" >\n                            <i class=\"fa fa-sign-out\"></i> <span>Logout</span>\n                        </a>\n                      </li>\n\n                      \n                    </ul>\n                  </div>\n\n\n\n                    </div>\n                \n            </div>\n    </div>\n        </mat-toolbar>\n        <div class=\"p-5\" class=\"main-container\">\n            <router-outlet></router-outlet>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:focus, textarea:focus, select:focus {\n  outline: none; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 19vw; }\n\n@media screen and (max-width: 1024px) {\n    .sidenav {\n      width: 280px; } }\n\n@media screen and (max-width: 600px) {\n    .sidenav {\n      width: 300px; } }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.menu-items {\n  margin-left: 1vw;\n  margin-top: 1vh; }\n\n.main-name {\n  color: #3bccf6;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  font-size: 35px;\n  font-weight: 900; }\n\n.menu-bar {\n  background-color: #ffff;\n  width: 100%; }\n\n.fa-search {\n  font-size: 25px;\n  color: #9f9f9f;\n  padding-left: 6px;\n  padding-top: 4px; }\n\n.mat-toolbar-row,\n.mat-toolbar-single-row {\n  height: 100px; }\n\n::-webkit-input-placeholder {\n  color: #9f9f9f;\n  opacity: 1;\n  /* Firefox */ }\n\n::-ms-input-placeholder {\n  color: #9f9f9f;\n  opacity: 1;\n  /* Firefox */ }\n\n::placeholder {\n  color: #9f9f9f;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #9f9f9f; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #9f9f9f; }\n\ntextarea:focus,\ninput:focus {\n  outline: none; }\n\n.is-active {\n  color: #3bccf6;\n  font-weight: 600; }\n\n.mat-nav-list a.active {\n  background: blue; }\n\n.add-bookbtn {\n  width: 240px;\n  height: 45px;\n  border-radius: 5px;\n  background-image: linear-gradient(to bottom, #6fe3ff, #2fc7f5);\n  color: #ffff;\n  font-size: 18px;\n  font-weight: 500; }\n\n.top-header {\n  display: -webkit-flex;\n  display: flex;\n  width: 75vw; }\n\n.top-header .search {\n    margin-right: auto; }\n\n.top-header .logo-set {\n    margin-left: auto; }\n\n.top-header .logo-set .logout {\n      font-size: 16px;\n      cursor: pointer; }\n\n.top-header .logo-set .logout i {\n        margin-right: 7px; }\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 70%;\n  border-radius: 20% !important; }\n\n::ng-deep .cdk-overlay-pane {\n  /* Do you changes here */\n  min-width: 50vw;\n  min-height: 100vh; }\n\n.search-input {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 16px;\n  padding: 8px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-radius: 20px;\n  background-color: #efefef; }\n\n.noresult {\n  position: absolute;\n  left: 0;\n  display: table;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  text-align: center; }\n\n.option-result {\n  position: unset !important; }\n\n.logout-section {\n  margin-left: auto; }\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none; }\n\n.mat-expansion-panel-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  font-size: 16px;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0px 40px 0px 15px;\n  border-radius: inherit; }\n\n.menu {\n  height: 160px; }\n\n.search-bar {\n  position: relative; }\n\n.search-bar .fa {\n    font-size: 18px;\n    font-weight: 300;\n    color: #4b4b4b;\n    top: 10px;\n    margin-left: -33px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVcsRUFBQTs7QUFDWDtJQUZKO01BR1EsWUFBVyxFQUFBLEVBS2xCOztBQUhHO0lBTEo7TUFNUSxZQUFXLEVBQUEsRUFFbEI7O0FBRUQ7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxxQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7O0VBRUksYUFBYSxFQUFBOztBQUlqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBQSxFQUFhOztBQUhqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBQSxFQUFhOztBQUhqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBQSxFQUFhOztBQUdqQjtFQUNJLDRCQUFBO0VBQ0EsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFBO0VBQ0EsY0FBYyxFQUFBOztBQUdsQjs7RUFFSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVUsRUFBQTs7QUFGZDtJQUlRLGtCQUFpQixFQUFBOztBQUp6QjtJQU9RLGlCQUFnQixFQUFBOztBQVB4QjtNQVNvQixlQUFlO01BQ2YsZUFBZSxFQUFBOztBQVZuQztRQVl3QixpQkFBaUIsRUFBQTs7QUFtQnpDO0VBRVEsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUdYLDZCQUE2QixFQUFBOztBQUlyQztFQUNJLHdCQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFpQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFFZCxtQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxjQUFjO0VBQ2QsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFHZCxTQUFTO0lBQ1Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4uc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICAgIHdpZHRoOiAxOXZ3O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAgICAgd2lkdGg6MjgwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICB9XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubWVudS1pdGVtcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5tYWluLW5hbWUge1xuICAgIGNvbG9yOiAjM2JjY2Y2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLm1lbnUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZhLXNlYXJjaCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gIH1cblxuXG4ubWF0LXRvb2xiYXItcm93LFxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzlmOWY5ZjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8qIEZpcmVmb3ggKi9cbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICBjb2xvcjogIzlmOWY5Zjtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgY29sb3I6ICM5ZjlmOWY7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pcy1hY3RpdmUge1xuICAgIGNvbG9yOiAjM2JjY2Y2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYXQtbmF2LWxpc3QgYS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5hZGQtYm9va2J0biB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZmZTNmZiwgIzJmYzdmNSk7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnRvcC1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDo3NXZ3O1xuICAgIC5zZWFyY2h7XG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIH1cbiAgICAubG9nby1zZXR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgICAgIC5sb2dvdXQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICB9XG59XG4vLyAubG9nby1zZXQge1xuLy8gICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgIC8vIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIFxuLy8gICAgIC5sb2dvdXQge1xuLy8gICAgICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgaSB7XG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDg4JTtcbi8vICAgICB9XG4vLyB9XG5cbi5wcm9maWxlLXVzZXJwaWMge1xuICAgIGltZyB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvKiBEbyB5b3UgY2hhbmdlcyBoZXJlICovXG4gICAgICBtaW4td2lkdGg6NTB2dztcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2VhcmNoLWlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6OHB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzlmOWY5ZjtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlmOWY5ZjtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcblxufVxuLm5vcmVzdWx0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9wdGlvbi1yZXN1bHR7XG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvdXQtc2VjdGlvbntcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xufVxuXG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggNDBweCAwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG4ubWVudXtcbiAgICBoZWlnaHQ6IDE2MHB4XG59XG5cbi5zZWFyY2gtYmFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZmEge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjNGI0YjRiO1xuICAgICAgICAvLyByaWdodDogLTI0cHg7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMzcHg7XG4gICAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver, router, searchService, loginService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.searchService = searchService;
        this.loginService = loginService;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.myBooks = [];
        this.allExpandState = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
    }
    DashboardComponent.prototype.onKeyUp = function (boxInput) {
        var length = boxInput.value.length;
        console.log(length);
    };
    DashboardComponent.prototype.logOut = function () {
        this.loginService.logout();
        localStorage.clear();
        this.router.navigate(['/home']);
    };
    // to_be_delivered(){
    //   this.router.navigate([ '/book-status', this.userID, 1]);
    // }
    // delivered(){
    //   this.router.navigate([ '/book-status', this.userID, 2])
    // }
    // books_ready_to_pickup(){
    //   this.router.navigate([ '/book-status', this.userID, 3])
    // }
    DashboardComponent.prototype.userbooks = function () {
        // alert(this.userID)
        this.router.navigate(['/user-book-details', this.userID]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = localStorage.getItem('username');
        this.isUser = localStorage.getItem('roleId');
        this.userID = localStorage.getItem('UserId');
        //  search
        this.searchTerm.valueChanges.subscribe(function (term) {
            if (term && term !== '' && term.length >= 3) {
                _this.searchService.search(term).subscribe(function (data) {
                    _this.myBooks = data.resultsMap.books;
                    // console.log(data[0].BookName);
                    console.log("myBooks", _this.myBooks);
                });
            }
            else {
                _this.myBooks = [];
            }
        });
    };
    DashboardComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
    };
    DashboardComponent.prototype.tabChange = function (tabIndex) {
        localStorage.setItem("id2", tabIndex);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/Components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Components/faq/faq.component.html":
/*!***************************************************!*\
  !*** ./src/app/Components/faq/faq.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-header></app-header>\n\n  <div class=\"faq_content\">\n    <br />\n    <h2 style=\"text-align: center\">Frequently asked Questions</h2>\n\n    <h5>How do I create an account on the wisereads portal?</h5>\n    <p>\n      Once you entered the wisreads portal. Click on the register at the right\n      hand corner of the home page. Fill in the required details and click on\n      register button. Your account has been created.\n    </p>\n\n    <h5>How can I login to my account?</h5>\n    <p>\n      Please click on &quot;Login&quot; at the top right hand corner of the home\n      page. Now enter your registered email ID and Password and press login\n      button.\n    </p>\n\n    <h5>How to borrow books online:</h5>\n    <p>\n      1. Sign in if you are an existing user or register as new user.  2. Select\n      book you want to borrow by clicking on book in the home page (also search\n      for a book). Click on checkout. Select checkout date, due date and pay\n      advance amount and then click on checkout. Your checkout order is placed.\n    </p>\n\n    <h5>How to return a book:</h5>\n    <p>\n      1. Login to your account. 2. Go to my books 3. Go to delivered books and\n      click on check-in. Your Return order has been placed.\n    </p>\n\n    <h5>How long can I keep a book with me once I have picked it up?</h5>\n    <p>\n      We do not have a cap on the number of days that you can keep a book with\n      you. You can keep a book for as long as you want. However we request you\n      to return the book in a reasonable amount of time since other members may\n      also be in the waiting list.\n    </p>\n\n    <h5>What is the process of borrowing of a book?</h5>\n    <p>\n      Select your books of your choice. Click on checkout. We’ll delivery them\n      for free at your doorstep. Click on checkin We’ll pick it up once you are\n      done by paying the rent amount.\n    </p>\n  </div>\n\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/Components/faq/faq.component.scss":
/*!***************************************************!*\
  !*** ./src/app/Components/faq/faq.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  padding: 10px;\n  box-sizing: border-box; }\n\n.tile {\n  background-color: #ccc;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 800;\n  width: 400px;\n  background-repeat: no-repeat;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  min-height: 30vw !important;\n  background-size: cover !important; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  left: 20px; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  right: 20px; }\n\n.header-section {\n  display: -webkit-flex;\n  display: flex;\n  background-color: #f6f6f6;\n  width: 100%;\n  z-index: 9999;\n  box-shadow: 0 0 3px #000;\n  position: fixed;\n  height: 69px; }\n\n.header-section .wisereads-logo {\n    display: -webkit-flex;\n    display: flex; }\n\n.header-section .fa-sign-in {\n    color: #0b4f82; }\n\n.header-section .link-section {\n    margin-left: auto;\n    margin-top: 8px;\n    padding: 3vh; }\n\n.header-section a {\n    padding: 10px;\n    font-size: 18px;\n    color: #0b4f82; }\n\n.main-service {\n  padding: 7.5em 3em;\n  color: #fff; }\n\n.about-img {\n  background: url('students.jpg') no-repeat center; }\n\n.about-img h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.about-img2 {\n  background: url('kids.jpg') no-repeat center;\n  border: 1px solid #ffffff70; }\n\n.about-img2 h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.blog-right-grids {\n  padding: 6em 0em; }\n\n.blog-right-grids p {\n  font-size: 14px;\n  color: #888888;\n  line-height: 25px; }\n\n.below-footer {\n  background-color: #000;\n  min-height: 60px; }\n\n.below-footer h6 {\n  text-align: center;\n  padding-top: 4vh;\n  color: #ffff; }\n\n.wisereads-logo img {\n  padding: 10px 0 10px 50px;\n  width: 300px;\n  height: inherit !important; }\n\n.align {\n  margin-top: -23px;\n  margin-left: 18px; }\n\n.footer_align {\n  margin-top: 18px; }\n\n.input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.example-card {\n  max-width: 400px;\n  max-height: 450px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.slick-slider {\n  width: 100%;\n  height: 40%;\n  padding-left: 50px; }\n\n.card {\n  width: 150px;\n  height: 150px; }\n\n.slick-slider {\n  margin: 0px -15px; }\n\n.slick-slide {\n  padding: 10px;\n  text-align: center;\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.slick-slide.slick-active:first-child, .slick-slide.slick-active:last-child {\n  margin: 0; }\n\n.arrow_next {\n  color: red; }\n\n.arrow_prev {\n  color: red; }\n\n.slick-arrow {\n  color: green; }\n\n.rec_heading {\n  height: 29px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3bccf6;\n  padding-left: 39px; }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n.search-input {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 16px;\n  padding: 0px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-bottom: 1px solid #9f9f9f;\n  border-radius: 20px; }\n\n.search-bar {\n  display: -webkit-flex;\n  display: flex; }\n\n.alignSearch {\n  padding-top: 33px;\n  margin-left: 36pc; }\n\n.fa-search {\n  font-size: 25px;\n  color: #9f9f9f;\n  padding-left: 6px;\n  padding-top: 4px; }\n\n.faq_content {\n  padding-top: 72px;\n  padding-left: 15px; }\n\nh2, h5 {\n  color: #7abbf0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQ0FBaUMsRUFBQTs7QUFHckM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHFCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQVBoQjtJQVVRLHFCQUFhO0lBQWIsYUFBYSxFQUFBOztBQVZyQjtJQWFRLGNBQWMsRUFBQTs7QUFidEI7SUFnQlEsaUJBQWlCO0lBQ2pCLGVBQWM7SUFDZCxZQUFZLEVBQUE7O0FBbEJwQjtJQXFCUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0RBQXFFLEVBQUE7O0FBRHpFO0lBR1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksNENBQWlFO0VBQ2pFLDJCQUEyQixFQUFBOztBQUYvQjtJQUlRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUVRLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMEJBQXlCLEVBQUE7O0FBR2pDO0VBQ0EsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQVVwQjtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFjO1VBQWQsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUt0QjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxxSEFBeUc7RUFDekcsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBS2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBSWxDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQW1DcEI7RUFDRSxZQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUlqQjtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQVk7RUFFWixrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLFNBQVMsRUFBQTs7QUFHWDtFQUNJLFVBRUosRUFBQTs7QUFFQTtFQUNFLFVBQ0YsRUFBQTs7QUFFQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFFTSxvQ0FBa0M7RUFDbEMsMkRBQXlEO0VBQ3pELHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsVUFBVSxFQUFBOztBQUtsQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsbUJBQ0osRUFBQTs7QUFDQTtFQUNFLHFCQUFhO0VBQWIsYUFBYSxFQUFBOztBQUlmO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFDSixFQUFBOztBQUNBO0VBQ0ksY0FBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi50aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAzMHZ3ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4ubGVmdFJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cbi5yaWdodFJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIHJpZ2h0OiAyMHB4O1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA2OXB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XG4gICAgLndpc2VyZWFkcy1sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmZhLXNpZ24taW4ge1xuICAgICAgICBjb2xvcjogIzBiNGY4MjtcbiAgICB9XG4gICAgLmxpbmstc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOjhweDtcbiAgICAgICAgcGFkZGluZzogM3ZoO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzBiNGY4MjtcbiAgICB9XG59XG5cbi5tYWluLXNlcnZpY2Uge1xuICAgIHBhZGRpbmc6IDcuNWVtIDNlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmFib3V0LWltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3R1ZGVudHMuanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGgxIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjcwO1xuICAgICAgICBtYXJnaW46IDVlbSAzZW07XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5hYm91dC1pbWcyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9raWRzLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNzA7XG4gICAgaDEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzA7XG4gICAgICAgIG1hcmdpbjogNWVtIDNlbTtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmJsb2ctcmlnaHQtZ3JpZHMge1xuICAgIHBhZGRpbmc6IDZlbSAwZW07XG59XG5cbi5ibG9nLXJpZ2h0LWdyaWRzIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzg4ODg4ODtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmJlbG93LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG4uYmVsb3ctZm9vdGVyIGg2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDR2aDtcbiAgICBjb2xvcjogI2ZmZmY7XG59XG5cbi53aXNlcmVhZHMtbG9nbyB7XG4gICAgaW1nIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggNTBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5hbGlnbntcbm1hcmdpbi10b3A6IC0yM3B4O1xubWFyZ2luLWxlZnQ6IDE4cHg7XG59XG5cbi5mb290ZXJfYWxpZ257XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuXG5cblxuXG5cblxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgICBoZWlnaHQ6IDIuNXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAuZmlsZS1pbmZvIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIFxuICAuYm9va25hbWV7XG4gICAgZmxleDogMCAwIDIwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuIH1cblxuXG5cbnRoZWFkPnRyPnRoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVye1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5cbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzYmNjZjY7XG59XG5cbi51c2VyLXN0YXR1cy10YWJsZXtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxudGh7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuXG50ZCwuZmF7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuXG5cblxuLm5vLWRhdGF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG5cbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLnNsaWNrLXNsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgcGFkZGluZy1sZWZ0OjUwcHggO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzNCwgMjM0KTtcbiAgfVxuICAgXG4vLyAgIC5uYXYtYnRuIHtcbi8vICAgICBoZWlnaHQ6IDQ3cHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAyNnB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgIFxuLy8gICAucHJldi1zbGlkZS5zbGljay1kaXNhYmxlZCxcbi8vICAgLm5leHQtc2xpZGUuc2xpY2stZGlzYWJsZWQge1xuLy8gICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gICAgIG9wYWNpdHk6IDAuMjtcbi8vICAgfVxuICAgXG4vLyAgIC5wcmV2LXNsaWRlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQgc2Nyb2xsIDAgMDtcbi8vICAgICBsZWZ0OiAtMzNweDtcbi8vICAgfVxuICAgXG4vLyAgIC5uZXh0LXNsaWRlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1wb2ludC10by1yaWdodC5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTI0cHggMHB4O1xuLy8gICAgIHJpZ2h0OiAtMzNweDtcbi8vICAgfVxuICAgXG4vLyAgIC5wcmV2LXNsaWRlOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTUzcHg7XG4vLyAgIH1cbiAgIFxuLy8gICAubmV4dC1zbGlkZTpob3ZlciB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTUzcHg7XG4vLyAgIH1cbiAgLmNhcmR7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweFxufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgICBtYXJnaW46MHB4IC0xNXB4O1xufVxuXG4uc2xpY2stc2xpZGUge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4uc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlOmZpcnN0LWNoaWxkLCAuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlOmxhc3QtY2hpbGR7IFxuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5hcnJvd19uZXh0e1xuICAgICAgY29sb3I6cmVkXG5cbiAgfVxuXG4gIC5hcnJvd19wcmV2e1xuICAgIGNvbG9yOiByZWRcbiAgfVxuXG4gIC5zbGljay1hcnJvd3tcbiAgICAgIGNvbG9yOmdyZWVuXG4gIH1cblxuICAucmVjX2hlYWRpbmd7XG4gICAgLy8gd2lkdGg6IDMyNHB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzYmNjZjY7XG4gICAgcGFkZGluZy1sZWZ0OiAzOXB4O1xuICB9XG5cbiAgLmZsZXgtaXRlbSB7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgLjIpIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuICB9XG5cblxuLnNlYXJjaC1pbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOjBweCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM5ZjlmOWY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZjlmOWY7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4XG59XG4uc2VhcmNoLWJhcntcbiAgZGlzcGxheTogZmxleDtcbiAgXG59XG5cbi5hbGlnblNlYXJjaHtcbiAgcGFkZGluZy10b3A6IDMzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNnBjO1xufVxuLmZhLXNlYXJjaCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM5ZjlmOWY7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmZhcV9jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiA3MnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweFxufVxuaDIsaDV7XG4gICAgY29sb3I6cmdiKDEyMiwgMTg3LCAyNDApXG59Il19 */"

/***/ }),

/***/ "./src/app/Components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FaqComponent = /** @class */ (function () {
    function FaqComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myBooks = [];
    }
    FaqComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['/app-faq']);
        }
        localStorage.removeItem("url");
        this.search();
    };
    FaqComponent.prototype.search = function () {
        var _this = this;
        this.searchTerm.valueChanges.subscribe(function (term) {
            if (term && term !== '' && term.length >= 3) {
                _this.searchService.search(term).subscribe(function (data) {
                    _this.myBooks = data.resultsMap.books;
                    // console.log(data[0].BookName);
                    console.log("myBooks", _this.myBooks);
                });
            }
            else {
                _this.myBooks = [];
            }
        });
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/Components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/Components/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardList\">\n  <div *ngFor=\"let book of ficRec\">\n    <mat-card\n      class=\"cardListItem example-card flex-item mat-elevation-z8\"\n      [routerLink]=\"['/book-detail', book.bookId]\"\n      style=\"cursor: pointer \"\n    >\n    <mat-card-content>\n        <img\n          src=\"{{ book.imagesUrl1 }}\"\n          alt=\"\"\n          width=\"78%\"\n          height=\"178px\"\n          onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n          (click)=\"checkC()\"\n        />\n      </mat-card-content>\n      <mat-card-header>\n        <!-- <div  class=\"example-header-image\"></div> -->\n        <mat-card-title *ngIf=\"book.title != null; else noTitle\">\n          <span\n            class=\"ellipses\"\n            tooltip=\"{{ book.title }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n          >\n            {{ book.title | shorten: 15:\"...\" }}\n          </span>\n        </mat-card-title>\n        <mat-card-subtitle *ngIf=\"book.author != null; else noSubTitle\">\n          <span\n            class=\"ellipses\"\n            tooltip=\"{{ book.author }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n          >\n            {{ book.author | shorten: 10:\"...\" }}\n          </span>\n        </mat-card-subtitle>\n        <ng-template #noTitle>NA</ng-template>\n        <ng-template #noSubTitle>NA</ng-template>\n      </mat-card-header>\n\n      \n      <mat-card-actions> </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  /* max-width: 300px; */\n  /* max-height: 278px; */\n  width: 213px;\n  height: 260px;\n  margin-bottom: 20px; }\n\n.cardList {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start; }\n\n/* Column Gap */\n\n.cardList > * {\n  box-sizing: border-box; }\n\n.cardList > *:not(:last-child) {\n  margin-right: 32px; }\n\n/* Item sizing */\n\n.cardListItem {\n  -webkit-flex: 0 1 calc(33.3% - 32px);\n          flex: 0 1 calc(33.3% - 32px); }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2ZpY3Rpb24tYm9va3Mtdmlldy1hbGwvZmljdGlvbi1ib29rcy12aWV3LWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0osdUJBQUE7RUFDQSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVuQjtFQUNBLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsdUJBQWU7VUFBZixlQUFlO0VBQ2YsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUUzQixlQUFBOztBQUNBO0VBQ0Esc0JBQXNCLEVBQUE7O0FBRXRCO0VBQ0Esa0JBQWtCLEVBQUE7O0FBRWxCLGdCQUFBOztBQUNBO0VBQ0Esb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUk1QjtFQUVJLG9DQUFrQztFQUNsQywyREFBeUQ7RUFDekQscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2ZpY3Rpb24tYm9va3Mtdmlldy1hbGwvZmljdGlvbi1ib29rcy12aWV3LWFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIC8qIG1heC13aWR0aDogMzAwcHg7ICovXG4vKiBtYXgtaGVpZ2h0OiAyNzhweDsgKi9cbndpZHRoOiAyMTNweDtcbmhlaWdodDogMjYwcHg7XG5tYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmRMaXN0IHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuZmxleC13cmFwOiB3cmFwO1xuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLyogQ29sdW1uIEdhcCAqL1xuLmNhcmRMaXN0ID4gKiB7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNhcmRMaXN0ID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbm1hcmdpbi1yaWdodDogMzJweDtcbn1cbi8qIEl0ZW0gc2l6aW5nICovXG4uY2FyZExpc3RJdGVtIHtcbmZsZXg6IDAgMSBjYWxjKDMzLjMlIC0gMzJweCk7XG59XG5cblxuLmZsZXgtaXRlbSB7XG4mOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgLjIpIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcbiAgICB6LWluZGV4OiA5O1xufVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FictionBooksViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FictionBooksViewAllComponent", function() { return FictionBooksViewAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");



var FictionBooksViewAllComponent = /** @class */ (function () {
    function FictionBooksViewAllComponent(bookservice) {
        this.bookservice = bookservice;
        this.ELEMENT_DATA = [];
        this.ficRec = [];
    }
    FictionBooksViewAllComponent.prototype.ngOnInit = function () {
        this.loadFictionBooks();
    };
    FictionBooksViewAllComponent.prototype.loadFictionBooks = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (data) {
            _this.ELEMENT_DATA = data.resultsMap.books;
            for (var i = 0; i < _this.ELEMENT_DATA.length; i++) {
                var element = _this.ELEMENT_DATA[i];
                if (element.genreId == 3) {
                    _this.ficRec.push(element);
                }
            }
        });
    };
    FictionBooksViewAllComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
        localStorage.setItem("isHome", "false");
    };
    FictionBooksViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-fiction-books-view-all",
            template: __webpack_require__(/*! ./fiction-books-view-all.component.html */ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.html"),
            styles: [__webpack_require__(/*! ./fiction-books-view-all.component.scss */ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], FictionBooksViewAllComponent);
    return FictionBooksViewAllComponent;
}());



/***/ }),

/***/ "./src/app/Components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"below-footer \">\n  <div class=\"footer\" style=\"background-color: #1b1c1f;color: #6b6f76;\">\n    <div class=\"container\">\n      <div class=\"w3_newsletter_footer_grids\">\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"w3_agile_footer_grids\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-6 w3_agile_footer_grid footer_align\">\n            <h3>Keep in touch</h3>\n            <ul\n              style=\"list-style: none;margin-left: -37px;\"\n              class=\"agile_footer_grid_list\"\n            >\n              <li>\n                <img\n                  src=\"https://yuppstatic.akamaized.net/yupptv/yupptv_new/Web/Content/images/twitter.svg\"\n                  alt=\"\"\n                />\n                <!-- <span class=\"fa fa-twitter\" aria-hidden=\"true\"></span>  -->\n                &nbsp; \n                <a href=\"https://twitter.com/Wisereads1\" target=\"_blank\">Twitter</a>\n                \n              </li>\n              <li>\n                <img\n                  src=\"https://yuppstatic.akamaized.net/yupptv/yupptv_new/Web/Content/images/facebook.svg\"\n                  alt=\"\" \n                />\n                <!-- <span class=\"fa fa-facebook\" aria-hidden=\"true\"></span> -->\n                &nbsp;Facebook\n              </li>\n              <li>\n                <img\n                  src=\"https://yuppstatic.akamaized.net/yupptv/yupptv_new/Web/Content/images/google.svg\"\n                  alt=\"\"\n                />\n                <!-- <span class=\"fa fa-envelope-o\" aria-hidden=\"true\"></span> -->\n                &nbsp;\n                <a href=\"mailto:wisereads1@gmail.com\" target=\"_blank\">wisereads1@gmail.com</a>\n              </li>\n              <li>\n                <span class=\"fa fa-phone\" aria-hidden=\"true\"></span>\n                &nbsp;+914029801891\n              </li>\n              <li>\n                <span class=\"fa fa-linkedin\" aria-hidden=\"true\"></span>\n                &nbsp;\n                <a href=\"https://www.linkedin.com/company/wisereads/about/\" target=\"_blank\">LinkedIn</a>\n                \n              </li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-3 col-xs-6 w3_agile_footer_grid footer_align\">\n            <h3>Navigation</h3>\n            <ul\n              style=\"margin-left: -22px;\"\n              class=\"agileits_w3layouts_footer_grid_list\"\n            >\n              <li>\n                <span aria-hidden=\"true\"></span>\n                <a routerLink=\"/\">Home</a>\n              </li>\n              <li>\n                <span aria-hidden=\"true\"></span>\n                <a routerLink=\"/app-about-us\">About Us</a>\n              </li>\n\n              <li>\n                <span aria-hidden=\"true\"></span>\n                <a routerLink=\"/\">Terms & Conditions</a>\n              </li>\n              <li>\n                <span aria-hidden=\"true\"></span>\n                <a routerLink=\"/\">Privacy Policy</a>\n              </li>\n              <li>\n                <span aria-hidden=\"true\"></span>\n                <a routerLink=\"/app-faq\">FAQ`s</a>\n              </li>\n            </ul>\n          </div>\n          <div\n            class=\"col-md-3 col-xs-6 w3ls_address_mail_footer_grids w3_agile_footer_grid footer_align\"\n          >\n            <h3>Contact Us</h3>\n            <div class=\"w3ls_footer_grid_left\">\n              <div class=\"w3l-icon\">\n                <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n              </div>\n              <p class=\"align\">\n                Q2, A2, 7th Floor\n                <span>Cyber Towers Hi-tech City, Hyderabad 500081</span>\n              </p>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"w3ls_footer_grid_left\">\n              <div class=\"w3l-icon\">\n                <span class=\"fa fa-phone\" aria-hidden=\"true\"></span>\n              </div>\n              <p class=\"align\">+914029801891</p>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"w3ls_footer_grid_left\">\n              <div class=\"w3l-icon\">\n                <span class=\"fa fa-envelope-o\" aria-hidden=\"true\"></span>\n              </div>\n              <p class=\"align\">\n                <a href=\"mailto:wisereads1@gmail.com\" target=\"_blank\">wisereads1@gmail.com</a>\n              </p>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n          <div\n            class=\"col-md-3 col-xs-6 w3ls_address_mail_footer_grids w3_agile_footer_grid footer_align\"\n          >\n            <h3>Other Links</h3>\n            <div>\n              <a routerLink=\"/\">\n                Request Book\n              </a>\n            </div>\n            <div>\n              <a routerLink=\"/\">\n                Rent yout Book\n              </a>\n            </div>\n            <div>\n              <a routerLink=\"/\">\n                Feedback\n              </a>\n            </div>\n            <div>\n              <a routerLink=\"/\">\n                Refer a friend\n              </a>\n            </div>\n            <div>\n              <a\n                href=\"https://play.google.com/store/apps/details?id=com.omni.wisereads&hl=en\" target=\"_blank\"\n              >\n                Mobile App\n              </a>\n            </div>\n            <div class=\"clearfix\"></div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <div class=\"agileinfo_copyright\">\n        <h6 style=\"color: #6b6f76; padding-bottom: 8px; text-align: center\">\n          © 2019. All Rights Reserved | Design by Omniwyse\n        </h6>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".below-footer {\n  background-color: #000;\n  min-height: 60px; }\n\n.container {\n  max-width: 1383px; }\n\n.align {\n  margin-top: -23px;\n  margin-left: 18px; }\n\n.footer_align {\n  margin-top: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlbG93LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEzODNweDtcbn1cbi5hbGlnbntcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICB9XG5cbiAgICAuZm9vdGVyX2FsaWdue1xuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/Components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section affix\">\n  <div class=\"wisereads-logo\">\n    <img\n      src=\"../../../assets/images/wiseReads.svg\"\n      style=\"width: 300px;height: 44px;    box-shadow: none; cursor: pointer;\"\n      routerLink=\"/\"\n    />\n  </div>\n\n  <div class=\"search-bar-set\">\n    <form class=\"alignSearch\">\n      <div>\n        <div class=\"search-bar\">\n          <input\n            class=\"search-input\"\n            type=\"text\"\n            placeholder=\"Search Book\"\n            [formControl]=\"searchTerm\"\n            #box\n            (keyup)=\"onKeyUp(box)\"\n            [matAutocomplete]=\"auto\"\n          />\n          <i class=\"fa fa-search\"></i>\n        </div>\n\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <ng-container *ngIf=\"myBooks.length > 0\">\n            <mat-option *ngFor=\"let books of myBooks\" [value]=\"books.value\"\n            \n\n                (click)=\"reload(books.bookId)\">\n                {{ books.title }}\n            </mat-option>\n          </ng-container>\n          <ng-container *ngIf=\"myBooks.length == 0 && box.value.length >= 3\">\n            <mat-option class=\"option-result\">\n              <p class=\"noresult\">No Result Found</p>\n            </mat-option>\n          </ng-container>\n        </mat-autocomplete>\n      </div>\n    </form>\n  </div>\n  <div class=\"link-section\">\n    <a routerLink=\"/register\"\n      ><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Register</a\n    >\n    <a routerLink=\"/login\"\n      ><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Login</a\n    >\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:focus, textarea:focus, select:focus {\n  outline: none; }\n\n.header-section {\n  display: -webkit-flex;\n  display: flex;\n  background-color: #fff;\n  width: 100%;\n  z-index: 9;\n  box-shadow: 0 0 3px #000;\n  position: fixed;\n  height: 69px; }\n\n.header-section .wisereads-logo {\n    display: -webkit-flex;\n    display: flex; }\n\n.header-section .fa-sign-in {\n    color: #0b4f82; }\n\n.header-section .link-section {\n    margin-top: 8px;\n    padding: 3vh; }\n\n.header-section a {\n    padding: 10px;\n    font-size: 18px;\n    color: #0b4f82; }\n\n.wisereads-logo img {\n  padding: 10px 0 10px 50px;\n  width: 300px;\n  height: inherit !important; }\n\n.alignSearch {\n  padding-top: 14px; }\n\n.search-bar {\n  position: relative; }\n\n.search-bar .fa {\n    font-size: 18px;\n    font-weight: 300;\n    color: #4b4b4b;\n    right: 14px;\n    position: absolute;\n    top: 7px; }\n\n.search-input {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 16px;\n  padding: 8px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-radius: 20px;\n  background-color: #efefef; }\n\n.fa-search {\n  font-size: 25px;\n  color: #9f9f9f;\n  padding-left: 6px;\n  padding-top: 4px; }\n\n.search-bar-set {\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxxQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFQZDtJQVVJLHFCQUFhO0lBQWIsYUFBYSxFQUFBOztBQVZqQjtJQWFJLGNBQWMsRUFBQTs7QUFibEI7SUFnQkksZUFBZTtJQUNmLFlBQVksRUFBQTs7QUFqQmhCO0lBb0JJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYyxFQUFBOztBQUlsQjtFQUVJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRG5CO0lBSUUsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRLEVBQUE7O0FBSVY7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuLmhlYWRlci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDY5cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XG4gIC53aXNlcmVhZHMtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZmEtc2lnbi1pbiB7XG4gICAgY29sb3I6ICMwYjRmODI7XG4gIH1cbiAgLmxpbmstc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHBhZGRpbmc6IDN2aDtcbiAgfVxuICBhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzBiNGY4MjtcbiAgfVxufVxuXG4ud2lzZXJlYWRzLWxvZ28ge1xuICBpbWcge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5hbGlnblNlYXJjaCB7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLnNlYXJjaC1iYXIge1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbi5mYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0YjRiNGI7XG4gIHJpZ2h0OiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xufVxufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzlmOWY5ZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn1cblxuXG4uZmEtc2VhcmNoIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzlmOWY5ZjtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cblxuLnNlYXJjaC1iYXItc2V0e1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myBooks = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        localStorage.removeItem("url");
        this.search();
    };
    HeaderComponent.prototype.search = function () {
        var _this = this;
        this.searchTerm.valueChanges.subscribe(function (term) {
            if (term && term !== "" && term.length >= 3) {
                _this.searchService.search(term).subscribe(function (data) {
                    _this.myBooks = data.resultsMap.books;
                });
            }
            else {
                _this.myBooks = [];
            }
        });
    };
    HeaderComponent.prototype.reload = function (bookId) {
        // location.assign(`/book-detail/${bookId}`);
        var inBookDetailC = localStorage.getItem('inBookDetail');
        if (inBookDetailC == 'true')
            location.assign("/book-detail/" + bookId);
        else
            this.router.navigate(["/book-detail/" + bookId]);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/Components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-header></app-header>\n\n  <div class=\"slider-section\">\n    <ngu-carousel\n      #myCarousel\n      [inputs]=\"carouselTile\"\n      [dataSource]=\"carouselItems\"\n    >\n      <div *nguCarouselDef=\"let item\" class=\"item\">\n        <div\n          class=\"tile\"\n          [style.background]=\"'url(' + item.url + ')'\"\n          style=\"min-height: 600px; width:100%;\"\n        >\n          <span class=\"title\">{{ item.title }}</span>\n        </div>\n      </div>\n      <button NguCarouselNext class=\"rightRs\">›</button>\n      <button NguCarouselPrev class=\"leftRs\">‹</button>\n    </ngu-carousel>\n  </div>\n\n  <!-- <router-outlet></router-outlet> -->\n\n  <h3 class=\"rec_heading\">\n    Comic Books\n    <!-- <a style=\"margin-left: 86%;\" routerLink=\"/app-comic-books-view-all1\"\n      >View All</a\n    > -->\n  </h3>\n  <div>\n    <ngx-slick-carousel\n      class=\"carousel container\"\n      #slickModal=\"slick-carousel\"\n      [config]=\"slideConfig\"\n      (init)=\"slickInit($event)\"\n      (breakpoint)=\"breakpoint($event)\"\n      (afterChange)=\"afterChange($event)\"\n      (beforeChange)=\"beforeChange($event)\"\n    >\n      <div ngxSlickItem *ngFor=\"let slide of comicsRec\">\n        <!-- <div class=\"card\"> -->\n        <div class=\"flex-item\" *ngIf=\"slide.imagesUrl1 != ''; else default\">\n          <img\n            src=\"{{ slide.imagesUrl1 }} \"\n            alt=\"\"\n            height=\"200px\"\n            [routerLink]=\"['/book-detail', slide.bookId]\"\n            style=\"cursor: pointer \"\n            onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n            (click)=\"checkC()\"\n          />\n        </div>\n        <ng-template #default>\n          <img src=\"../../../assets/images/default-book.png\" height=\"200px\" />\n        </ng-template>\n        <!-- </div> -->\n      </div>\n    </ngx-slick-carousel>\n  </div>\n  <br /><br />\n\n  <h3 class=\"rec_heading\">\n    Fiction Books\n    <!-- <a style=\"margin-left: 86%;\" routerLink=\"/app-fiction-books-view-all1\"\n      >View All</a\n    > -->\n  </h3>\n  <div>\n    <ngx-slick-carousel\n      class=\"carousel container\"\n      #slickModal=\"slick-carousel\"\n      [config]=\"slideConfig\"\n      (init)=\"slickInit($event)\"\n      (breakpoint)=\"breakpoint($event)\"\n      (afterChange)=\"afterChange($event)\"\n      (beforeChange)=\"beforeChange($event)\"\n    >\n      <div ngxSlickItem *ngFor=\"let slide of ficRec\">\n        <!-- <div class=\"card\"> -->\n        <div class=\"flex-item\" *ngIf=\"slide.imagesUrl1 != ''; else default\">\n          <img\n            src=\"{{ slide.imagesUrl1 }} \"\n            alt=\"\"\n            height=\"200px\"\n            [routerLink]=\"['/book-detail', slide.bookId]\"\n            style=\"cursor: pointer \"\n            onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n            (click)=\"checkC()\"\n          />\n        </div>\n        <ng-template #default>\n          <img src=\"../../../assets/images/default-book.png\" height=\"200px\" />\n        </ng-template>\n        <!-- </div> -->\n      </div>\n    </ngx-slick-carousel>\n  </div>\n\n  <br /><br />\n\n  <div>\n    <h3 class=\"rec_heading\">\n      Story Books\n      <!-- <a style=\"margin-left: 87%;\" routerLink=\"/app-story-books-view-all1\"\n        >View All</a\n      > -->\n    </h3>\n  </div>\n  <div>\n    <ngx-slick-carousel\n      class=\"carousel container\"\n      #slickModal=\"slick-carousel\"\n      [config]=\"slideConfig\"\n      (init)=\"slickInit($event)\"\n      (breakpoint)=\"breakpoint($event)\"\n      (afterChange)=\"afterChange($event)\"\n      (beforeChange)=\"beforeChange($event)\"\n    >\n      <div ngxSlickItem *ngFor=\"let slide of storyRec\">\n        <!-- <div class=\"card\"> -->\n        <div class=\"flex-item\" *ngIf=\"slide.imagesUrl1 != ''; else default\">\n          <img\n            src=\"{{ slide.imagesUrl1 }} \"\n            alt=\"\"\n            height=\"200px\"\n            [routerLink]=\"['/book-detail', slide.bookId]\"\n            style=\"cursor: pointer \"\n            onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n            (click)=\"checkC()\"\n          />\n        </div>\n        <ng-template #default>\n          <img src=\"../../../assets/images/default-book.png\" height=\"200px\" />\n        </ng-template>\n        <!-- </div> -->\n      </div>\n    </ngx-slick-carousel>\n  </div>\n\n  <br /><br />\n\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/Components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  padding: 10px;\n  box-sizing: border-box; }\n\n.tile {\n  background-color: #ccc;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 800;\n  width: 400px;\n  background-repeat: no-repeat;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  min-height: 30vw !important;\n  background-size: cover !important; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  left: 20px; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  right: 20px; }\n\n.header-section {\n  display: -webkit-flex;\n  display: flex;\n  background-color: #f6f6f6;\n  width: 100%;\n  z-index: 9999;\n  box-shadow: 0 0 3px #000;\n  position: fixed;\n  height: 69px; }\n\n.header-section .wisereads-logo {\n    display: -webkit-flex;\n    display: flex; }\n\n.header-section .fa-sign-in {\n    color: #0b4f82; }\n\n.header-section .link-section {\n    margin-left: auto;\n    margin-top: 8px;\n    padding: 3vh; }\n\n.header-section a {\n    padding: 10px;\n    font-size: 18px;\n    color: #0b4f82; }\n\n.main-service {\n  padding: 7.5em 3em;\n  color: #fff; }\n\n.about-img {\n  background: url('students.jpg') no-repeat center; }\n\n.about-img h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.about-img2 {\n  background: url('kids.jpg') no-repeat center;\n  border: 1px solid #ffffff70; }\n\n.about-img2 h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.blog-right-grids {\n  padding: 7em 5em; }\n\n.blog-right-grids p {\n  font-size: 14px;\n  color: #888888;\n  line-height: 25px; }\n\n.below-footer {\n  background-color: #000;\n  min-height: 60px; }\n\n.below-footer h6 {\n  text-align: center;\n  padding-top: 4vh;\n  color: #ffff; }\n\n.wisereads-logo img {\n  padding: 10px 0 10px 50px;\n  width: 300px;\n  height: inherit !important; }\n\n.align {\n  margin-top: -23px;\n  margin-left: 18px; }\n\n.footer_align {\n  margin-top: 18px; }\n\n.input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.example-card {\n  max-width: 400px;\n  max-height: 450px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.slick-slider {\n  width: 100%;\n  height: 40%;\n  padding-left: 50px; }\n\n.card {\n  width: 150px;\n  height: 150px; }\n\n.slick-slide {\n  padding: 10px;\n  text-align: center;\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.slick-slide.slick-active:first-child, .slick-slide.slick-active:last-child {\n  margin: 0; }\n\n.arrow_next {\n  color: red; }\n\n.arrow_prev {\n  color: red; }\n\n.slick-arrow {\n  color: green; }\n\n.rec_heading {\n  height: 29px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3bccf6;\n  padding-left: 39px; }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n.search-input {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 16px;\n  padding: 0px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-bottom: 1px solid #9f9f9f;\n  border-radius: 20px; }\n\n.search-bar {\n  display: -webkit-flex;\n  display: flex; }\n\n.alignSearch {\n  padding-top: 33px;\n  margin-left: 36pc; }\n\n.fa-search {\n  font-size: 25px;\n  color: #9f9f9f;\n  padding-left: 6px;\n  padding-top: 4px; }\n\n.slider-section {\n  padding-top: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixxQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQWE7RUFBYixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBUGhCO0lBVVEscUJBQWE7SUFBYixhQUFhLEVBQUE7O0FBVnJCO0lBYVEsY0FBYyxFQUFBOztBQWJ0QjtJQWdCUSxpQkFBaUI7SUFDakIsZUFBYztJQUNkLFlBQVksRUFBQTs7QUFsQnBCO0lBcUJRLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYyxFQUFBOztBQUl0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnREFBcUUsRUFBQTs7QUFEekU7SUFHUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSw0Q0FBaUU7RUFDakUsMkJBQTJCLEVBQUE7O0FBRi9CO0lBSVEscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBRVEseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwwQkFBeUIsRUFBQTs7QUFHakM7RUFDQSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBVXBCO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQWM7VUFBZCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHFIQUF5RztFQUN6RyxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFLaEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFJbEM7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBbUNwQjtFQUNFLFlBQVc7RUFDWCxhQUFhLEVBQUE7O0FBUWpCO0VBQ0ksYUFBWTtFQUVaLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksU0FBUyxFQUFBOztBQUdYO0VBQ0ksVUFFSixFQUFBOztBQUVBO0VBQ0UsVUFDRixFQUFBOztBQUVBO0VBQ0ksWUFDSixFQUFBOztBQUVBO0VBRUUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUVNLG9DQUFrQztFQUNsQywyREFBeUQ7RUFDekQscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixVQUFVLEVBQUE7O0FBSWhCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxtQkFDSixFQUFBOztBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhLEVBQUE7O0FBSWY7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnRpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDMwdncgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0UnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgbGVmdDogMjBweDtcbn1cblxuLnJpZ2h0UnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbi5oZWFkZXItc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDY5cHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGFwYXlhd2hpcDtcbiAgICAud2lzZXJlYWRzLWxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZmEtc2lnbi1pbiB7XG4gICAgICAgIGNvbG9yOiAjMGI0ZjgyO1xuICAgIH1cbiAgICAubGluay1zZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6OHB4O1xuICAgICAgICBwYWRkaW5nOiAzdmg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMGI0ZjgyO1xuICAgIH1cbn1cblxuLm1haW4tc2VydmljZSB7XG4gICAgcGFkZGluZzogNy41ZW0gM2VtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYWJvdXQtaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdHVkZW50cy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgaDEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzA7XG4gICAgICAgIG1hcmdpbjogNWVtIDNlbTtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmFib3V0LWltZzIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2tpZHMuanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY3MDtcbiAgICBoMSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3MDtcbiAgICAgICAgbWFyZ2luOiA1ZW0gM2VtO1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uYmxvZy1yaWdodC1ncmlkcyB7XG4gICAgcGFkZGluZzogN2VtIDVlbTtcbn1cblxuLmJsb2ctcmlnaHQtZ3JpZHMgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uYmVsb3ctZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbi5iZWxvdy1mb290ZXIgaDYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHZoO1xuICAgIGNvbG9yOiAjZmZmZjtcbn1cblxuLndpc2VyZWFkcy1sb2dvIHtcbiAgICBpbWcge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCA1MHB4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdCFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmFsaWdue1xubWFyZ2luLXRvcDogLTIzcHg7XG5tYXJnaW4tbGVmdDogMThweDtcbn1cblxuLmZvb3Rlcl9hbGlnbntcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG5cblxuXG5cblxuXG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xuICAgIGhlaWdodDogMi41dnc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5maWxlLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbiAgXG4gIC5ib29rbmFtZXtcbiAgICBmbGV4OiAwIDAgMjB2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XG4gfVxuXG5cblxudGhlYWQ+dHI+dGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXJ7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cblxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzNiY2NmNjtcbn1cblxuLnVzZXItc3RhdHVzLXRhYmxle1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG50aHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG5cbnRkLC5mYXtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0YjRiNGI7XG59XG5cblxuXG4ubm8tZGF0YXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcblxufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuc2xpY2stc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBwYWRkaW5nLWxlZnQ6NTBweCA7XG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIzOCwgMjM0LCAyMzQpO1xuICB9XG4gICBcbi8vICAgLm5hdi1idG4ge1xuLy8gICAgIGhlaWdodDogNDdweDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDI2cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIHRvcDogMTAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuICAgXG4vLyAgIC5wcmV2LXNsaWRlLnNsaWNrLWRpc2FibGVkLFxuLy8gICAubmV4dC1zbGlkZS5zbGljay1kaXNhYmxlZCB7XG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyAgICAgb3BhY2l0eTogMC4yO1xuLy8gICB9XG4gICBcbi8vICAgLnByZXYtc2xpZGUge1xuLy8gICAgIGJhY2tncm91bmQ6IHVybCgpIG5vLXJlcGVhdCBzY3JvbGwgMCAwO1xuLy8gICAgIGxlZnQ6IC0zM3B4O1xuLy8gICB9XG4gICBcbi8vICAgLm5leHQtc2xpZGUge1xuLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fycm93LXBvaW50LXRvLXJpZ2h0LnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMjRweCAwcHg7XG4vLyAgICAgcmlnaHQ6IC0zM3B4O1xuLy8gICB9XG4gICBcbi8vICAgLnByZXYtc2xpZGU6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNTNweDtcbi8vICAgfVxuICAgXG4vLyAgIC5uZXh0LXNsaWRlOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtNTNweDtcbi8vICAgfVxuICAuY2FyZHtcbiAgICB3aWR0aDoxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4XG59XG5cbi8vIC5zbGljay1zbGlkZXIge1xuLy8gICAgIC8vbWFyZ2luOjBweCAtMTVweDtcbi8vIH1cblxuLnNsaWNrLXNsaWRlIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZTpmaXJzdC1jaGlsZCwgLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZTpsYXN0LWNoaWxkeyBcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYXJyb3dfbmV4dHtcbiAgICAgIGNvbG9yOnJlZFxuXG4gIH1cblxuICAuYXJyb3dfcHJldntcbiAgICBjb2xvcjogcmVkXG4gIH1cblxuICAuc2xpY2stYXJyb3d7XG4gICAgICBjb2xvcjpncmVlblxuICB9XG5cbiAgLnJlY19oZWFkaW5ne1xuICAgIC8vIHdpZHRoOiAzMjRweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjM2JjY2Y2O1xuICAgIHBhZGRpbmctbGVmdDogMzlweDtcbiAgfVxuXG4gIC5mbGV4LWl0ZW0ge1xuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDlweCAxMnB4IDFweCByZ2JhKDUwLCA1MCwgNTAsIC4yKSFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWY5ZjlmO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweFxufVxuLnNlYXJjaC1iYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuXG4uYWxpZ25TZWFyY2h7XG4gIHBhZGRpbmctdG9wOiAzM3B4O1xuICBtYXJnaW4tbGVmdDogMzZwYztcbn1cbi5mYS1zZWFyY2gge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjOWY5ZjlmO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5zbGlkZXItc2VjdGlvbntcbiAgcGFkZGluZy10b3A6IDcwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(bookservice, searchService, router) {
        this.bookservice = bookservice;
        this.searchService = searchService;
        this.router = router;
        this.ELEMENT_DATA = [];
        this.comicsRec = [];
        this.ficRec = [];
        this.storyRec = [];
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.myBooks = [];
        this.carouselTile = {
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            load: 3,
            interval: { timing: 3000, initialDelay: 1000 },
            loop: true,
            touch: true,
            velocity: 0.2
            // grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            // slide: 1,
            // speed: 250,
            // point: {
            //   visible: true
            // },
            // load: 2,
            // loop: true,
            // velocity: 0,
            // touch: true,
        };
        this.carouselItems = [
            {
                title: "Save you shelf space with WiseReads book rentals ",
                url: "../../assets/images/slider3.jpg"
            },
            {
                title: "Immersing yourself in the book world",
                url: "../../assets/images/slider4.jpg"
            },
            {
                title: "Give your childrens a gift of imagination",
                url: "../../assets/images/slider5.jpg"
            }
        ];
        this.slideConfig = {
            slidesToShow: 6,
            slidesToScroll: 5,
            // "arrows":true,
            // prevArrow:
            //   "<i class='material-icons nav-btn prev-slide'>arrow_back_ios</i>",
            // nextArrow:
            //   "<i class='material-icons nav-btn next-slide-home'>arrow_forward_ios</i>",
            "prevArrow": "<div class='nav-btn prev-slide'></div>",
            "nextArrow": "<div class='nav-btn next-slide'></div>",
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
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['/home']);
        }
        localStorage.setItem("isHome", "true");
        localStorage.removeItem("url");
        this.getbooks();
        // this.bookList();
        // localStorage.setItem("isHome","true");
        this.search();
    };
    HomeComponent.prototype.getbooks = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (data) {
            _this.ELEMENT_DATA = data.resultsMap.books;
            for (var i = 0; i < _this.ELEMENT_DATA.length; i++) {
                var element = _this.ELEMENT_DATA[i];
                if (element.genreId == 2) {
                    _this.comicsRec.push(element);
                }
                else if (element.genreId == 3) {
                    _this.ficRec.push(element);
                }
                else if (element.genreId == 1) {
                    _this.storyRec.push(element);
                }
            }
        });
    };
    // bookList(){
    //   this.bookservice.getProduct(1).subscribe((data: any) => {
    //     console.log(data);
    //     // this.product = data.resultsMap.book;
    //   });
    // }
    HomeComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
        localStorage.setItem("isHome", "true");
    };
    HomeComponent.prototype.slickInit = function (e) {
        // console.log("slick initialized");
    };
    HomeComponent.prototype.breakpoint = function (e) {
        // console.log("breakpoint");
    };
    HomeComponent.prototype.afterChange = function (e) {
        // console.log("afterChange");
    };
    HomeComponent.prototype.beforeChange = function (e) {
        // console.log("beforeChange");
    };
    HomeComponent.prototype.onKeyUp = function (boxInput) {
        var length = boxInput.value.length;
        console.log(length);
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.searchTerm.valueChanges.subscribe(function (term) {
            if (term && term !== '' && term.length >= 3) {
                _this.searchService.search(term).subscribe(function (data) {
                    _this.myBooks = data.resultsMap.books;
                    // console.log(data[0].BookName);
                    console.log("myBooks", _this.myBooks);
                });
            }
            else {
                _this.myBooks = [];
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/inventory/inventory.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/inventory/inventory.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"item item-1 col-lg-3 col-md-3 col-sm-12\">\n    <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\" />\n    <h1>Inventory List</h1>\n  </div>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" [class.isMobile]=\"isMobile\">\n    <ng-container matColumnDef=\"invid\">\n      <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 8%\">\n        Inv ID\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 8%\">\n        <span class=\"mobile-label\">inv ID:</span>\n        {{ element.inventoryId }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"bookid\">\n      <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 8%\">\n        Book ID\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 8%\">\n        <span class=\"mobile-label\">Book ID:</span>\n        {{ element.bookId }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"bookname\">\n      <mat-header-cell *matHeaderCellDef> Book Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Book Name:</span>\n        <span\n          class=\"ellipses\"\n          tooltip=\"{{ element.title }}\"\n          placement=\"right\"\n          show-delay=\"500\"\n          theme=\"dark\"\n          offset=\"16\"\n        >\n          <a [routerLink]=\"['/book-detail', element.bookId]\" (click)=\"checkC()\">\n            {{ element.title }}\n          </a>\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"owner\">\n      <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 10%\">\n        Owner Id\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 10%\">\n        <span class=\"mobile-label\">Owner Id:</span>\n        {{ element.ownerId }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"bookvalue\">\n      <mat-header-cell *matHeaderCellDef> Book value </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Book value:</span>\n        {{ element.bookPrice }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"rantalvalue\">\n      <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 10%\">\n        Rental Value\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 10%\">\n        <span class=\"mobile-label\">Rental Value:</span>\n        {{ element.rentPerDay }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"availability\">\n      <mat-header-cell *matHeaderCellDef fxFlex=\"0 0 10%\">\n        Availability</mat-header-cell\n      >\n      <mat-cell *matCellDef=\"let element\" fxFlex=\"0 0 10%\">\n        <span class=\"mobile-label\">Availability:</span>\n        {{ element.availability }}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"influencer\">\n      <mat-header-cell *matHeaderCellDef> Influencer</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">Influencer:</span>\n        {{ element.influencerName }}\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSize]=\"[8]\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/inventory/inventory.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Components/inventory/inventory.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/inventory/inventory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/inventory/inventory.component.ts ***!
  \*************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var InventoryComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function InventoryComponent(fb, inventoryService, http) {
        this.fb = fb;
        this.inventoryService = inventoryService;
        this.http = http;
        this.displayedColumns = [
            "invid",
            "bookid",
            "bookname",
            "owner",
            "bookvalue",
            "rantalvalue",
            "availability",
            "influencer"
        ];
        this.ELEMENT_DATA = [];
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem("roleId");
        this.getinventory();
    };
    InventoryComponent.prototype.getinventory = function () {
        var _this = this;
        this.inventoryService.getinventory().subscribe(function (data) {
            // console.log(data);
            _this.ELEMENT_DATA = data.results;
            // console.log('elementData', this.ELEMENT_DATA);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    InventoryComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "false");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], InventoryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], InventoryComponent.prototype, "sort", void 0);
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-inventory",
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/Components/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/Components/inventory/inventory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/Components/layout/home-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Components/layout/home-layout.component.ts ***!
  \************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-layout',
            template: "\n    <app-dashboard></app-dashboard>\n\n  "
        })
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/Components/layout/login-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/layout/login-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-layout',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split left\">\n  <!-- <img mat-card-image src=\"./../../assets/images/Group.png\" alt=\"Photo of a Shiba Inu\"> -->\n\n  <p class=\"About-WiseReads\">About WiseReads</p>\n  <div class=\"content-box\">\n    <p class=\"content\">\n      Wisereads is proud to introduce one of the most awaited and affordable\n      book rental platform for individuals, kids, students, and corporates\n      across the country. Wisereads Book Rental Library provides hassle-free\n      availability of books at a very affordable price.\n    </p>\n\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <mat-card-title class=\"bottom-contact\">\n          <h5>Support</h5>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n        </mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n        <div class=\"cnt-spt\">\n          Call: +914029801891 <br />\n          Email: wisereads1@gmail.com\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n<div class=\"split right\">\n  <div class=\"centered\">\n    <div class=\"wiseReads-box\">\n      <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n      <div class=\"login-heading\">\n        <img\n          src=\"../../../assets/images/wiseReads.svg\"\n          style=\"width: 230px;border-radius: 0PX;\"\n        />\n        <p class=\"Login\">Login</p>\n      </div>\n      <div class=\"form1\">\n        <form [formGroup]=\"loginForm\">\n          <!-- <div class=\"field1\"> -->\n          <div class=\"mt-4\">\n            <input\n              class=\"login-fields\"\n              placeholder=\"User Name\"\n              type=\"text\"\n              name=\"email\"\n              [(ngModel)]=\"user.email\"\n              required\n              email\n              formControlName=\"email\"\n              class=\"form-control\"\n              autofocus\n            />\n\n            <!-- <div *ngIf=\"loginForm.controls['email'].errors && !loginForm.controls['email'].pristine\" class=\"invalid-feedback\">\n                            <div [hidden]=\"!loginForm.controls['email'].errors.required\">Username is required</div>\n                      </div> -->\n            <div\n              *ngIf=\"\n                loginForm.controls['email'].invalid &&\n                (loginForm.controls['email'].dirty ||\n                  loginForm.controls['email'].touched)\n              \"\n              class=\"alert-danger\"\n            >\n              <div [hidden]=\"!loginForm.controls['email'].errors.required\">\n                Username is required.\n              </div>\n              <div [hidden]=\"!loginForm.controls['email'].errors.email\">\n                Enter valid username\n              </div>\n            </div>\n          </div>\n          <div class=\"mt-4\">\n            <input\n              class=\"login-fields\"\n              placeholder=\"Password\"\n              type=\"password\"\n              name=\"password\"\n              [(ngModel)]=\"user.password\"\n              required\n              formControlName=\"password\"\n              class=\"form-control\"\n            />\n            <!-- <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                      </div> -->\n\n            <div\n              *ngIf=\"\n                loginForm.controls['password'].invalid &&\n                (loginForm.controls['password'].dirty ||\n                  loginForm.controls['password'].touched)\n              \"\n              class=\"alert-danger\"\n            >\n              <div [hidden]=\"!loginForm.controls['password'].errors.required\">\n                Password is required.\n              </div>\n            </div>\n          </div>\n          <div class=\"login-btn mt-4\">\n            <!-- <a style=\"float:left\" routerLink=\"/register\">New user? Register here!</a> &nbsp; -->\n            <!-- <a routerLink=\"register\">New user? Register here!</a> &nbsp; -->\n            <!-- <button  mat-raised-button (click)=\"signIn()\" style=\"background-color: #2fc7f5 ;color: #ffffff\">LOGIN <i class=\"fa fa-sign-in\"></i></button> -->\n\n            <button\n              *ngIf=\"!loginForm.invalid\"\n              [disabled]=\"loginForm.invalid\"\n              mat-raised-button\n              (click)=\"signIn()\"\n              style=\"background-color: #2fc7f5 ;color: #ffffff\"\n            >\n              LOGIN <i class=\"fa fa-sign-in\"></i>\n            </button>\n            <button\n              *ngIf=\"loginForm.invalid\"\n              [disabled]=\"loginForm.invalid\"\n              mat-raised-button\n              (click)=\"signIn()\"\n              style=\"background-color: #c5ebf7 ;color: #ffffff\"\n            >\n              LOGIN <i class=\"fa fa-sign-in\"></i>\n            </button>\n          </div>\n          <!-- </div> -->\n          <a style=\"float:left;margin-top: 10px\" routerLink=\"/register\"\n            >New user? Register here!</a\n          >\n          &nbsp;\n        </form>\n      </div>\n    </div>\n    <!-- <div class=\"login-box\">\n    <p class=\"Login\">Login</p>\n</div>\n\n\n    <form class=\"\" #LoginForm=\"ngForm\">\n      <div class=\"field1\">\n        <mat-form-field >\n            <input matInput placeholder=\"User Name\" name=\"email\" [(ngModel)]=\"user.email\"\n                #email=\"ngModel\" required autofocus>\n        </mat-form-field>\n        <mat-form-field >\n            <input matInput placeholder=\"Password\" type=\"password\" name=\"password\"\n                [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n        </mat-form-field>\n      </div>\n    </form> -->\n\n    <!-- <button class=\"login-btn\" [disabled]=\"!LoginForm.form.valid\" mat-raised-button\n                                (click)=\"logIn()\" color=\"primary\">Sign In <i class=\"fal fa-sign-in\"></i></button> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial;\n  color: white;\n  width: 100vh;\n  height: 100vh;\n  font-size: 16px; }\n\n.split {\n  height: 100%;\n  width: 50%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  overflow-x: hidden; }\n\n.left {\n  width: 20vw;\n  height: 100vh;\n  left: 0;\n  background-image: url('Group.png'), linear-gradient(to right, #bcd5ff, #6868e9); }\n\n.right {\n  width: 80vw;\n  height: 100vh;\n  right: 0;\n  background-color: #f5f5f5;\n  background-image: url('Group2_.png'); }\n\n.centered {\n  width: 100%;\n  position: relative;\n  text-align: center;\n  height: 100vh; }\n\n.centered img {\n  width: 150px;\n  border-radius: 50%; }\n\n.About-WiseReads {\n  font-family: Montserrat;\n  font-size: 1.5em;\n  font-weight: 600;\n  text-align: left;\n  color: #ffffff;\n  padding: 2vw 0 1vw 2vw;\n  margin: 0; }\n\n.wiseReads-box {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 0;\n  top: 0;\n  width: 35vw;\n  height: 49vh; }\n\n.content-box {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  height: calc(100% - 5vw); }\n\n.content {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.88;\n  letter-spacing: normal;\n  text-align: left; }\n\n.login-box {\n  width: 128px;\n  height: 54px; }\n\n.form1 {\n  margin: 20px; }\n\n.wiseReads-box mat-form-field {\n  width: 30vw; }\n\n.example-card {\n  max-width: 400px;\n  margin-top: 168px; }\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: absolute;\n  padding: 16px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  left: 20px;\n  right: 20px;\n  bottom: 20px; }\n\n.cnt-spt {\n  font-family: Montserrat;\n  font-size: 15px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.9;\n  letter-spacing: normal;\n  text-align: left;\n  color: #6e6e6e; }\n\n.login-heading {\n  display: -webkit-flex;\n  display: flex;\n  margin: 0px 40px; }\n\n.login-heading .WiseReads {\n    font-size: 40px;\n    font-weight: 600;\n    color: #6869e9;\n    margin-right: auto; }\n\n.login-heading .Login {\n    font-size: 40px;\n    font-weight: 600;\n    color: #3bccf6;\n    margin-left: auto; }\n\n.login-fields {\n  width: 30vw;\n  height: 5vh;\n  padding: 20px;\n  margin-bottom: 35px;\n  border: 0.5px solid #c8c8c8; }\n\n.login-btn {\n  display: -webkit-flex;\n  display: flex;\n  float: right;\n  margin-right: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixPQUFPO0VBQ1AsK0VBQXNHLEVBQUE7O0FBRzFHO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLG9DQUEyRCxFQUFBOztBQUcvRDtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsU0FDSixFQUFBOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBSWY7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseURBQXlEO0VBQ3pELGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUNKLEVBQUE7O0FBRUE7RUFDSSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFQMUI7SUFVUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0kscUJBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1zaXplOiAxNnB4XG59XG5cbi5zcGxpdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxlZnQge1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwLnBuZ1wiKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmNkNWZmLCAjNjg2OGU5KTtcbn1cblxuLnJpZ2h0IHtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwMl8ucG5nJyk7XG59XG5cbi5jZW50ZXJlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2VudGVyZWQgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uQWJvdXQtV2lzZVJlYWRzIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAydncgMCAxdncgMnZ3O1xuICAgIG1hcmdpbjogMFxufVxuXG4ud2lzZVJlYWRzLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDM1dnc7XG4gICAgaGVpZ2h0OiA0OXZoO1xufVxuXG4uY29udGVudC1ib3gge1xuICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDV2dyk7XG59XG5cbi5jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuODg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubG9naW4tYm94IHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xufVxuXG4uZm9ybTEge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLndpc2VSZWFkcy1ib3ggbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMHZ3O1xufVxuXG5cbi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTY4cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAyMHB4XG59XG5cbi5jbnQtc3B0IHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuOTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICM2ZTZlNmU7XG59XG5cbi5sb2dpbi1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMHB4IDQwcHg7XG4gICAgLldpc2VSZWFkcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM2ODY5ZTk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gICAgLkxvZ2luIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzNiY2NmNjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxufVxuXG4ubG9naW4tZmllbGRzIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDN2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");






var LoginComponent = /** @class */ (function () {
    // user: object = {
    //   email: 'satish@omniwyse.com',
    //   password: 'satish'
    // };
    function LoginComponent(route, router, toastr, loginService, formBuilder) {
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.user = {};
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['/login']);
        }
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app-dashboard';
        this.returnUrl = localStorage.getItem("url") || '/app-dashboard';
        console.log("returnUrl", this.returnUrl, this.route.snapshot.queryParams['returnUrl']);
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        localStorage.clear();
        this.loginService.logIn(this.user).subscribe(function (data) {
            // console.log(data, data.success);
            localStorage.setItem("Token", data.resultsMap.sessionToken);
            localStorage.setItem("roleId", data.resultsMap.userDetails.userRoles[0].roleId);
            localStorage.setItem("UserId", data.resultsMap.userDetails.userRoles[0].userId);
            localStorage.setItem("createdBy", data.resultsMap.userDetails.userRoles[0].createdBy);
            localStorage.setItem("userEmail", data.resultsMap.userDetails.email);
            localStorage.setItem("username", data.resultsMap.userDetails.firstName +
                " " +
                data.resultsMap.userDetails.lastName);
            localStorage.setItem("cobC", 'true');
            localStorage.setItem("isHome", 'false');
            if (data.success === true) {
                _this.router.navigateByUrl(_this.returnUrl);
                // location.assign('/app-dashboard')
            }
            else {
                _this.toastr.error("Invalid credentials");
            }
        }, function (error) {
            _this.toastr.error("Please enter valid email and password");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/Components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"split left\">\n    <p class=\"About-WiseReads\">About WiseReads</p>\n    <div class=\"content-box\">\n        <p class=\"content\">Wisereads is proud to introduce one of the most awaited and affordable book rental platform for\n                individuals, kids, students, and corporates across the country. Wisereads Book Rental Library provides\n                hassle-free availability of books at a very affordable price.\n        </p>\n\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                <mat-card-title class=\"bottom-contact\">\n                    <h5>Support</h5>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                </mat-card-title>\n                <!-- <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n            </mat-card-header>\n\n            <mat-card-content>\n                <div class=\"cnt-spt\">\n                    Call: +914029801891 <br> Email: wisereads1@gmail.com\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n\n</div>\n\n<div class=\"split right\">\n    <div class=\"centered\">\n\n        <div class=\"wiseReads-box\">\n            <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n            <div class=\"login-heading\">\n                \n                <img src=\"../../../assets/images/wiseReads.svg\" style=\"width: 230px;border-radius: 0PX;\">\n                <p class=\"Login\">Register</p>\n            </div>\n            <div class=\"form1\">\n              \n                <form class=\"registration-form\"  [formGroup]=\"registerForm\" >\n                    <div class=\"row\" >\n                      <div class=\"col-md-6 mt-4\">\n                            <input \n                              placeholder=\"First Name\"\n                              type=\"text\"\n                              name=\"firstName\"\n                              [(ngModel)]=\"addUser.firstName\"\n                              pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n                              required\n                              formControlName=\"firstName\"\n                              class=\"form-control\" \n                              [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                            />\n                            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                  <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                            </div>\n                      </div>\n        \n                      <div class=\"col-md-6 mt-4\">\n                              <input \n                                placeholder=\"Last Name\"\n                                type=\"text\"\n                                name=\"lastName\"\n                                [(ngModel)]=\"addUser.lastName\"\n                              \n                                pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n                                required\n                                formControlName=\"lastName\" \n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\n                              />\n                              <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                              </div>\n                      </div>\n        \n                      <div class=\"col-md-6 mt-4\">\n                            <select placeholder=\"Select Gender\" \n                                    class=\"login-fields\"\n                                    name=\"genderId\" \n                                    id=\"genderId\" \n                                    [(ngModel)]=\"addUser.genderId\" \n                                    formControlName=\"genderId\" \n                                    class=\"form-control\" \n                                    [ngClass]=\"{ 'is-invalid': submitted && f.genderId.errors }\" \n                            >\n                                    <option value=\"undefined\" hidden>Gender</option>\n                                    <option *ngFor=\"let id of gender\" [value]=\"id.gender_id\" (onSelectionChange)=\"comboGender($event,id)\">             \n                                        {{id.gender}}\n                                    </option>\n                            </select>\n                            <div *ngIf=\"submitted && f.genderId.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.genderId.errors.required\">Please select Gender</div>\n                            </div>\n                      </div>\n        \n                      <div class=\"col-md-6 mt-4\">\n                              <input\n                                placeholder=\"Phone Number\"\n                                name=\"contactNumber\"\n                                [(ngModel)]=\"addUser.contactNumber\"\n                                class=\"login-fields\"\n                                pattern=\"^[0-9-]{10}$\"\n                                required\n                                formControlName=\"contactNumber\" \n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': submitted && f.contactNumber.errors }\"\n                              />\n                              <div *ngIf=\"submitted && f.contactNumber.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.contactNumber.errors.required\">Phone Number is required</div>\n                                    <div *ngIf=\"f.contactNumber.errors.pattern\">Phone Number is incorrect</div>\n                              </div>\n                      </div>\n                      \n                      <div class=\"col-md-6 mt-4\">\n                          <textarea\n                            class=\"login-fields\"\n                            placeholder=\"House Address\"\n                            type=\"text\"\n                            name=\"address\"\n                            [(ngModel)]=\"addUser.address\"\n                            required\n                            formControlName=\"address\" \n                            class=\"form-control\" \n                            style=\"height: 100px;\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"\n                          ></textarea>\n                          <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                          </div>\n                  </div>\n                      <div class=\"col-md-6 mt-4\">\n                        <div class=\"row\">\n              \n                          <div class=\"col-md-12 \">\n                                  <input\n                                    class=\"login-fields\"\n                                    placeholder=\"Company Name\"\n                                    type=\"text\"\n                                    name=\"company\"\n                                    [(ngModel)]=\"addUser.company\"\n                                    pattern=\"^[a-zA-Z0-9- ]{1,30}$\"\n                                    required\n                                    formControlName=\"company\" \n                                    class=\"form-control\" \n                                    [ngClass]=\"{ 'is-invalid': submitted && f.company.errors }\"\n                                  />\n                                  <div *ngIf=\"submitted && f.company.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.company.errors.required\">Company Name is required</div>\n                                  </div>\n                        \n                          </div>\n\n                          <div class=\"col-md-12 mt-4\">\n                              <input\n                              class=\"login-fields\"\n                              placeholder=\"Email\"\n                              type=\"text\"\n                              name=\"email\"\n                              [(ngModel)]=\"addUser.email\"\n                              required\n                              email\n                              formControlName=\"email\" \n                              class=\"form-control\" \n                              [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                            />\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                  <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                            </div>\n                          </div>\n                        </div>\n                              \n                      </div>\n        \n                      <div class=\"col-md-6 mt-4\">\n                        \n                              <input\n                                class=\"login-fields\"\n                                placeholder=\"Password\"\n                                type=\"password\"\n                                name=\"password\"\n                                [(ngModel)]=\"addUser.password\"\n                                required\n                                formControlName=\"password\" \n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                              />\n                              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.password.errors.required\">Passwords is required</div>\n                                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                              </div>\n                      </div>\n        \n                      <div class=\"col-md-6 mt-4\">\n                              <input\n                                class=\"login-fields\"\n                                placeholder=\"Confirm Password\"\n                                type=\"password\"\n                                name=\"confirmPassword\"\n                                required\n                                formControlName=\"confirmPassword\" \n                                class=\"form-control\" \n                                [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\n                              />\n                              <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                              </div>\n                          \n                      </div>\n        \n                      <div class=\"col-md-12 mt-4\" style=\"display: flex;justify-content: flex-start;align-items: center;\">\n                        <a routerLink=\"/login\"> Already a user: Login&nbsp;&nbsp;<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i></a>\n                          <button mat-raised-button  \n                                  (click)=\"saveUser()\"  \n                                  style=\" width: 7vw;\n                                  height: 40px;\n                                  margin-left: auto;\n                                  background-image: linear-gradient(to bottom, #6fe3ff, #2fc7f5);\"\n                                  class=\"mat-raised-button mat-primary\">Register</button>\n                      </div>  \n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial;\n  color: white;\n  width: 100vh;\n  height: 100vh;\n  font-size: 16px; }\n\n.split {\n  height: 100%;\n  width: 50%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  overflow-x: hidden; }\n\n.left {\n  width: 20vw;\n  height: 100vh;\n  left: 0;\n  background-image: url('Group.png'), linear-gradient(to right, #bcd5ff, #6868e9); }\n\n.right {\n  width: 80vw;\n  height: 100vh;\n  right: 0;\n  background-color: #f5f5f5;\n  background-image: url('Group2_.png'); }\n\n.centered {\n  width: 100%;\n  position: relative;\n  text-align: center;\n  height: 100vh; }\n\n.centered img {\n  width: 150px;\n  border-radius: 50%; }\n\n.About-WiseReads {\n  font-family: Montserrat;\n  font-size: 1.5em;\n  font-weight: 600;\n  text-align: left;\n  color: #ffffff;\n  padding: 2vw 0 1vw 2vw;\n  margin: 0; }\n\n.wiseReads-box {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 0;\n  top: 50%;\n  width: 45vw;\n  height: 100%; }\n\n.content-box {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  height: calc(100% - 5vw); }\n\n.content {\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.88;\n  letter-spacing: normal;\n  text-align: left; }\n\n.login-box {\n  width: 128px;\n  height: 54px; }\n\n.form1 {\n  margin: 20px; }\n\n.wiseReads-box mat-form-field {\n  width: 30vw; }\n\n.example-card {\n  max-width: 400px;\n  margin-top: 168px; }\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: absolute;\n  padding: 16px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  left: 20px;\n  right: 20px;\n  bottom: 20px; }\n\n.cnt-spt {\n  font-family: Montserrat;\n  font-size: 15px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.9;\n  letter-spacing: normal;\n  text-align: left;\n  color: #6e6e6e; }\n\n.login-heading {\n  display: -webkit-flex;\n  display: flex;\n  margin: 0px 40px; }\n\n.login-heading .WiseReads {\n    font-size: 32px;\n    font-weight: 600;\n    color: #6869e9;\n    margin-right: auto; }\n\n.login-heading .Login {\n    font-size: 40px;\n    font-weight: 600;\n    color: #3bccf6;\n    margin-left: auto;\n    margin-bottom: 0px;\n    margin-top: 6px; }\n\n.login-btn {\n  display: -webkit-flex;\n  display: flex;\n  float: right;\n  margin-right: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixPQUFPO0VBQ1AsK0VBQXNHLEVBQUE7O0FBRzFHO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLG9DQUEyRCxFQUFBOztBQUcvRDtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsU0FDSixFQUFBOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBSWY7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseURBQXlEO0VBQ3pELGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUNKLEVBQUE7O0FBRUE7RUFDSSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFQMUI7SUFVUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFLdkI7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LXNpemU6IDE2cHhcbn1cblxuLnNwbGl0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubGVmdCB7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXAucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiY2Q1ZmYsICM2ODY4ZTkpO1xufVxuXG4ucmlnaHQge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXAyXy5wbmcnKTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jZW50ZXJlZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5BYm91dC1XaXNlUmVhZHMge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDJ2dyAwIDF2dyAydnc7XG4gICAgbWFyZ2luOiAwXG59XG5cbi53aXNlUmVhZHMtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0NXZ3O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1dncpO1xufVxuXG4uY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg4O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxvZ2luLWJveCB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogNTRweDtcbn1cblxuLmZvcm0xIHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi53aXNlUmVhZHMtYm94IG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMzB2dztcbn1cblxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi10b3A6IDE2OHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweFxufVxuXG4uY250LXNwdCB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjNmU2ZTZlO1xufVxuXG4ubG9naW4taGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDBweCA0MHB4O1xuICAgIC5XaXNlUmVhZHMge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNjg2OWU5O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5Mb2dpbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMzYmNjZjY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cblxuLmxvZ2luLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers */ "./src/app/_helpers/index.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(saveUserService, router, toastr, formBuilder) {
        this.saveUserService = saveUserService;
        this.router = router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.addUser = {};
        this.submitted = false;
        this.gender = [{
                gender_id: 1,
                gender: 'male'
            },
            {
                gender_id: 2,
                gender: 'female'
            },
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['/register']);
        }
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            genderId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
            validator: Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.saveUser = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.addUser.createdBy = this.addUser.firstName;
        this.addUser.userStatusId = '1';
        this.addUser.roleId = '4';
        this.saveUserService.saveuser(this.addUser).subscribe(function (data) {
            // console.log('register', data);
            console.log(data.message);
            if (data && data.resultsMap && data.resultsMap.user) {
                _this.toastr.success('Registration Successfully Done');
                _this.router.navigateByUrl('/login');
            }
            // this.toastr.warning("Email already registered");
        }, function (error) {
            // console.log(error.message)
            _this.toastr.warning("Email already registered");
        });
    };
    // loadComboBoxes() {
    //   const body = [
    //     'roles',
    //     'bookGenre',
    //     'gender',
    //     'bookCondition',
    //     'userStatus'
    //   ];
    //   this.saveUserService.loadComboDropDowns(body).subscribe(
    //     (data: any) => {
    //       if (data) {
    //         // console.log('comboDropDowns', data);
    //         this.comboBoxesDataGender = data.result.gender;
    //         console.log('gender',this.comboBoxesDataGender)
    //       }
    //     },
    //     error => {
    //       this.toastr.warning(error.error.message);
    //     }
    //   );
    // }
    RegisterComponent.prototype.comboGender = function ($event, id) {
        if ($event.source.selected) {
            this.addUser.genderId = id.gender_id;
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/Components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <hr /> Value from Parent using @Input: <strong>{{searchTerm}}</strong>\n<div *ngIf=\"results\" class=\"mt-5\" style=\"z-index: 1;\">\n  <mat-card class=\"total-books\"  *ngFor=\"let result of results | slice:0:9\">\n    <mat-card-header>\n      <mat-card-title>\n          <img class=\"books\" src=\"{{result.imgUrl}}\">\n      </mat-card-title>\n      <mat-card-subtitle>\n        {{ result.title }}\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      {{result.description}}\n    </mat-card-content>\n  </mat-card>\n</div> -->\n\n      <div class=\"search\">\n          <!-- <input matInput placeholder=\"Search Book / User / Genre / Author\"> -->\n          <input matInput placeholder=\"Search Book / Genre / Author\" \n          (keyup)=\"searchTerm$.next($event.target.value);checkC()\" (click)=\"checkC()\">\n\n          <div class=\"search-result\">\n            <mat-card class=\"books-search\"  *ngFor=\"let result of results | slice:0:9\">\n              <mat-card-header>\n                <mat-card-title>\n                    <img class=\"books\" src=\"{{result.imgUrl}}\">\n                </mat-card-title>\n                <mat-card-subtitle>\n                  {{ result.title }}\n                </mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n                {{result.description}}\n              </mat-card-content>\n            </mat-card>\n          </div>\n          \n         \n      </div>"

/***/ }),

/***/ "./src/app/Components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-result {\n  position: absolute;\n  z-index: 1;\n  height: 500px;\n  width: 500px;\n  background-color: #ffff;\n  overflow-y: scroll; }\n  .search-result .books-result {\n    margin: 20px;\n    width: 450px; }\n  .search-result .books-img {\n    width: 100px;\n    height: 100px; }\n  p {\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBO0VBTnRCO0lBUU0sWUFBVztJQUNYLFlBQVcsRUFBQTtFQVRqQjtJQVlNLFlBQVc7SUFDWCxhQUFhLEVBQUE7RUFNakI7RUFDSSxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXJlc3VsdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOjUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAuYm9va3MtcmVzdWx0e1xuICAgICAgbWFyZ2luOjIwcHg7XG4gICAgICB3aWR0aDo0NTBweDtcbiAgICB9XG4gICAgLmJvb2tzLWltZ3tcbiAgICAgIHdpZHRoOjEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG5cbiAgcHtcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/Components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(breakpointObserver, router, searchService) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.searchService = searchService;
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            console.log('search:', results);
            _this.results = results.resultsMap.books;
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/Components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/Components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/Components/single-book/single-book.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/single-book/single-book.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"isHome=='true'\">\n\n    <!-- <app-header></app-header> -->\n    <div class=\"header-section affix\">\n        <div class=\"wisereads-logo\">\n          <img\n            src=\"../../../assets/images/wiseReads.svg\"\n            style=\"width: 300px;height: 44px;    box-shadow: none; cursor: pointer;\"\n            routerLink=\"/\"\n          />\n        </div>\n      \n        <div class=\"search-bar-set\">\n          <form class=\"alignSearch\">\n            <div>\n              <div class=\"search-bar\">\n                <input\n                  class=\"search-input\"\n                  type=\"text\"\n                  placeholder=\"Search Book\"\n                  [formControl]=\"searchTerm\"\n                  #box\n                  (keyup)=\"onKeyUp(box)\"\n                  [matAutocomplete]=\"auto\"\n                />\n                <i class=\"fa fa-search\"></i>\n              </div>\n      \n              <mat-autocomplete #auto=\"matAutocomplete\">\n                <ng-container *ngIf=\"myBooks.length > 0\">\n                  <mat-option *ngFor=\"let books of myBooks\" [value]=\"books.value\"\n                  (click)=\"reload(books.bookId)\"\n                      >                   \n                      {{ books.title }}\n                  </mat-option>\n                </ng-container>\n                <ng-container *ngIf=\"myBooks.length == 0 && box.value.length >= 3\">\n                  <mat-option class=\"option-result\">\n                    <p class=\"noresult\">No Result Found</p>\n                  </mat-option>\n                </ng-container>\n              </mat-autocomplete>\n            </div>\n          </form>\n        </div>\n        <div class=\"link-section\">\n          <a routerLink=\"/register\"\n            ><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Register</a\n          >\n          <a routerLink=\"/login\"\n            ><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Login</a\n          >\n        </div>\n      </div>\n      \n\n\n\n    <section class=\"container-fluid mb-5\">\n        <!-- <ngx-spinner bdColor=\"rgba(0,0,0,0.8)\" size=\"medium\" color=\"#e40000\" type=\"ball-clip-rotate\"></ngx-spinner> -->\n\n        <div class=\"book-details\" *ngIf=\"product; else noData\">\n          <h5 class=\"book-title\">{{ product.title }}</h5>\n          <div\n            class=\"book-header\"\n            fxLayout\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"left\"\n            fxLayoutGap=\"10px\"\n            fxLayoutGap.xs=\"0\"\n          >\n            <div fxFlex=\"15%\">\n              <img class=\"book-img\" src=\"{{ product.imagesUrl1 }}\" />\n            </div>\n            <div>\n              <p class=\"book-desc\">{{ product.bookDescription }}</p>\n            </div>\n          </div>\n    \n          <div\n            class=\"book-cont\"\n            fxLayout\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"left\"\n            fxLayoutGap=\"10px\"\n            fxLayoutGap.xs=\"0\"\n          >\n            <div fxFlex=\"50%\">\n              <ul style=\"list-style: none; \">\n                <li>\n                  Author: <span>{{ product.author }}</span>\n                </li>\n                <li>\n                  Genre: <span>{{ product.genre }}</span>\n                </li>\n                <li>Language: <span>English</span></li>\n                <li>\n                  publisher: <span>{{ product.publisher }}</span>\n                </li>\n                <li>\n                  Edition: <span>{{ product.edition }}</span>\n                </li>\n                <li>\n                  Price: <span>{{ product.bookPrice }}</span>\n                </li>\n              </ul>\n            </div>\n    \n            <div fxFlex=\"50%\">\n              <ul style=\"list-style: none;\">\n                <li>\n                  Rental Value: <span>Rs. {{ product.rentPerDay }}</span>\n                </li>\n                <li *ngIf=\"isUser == '1' || isUser == '2'\">\n                  Owner:\n                  <span\n                    >{{ product.ownerFirstName }}\n                    {{ product.ownerLastName }}</span\n                  >\n                </li>\n                <li>\n                  Publication Date:\n                  <span>{{ product.publicationDate | date }}</span>\n                </li>\n                <li>\n                  No. of pages: <span>{{ product.numberOfPages }}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"book-footer\">\n            <button\n              class=\"checkout\"\n              *ngIf=\"cobC == 'true' && isHome == 'false'\"\n              mat-button\n              mat-raised-button\n              (click)=\"openModal(template)\"\n            >\n              CheckOut Now\n            </button>\n            <!-- <button\n              style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n              *ngIf=\"cobC == 'true' && isHome == 'false'\"\n              mat-button\n              (click)=\"routerNav()\"\n            >\n              Back\n            </button>\n            <button\n              style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n              *ngIf=\"id2==1 || id2==2 || id2==3 || id2==4\"\n              mat-button\n              (click)=\"routerNav2()\"\n            >\n              Back\n            </button> -->\n            <button\n              class=\"checkout\"\n              *ngIf=\"isHome == 'true'\"\n              mat-button\n              mat-raised-button\n              (click)=\"navigate()\"\n            >\n              CheckOut Now\n            </button>\n            <button\n              style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n              *ngIf=\"isHome == 'true'\"\n              mat-button\n              routerLink=\"/\"\n            >\n              Back\n            </button>\n    \n            <ng-template #template>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">CheckOut</h4>\n                <button\n                  type=\"button\"\n                  class=\"close pull-right\"\n                  aria-label=\"Close\"\n                  (click)=\"modalRef.hide()\"\n                >\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div>\n                  <div class=\"example-container\">\n                    <form name=\"myForm\" [formGroup]=\"form\">\n                      <div>\n                        <input\n                          formControlName=\"checkoutdata\"\n                          placeholder=\"Checkout Date\"\n                          class=\"form-control\"\n                          bsDatepicker\n                        />\n                      </div>\n                      <br />\n                      <div>\n                        <input\n                          formControlName=\"duedate\"\n                          placeholder=\"Due Date\"\n                          class=\"form-control\"\n                          bsDatepicker\n                        />\n                      </div>\n                      <br />\n                      <div>\n                        <input\n                          class=\"form-control\"\n                          formControlName=\"adv\"\n                          placeholder=\"Adv Amt\"\n                        />\n                      </div>\n                      <br />\n                      <!-- <br /> -->\n                      <div >\n                      Rent per day: {{product.rentPerDay}}\n                    </div>\n                    <br>\n                      <button\n                        style=\"float:right; background-color: #2fc7f5 ;color: #ffffff; margin-left: 5px\"\n                        mat-button\n                        color=\"primary\"\n                        (click)=\"checkoutbook(form.value)\"\n                      >\n                        CheckOut\n                      </button>\n    \n                      <button\n                        style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n                        mat-button\n                        (click)=\"modalRef.hide()\"\n                        type=\"button\"\n                        color=\"primary\"\n                      >\n                        Cancel\n                      </button>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n        <ng-template #noData class=\"noData\">\n            <!-- <ngx-spinner bdColor=\"rgba(0,0,0,0.8)\" size=\"medium\" color=\"#e40000\" type=\"ball-clip-rotate\"></ngx-spinner> -->\n\n          <h4 class=\"noData\">No Data Found</h4>\n            <!-- <img src=\"../../../assets/images/brokenBook.jpg\" height=\"200px\" /> -->\n        </ng-template>\n      </section>\n    \n  <app-footer></app-footer>\n\n  </section>\n  \n\n<section *ngIf=\"isHome=='false'\">\n  <mat-sidenav-container class=\"sidenav-container\">\n      <mat-sidenav\n        #drawer\n        class=\"sidenav\"\n        fixedInViewport\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n        [opened]=\"(isHandset$ | async) !== true\"\n      >\n        <mat-toolbar class=\"main-name\">\n          <img\n            src=\"../../../assets/images/wiseReads.svg\"\n            style=\"width: 300px;height: 44px;    box-shadow: none; cursor: pointer;\"\n            routerLink=\"/\"\n          />\n        </mat-toolbar>\n        <mat-nav-list class=\"menu-items\">\n          <a\n            *ngIf=\"isHome == 'false'\"\n            mat-list-item\n            style=\"cursor: pointer\"\n            routerLink=\"/cards\"\n            [routerLinkActive]=\"['is-active']\"\n            >Dashboard</a\n          >\n    \n          <div *ngIf=\"isUser == 4\">\n            <!-- <a mat-list-item  style=\"cursor: pointer\" routerLink=\"/book_list\" [routerLinkActive]=\"['is-active']\">Book List</a> -->\n            <a\n              mat-list-item\n              routerLink=\"/app-book-list-cards\"\n              [routerLinkActive]=\"['is-active']\"\n              >Book List</a\n            >\n    \n            <!-- <a mat-list-item style=\"cursor: pointer\" (click)=\"userbooks()\" [routerLinkActive]=\"['is-active']\">Checkout & Checkin List</a> -->\n          </div>\n    \n          <div *ngIf=\"isUser == 2 || isUser == 1\">\n            <a\n              mat-list-item\n              style=\"cursor: pointer\"\n              routerLink=\"/book_list\"\n              [routerLinkActive]=\"['is-active']\"\n              >Book List</a\n            >\n            <!-- <a mat-list-item routerLink=\"/app-book-list-cards\" [routerLinkActive]=\"['is-active']\">Book List Cards</a> -->\n    \n            <a\n              mat-list-item\n              style=\"cursor: pointer\"\n              routerLink=\"/inventory\"\n              [routerLinkActive]=\"['is-active']\"\n              >Inventory</a\n            >\n    \n            <a\n              mat-list-item\n              style=\"cursor: pointer\"\n              routerLink=\"/checkout-books\"\n              [routerLinkActive]=\"['is-active']\"\n              >Checkout & Checkin List</a\n            >\n    \n            <a\n              mat-list-item\n              routerLink=\"/app-users-list\"\n              [routerLinkActive]=\"['is-active']\"\n              >Users</a\n            >\n            <!-- <a mat-list-item routerLink=\"/app-assign-roles\" [routerLinkActive]=\"['is-active']\">Assign Roles</a> -->\n          </div>\n          <mat-expansion-panel *ngIf=\"isHome == 'false'\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                My books\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n    \n            <a\n              mat-list-item\n              style=\"cursor: pointer\"\n              [routerLink]=\"['/book-status', userID, 1]\"\n              [routerLinkActive]=\"['is-active']\"\n              >To be delivered</a\n            >\n    \n            <a\n              mat-list-item\n              style=\"cursor: pointer\"\n              [routerLink]=\"['/book-status', userID, 2]\"\n              [routerLinkActive]=\"['is-active']\"\n              >Delivered</a\n            >\n    \n            <a\n              mat-list-item\n              style=\"cursor: pointer\"\n              [routerLink]=\"['/book-status', userID, 3]\"\n              [routerLinkActive]=\"['is-active']\"\n              >Ready to pickup</a\n            >\n          </mat-expansion-panel>\n          <a\n            *ngIf=\"isHome == 'false'\"\n            mat-list-item\n            style=\"cursor: pointer\"\n            [routerLink]=\"['/book-status', userID, 4]\"\n            [routerLinkActive]=\"['is-active']\"\n            >My History</a\n          >\n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <mat-toolbar class=\"menu-bar\">\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n          >\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n    \n          <div\n            fxLayout=\"row\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"10px\"\n            fxLayoutGap.xs=\"0\"\n            style=\"width: 100vw;\"\n          >\n            <div fxFlex=\"30%\" class=\"search-bar-set\">\n              <form >\n                <div>\n                  <div class=\"search-bar\">\n                    <input\n                      class=\"search-input\"\n                      type=\"text\"\n                      placeholder=\"Search Book / Genre / Author\"\n                      [formControl]=\"searchTerm\"\n                      #box\n                      (keyup)=\"onKeyUp(box)\"\n                      [matAutocomplete]=\"auto\"\n                    />\n                    <i class=\"fa fa-search\"></i>\n                  </div>\n    \n                  <mat-autocomplete #auto=\"matAutocomplete\">\n                    <ng-container *ngIf=\"myBooks.length > 0\">\n                      <mat-option\n                        *ngFor=\"let books of myBooks\"\n                        [value]=\"books.value\" \n                        (click)=\"reload(books.bookId)\"\n                      >                     \n                      {{ books.title }}\n                        </mat-option>\n                    </ng-container>\n                    <ng-container\n                      *ngIf=\"myBooks.length == 0 && box.value.length >= 3\"\n                    >\n                      <mat-option class=\"option-result\">\n                        <p class=\"noresult\">No Result Found</p>\n                      </mat-option>\n                    </ng-container>\n                  </mat-autocomplete>\n                </div>\n              </form>\n            </div>\n    \n            <div class=\"logout-section\" fxFlex=\"70%\">\n              <div class=\"float-right\">\n                <div *ngIf=\"isHome == 'false'\" class=\"btn-group\" dropdown>\n                  <div\n                    id=\"button-basic\"\n                    dropdownToggle\n                    style=\"cursor: pointer\"\n                    class=\"btn  dropdown-toggle\"\n                    aria-controls=\"dropdown-basic\"\n                  >\n                    <!-- <img mat-card-avatar src=\"../../../assets/images/support.png\" alt=\"img\"> -->\n                    <b>{{ name }}</b> <span class=\"caret\"></span>\n                  </div>\n                  <ul\n                    id=\"dropdown-alignment\"\n                    *dropdownMenu\n                    class=\"dropdown-menu dropdown-menu-right\"\n                    role=\"menu\"\n                    aria-labelledby=\"button-alignment\"\n                  >\n                    <li role=\"menuitem\">\n                      <a\n                        class=\"dropdown-item\"\n                        (click)=\"logOut()\"\n                        mat-list-item\n                        routerLinkActive=\"active\"\n                      >\n                        <i class=\"fa fa-sign-out\"></i> <span>Logout</span>\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-toolbar>\n        <div class=\"p-5\" class=\"main-container\">\n          <section class=\"container-fluid mb-5\">\n            <div class=\"book-details\" *ngIf=\"product\">\n              <h5 class=\"book-title\">{{ product.title }}</h5>\n              <div\n                class=\"book-header\"\n                fxLayout\n                fxLayout.xs=\"column\"\n                fxLayoutAlign=\"left\"\n                fxLayoutGap=\"10px\"\n                fxLayoutGap.xs=\"0\"\n              >\n                <div fxFlex=\"15%\">\n                  <img class=\"book-img\" src=\"{{ product.imagesUrl1 }}\" />\n                </div>\n                <div>\n                  <p class=\"book-desc\">{{ product.bookDescription }}</p>\n                </div>\n              </div>\n    \n              <div\n                class=\"book-cont\"\n                fxLayout\n                fxLayout.xs=\"column\"\n                fxLayoutAlign=\"left\"\n                fxLayoutGap=\"10px\"\n                fxLayoutGap.xs=\"0\"\n              >\n                <div fxFlex=\"50%\">\n                  <ul style=\"list-style: none; \">\n                    <li>\n                      Author: <span>{{ product.author }}</span>\n                    </li>\n                    <li>\n                      Genre: <span>{{ product.genre }}</span>\n                    </li>\n                    <li>Language: <span>English</span></li>\n                    <li>\n                      publisher: <span>{{ product.publisher }}</span>\n                    </li>\n                    <li>\n                      Edition: <span>{{ product.edition }}</span>\n                    </li>\n                    <li>\n                      Price: <span>{{ product.bookPrice }}</span>\n                    </li>\n                  </ul>\n                </div>\n    \n                <div fxFlex=\"50%\">\n                  <ul style=\"list-style: none;\">\n                    <li>\n                      Rental Value: <span>Rs. {{ product.rentPerDay }}</span>\n                    </li>\n                    <li *ngIf=\"isUser == '1' || isUser == '2'\">\n                      Owner:\n                      <span\n                        >{{ product.ownerFirstName }}\n                        {{ product.ownerLastName }}</span\n                      >\n                    </li>\n                    <li>\n                      Publication Date:\n                      <span>{{ product.publicationDate | date }}</span>\n                    </li>\n                    <li>\n                      No. of pages: <span>{{ product.numberOfPages }}</span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"book-footer\">\n                <button\n                  class=\"checkout\"\n                  *ngIf=\"cobC == 'true' && isHome == 'false'\"\n                  mat-button\n                  mat-raised-button\n                  (click)=\"openModal(template)\"\n                >\n                  CheckOut Now\n                </button>\n                <!-- <button\n                  style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n                  *ngIf=\"cobC == 'true' && isHome == 'false'\"\n                  mat-button\n                  (click)=\"routerNav()\"\n                >\n                  Back\n                </button>\n                <button\n                  style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n                  *ngIf=\"id2==1 || id2==2 || id2==3 || id2==4\"\n                  mat-button\n                  (click)=\"routerNav2()\"\n                >\n                  Back\n                </button> -->\n                <button\n                  class=\"checkout\"\n                  *ngIf=\"isHome == 'true'\"\n                  mat-button\n                  mat-raised-button\n                  (click)=\"navigate()\"\n                >\n                  CheckOut Now\n                </button>\n                <!-- <button\n                  style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n                  *ngIf=\"isHome == 'true' && cobC == 'true'\"\n                  mat-button\n                  routerLink=\"/\"\n                >\n                  Back\n                </button> -->\n    \n                <ng-template #template>\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">CheckOut</h4>\n                    <div style=\"padding-top: 7px;padding-left: 46%;\">\n                        Rent per day: {{product.rentPerDay}}\n                      </div>\n                    <button\n                      type=\"button\"\n                      class=\"close pull-right\"\n                      aria-label=\"Close\"\n                      (click)=\"modalRef.hide()\"\n                    >\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div>\n                      <div class=\"example-container\">\n                        <form name=\"myForm\" [formGroup]=\"form\">\n                          <div>\n                            <input\n                              formControlName=\"checkoutdata\"\n                              placeholder=\"Checkout Date\"\n                              class=\"form-control\"\n                              bsDatepicker\n                            />\n                          </div>\n                          <br />\n                          <div>\n                            <input\n                              formControlName=\"duedate\"\n                              placeholder=\"Due Date\"\n                              class=\"form-control\"\n                              bsDatepicker\n                            />\n                          </div>\n                          <br />\n                          <div>\n                            <input\n                              class=\"form-control\"\n                              formControlName=\"adv\"\n                              placeholder=\"Adv Amt\"\n                            />\n                          </div>\n                          <br />\n                          <!-- <br /> -->\n                          \n                        <br>\n                          <button\n                          *ngIf=\"form.valid\"\n                            style=\"float:right; background-color: #2fc7f5 ;color: #ffffff; margin-left: 5px\"\n                            mat-button\n                            color=\"primary\"\n                            (click)=\"checkoutbook(form.value)\"\n                            [disabled]=\"!form.valid\"\n                          >\n                            CheckOut\n                          </button>\n                          <button\n                          *ngIf=\"!form.valid\"\n                          style=\"float:right; background-color: #c5ebf7 ;color: #ffffff; margin-left: 5px\"\n                          mat-button\n                          color=\"primary\"\n                          (click)=\"checkoutbook(form.value)\"\n                          [disabled]=\"!form.valid\"\n                        >\n                          CheckOut\n                        </button>\n                          <button\n                            style=\"float:right;background-color: rgb(68, 66, 66) ;color: #ffffff\"\n                            mat-button\n                            (click)=\"modalRef.hide();createForm()\"\n                            type=\"button\"\n                            color=\"primary\"\n                          >\n                            Cancel\n                          </button>\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                </ng-template>\n              </div>\n            </div>\n          </section>\n        </div>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </section>\n\n"

/***/ }),

/***/ "./src/app/Components/single-book/single-book.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Components/single-book/single-book.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-details {\n  box-shadow: 0 3px 6px 0 rgba(157, 206, 255, 0.16);\n  background-color: #ffffff;\n  padding: 45px;\n  padding-top: 80px; }\n\n.book-title {\n  font-size: 24px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3bccf6;\n  padding-bottom: 30px; }\n\n.book-img {\n  width: 182px;\n  height: 245px; }\n\n.book-desc {\n  font-size: 18px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.67;\n  letter-spacing: normal;\n  text-align: left;\n  color: #7e7e7e;\n  margin-left: 20px; }\n\n.book-cont li {\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #707070; }\n\n.book-cont li span {\n    color: #000000;\n    font-weight: 500; }\n\n.book-footer .checkout {\n  background-image: linear-gradient(to bottom, #c694f9, #ab64f4);\n  color: #fff;\n  font-size: 18px;\n  height: 45px; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 19vw; }\n\n@media screen and (max-width: 1024px) {\n    .sidenav {\n      width: 280px; } }\n\n@media screen and (max-width: 600px) {\n    .sidenav {\n      width: 300px; } }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.menu-items {\n  margin-left: 1vw;\n  margin-top: 1vh; }\n\n.main-name {\n  color: #3bccf6;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  font-size: 35px;\n  font-weight: 900; }\n\n.menu-bar {\n  background-color: #ffff;\n  width: 100%; }\n\n.fa-search {\n  font-size: 28px;\n  color: #9f9f9f; }\n\n.mat-toolbar-row,\n.mat-toolbar-single-row {\n  height: 100px; }\n\n::-webkit-input-placeholder {\n  color: #9f9f9f;\n  opacity: 1;\n  /* Firefox */ }\n\n::-ms-input-placeholder {\n  color: #9f9f9f;\n  opacity: 1;\n  /* Firefox */ }\n\n::placeholder {\n  color: #9f9f9f;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #9f9f9f; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #9f9f9f; }\n\ntextarea:focus,\ninput:focus {\n  outline: none; }\n\n.is-active {\n  color: #3bccf6;\n  font-weight: 600; }\n\n.mat-nav-list a.active {\n  background: blue; }\n\n.add-bookbtn {\n  width: 240px;\n  height: 45px;\n  border-radius: 5px;\n  background-image: linear-gradient(to bottom, #6fe3ff, #2fc7f5);\n  color: #ffff;\n  font-size: 18px;\n  font-weight: 500; }\n\n.top-header {\n  display: -webkit-flex;\n  display: flex;\n  width: 75vw; }\n\n.top-header .search {\n    margin-right: auto; }\n\n.top-header .logo-set {\n    margin-left: auto; }\n\n.top-header .logo-set .logout {\n      font-size: 16px;\n      cursor: pointer; }\n\n.top-header .logo-set .logout i {\n        margin-right: 7px; }\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 70%;\n  border-radius: 20% !important; }\n\n::ng-deep .cdk-overlay-pane {\n  /* Do you changes here */\n  min-width: 50vw;\n  min-height: 100vh; }\n\n.noresult {\n  position: absolute;\n  left: 0;\n  display: table;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  text-align: center; }\n\n.option-result {\n  position: unset !important; }\n\n.logout-section {\n  margin-left: auto; }\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none; }\n\n.mat-expansion-panel-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  font-size: 16px;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0px 40px 0px 15px;\n  border-radius: inherit; }\n\n.menu {\n  height: 160px; }\n\n.search-bar {\n  display: -webkit-flex;\n  display: flex; }\n\n.item {\n  padding: 10px;\n  box-sizing: border-box; }\n\n.tile {\n  background-color: #ccc;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 800;\n  width: 400px;\n  background-repeat: no-repeat;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  min-height: 30vw !important;\n  background-size: cover !important; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  left: 20px; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  right: 20px; }\n\n.header-section {\n  display: -webkit-flex;\n  display: flex;\n  background-color: #fff;\n  width: 100%;\n  z-index: 9;\n  box-shadow: 0 0 3px #000;\n  position: fixed;\n  height: 69px; }\n\n.header-section .wisereads-logo {\n    display: -webkit-flex;\n    display: flex; }\n\n.header-section .fa-sign-in {\n    color: #0b4f82; }\n\n.header-section .link-section {\n    margin-top: 8px;\n    padding: 3vh; }\n\n.header-section a {\n    padding: 10px;\n    font-size: 18px;\n    color: #0b4f82; }\n\n.main-service {\n  padding: 7.5em 3em;\n  color: #fff; }\n\n.about-img {\n  background: url('students.jpg') no-repeat center; }\n\n.about-img h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.about-img2 {\n  background: url('kids.jpg') no-repeat center;\n  border: 1px solid #ffffff70; }\n\n.about-img2 h1 {\n    background: #ffffff70;\n    margin: 5em 3em;\n    padding: 50px;\n    text-align: center; }\n\n.blog-right-grids {\n  padding: 7em 5em; }\n\n.blog-right-grids p {\n  font-size: 14px;\n  color: #888888;\n  line-height: 25px; }\n\n.below-footer {\n  background-color: #000;\n  min-height: 60px;\n  width: 100%; }\n\n.below-footer h6 {\n  text-align: center;\n  padding-top: 4vh;\n  color: #ffff; }\n\n.wisereads-logo img {\n  padding: 10px 0 10px 50px;\n  width: 300px;\n  height: inherit !important; }\n\n.align {\n  margin-top: -23px;\n  margin-left: 18px; }\n\n.footer_align {\n  margin-top: 18px; }\n\n.input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.example-card {\n  max-width: 400px;\n  max-height: 450px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.slick-slider {\n  width: 100%;\n  height: 40%;\n  padding-left: 50px; }\n\n.card {\n  width: 150px;\n  height: 150px; }\n\n.slick-slider {\n  margin: 0px -15px; }\n\n.slick-slide {\n  padding: 10px;\n  text-align: center;\n  margin-right: 15px;\n  margin-left: 15px; }\n\n.slick-slide.slick-active:first-child, .slick-slide.slick-active:last-child {\n  margin: 0; }\n\n.arrow_next {\n  color: red; }\n\n.arrow_prev {\n  color: red; }\n\n.slick-arrow {\n  color: green; }\n\n.rec_heading {\n  height: 29px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3bccf6;\n  padding-left: 39px; }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n.search-input {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 16px;\n  padding: 8px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-radius: 20px;\n  background-color: #efefef; }\n\n.search-input2 {\n  border: none;\n  width: 400px;\n  margin-left: 10px;\n  font-size: 18px;\n  padding: 0px 20px;\n  font-weight: 300;\n  color: #9f9f9f;\n  border-bottom: 1px solid #9f9f9f;\n  border-radius: 20px; }\n\n.search-bar {\n  position: relative; }\n\n.search-bar .fa {\n    font-size: 18px;\n    font-weight: 300;\n    color: #4b4b4b;\n    right: 14px;\n    position: absolute;\n    top: 7px; }\n\n.alignSearch {\n  padding-top: 14px; }\n\n.fa-search {\n  font-size: 25px;\n  color: #9f9f9f;\n  padding-left: 6px;\n  padding-top: 4px; }\n\n.noData {\n  padding-top: 150px;\n  text-align: center;\n  /* margin-bottom: 20vw; */\n  padding-bottom: 20vw; }\n\n.search-bar-set {\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3NpbmdsZS1ib29rL3NpbmdsZS1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQWlEO0VBQ2pELHlCQUF5QjtFQUN6QixhQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFReEI7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBRVEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFUdEI7SUFXWSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBTTVCO0VBRVEsOERBQThEO0VBQzlELFdBQVc7RUFDWCxlQUFjO0VBQ2QsWUFBVyxFQUFBOztBQVVuQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBQ1g7SUFGSjtNQUdRLFlBQVcsRUFBQSxFQUtsQjs7QUFIRztJQUxKO01BTVEsWUFBVyxFQUFBLEVBRWxCOztBQUVEO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QscUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFJbEI7O0VBRUksYUFBYSxFQUFBOztBQUlqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBQSxFQUFhOztBQUhqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBQSxFQUFhOztBQUhqQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBQSxFQUFhOztBQUdqQjtFQUNJLDRCQUFBO0VBQ0EsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFBO0VBQ0EsY0FBYyxFQUFBOztBQUdsQjs7RUFFSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVUsRUFBQTs7QUFGZDtJQUlRLGtCQUFpQixFQUFBOztBQUp6QjtJQU9RLGlCQUFnQixFQUFBOztBQVB4QjtNQVNvQixlQUFlO01BQ2YsZUFBZSxFQUFBOztBQVZuQztRQVl3QixpQkFBaUIsRUFBQTs7QUFtQnpDO0VBRVEsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUdYLDZCQUE2QixFQUFBOztBQUlyQztFQUNJLHdCQUFBO0VBQ0UsZUFBYztFQUNkLGlCQUFpQixFQUFBOztBQWN2QjtFQUNJLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsY0FBYztFQUNkLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksaUJBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kscUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksYUFDSixFQUFBOztBQUNBO0VBQ0kscUJBQWE7RUFBYixhQUFhLEVBQUE7O0FBU2pCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsaUNBQWlDLEVBQUE7O0FBR3JDO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFQaEI7SUFVUSxxQkFBYTtJQUFiLGFBQWEsRUFBQTs7QUFWckI7SUFhUSxjQUFjLEVBQUE7O0FBYnRCO0lBZ0JRLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBakJwQjtJQW9CUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0RBQXFFLEVBQUE7O0FBRHpFO0lBR1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksNENBQWlFO0VBQ2pFLDJCQUEyQixFQUFBOztBQUYvQjtJQUlRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUdoQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHaEI7RUFFUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDBCQUF5QixFQUFBOztBQUdqQztFQUNBLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFVcEI7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBYztVQUFkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFLdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUhBQXlHO0VBQ3pHLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUtoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUlsQztFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFtQ3BCO0VBQ0UsWUFBVztFQUNYLGFBQWEsRUFBQTs7QUFJakI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFZO0VBRVosa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxTQUFTLEVBQUE7O0FBR1g7RUFDSSxVQUVKLEVBQUE7O0FBRUE7RUFDRSxVQUNGLEVBQUE7O0FBRUE7RUFDSSxZQUNKLEVBQUE7O0FBRUE7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBRU0sb0NBQWtDO0VBQ2xDLDJEQUF5RDtFQUN6RCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVUsRUFBQTs7QUFJaEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBRWQsbUJBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsbUJBQ0osRUFBQTs7QUFDQTtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUSxFQUFBOztBQUloQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVRLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQUE7RUFDQSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3NpbmdsZS1ib29rL3NpbmdsZS1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stZGV0YWlsc3tcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDE1NywgMjA2LCAyNTUsIDAuMTYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzo0NXB4O1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4uYm9vay10aXRsZXtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzYmNjZjY7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi8vIC5ib29rLWhlYWRlcntcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcbi8vIH1cblxuLmJvb2staW1ne1xuICAgIHdpZHRoOiAxODJweDtcbiAgICBoZWlnaHQ6IDI0NXB4O1xufVxuXG4uYm9vay1kZXNje1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5ib29rLWNvbnR7XG4gICAgbGl7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG59XG5cbi5ib29rLWZvb3RlcntcbiAgICAuY2hlY2tvdXR7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjNjk0ZjksICNhYjY0ZjQpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgIGhlaWdodDo0NXB4O1xuICAgIH1cbiAgICBcbn1cblxuXG5cbi8vICoqKioqKioqKioqKipcblxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICAgIHdpZHRoOiAxOXZ3O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAgICAgd2lkdGg6MjgwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICB9XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubWVudS1pdGVtcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5tYWluLW5hbWUge1xuICAgIGNvbG9yOiAjM2JjY2Y2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLm1lbnUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZhLXNlYXJjaCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xufVxuXG5cbi5tYXQtdG9vbGJhci1yb3csXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICBjb2xvcjogIzlmOWY5Zjtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlzLWFjdGl2ZSB7XG4gICAgY29sb3I6ICMzYmNjZjY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1hdC1uYXYtbGlzdCBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLmFkZC1ib29rYnRuIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNmZlM2ZmLCAjMmZjN2Y1KTtcbiAgICBjb2xvcjogI2ZmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udG9wLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOjc1dnc7XG4gICAgLnNlYXJjaHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgfVxuICAgIC5sb2dvLXNldHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICAgICAgLmxvZ291dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIH1cbn1cbi8vIC5sb2dvLXNldCB7XG4vLyAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgICAgLy8gcGFkZGluZy1yaWdodDogNDBweDtcbiAgXG4vLyAgICAgLmxvZ291dCB7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICBpIHtcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogODglO1xuLy8gICAgIH1cbi8vIH1cblxuLnByb2ZpbGUtdXNlcnBpYyB7XG4gICAgaW1nIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8qIERvIHlvdSBjaGFuZ2VzIGhlcmUgKi9cbiAgICAgIG1pbi13aWR0aDo1MHZ3O1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8vIC5zZWFyY2gtaW5wdXR7XG4vLyAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgIHdpZHRoOiA0MDBweDtcbi8vICAgICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgcGFkZGluZzowcHggMjBweDtcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xuLy8gICAgIGNvbG9yOiAjOWY5ZjlmO1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWY5ZjlmO1xuLy8gfVxuXG4ubm9yZXN1bHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3B0aW9uLXJlc3VsdHtcbiAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmxvZ291dC1zZWN0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87XG59XG5cblxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCA0MHB4IDBweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG5cbi5tZW51e1xuICAgIGhlaWdodDogMTYwcHhcbn1cbi5zZWFyY2gtYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG5cblxuXG4vLyAqKioqKioqKioqKioqKioqKlxuXG5cbi5pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi50aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAzMHZ3ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4ubGVmdFJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cbi5yaWdodFJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIHJpZ2h0OiAyMHB4O1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA2OXB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBhcGF5YXdoaXA7XG4gICAgLndpc2VyZWFkcy1sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmZhLXNpZ24taW4ge1xuICAgICAgICBjb2xvcjogIzBiNGY4MjtcbiAgICB9XG4gICAgLmxpbmstc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgcGFkZGluZzogM3ZoO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzBiNGY4MjtcbiAgICB9XG59XG5cbi5tYWluLXNlcnZpY2Uge1xuICAgIHBhZGRpbmc6IDcuNWVtIDNlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmFib3V0LWltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3R1ZGVudHMuanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGgxIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjcwO1xuICAgICAgICBtYXJnaW46IDVlbSAzZW07XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5hYm91dC1pbWcyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9raWRzLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNzA7XG4gICAgaDEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzA7XG4gICAgICAgIG1hcmdpbjogNWVtIDNlbTtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmJsb2ctcmlnaHQtZ3JpZHMge1xuICAgIHBhZGRpbmc6IDdlbSA1ZW07XG59XG5cbi5ibG9nLXJpZ2h0LWdyaWRzIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzg4ODg4ODtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmJlbG93LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIC8vIGJvdHRvbTogMHB4O1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJlbG93LWZvb3RlciBoNiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0dmg7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuXG4ud2lzZXJlYWRzLWxvZ28ge1xuICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDUwcHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0IWltcG9ydGFudDtcbiAgICB9XG59XG4uYWxpZ257XG5tYXJnaW4tdG9wOiAtMjNweDtcbm1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuXG4uZm9vdGVyX2FsaWdue1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cblxuXG5cblxuXG5cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gICAgaGVpZ2h0OiAyLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLmZpbGUtaW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgLmJvb2tuYW1le1xuICAgIGZsZXg6IDAgMCAyMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMjJweDtcbiB9XG5cblxuXG50aGVhZD50cj50aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcntcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjM2JjY2Y2O1xufVxuXG4udXNlci1zdGF0dXMtdGFibGV7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbnRoe1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxudGR7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGI0YjRiO1xufVxuXG5cblxuLm5vLWRhdGF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG5cbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLnNsaWNrLXNsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgcGFkZGluZy1sZWZ0OjUwcHggO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzNCwgMjM0KTtcbiAgfVxuICAgXG4vLyAgIC5uYXYtYnRuIHtcbi8vICAgICBoZWlnaHQ6IDQ3cHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAyNnB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgIFxuLy8gICAucHJldi1zbGlkZS5zbGljay1kaXNhYmxlZCxcbi8vICAgLm5leHQtc2xpZGUuc2xpY2stZGlzYWJsZWQge1xuLy8gICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gICAgIG9wYWNpdHk6IDAuMjtcbi8vICAgfVxuICAgXG4vLyAgIC5wcmV2LXNsaWRlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQgc2Nyb2xsIDAgMDtcbi8vICAgICBsZWZ0OiAtMzNweDtcbi8vICAgfVxuICAgXG4vLyAgIC5uZXh0LXNsaWRlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1wb2ludC10by1yaWdodC5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTI0cHggMHB4O1xuLy8gICAgIHJpZ2h0OiAtMzNweDtcbi8vICAgfVxuICAgXG4vLyAgIC5wcmV2LXNsaWRlOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTUzcHg7XG4vLyAgIH1cbiAgIFxuLy8gICAubmV4dC1zbGlkZTpob3ZlciB7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTUzcHg7XG4vLyAgIH1cbiAgLmNhcmR7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweFxufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgICBtYXJnaW46MHB4IC0xNXB4O1xufVxuXG4uc2xpY2stc2xpZGUge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4uc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlOmZpcnN0LWNoaWxkLCAuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlOmxhc3QtY2hpbGR7IFxuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5hcnJvd19uZXh0e1xuICAgICAgY29sb3I6cmVkXG5cbiAgfVxuXG4gIC5hcnJvd19wcmV2e1xuICAgIGNvbG9yOiByZWRcbiAgfVxuXG4gIC5zbGljay1hcnJvd3tcbiAgICAgIGNvbG9yOmdyZWVuXG4gIH1cblxuICAucmVjX2hlYWRpbmd7XG4gICAgLy8gd2lkdGg6IDMyNHB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzYmNjZjY7XG4gICAgcGFkZGluZy1sZWZ0OiAzOXB4O1xuICB9XG5cbiAgLmZsZXgtaXRlbSB7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgLjIpIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaC1pbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOjhweCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM5ZjlmOWY7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZjlmOWY7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG5cbn1cblxuLnNlYXJjaC1pbnB1dDJ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjOWY5ZjlmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWY5ZjlmO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweFxufVxuLnNlYXJjaC1iYXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5mYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogN3B4O1xuICAgICAgfVxufVxuXG4uYWxpZ25TZWFyY2h7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7XG59XG4uZmEtc2VhcmNoIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzlmOWY5ZjtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5ub0RhdGF7XG4gICAgXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHZ3OyAqL1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjB2dztcbiAgICB9XG5cbiAgICAuc2VhcmNoLWJhci1zZXR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/Components/single-book/single-book.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/single-book/single-book.component.ts ***!
  \*****************************************************************/
/*! exports provided: SingleBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBookComponent", function() { return SingleBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var src_app_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/check-out-book.service */ "./src/app/services/check-out-book.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");













var SingleBookComponent = /** @class */ (function () {
    function SingleBookComponent(fb, modalService, router, searchService, loginService, breakpointObserver, toastr, route, spinner, booksservice, Checkoutservice) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.searchService = searchService;
        this.loginService = loginService;
        this.breakpointObserver = breakpointObserver;
        this.toastr = toastr;
        this.route = route;
        this.spinner = spinner;
        this.booksservice = booksservice;
        this.Checkoutservice = Checkoutservice;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.myBooks = [];
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) { return result.matches; }));
        this.isUser = localStorage.getItem("username");
        this.isrole = localStorage.getItem("UserId");
        // this.roleId=localStorage.getItem('roleId');
        this.form = this.fb.group({
            checkoutdata: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            duedate: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            adv: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        var snapshot = router.routerState.snapshot;
        console.log(snapshot.url);
        localStorage.setItem("url", snapshot.url);
    }
    SingleBookComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
        //   this.router.navigate([`/book-status/${localStorage.getItem('url')}`]);
        // } else {
        //   this.router.navigate(['/book_list']);
        // }
        localStorage.setItem("inBookDetail", 'true');
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
    };
    SingleBookComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            checkoutdata: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            duedate: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            adv: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    SingleBookComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem("inBookDetail", 'false');
    };
    SingleBookComponent.prototype.bookList = function () {
        var _this = this;
        // this.spinner.show();
        this.booksservice
            .getProduct(this.route.snapshot.params.id)
            .subscribe(function (data) {
            _this.product = data.resultsMap.book;
            console.log(_this.product);
        });
    };
    SingleBookComponent.prototype.search = function () {
        var _this = this;
        this.searchTerm.valueChanges.subscribe(function (term) {
            if (term && term !== "" && term.length >= 3) {
                _this.searchService.search(term).subscribe(function (data) {
                    _this.myBooks = data.resultsMap.books;
                });
            }
            else {
                _this.myBooks = [];
            }
        });
    };
    SingleBookComponent.prototype.openModal = function (template) {
        this.createForm();
        this.modalRef = this.modalService.show(template);
    };
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
    SingleBookComponent.prototype.checkoutbook = function (formValue) {
        var _this = this;
        var data = {
            checkoutdata: this.checkoutdata,
            duedate: this.duedate,
            adv: this.adv
        };
        var payload = this.formatPayload(this.product, formValue);
        this.Checkoutservice.CheckoutBook(payload).subscribe(function (data) {
            _this.toastr.success("Successfully checkedOut");
            _this.modalRef.hide();
            if (_this.roleId == 4) {
                _this.router.navigateByUrl("/app-book-list-cards");
            }
            else if (_this.roleId == 2) {
                _this.router.navigateByUrl("/book_list");
            }
            else
                _this.router.navigateByUrl("/book_list");
        }, function (error) {
            console.log(error);
            _this.modalRef.hide();
            _this.createForm();
            _this.toastr.warning("Book is out of stock");
        });
    };
    SingleBookComponent.prototype.formatPayload = function (product, dialog_data) {
        var array = {
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
    };
    SingleBookComponent.prototype.onKeyUp = function () {
        localStorage.setItem("cobC", "true");
    };
    SingleBookComponent.prototype.navigate = function () {
        localStorage.setItem("cobC", "false");
        this.router.navigateByUrl("/login");
    };
    SingleBookComponent.prototype.routerNav = function () {
        if (this.roleId == 4) {
            this.router.navigateByUrl("/app-book-list-cards");
        }
        else if (this.roleId != 4) {
            this.router.navigateByUrl("/book_list");
        }
        else
            this.router.navigateByUrl("/");
    };
    SingleBookComponent.prototype.routerNav2 = function () {
        if (this.id2 == 1 || this.id2 == 2 || this.id2 == 3 || this.id2 == 4) {
            this.router.navigateByUrl("/book-status/" + this.userID + "/" + this.id2);
        }
        else
            this.router.navigateByUrl("/");
    };
    SingleBookComponent.prototype.logOut = function () {
        this.loginService.logout();
        localStorage.clear();
        this.router.navigate(["/home"]);
    };
    SingleBookComponent.prototype.reload = function (bookId) {
        var inBookDetailC = localStorage.getItem('inBookDetail');
        if (inBookDetailC == 'true')
            location.assign("/book-detail/" + bookId);
        else
            this.router.navigate(["/book-detail/" + bookId]);
    };
    SingleBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-single-book",
            template: __webpack_require__(/*! ./single-book.component.html */ "./src/app/Components/single-book/single-book.component.html"),
            styles: [__webpack_require__(/*! ./single-book.component.scss */ "./src/app/Components/single-book/single-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_10__["BooksService"],
            src_app_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_11__["CheckOutBookService"]])
    ], SingleBookComponent);
    return SingleBookComponent;
}());



/***/ }),

/***/ "./src/app/Components/story-books-view-all/story-books-view-all.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/story-books-view-all/story-books-view-all.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardList\">\n  <div *ngFor=\"let book of storyRec\">\n    <mat-card\n      class=\"cardListItem example-card flex-item mat-elevation-z8\"\n      [routerLink]=\"['/book-detail', book.bookId]\"\n      style=\"cursor: pointer \"\n    >\n\n    <mat-card-content>\n        <img\n          src=\"{{ book.imagesUrl1 }}\"\n          alt=\"\"\n          width=\"78%\"\n          height=\"178px\"\n          onError=\"this.src='../../../assets/images/brokenBook.jpg'\"\n          (click)=\"checkC()\"\n        />\n      </mat-card-content>\n      <mat-card-header>\n        <!-- <div  class=\"example-header-image\"></div> -->\n        <mat-card-title *ngIf=\"book.title != null; else noTitle\">\n          <span\n            class=\"ellipses\"\n            tooltip=\"{{ book.title }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n          >\n            {{ book.title | shorten: 15:\"...\" }}\n          </span>\n        </mat-card-title>\n        <mat-card-subtitle *ngIf=\"book.author != null; else noSubTitle\">\n          <span\n            class=\"ellipses\"\n            tooltip=\"{{ book.author }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n          >\n            {{ book.author | shorten: 10:\"...\" }}\n          </span>\n        </mat-card-subtitle>\n        <ng-template #noTitle>NA</ng-template>\n        <ng-template #noSubTitle>NA</ng-template>\n      </mat-card-header>\n\n      \n      <mat-card-actions> </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/story-books-view-all/story-books-view-all.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/story-books-view-all/story-books-view-all.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  /* max-width: 300px; */\n  /* max-height: 278px; */\n  width: 213px;\n  height: 260px;\n  margin-bottom: 20px; }\n\n.cardList {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start; }\n\n/* Column Gap */\n\n.cardList > * {\n  box-sizing: border-box; }\n\n.cardList > *:not(:last-child) {\n  margin-right: 32px; }\n\n/* Item sizing */\n\n.cardListItem {\n  -webkit-flex: 0 1 calc(33.3% - 32px);\n          flex: 0 1 calc(33.3% - 32px); }\n\n.flex-item:hover {\n  transition: all 0.3s ease !important;\n  box-shadow: 0 9px 12px 1px rgba(50, 50, 50, 0.2) !important;\n  -webkit-transform: translate(0, -4px);\n          transform: translate(0, -4px);\n  z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3N0b3J5LWJvb2tzLXZpZXctYWxsL3N0b3J5LWJvb2tzLXZpZXctYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSix1QkFBQTtFQUNBLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1QkFBZTtVQUFmLGVBQWU7RUFDZixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRTdCLGVBQUE7O0FBQ0E7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEIsZ0JBQUE7O0FBQ0E7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBSTlCO0VBRU0sb0NBQWtDO0VBQ2xDLDJEQUF5RDtFQUN6RCxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc3RvcnktYm9va3Mtdmlldy1hbGwvc3RvcnktYm9va3Mtdmlldy1hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICAgICAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cbiAgICAvKiBtYXgtaGVpZ2h0OiAyNzhweDsgKi9cbiAgICB3aWR0aDogMjEzcHg7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5jYXJkTGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLyogQ29sdW1uIEdhcCAqL1xuICAuY2FyZExpc3QgPiAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5jYXJkTGlzdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG4gIC8qIEl0ZW0gc2l6aW5nICovXG4gIC5jYXJkTGlzdEl0ZW0ge1xuICAgIGZsZXg6IDAgMSBjYWxjKDMzLjMlIC0gMzJweCk7XG4gIH1cblxuXG4gIC5mbGV4LWl0ZW0ge1xuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDlweCAxMnB4IDFweCByZ2JhKDUwLCA1MCwgNTAsIC4yKSFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/story-books-view-all/story-books-view-all.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/story-books-view-all/story-books-view-all.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StoryBooksViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryBooksViewAllComponent", function() { return StoryBooksViewAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");



var StoryBooksViewAllComponent = /** @class */ (function () {
    function StoryBooksViewAllComponent(bookservice) {
        this.bookservice = bookservice;
        this.ELEMENT_DATA = [];
        this.storyRec = [];
    }
    StoryBooksViewAllComponent.prototype.ngOnInit = function () {
        this.loadStoryBooks();
    };
    StoryBooksViewAllComponent.prototype.loadStoryBooks = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (data) {
            _this.ELEMENT_DATA = data.resultsMap.books;
            for (var i = 0; i < _this.ELEMENT_DATA.length; i++) {
                var element = _this.ELEMENT_DATA[i];
                if (element.genreId == 1) {
                    _this.storyRec.push(element);
                }
            }
        });
    };
    StoryBooksViewAllComponent.prototype.checkC = function () {
        localStorage.setItem("cobC", "true");
        // this.isHome=localStorage.getItem("isHome");
        localStorage.setItem("isHome", "false");
    };
    StoryBooksViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-story-books-view-all",
            template: __webpack_require__(/*! ./story-books-view-all.component.html */ "./src/app/Components/story-books-view-all/story-books-view-all.component.html"),
            styles: [__webpack_require__(/*! ./story-books-view-all.component.scss */ "./src/app/Components/story-books-view-all/story-books-view-all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], StoryBooksViewAllComponent);
    return StoryBooksViewAllComponent;
}());



/***/ }),

/***/ "./src/app/Components/user-books-details/user-books-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/user-books-details/user-books-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"left\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n    <div class=\"item item-1\" fxFlex=\"50%\">\n      <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n      <h1>Checkout Books</h1>\n    </div>\n    <mat-select  placeholder=\"Select Status\" name=\"checked_status_id\" id=\"checked_status_id\" class=\"fliter-box\">\n        <mat-option *ngFor=\"let id of comboBoxesDataCheckedStatus\" [value]=\"id.checked_status_id\" (click)=\"applyFilter(id.checked_status_id)\">{{id.checked_status}}\n        </mat-option>\n    </mat-select>\n  </div>\n  \n  \n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\" [class.isMobile]=\"isMobile\">\n  \n\n      <ng-container matColumnDef=\"orderId\" >\n        <mat-header-cell *matHeaderCellDef class=\"order\" [ngClass]=\"'Ordercolumn'\"> Order ID</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"  [ngClass]=\"'Ordercolumn'\">\n            <span class=\"mobile-label\">Order ID:</span>\n          {{element.orderId}}\n        </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"bookName\">\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"' bookname'\"> Book Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" [ngClass]=\"' bookname'\">\n            <div title=\"{{element.title }}\">\n                <span class=\"mobile-label\">Book Name:</span> \n                {{element.title | shorten: 40: '...' }}\n            </div>\n          \n        </mat-cell>\n      </ng-container>\n  \n \n      <ng-container matColumnDef=\"checkOutDate\" >\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"'gapbtwcol'\"> Checkout Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" [ngClass]=\"'gapbtwcol'\">\n            <span class=\"mobile-label\">CheckOut Date:</span> \n          {{element.checkedOutDate| date:'dd/MM/yyyy'}}\n        </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"dueDate\">\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"'gapbtwcol'\"> Due Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" [ngClass]=\"'gapbtwcol'\">\n            <span class=\"mobile-label\">Due Date:</span> \n          <span *ngIf='element.expReturnDate!=null'>{{element.expReturnDate| date:'dd/MM/yyyy'}}</span>\n          <span *ngIf='element.expReturnDate==null'> -</span>\n        </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"dueAmt\">\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"'DueAmt'\"> Due Amt </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" [ngClass]=\"'DueAmt'\">\n            <span class=\"mobile-label\">Due Amt:</span> \n          {{element.totalAmount}}\n        </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"returnDate\">\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"'gapbtwcol'\"> Return Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" [ngClass]=\"'gapbtwcol'\">\n            <span class=\"mobile-label\">Return Date:</span>\n          <span *ngIf='element.returnedDate!=null'>{{element.returnedDate| date:'dd/MM/yyyy'}} </span>   \n          <span *ngIf='element.returnedDate==null'> -</span>\n        </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"'gapbtwcol'\"> Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let element;let i = index\" [ngClass]=\"'gapbtwcol'\">\n            <span class=\"mobile-label\">Status:</span> \n          <mat-select [disabled]=\"element.checkedItatusId=='4'\" name=\"checked_status_id\" id=\"checked_status_id\" [value]=\"element.checkedItatusId\">\n            <mat-option *ngFor=\"let id of comboBoxesDataCheckedStatus\" [value]=\"id.checked_status_id\" (click)=\"updateBookStatus(i,element,id.checked_status_id)\">{{id.checked_status}}\n            </mat-option>\n          </mat-select>\n  \n        </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"totalAmtPaid\">\n        <mat-header-cell *matHeaderCellDef [ngClass]=\"'gapbtwcol'\"> Total Amt paid </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" [ngClass]=\"'gapbtwcol'\">\n            <span class=\"mobile-label\">Total Amt paid:</span>\n            <span *ngIf='element.amountPaid!=null'>{{element.amountPaid}} </span>   \n            <span *ngIf='element.amountPaid==null' class=\"text-center\"> -</span>\n          </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  \n    <mat-paginator #paginator [pageSize]=\"[5]\" showFirstLastButtons></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/Components/user-books-details/user-books-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/user-books-details/user-books-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 46px;\n  padding-left: 5px; }\n\n.fliter-box {\n  border: 1px solid #c6c6c6;\n  height: 40px;\n  padding: 10px;\n  width: 400px;\n  /* float: right; */\n  margin-left: auto;\n  margin-top: 10px; }\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 100%;\n    display: inline-block;\n    font-weight: bold; }\n  .mat-header-row {\n    display: none; }\n  .mat-row {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: start;\n            align-items: start;\n    padding: 8px 24px; } }\n\n.Ordercolumn {\n  -webkit-flex: 0 0 90px;\n          flex: 0 0 90px;\n  margin-right: 22px; }\n\n.gapbtwcol {\n  margin-right: 22px; }\n\n.DueAmt {\n  -webkit-flex: 0 0 90px;\n          flex: 0 0 90px;\n  margin-right: 22px; }\n\n.bookname {\n  -webkit-flex: 0 0 15vw;\n          flex: 0 0 15vw;\n  margin-right: 22px; }\n\n.trimname {\n  white-space: nowrap;\n  width: 6em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer; }\n\n.input-container {\n  background-color: #EDEDED;\n  border: 1px solid #DFDFDF;\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3VzZXItYm9va3MtZGV0YWlscy91c2VyLWJvb2tzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsaUJBQ0osRUFBQTs7QUFJQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBQTtFQUNBLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDakIsaUJBQWlCLEVBQUE7RUFHdkI7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQSxFQUNsQjs7QUFJSDtFQUNFLHNCQUFjO1VBQWQsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHLHNCQUFjO1VBQWQsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHLHNCQUFjO1VBQWQsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUt0QjtFQUNJLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUV2QixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQWM7VUFBZCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBS3BCO0VBQ0EsZUFBZSxFQUFBOztBQUdmO0VBQ0EsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBSW5CO0VBQ0EsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2Q7RUFDQSxxSEFBeUc7RUFDekcsaUJBQWlCLEVBQUE7O0FBR2pCO0VBQ0EsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2Q7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFLZDtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy91c2VyLWJvb2tzLWRldGFpbHMvdXNlci1ib29rcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHhcbn1cblxuXG5cbi5mbGl0ZXItYm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5tb2JpbGUtbGFiZWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICBcbiAgICAubWF0LWhlYWRlci1yb3cge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxuICAgIC5tYXQtcm93IHsgXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgfVxuICB9XG5cblxuICAuT3JkZXJjb2x1bW57XG4gICAgZmxleDogMCAwIDkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuIH1cblxuIC5nYXBidHdjb2x7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuIH1cblxuIC5EdWVBbXR7XG4gICAgZmxleDogMCAwIDkwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuIH1cblxuIC5ib29rbmFtZXtcbiAgICBmbGV4OiAwIDAgMTV2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XG4gfVxuXG5cblxuLnRyaW1uYW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiA2ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgICBcblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgaGVpZ2h0OiAyLjV2dztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uZmlsZS1pbmZvIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmJvb2tuYW1le1xuICBmbGV4OiAwIDAgMjB2dztcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xufVxuXG5cblxudGhlYWQ+dHI+dGgge1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVye1xubWF4LXdpZHRoOiAzMDBweDtcbm1hcmdpbi1sZWZ0OiBhdXRvO1xucGFkZGluZzogMHB4O1xubWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuZm9udC13ZWlnaHQ6IDYwMDtcbmNvbG9yOiAjM2JjY2Y2O1xufVxuXG4udXNlci1zdGF0dXMtdGFibGV7XG5ib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG5wYWRkaW5nOiAwcHggMjBweDtcbn1cblxudGh7XG5mb250LXNpemU6IDAuOWVtO1xuZm9udC13ZWlnaHQ6IDYwMDtcbmNvbG9yOiAjNTA1MDUwO1xufVxuXG50ZCwuZmF7XG5mb250LXNpemU6IDAuOGVtO1xuZm9udC13ZWlnaHQ6IDMwMDtcbmNvbG9yOiAjNGI0YjRiO1xufVxuXG5cblxuLm5vLWRhdGF7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXNpemU6IDMycHg7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDUwJTtcbmxlZnQ6IDUwJTtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/user-books-details/user-books-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/user-books-details/user-books-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserBooksDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBooksDetailsComponent", function() { return UserBooksDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_check_out_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/check-out-book.service */ "./src/app/services/check-out-book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserBooksDetailsComponent = /** @class */ (function () {
    function UserBooksDetailsComponent(checkOutBooksSerive, toastr, route, checkoutService) {
        this.checkOutBooksSerive = checkOutBooksSerive;
        this.toastr = toastr;
        this.route = route;
        this.checkoutService = checkoutService;
        this.displayedColumns = ['orderId', 'bookName', 'checkOutDate', 'dueDate', 'dueAmt', 'returnDate', 'status',
            'totalAmtPaid'];
        this.checkOut = {};
        this.amountPaid = [];
        this.allowedChars = new Set('0123456789'.split('').map(function (c) { return c.charCodeAt(0); }));
        // this.id = this.route.snapshot.paramMap.get('id');
        // console.log(this.id);
    }
    UserBooksDetailsComponent.prototype.ngOnInit = function () {
        this.loadUsersList();
        this.loadComboCheckedStatus();
    };
    UserBooksDetailsComponent.prototype.loadUsersList = function () {
        var _this = this;
        this.checkoutService.userBookList(this.route.snapshot.params.id).subscribe(function (data) {
            console.log(data);
            _this.ELEMENT_DATA = data.results;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    UserBooksDetailsComponent.prototype.loadUsersListSearch = function (search) {
        var _this = this;
        this.checkOutBooksSerive.checkOutBooksList().subscribe(function (data) {
            _this.ELEMENT_DATA = data.results;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](search);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    UserBooksDetailsComponent.prototype.loadComboCheckedStatus = function () {
        var _this = this;
        var body = [
            'bookCheckedStatus'
        ];
        this.checkOutBooksSerive.loadComboCheckedStatus(body).subscribe(function (data) {
            if (data) {
                // console.log('comboCheckedStatus', data);
                _this.comboBoxesDataCheckedStatus = data.result.bookCheckedStatus;
            }
        }, function (error) {
            _this.toastr.warning(error.error.message);
        });
    };
    UserBooksDetailsComponent.prototype.updateBookStatus = function (index, objData, id) {
        var _this = this;
        // console.log('index', index);
        var obj = {
            checkoutId: objData.checkoutId, orderId: objData.orderId, bookId: objData.bookId,
            inventoryId: objData.inventoryId,
            userId: objData.userId, amountPaid: this.amountPaid[index], createdBy: objData.createdBy, checkedItatusId: id
        };
        this.checkOutBooksSerive.updateBookStatus(obj).subscribe(function (data) {
            _this.ELEMENT_DATA = data;
            // alert(data.message)
            _this.toastr.success('Status Updated Successfully');
            // console.log('bookStatus', data);
            _this.loadUsersList();
        }),
            // tslint:disable-next-line:no-unused-expression
            function (err) {
                _this.toastr.error(err.error.message);
            };
    };
    UserBooksDetailsComponent.prototype.check = function (event) {
        // 31 and below are control keys, don't block them.
        if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
            // alert(event.keyCode)
            if (!((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode === 37) || (event.keyCode === 39))) {
                event.preventDefault();
            }
        }
    };
    UserBooksDetailsComponent.prototype.applyFilter = function (filterValue) {
        //   const tableFilters = [];
        //   tableFilters.push({
        //     id: 'orderId',
        //     value: filterValue
        //   });
        //   this.dataSource.filter = JSON.stringify(tableFilters);
        //   if (this.dataSource.paginator) {
        //     this.dataSource.paginator.firstPage();
        //   }
        // }
        // console.log(this.dataSource)
        // this.ELEMENT_DATA.filter = filterValue;
        this.dropDownSearch = this.ELEMENT_DATA.filter(function (item) { return item.checkedItatusId === filterValue; });
        this.loadUsersListSearch(this.dropDownSearch);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserBooksDetailsComponent.prototype, "paginator", void 0);
    UserBooksDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-books-details',
            template: __webpack_require__(/*! ./user-books-details.component.html */ "./src/app/Components/user-books-details/user-books-details.component.html"),
            styles: [__webpack_require__(/*! ./user-books-details.component.scss */ "./src/app/Components/user-books-details/user-books-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_check_out_book_service__WEBPACK_IMPORTED_MODULE_4__["CheckOutBookService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_check_out_book_service__WEBPACK_IMPORTED_MODULE_4__["CheckOutBookService"]])
    ], UserBooksDetailsComponent);
    return UserBooksDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/users-list/users-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/users-list/users-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"item item-1 col-lg-3 col-md-3 col-sm-12\">\n      <img class=\"dashboard-img\" src=\"../../../assets/images/metrics (1).png\" />\n      <h1>Users List</h1>\n    </div>\n\n    <div class=\"item item-2 col-lg-9 col-md-9 col-sm-12\">\n      <div class=\"input-container\">\n        <input\n          class=\"form-control\"\n          placeholder=\"Search...\"\n          type=\"text\"\n          name=\"search\"\n          [(ngModel)]=\"filter\"\n        />\n      </div>\n      <button\n        class=\"action-button\"\n        routerLink=\"/app-add-user\"\n        mat-button\n        mat-raised-button\n      >\n        Add User\n      </button>\n    </div>\n  </div>\n\n  <div class=\"table-responsive user-status-table mb-5\">\n    <table class=\"table \">\n      <thead>\n        <tr>\n          <th style=\"width:9%\">\n            User ID\n          </th>\n          <th style=\"width:16%\">\n            User Name\n          </th>\n          <th style=\"width:20%\">\n            Email ID\n          </th>\n          <th style=\"width:13%\">\n            Phone\n          </th>\n          <th class=\"text-center\" style=\"width:4%\">\n            Gender\n          </th>\n          <th class=\"text-center\" style=\"width:14%\">\n            Status\n          </th>\n\n          <th class=\"text-center\">\n            Actions\n          </th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr\n          *ngFor=\"\n            let data of ELEMENT_DATA\n              | filter: filter\n              | paginate: { itemsPerPage: 8, currentPage: p };\n            let i = index\n          \"\n        >\n          <td>{{ data.userId }}</td>\n          <td *ngIf=\"data.firstName != null; else nodata\">\n            {{ data.firstName }} {{ data.lastName }}\n          </td>\n\n          <td\n            tooltip=\"{{ data.email }}\"\n            placement=\"right\"\n            show-delay=\"500\"\n            theme=\"dark\"\n            offset=\"16\"\n          >\n            <span class=\"ellipses\">{{ data.email | shorten: 20:\"...\" }}</span>\n          </td>\n          <td *ngIf=\"data.contactNumber != null; else nodata\">\n            {{ data.contactNumber }}\n          </td>\n          <td *ngIf=\"data.genderId != null; else nodata\">\n            <span *ngIf=\"data.genderId == 1\">Male</span>\n            <span *ngIf=\"data.genderId == 2\">Female</span>\n          </td>\n          <td class=\"text-center\">\n            <ng-container *ngIf=\"data.userStatusId != null; else nodata\">\n              <span *ngIf=\"data.userStatusId == 1\">Active</span>\n              <span *ngIf=\"data.userStatusId == 2\">Inactive</span>\n            </ng-container>\n          </td>\n\n          <ng-template #nodata>\n            <p class=\"text-center\">-</p>\n          </ng-template>\n          <td class=\"text-center\">\n            <button\n              class=\"edit-button\"\n              (click)=\"editUser(data.userId)\"\n              mat-button\n              mat-raised-button\n            >\n              Edit\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <pagination-controls\n      style=\"float: right\"\n      class=\"my-pagination\"\n      (pageChange)=\"p = $event\"\n      maxSize=\"9\"\n      directionLinks=\"true\"\n      autoHide=\"true\"\n      responsive=\"true\"\n      previousLabel=\"Previous\"\n      nextLabel=\"Next\"\n      screenReaderPaginationLabel=\"Pagination\"\n      screenReaderPageLabel=\"page\"\n    ></pagination-controls>\n  </div>\n</section>\n\n<!-- MAT TABLE -->\n\n<!-- <section>\n    <div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n        <div class=\"item item-1\" fxFlex=\"50%\">\n            <img class=\"dashboard-img\" src=\"../../assets/images/metrics (1).png\">\n            <h1>Users List</h1>\n        </div>\n        <div class=\"item item-2\" fxFlex=\"50%\">\n           \n\n            <button class=\"action-button\" routerLink='/app-add-user' mat-button mat-raised-button>Add User</button>\n        </div>\n    </div>\n\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\" [class.isMobile]=\"isMobile\">\n\n            <ng-container matColumnDef=\"userId\">\n                <mat-header-cell *matHeaderCellDef> User ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    {{element.userId}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"userName\">\n                <mat-header-cell *matHeaderCellDef> User Name</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    {{element.firstName}} {{element.lastName}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"emailId\">\n                <mat-header-cell *matHeaderCellDef> Email ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                   \n                    <span class=\"ellipses\" tooltip=\"{{element.email}}\" placement=\"right\" show-delay=\"500\" theme=\"dark\" offset=\"16\">{{element.email}}</span>\n\n                </mat-cell>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"phone\">\n                <mat-header-cell *matHeaderCellDef> Phone </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    {{element.contactNumber}}\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"gender\">\n                <mat-header-cell *matHeaderCellDef> Gender</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <span *ngIf=\"element.genderId==1\">Male</span>\n                    <span *ngIf=\"element.genderId==2\">Female</span>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <mat-header-cell *matHeaderCellDef> Status</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <span *ngIf=\"element.userStatusId==1\">Active</span>\n                    <span *ngIf=\"element.userStatusId==2\">Inactive</span>\n\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <button class=\"edit-button\" (click)=\"editUser(element.userId)\" mat-button mat-raised-button>Edit</button>\n\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n        <mat-paginator #paginator [pageSize]=\"[6]\" showFirstLastButtons></mat-paginator>\n    </div>\n</section> -->\n\n<!-- <button class=\"mr-2 action-button\" mat-button mat-raised-button>Import Books</button> -->\n<!-- <input (onChange)=\"applyFilter($event.target.value)\" matInput placeholder=\"Search\"> -->\n"

/***/ }),

/***/ "./src/app/Components/users-list/users-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/users-list/users-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ellipses {\n  white-space: nowrap;\n  width: 8em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  font-size: 16px;\n  transition: 0.3s;\n  transition: 0.2s;\n  /* color: black; */\n  font-size: 1.0em;\n  font-weight: 300; }\n\n.btn {\n  font-size: 16px;\n  transition: 0.3s;\n  opacity: 0.5;\n  transition: 0.3s;\n  /* color: black; */\n  font-size: 1.0em;\n  font-weight: 300; }\n\n.input-container {\n  border-radius: 5px;\n  height: 42px;\n  margin-right: 6px; }\n\ninput[type='file'] {\n  height: 2.5vw;\n  border-radius: 5px;\n  padding: 10px;\n  border: none;\n  border-top-left-radius: 5px;\n  padding: 6px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.file-info {\n  font-size: 0.9em; }\n\n.bookname {\n  -webkit-flex: 0 0 20vw;\n          flex: 0 0 20vw;\n  margin-right: 22px; }\n\nthead > tr > th {\n  cursor: pointer; }\n\n.filter {\n  max-width: 300px;\n  margin-left: auto;\n  padding: 0px;\n  margin-bottom: 20px; }\n\n.my-pagination /deep/ .ngx-pagination .current {\n  background: transparent;\n  font-weight: 600;\n  color: #3bccf6; }\n\n.user-status-table {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 0px 20px; }\n\nth {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: #505050; }\n\ntd, .fa {\n  font-size: 0.8em;\n  font-weight: 300;\n  color: #4b4b4b; }\n\n.no-data {\n  text-align: center;\n  font-size: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93aXNlcmVhZHNla3N1aS93aXNlcmVhZHMtbmV3dWkvc3JjL2FwcC9Db21wb25lbnRzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUV2QixlQUFlO0VBRWYsZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixnQkFBZ0I7RUFDaEIsa0JBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUlwQjtFQUdFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBYztVQUFkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFLcEI7RUFDQSxlQUFlLEVBQUE7O0FBR2Y7RUFDQSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFLbkI7RUFDQSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHZDtFQUNBLHFIQUF5RztFQUN6RyxpQkFBaUIsRUFBQTs7QUFHakI7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHZDtFQUNBLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUtkO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGxpcHNlcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogOGVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuLy8gICAuZWxsaXBzZXM6aG92ZXIge29wYWNpdHk6IDF9XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIGhlaWdodDogMi41dnc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLmZpbGUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5ib29rbmFtZXtcbiAgZmxleDogMCAwIDIwdnc7XG4gIG1hcmdpbi1yaWdodDogMjJweDtcbn1cblxuXG5cbnRoZWFkPnRyPnRoIHtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcntcbm1heC13aWR0aDogMzAwcHg7XG5tYXJnaW4tbGVmdDogYXV0bztcbnBhZGRpbmc6IDBweDtcbm1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyBmbG9hdDogcmlnaHRcbn1cblxuXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuZm9udC13ZWlnaHQ6IDYwMDtcbmNvbG9yOiAjM2JjY2Y2O1xufVxuXG4udXNlci1zdGF0dXMtdGFibGV7XG5ib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG5wYWRkaW5nOiAwcHggMjBweDtcbn1cblxudGh7XG5mb250LXNpemU6IDAuOWVtO1xuZm9udC13ZWlnaHQ6IDYwMDtcbmNvbG9yOiAjNTA1MDUwO1xufVxuXG50ZCwuZmF7XG5mb250LXNpemU6IDAuOGVtO1xuZm9udC13ZWlnaHQ6IDMwMDtcbmNvbG9yOiAjNGI0YjRiO1xufVxuXG5cblxuLm5vLWRhdGF7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXNpemU6IDMycHg7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDUwJTtcbmxlZnQ6IDUwJTtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/users-list/users-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_save_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/save-user.service */ "./src/app/services/save-user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.ELEMENT_DATA = [];
        this.displayedColumns = [
            "userId",
            "userName",
            "emailId",
            "phone",
            "gender",
            "status",
            "actions"
        ];
        this.p = 1;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.loadUsersList();
    };
    UsersListComponent.prototype.loadUsersList = function () {
        var _this = this;
        this.userService.usersList().subscribe(function (data) {
            _this.ELEMENT_DATA = data.results;
            // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
            // this.dataSource.paginator = this.paginator;
        }),
            function (err) {
                // this.toastr.error(err.error.message);
                console.log(err);
            };
    };
    UsersListComponent.prototype.editUser = function (regId) {
        this.router.navigate(["editUser", regId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UsersListComponent.prototype, "paginator", void 0);
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-users-list",
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/Components/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/Components/users-list/users-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_save_user_service__WEBPACK_IMPORTED_MODULE_2__["SaveUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/authGuard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/authGuard.service.ts ***!
  \***********************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SigninService = /** @class */ (function () {
    function SigninService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    SigninService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
            return true;
        }
        else {
            this.router.navigate(['home']);
        }
    };
    SigninService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/_helpers/confirm-password.validator.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/confirm-password.validator.ts ***!
  \********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401 || err.status === 403) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: SigninService, JwtInterceptor, ErrorInterceptor, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _authGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authGuard.service */ "./src/app/_helpers/authGuard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return _authGuard_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]; });

/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-password.validator */ "./src/app/_helpers/confirm-password.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"]; });







/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        var Token = localStorage.getItem('Token');
        if (currentUser && Token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + Token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/apiUrl.ts":
/*!***************************!*\
  !*** ./src/app/apiUrl.ts ***!
  \***************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    // public static URL = 'http://api.wisereads.in';
    AppSettings.URL = 'http://a4c7a1981c3e311e9965e0a3d30fc188-1064092020.ap-south-1.elb.amazonaws.com:8080';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/cards/cards.component */ "./src/app/Components/cards/cards.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _helpers_authGuard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/authGuard.service */ "./src/app/_helpers/authGuard.service.ts");
/* harmony import */ var _Components_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/layout/home-layout.component */ "./src/app/Components/layout/home-layout.component.ts");
/* harmony import */ var _Components_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/layout/login-layout.component */ "./src/app/Components/layout/login-layout.component.ts");
/* harmony import */ var _Components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/add-user/add-user.component */ "./src/app/Components/add-user/add-user.component.ts");
/* harmony import */ var _Components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/inventory/inventory.component */ "./src/app/Components/inventory/inventory.component.ts");
/* harmony import */ var _Components_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/single-book/single-book.component */ "./src/app/Components/single-book/single-book.component.ts");
/* harmony import */ var _Components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/users-list/users-list.component */ "./src/app/Components/users-list/users-list.component.ts");
/* harmony import */ var _Components_check_out_books_check_out_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/check-out-books/check-out-books.component */ "./src/app/Components/check-out-books/check-out-books.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/book-list/book-list.component */ "./src/app/Components/book-list/book-list.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_user_books_details_user_books_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/user-books-details/user-books-details.component */ "./src/app/Components/user-books-details/user-books-details.component.ts");
/* harmony import */ var _Components_book_list_cards_book_list_cards_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/book-list-cards/book-list-cards.component */ "./src/app/Components/book-list-cards/book-list-cards.component.ts");
/* harmony import */ var _Components_story_books_view_all_story_books_view_all_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/story-books-view-all/story-books-view-all.component */ "./src/app/Components/story-books-view-all/story-books-view-all.component.ts");
/* harmony import */ var _Components_comic_books_view_all_comic_books_view_all_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/comic-books-view-all/comic-books-view-all.component */ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.ts");
/* harmony import */ var _Components_fiction_books_view_all_fiction_books_view_all_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/fiction-books-view-all/fiction-books-view-all.component */ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.ts");
/* harmony import */ var _Components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/about-us/about-us.component */ "./src/app/Components/about-us/about-us.component.ts");
/* harmony import */ var _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/faq/faq.component */ "./src/app/Components/faq/faq.component.ts");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");

























var routes = [
    {
        path: '',
        component: _Components_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_6__["HomeLayoutComponent"],
        canActivate: [_helpers_authGuard_service__WEBPACK_IMPORTED_MODULE_5__["SigninService"]],
        children: [
            {
                path: '', component: _Components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
            },
            {
                path: 'checkout-books', component: _Components_check_out_books_check_out_books_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutBooksComponent"]
            },
            {
                path: 'add-book', loadChildren: './Components/books/books.module#BooksModule'
            },
            {
                path: 'edit-book/:id', loadChildren: './Components/books/books.module#BooksModule'
            },
            {
                path: 'book-status/:id/:id2', loadChildren: './Components/user-module/user-module.module#UserModuleModule'
            },
            {
                path: 'book_list', component: _Components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_14__["BookListComponent"]
            },
            {
                path: 'app-add-user', component: _Components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"]
            },
            {
                path: 'editUser/:id', component: _Components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
            },
            {
                path: 'inventory', component: _Components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_9__["InventoryComponent"]
            },
            // {
            //   path: 'book-detail/:id', component: SingleBookComponent
            // },
            {
                path: 'app-users-list', component: _Components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__["UsersListComponent"]
            },
            {
                path: 'app-check-out-books', component: _Components_check_out_books_check_out_books_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutBooksComponent"]
            },
            {
                path: 'user-book-details/:id', component: _Components_user_books_details_user_books_details_component__WEBPACK_IMPORTED_MODULE_16__["UserBooksDetailsComponent"]
            },
            {
                path: 'app-book-list-cards', component: _Components_book_list_cards_book_list_cards_component__WEBPACK_IMPORTED_MODULE_17__["BookListCardsComponent"]
            },
            {
                path: 'app-story-books-view-all', component: _Components_story_books_view_all_story_books_view_all_component__WEBPACK_IMPORTED_MODULE_18__["StoryBooksViewAllComponent"]
            },
            {
                path: 'app-comic-books-view-all', component: _Components_comic_books_view_all_comic_books_view_all_component__WEBPACK_IMPORTED_MODULE_19__["ComicBooksViewAllComponent"]
            },
            {
                path: 'app-fiction-books-view-all', component: _Components_fiction_books_view_all_fiction_books_view_all_component__WEBPACK_IMPORTED_MODULE_20__["FictionBooksViewAllComponent"]
            }
            // {
            //   path: 'app-assign-roles', component: AssignRolesComponent
            // },
        ]
    },
    {
        path: 'book-detail/:id', component: _Components_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_10__["SingleBookComponent"]
    },
    {
        path: '',
        component: _Components_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_7__["LoginLayoutComponent"],
        children: [
            // {
            //   path: '',
            //   component: HomeComponent
            // },
            {
                path: 'home',
                component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            },
            {
                path: 'login',
                component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'register',
                component: _Components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
            },
            {
                path: 'app-about-us',
                component: _Components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"]
            },
            {
                path: 'app-faq',
                component: _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_22__["FaqComponent"]
            },
            //     {
            //   path: 'app-book-detail-home/:id', component: BookDetailHomeComponent
            // },
            // {
            //   path: 'book-detail-home/:id', component: SingleBookComponent
            // },
            //  {
            //       path: 'app-story-books-view-all1', component: StoryBooksViewAllComponent
            //     },
            //     {
            //       path: 'app-comic-books-view-all1', component: ComicBooksViewAllComponent
            //     },
            //     {
            //       path: 'app-fiction-books-view-all1', component: FictionBooksViewAllComponent
            //     },
            {
                path: 'app-footer', component: _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"]
            },
            {
                path: 'app-header', component: _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"]
            },
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WiseReads';
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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var _Components_cards_cards_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/cards/cards.component */ "./src/app/Components/cards/cards.component.ts");
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
/* harmony import */ var _Components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/book-list/book-list.component */ "./src/app/Components/book-list/book-list.component.ts");
/* harmony import */ var _Components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/add-user/add-user.component */ "./src/app/Components/add-user/add-user.component.ts");
/* harmony import */ var _Components_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/layout/home-layout.component */ "./src/app/Components/layout/home-layout.component.ts");
/* harmony import */ var _Components_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/layout/login-layout.component */ "./src/app/Components/layout/login-layout.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/inventory/inventory.component */ "./src/app/Components/inventory/inventory.component.ts");
/* harmony import */ var _Components_search_search_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/search/search.component */ "./src/app/Components/search/search.component.ts");
/* harmony import */ var _Components_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/single-book/single-book.component */ "./src/app/Components/single-book/single-book.component.ts");
/* harmony import */ var _Components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Components/users-list/users-list.component */ "./src/app/Components/users-list/users-list.component.ts");
/* harmony import */ var _Components_check_out_books_check_out_books_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/check-out-books/check-out-books.component */ "./src/app/Components/check-out-books/check-out-books.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_user_books_details_user_books_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Components/user-books-details/user-books-details.component */ "./src/app/Components/user-books-details/user-books-details.component.ts");
/* harmony import */ var _Components_assign_roles_assign_roles_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Components/assign-roles/assign-roles.component */ "./src/app/Components/assign-roles/assign-roles.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _Components_book_list_cards_book_list_cards_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Components/book-list-cards/book-list-cards.component */ "./src/app/Components/book-list-cards/book-list-cards.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _Components_story_books_view_all_story_books_view_all_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Components/story-books-view-all/story-books-view-all.component */ "./src/app/Components/story-books-view-all/story-books-view-all.component.ts");
/* harmony import */ var _Components_comic_books_view_all_comic_books_view_all_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Components/comic-books-view-all/comic-books-view-all.component */ "./src/app/Components/comic-books-view-all/comic-books-view-all.component.ts");
/* harmony import */ var _Components_fiction_books_view_all_fiction_books_view_all_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Components/fiction-books-view-all/fiction-books-view-all.component */ "./src/app/Components/fiction-books-view-all/fiction-books-view-all.component.ts");
/* harmony import */ var _Components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Components/about-us/about-us.component */ "./src/app/Components/about-us/about-us.component.ts");
/* harmony import */ var _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Components/faq/faq.component */ "./src/app/Components/faq/faq.component.ts");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");










// tslint:disable-next-line:max-line-length

































// import { TooltipModule } from 'ng2-tooltip-directive';
// import { CheckinDialogComponent } from './Components/checkin-dialog/checkin-dialog.component';
// import { CheckinDialogComponentt } from './Components/user-module/book-status/book-status.component';
// import { ModalDialog1Component } from './Components/modal-dialog1/modal-dialog1.component';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _Components_cards_cards_component__WEBPACK_IMPORTED_MODULE_24__["CardsComponent"],
                _Components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_26__["BookListComponent"],
                _Components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_27__["AddUserComponent"],
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _Components_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_28__["HomeLayoutComponent"],
                _Components_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_29__["LoginLayoutComponent"],
                _Components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_31__["InventoryComponent"],
                _Components_search_search_component__WEBPACK_IMPORTED_MODULE_32__["SearchComponent"],
                _Components_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_33__["SingleBookComponent"],
                _Components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_34__["UsersListComponent"],
                _Components_check_out_books_check_out_books_component__WEBPACK_IMPORTED_MODULE_35__["CheckOutBooksComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"],
                _Components_register_register_component__WEBPACK_IMPORTED_MODULE_39__["RegisterComponent"],
                _Components_user_books_details_user_books_details_component__WEBPACK_IMPORTED_MODULE_40__["UserBooksDetailsComponent"],
                _Components_assign_roles_assign_roles_component__WEBPACK_IMPORTED_MODULE_41__["AssignRolesComponent"],
                _Components_book_list_cards_book_list_cards_component__WEBPACK_IMPORTED_MODULE_45__["BookListCardsComponent"],
                _Components_story_books_view_all_story_books_view_all_component__WEBPACK_IMPORTED_MODULE_47__["StoryBooksViewAllComponent"],
                _Components_comic_books_view_all_comic_books_view_all_component__WEBPACK_IMPORTED_MODULE_48__["ComicBooksViewAllComponent"],
                _Components_fiction_books_view_all_fiction_books_view_all_component__WEBPACK_IMPORTED_MODULE_49__["FictionBooksViewAllComponent"],
                _Components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_50__["AboutUsComponent"],
                _Components_faq_faq_component__WEBPACK_IMPORTED_MODULE_51__["FaqComponent"],
                _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_52__["FooterComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_53__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_carousel__WEBPACK_IMPORTED_MODULE_17__["NgxCarouselModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_18__["NgPipesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__["NgxMatSelectSearchModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__["NgxDatatableModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_16__["NguCarouselModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    preventDuplicates: true,
                    timeOut: 3000,
                }),
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_22__["TooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_37__["CarouselModule"].forRoot(),
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_20__["Ng2OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_22__["TooltipModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_23__["OrderModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_42__["ModalModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_43__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_44__["BsDropdownModule"].forRoot(),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_46__["SlickCarouselModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_54__["NgxSpinnerModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_38__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_38__["ErrorInterceptor"], multi: true },
            ],
            entryComponents: [],
            exports: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/assign-role.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/assign-role.service.ts ***!
  \*************************************************/
/*! exports provided: AssignRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRoleService", function() { return AssignRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiUrl */ "./src/app/apiUrl.ts");





var AssignRoleService = /** @class */ (function () {
    function AssignRoleService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            }),
        };
    }
    AssignRoleService.prototype.updateRoles = function (body) {
        return this.httpClient.post(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/users/assign-roles', body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AssignRoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AssignRoleService);
    return AssignRoleService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiUrl */ "./src/app/apiUrl.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var BooksService = /** @class */ (function () {
    function BooksService(http, route) {
        this.http = http;
        this.route = route;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            }),
        };
    }
    BooksService.prototype.AddBooks = function (books) {
        return this.http.post(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + '/api/books', books, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BooksService.prototype.editbook = function (editbook) {
        return this.http.put(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + ("/api/books/" + editbook.bookId), editbook, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BooksService.prototype.loadbook = function (regId) {
        return this.http.get(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + ("/api/books/" + regId), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BooksService.prototype.getbooks = function () {
        return this.http.get(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + "/api/books").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BooksService.prototype.getRecomendedBooks = function () {
        return this.http.get(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + "/api/recommended-books/category-wise", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    BooksService.prototype.getbooksdetails = function (id) {
        return this.http
            .get(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + "/api/books/" + id, this.httpOptions);
    };
    BooksService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    BooksService.prototype.getProduct = function (id) {
        return this.http.get(_apiUrl__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].URL + "/api/books/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/services/check-out-book.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/check-out-book.service.ts ***!
  \****************************************************/
/*! exports provided: CheckOutBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutBookService", function() { return CheckOutBookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiUrl */ "./src/app/apiUrl.ts");





var CheckOutBookService = /** @class */ (function () {
    function CheckOutBookService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            }),
        };
    }
    CheckOutBookService.prototype.loadComboCheckedStatus = function (body) {
        return this.httpClient.post(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/combo-box-tables', body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CheckOutBookService.prototype.checkOutBooksList = function () {
        return this.httpClient.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/checked-out-books', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CheckOutBookService.prototype.updateBookStatus = function (obj) {
        return this.httpClient.put(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/checked-out-books/order-details/book-status', obj, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    CheckOutBookService.prototype.userBookList = function (id) {
        return this.httpClient.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + "/api/checked-out-books/user/" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // Get User checked out books by Status
    CheckOutBookService.prototype.userBookStatus = function (userId, bookStatus) {
        return this.httpClient.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + "/api/checked-out-books/users/" + userId + "/rentals?checkOutStatusId=" + bookStatus, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // checkout book
    CheckOutBookService.prototype.CheckoutBook = function (data) {
        return this.httpClient.post(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + "/api/checked-out-books/order-details", data, this.httpOptions);
    };
    CheckOutBookService.prototype.CheckinBook = function (data) {
        return this.httpClient.put(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + "/api/checked-out-books/order-details/book-status", data, this.httpOptions);
    };
    CheckOutBookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CheckOutBookService);
    return CheckOutBookService;
}());



/***/ }),

/***/ "./src/app/services/inventory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiUrl */ "./src/app/apiUrl.ts");






var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
    }
    InventoryService.prototype.getinventory = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('Token'),
            })
        };
        return this.http.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + "/api/inventory-books", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    InventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/app/apiUrl */ "./src/app/apiUrl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var LoginService = /** @class */ (function () {
    function LoginService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(LoginService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.logIn = function (user) {
        var _this = this;
        var usercredentials = btoa(user.email + ':' + user.password);
        // localStorage.setItem('UserEmail', JSON.stringify(user));
        // localStorage.setItem('Token', usercredentials);
        var httpOptions = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(user.email, user.password),
        };
        return this.httpClient.post(_src_app_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/login', user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            localStorage.setItem('currentUser', JSON.stringify(res));
            _this.currentUserSubject.next(res);
            return res;
        }));
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.clear();
        this.currentUserSubject.next(null);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/app/apiUrl */ "./src/app/apiUrl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterService = /** @class */ (function () {
    function RegisterService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    RegisterService.prototype.saveuser = function (adduser) {
        return this.httpClient.post(_src_app_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/users', adduser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/save-user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/save-user.service.ts ***!
  \***********************************************/
/*! exports provided: SaveUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserService", function() { return SaveUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiUrl */ "./src/app/apiUrl.ts");





var SaveUserService = /** @class */ (function () {
    function SaveUserService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            }),
        };
    }
    SaveUserService.prototype.loadComboDropDowns = function (body) {
        return this.httpClient.post(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/combo-box-tables', body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    SaveUserService.prototype.saveuser = function (adduser) {
        return this.httpClient.post(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/users', adduser, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    SaveUserService.prototype.loaduser = function (regId) {
        return this.httpClient.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + ("/api/users/" + regId), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    SaveUserService.prototype.edituser = function (edituser) {
        return this.httpClient.put(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + ("/api/users/" + edituser.userId), edituser, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    SaveUserService.prototype.usersList = function () {
        return this.httpClient.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/users', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    SaveUserService.prototype.checkOutBooksList = function () {
        return this.httpClient.get(_apiUrl__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].URL + '/api/checked-out-books', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    SaveUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SaveUserService);
    return SaveUserService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apiUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apiUrl */ "./src/app/apiUrl.ts");










var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = _apiUrl__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].URL + "/api/books/search/";
    }
    SearchService.prototype.search = function (term) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('Token'),
            })
        };
        var listOfBooks = this.http.get(this.baseUrl + term)
            .pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            return (data
            // data.resultsMap.books.length! = 0 ? data as any[] : [{"tilte": "No Record Found"} as any]
            );
        }));
        return listOfBooks;
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/wisereadseksui/wisereads-newui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map