import { Component, OnInit, ViewChild } from "@angular/core";
import { SaveUserService } from "../../services/save-user.service";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { element } from "@angular/core/src/render3";
import { AssignRoleService } from 'src/app/services/assign-role.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "app-assign-roles",
  templateUrl: "./assign-roles.component.html",
  styleUrls: ["./assign-roles.component.scss"]
})
export class AssignRolesComponent implements OnInit {
  dataSource;
  isMobile: any;
  ELEMENT_DATA = [];
  displayedColumns: string[] = [
    "userId",
    "userName",
    "admin",
    "superadmin",
    "user",
    "agent",
    "owner"
  ];
  
  checkBox: any = {};
  checkBoxData: any = [];
  moreRoles: any = [];
  checkBoxData2: any = [];
  checkAdmin: boolean;
  checkSuperAdmin: boolean;
  checkUser: boolean;
  checkAgent: boolean;
  checkOwner: boolean;
  markFields: any = [];
  formGroup: FormGroup;
  myForm = new FormGroup({
    checked: new FormControl()
  })
  contentEditable: boolean;
  constructor(private userService: SaveUserService,
    private assignRolesService: AssignRoleService,
    private toastr: ToastrService,
    ) {
    console.log("markFields",this.markFields);

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
    // this.createForm();
  }

  loadUsersList(): void {
    this.userService.usersList().subscribe((data: any) => {
      console.log("data", data);
      this.ELEMENT_DATA = data.results;

      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        for (let j = 0; j < this.ELEMENT_DATA[i].userRoles.length; j++) {
          if (this.ELEMENT_DATA[i].userRoles.length > 1) {
            const element2 = this.ELEMENT_DATA[i].userRoles[j];
            this.moreRoles.push(element2);
          }

          // if(data.results[i].userId == this.ELEMENT_DATA[i].userRoles[j].userId ){
          const element = this.ELEMENT_DATA[i].userRoles[j];
          // console.log('element', element);
          this.checkBoxData2.push(element);
          this.checkBoxData.push({
            userId: data.results[i].userId,
            roleId: this.ELEMENT_DATA[i].userRoles[j].roleId
          });

          // }

          // const element = this.ELEMENT_DATA[i].userRoles[j];
          // console.log('element', element);

          // this.checkBoxData.push(element)
        }
      }
      // this.checkBoxData[i].roleId=='2'
      console.log(
        "checkBoxData",
        this.checkBoxData,
        this.moreRoles,
        this.checkBoxData2
      );

      // this.checkBox=data.results[0].userRoles[0].roleId;

      // console.log('checkBox', this.checkBox);

      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }),
      err => {
        // this.toastr.error(err.error.message);
        console.log(err);
      };
  }

  // createForm(): void {
  //   this.formGroup = this.fb.group({
  //     Value1: [false],
  //    });
  // }
  isChecked(e, roleId,element): boolean {
    // console.log(e.filter((e)=> e.roleId == roleId));
  return e.filter((e)=> e.roleId == roleId) && e.filter((e)=> e.userId == element.userId)
  }


  isIAdmin(e): void {
    return e.filter(e => e.roleId == 1);
  }

  isAdmin(event,e,element): void {
    if(event.checked==true){

      var obj = {
        "userId": element.userId,
        "roleId": 2,
        "roleStatus": event.checked==true ? 1 : 2,
        "createdBy":localStorage.getItem('Name')

    }
    this.markFields.push(obj);

      return e.filter(e => e.roleId == 2),
      e.filter(e => e.roleId);

    }
    else {
    this.checkAdmin=false;
    }
    // return e.filter(e => e.roleId == 2);
    
  }
  

  isSuperAdmin(event,e,element): void {
    if(event.checked==true){

      var obj = {
        "userId": element.userId,
        "roleId": 1,
        "roleStatus": 2,
        "createdBy":"satish"
  
    }
    this.markFields.push(obj);

      return e.filter(e => e.roleId == 1);

    }
    else 
    this.checkSuperAdmin=false;
    // return e.filter(e => e.roleId == 1);

    
  }

  isUser(event,e,element): void {
    if(event.checked==true){

      var obj = {
        "userId": element.userId,
        "roleId": 4,
        "roleStatus": 2,
        "createdBy":"satish"
  
    }
    this.markFields.push(obj);
      return e.filter(e => e.roleId == 4);

    }
    else {
    this.checkUser=false;
    }
    // return e.filter(e => e.roleId == 4);

   
  }

  isAgent(event,e,element): void {
    if(event.checked==true){

      var obj = {
        "userId": element.userId,
        "roleId": 5,
        "roleStatus": 2,
        "createdBy":"satish"
  
    }
    this.markFields.push(obj);
      return e.filter(e => e.roleId == 5);

    }
    else {
    this.checkAgent=false;
    }
    //return e.filter(e => e.roleId == 5);
    
  }

  isOwner(event,e,element): void {
    if(event.checked==true){

      var obj = {
        "userId": element.userId,
        "roleId": 3,
        "roleStatus": 2,
        "createdBy":"satish"
  
    }
    this.markFields.push(obj);
      return e.filter(e => e.roleId == 3);

    }
    else {
    this.checkOwner=false;
    }
    //return e.filter(e => e.roleId == 3);
   
  }

  assignRoles(e, roleId) {
    console.log(e, roleId);
    if(e.checked==true){
      return true
    }
    else return false;
    // return (e => e.checked==true);
  }

  updateRoles(){
    this.assignRolesService.updateRoles(this.markFields).subscribe((data: any) => {
      this.toastr.success('Status Updated Successfully');

    });
  }
  toggleEditable(event) {
    console.log(event,event.target.checked)
    if ( event.target.checked ) {
        this.contentEditable = true;
   }
}
}
