import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { ToastrService } from "ngx-toastr";
import { CheckOutBookService } from "../../services/check-out-book.service";

@Component({
  selector: "app-check-out-books",
  templateUrl: "./check-out-books.component.html",
  styleUrls: ["./check-out-books.component.scss"]
})
export class CheckOutBooksComponent implements OnInit {
  dataSource;
  dropDownSearch;
  isMobile: any;
  ELEMENT_DATA: any;
  displayedColumns: string[] = [
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
  checkOut: any = {};
  public amountPaid: any = [];
  comboBoxesDataCheckedStatus: any;
  allowedChars = new Set("0123456789".split("").map(c => c.charCodeAt(0)));
  selectIndex: any;
  cobC: string;
  cId: number=1;
  disableButton: boolean = false;
  disableSubmit: boolean=false;
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

  constructor(
    private checkOutBooksSerive: CheckOutBookService,
    private toastr: ToastrService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
    this.loadComboCheckedStatus();
    localStorage.setItem("cobC", "false");
  }

  loadUsersList(): void {
    this.checkOutBooksSerive.checkOutBooksList().subscribe((data: any) => {
      this.ELEMENT_DATA = data.results;
      this.dropDownSearch = this.ELEMENT_DATA.filter(
        item => item.checkedItatusId === this.cId
      );
      console.log(this.dropDownSearch);
      this.loadUsersListSearch(this.dropDownSearch);
      // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      // this.dataSource.paginator = this.paginator;
    });
  }

  loadComboCheckedStatus() {
    const body = ["bookCheckedStatus"];
    this.checkOutBooksSerive.loadComboCheckedStatus(body).subscribe(
      (data: any) => {
        if (data) {
          this.comboBoxesDataCheckedStatus = data.result.bookCheckedStatus;
        }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  loadUsersListSearch(search) {
    // this.checkOutBooksSerive.checkOutBooksList().subscribe((data: any) => {
    //   this.ELEMENT_DATA = data.results;
    //   this.dataSource = new MatTableDataSource(search);
    //   this.dataSource.paginator = this.paginator;
    // });
    this.dataSource = new MatTableDataSource(search);
      this.dataSource.paginator = this.paginator;
  }

  loadAll() {
    this.checkOutBooksSerive.checkOutBooksList().subscribe((data: any) => {
      this.ELEMENT_DATA = data.results;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
    
  }

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

  check(event: KeyboardEvent): void {
    // 31 and below are control keys, don't block them.
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      // alert(event.keyCode)
      if (
        !(
          (event.keyCode > 95 && event.keyCode < 106) ||
          event.keyCode === 37 ||
          event.keyCode === 39
        )
      ) {
        event.preventDefault();
      }
    }
  }

  applyFilter(filterValue: any): void {
    this.disableSubmit=true
    console.log(filterValue);
    this.dropDownSearch = this.ELEMENT_DATA.filter(
      item => item.checkedItatusId === filterValue
    );
    console.log(this.dropDownSearch);
    this.loadUsersListSearch(this.dropDownSearch);
  }

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

  submit(index, objData) {
     if (objData.checkedItatusId == 1) {
      this.cId = 1;
    } else if (objData.checkedItatusId == 2) {
      this.cId = 2;
    } else if (objData.checkedItatusId == 3) {
      this.cId = 3;
    } else if (objData.checkedItatusId == 4) {
      this.cId = 4;
    }
    const obj = {
      checkoutId: objData.checkoutId,
      orderId: objData.orderId,
      bookId: objData.bookId,
      inventoryId: objData.inventoryId,
      userId: objData.userId,
      amountPaid: this.amountPaid[index],
      createdBy: objData.createdBy,
      checkedItatusId: objData.checkedItatusId +1
    };
    this.checkOutBooksSerive.updateBookStatus(obj).subscribe((data: any) => {
      this.ELEMENT_DATA = data;
      this.toastr.success("Status Updated Successfully");
      this.amountPaid = [];
      this.comboBoxesDataCheckedStatus = [];
      this.disableButton = true;
      this.loadUsersList();
      // this.applyFilter(this.cId);
      // this.loadUsersListSearch();
      this.loadComboCheckedStatus();
    }),
      err => {
        this.toastr.error(err.error.message);
      };
  }
  checkedStatusId($event,id, index): void {
    this.disableSubmit=false;
    this.disableButton = false;
    // if ($event.source.selected) {
    this.checkOut.checkedItatusId = id.checked_status_id;
    this.selectIndex = index;
    // console.log(this.checkOut.checkedItatusId, index, this.selectIndex);
    // }
  }
}
