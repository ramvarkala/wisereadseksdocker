import { Component, OnInit, ViewChild } from "@angular/core";
import { SaveUserService } from "../../services/save-user.service";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  ELEMENT_DATA = [];
  displayedColumns: string[] = [
    "userId",
    "userName",
    "emailId",
    "phone",
    "gender",
    "status",
    "actions"
  ];
  p: number = 1;

  constructor(private userService: SaveUserService, private router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
  }

  loadUsersList(): void {
    this.userService.usersList().subscribe((data: any) => {
      this.ELEMENT_DATA = data.results;
      // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      // this.dataSource.paginator = this.paginator;
    }),
      err => {
        // this.toastr.error(err.error.message);
        console.log(err);
      };
  }

  editUser(regId: string): void {
    this.router.navigate(["editUser", regId]);
  }

  // applyFilter(filterValue): void {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
