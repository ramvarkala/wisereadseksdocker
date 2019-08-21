import { SaveUserService } from 'src/app/services/save-user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { CheckOutBookService } from 'src/app/services/check-out-book.service';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderPipe } from 'ngx-order-pipe';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { CheckinDialogComponent } from '../../checkin-dialog/checkin-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BooksService } from 'src/app/services/books.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-book-status',
  templateUrl: './book-status.component.html',
  styleUrls: ['./book-status.component.scss']
})
export class BookStatusComponent implements OnInit {


  order: string = 'book Id';
  sortedCollection: any[];
  reverse: boolean = false;
  userid: any;
  bookstatus: any;
  id2 = '';
  p: number = 1;
  tableData = [];
  checkoutdata: string;
  duedate: string;
  adv: string;
  dialog_data: any;
  product: [];
  isUser:any;
  closeStatusFlag: boolean = false;
  userID: any;
  modalRef: BsModalRef;
  dialog2Content=[];
  cIndex: any;
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private UserService: CheckOutBookService,
    private orderPipe: OrderPipe,
    public dialog: MatDialog,
    private Checkoutservice: CheckOutBookService,
    private booksservice: BooksService,
    private modalService: BsModalService
  ) { 
      this.isUser= localStorage.getItem('username')
      // this.userid = this.route.snapshot.paramMap.get('id');
      this.userid = localStorage.getItem('UserId');
      localStorage.setItem("id",this.userid)
      this.sortedCollection = orderPipe.transform(this.tableData, 'bookId');
      // console.log(this.sortedCollection);
      // alert(this.bookstatus);
  }

  openModal(template: TemplateRef<any>,inde) {
    this.modalRef = this.modalService.show(template);
    // this.checkinbook(inde);
    this.cIndex=inde;
    // console.log("cIndex",this.cIndex);
    this.dialog2Content=this.tableData[this.cIndex];

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  myOptions = {
    'placement': 'right',
    'show-delay': 5000000
  }


  bookStatus(){
    this.route.params
    .switchMap((params: Params) => 
                  this.UserService.userBookStatus(this.userid , params['id2'] ))
    .subscribe((data :any) =>  
                  this.tableData = data.results);
                  this.dialog2Content=this.tableData[this.cIndex];
// console.log("this.dialog2Content",this.dialog2Content);
  }
 
  checkin(bo){
    console.log("index",bo);
     this.closeStatusFlag=true
  }
  
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
  bookList(){
    this.booksservice.getProduct(this.route.snapshot.params.id).subscribe((data: any) => {
      console.log(data);
      this.product = data.resultsMap.book;
    });
  }
  checkinbook(){
    // console.log("checkin",this.dialog_data);
    const payload = this.formatPayload(this.tableData,this.cIndex);
    // console.log(this.tableData,this.cIndex,this.tableData[this.cIndex])
    this.dialog2Content=this.tableData[this.cIndex];
    // console.log("this.dialog2Content2",this.dialog2Content);

    this.Checkoutservice.CheckinBook(payload).subscribe((data:any) => {
      // console.log("array", payload);
      // console.log("success", data.resultsMap);

      // this.dialogRef.close();
      this.modalRef.hide();
      this.bookStatus();
      // this.router.navigate([ '/book-status', userID, 3])
      // console.log("success", data.message);
      // if(data && data.message && data.resultsMap.orderDetails.checkedOutBooks.orderId){
      //   this.toastr.success("Sucessfully checkout");
      // }
      // else   this.toastr.error("Out of Stock");
    },
    error => {  
      alert('An Unexpected Error Occured.');  
      // console.log(error.errors);  
    })
  
  }


  formatPayload(product,index) {
    console.log("book",product,index,product[index])
    const array = 
     { 
      "checkoutId": product[index].checkoutId,
	    "orderId": product[index].orderId,
	    "bookId": product[index].bookId,
      "inventoryId": product[index].inventoryId,
      "userId": product[index].userId,
		  "amountPaid":product[index].amountPaid,
		  "createdBy":this.isUser,
		  "checkedItatusId": 3
      }
    
    console.log(JSON.stringify(array));
    return array;
  }



  ngOnInit() {
    this.userID = localStorage.getItem('UserId'); 
    this.bookStatus();
    this.id = setInterval(() => {
      this.bookStatus(); 
    }, 10000);
    this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        of(params.get('id2'))
      )
    ).subscribe(d => this.id2 = d);
    localStorage.setItem("id2",this.id2);
    localStorage.setItem("cobC","false");

  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}




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
