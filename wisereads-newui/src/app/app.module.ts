import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatAutocompleteModule, MatDialogModule, MatSidenavModule, MatNativeDateModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatSortModule, MatListModule,MatCheckboxModule, MatCardModule, MatInputModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatExpansionModule, MatTooltipModule, MatMenuModule, MAT_DIALOG_DEFAULT_OPTIONS, MatChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NguCarouselModule } from '@ngu/carousel';
import { NgxCarouselModule } from 'ngx-carousel';
import {NgPipesModule} from 'ngx-pipes';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ng2-tooltip-directive';
import { OrderModule } from 'ngx-order-pipe';

import { CardsComponent } from './Components/cards/cards.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { HomeLayoutComponent } from './Components/layout/home-layout.component';
import { LoginLayoutComponent } from './Components/layout/login-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthorizationInterceptor } from './Components/auth/authorization.interceptors';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { SearchComponent } from './Components/search/search.component';
import { SingleBookComponent } from './Components/single-book/single-book.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { CheckOutBooksComponent } from './Components/check-out-books/check-out-books.component';
import { HomeComponent } from './Components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { RegisterComponent } from './Components/register/register.component';
import { UserBooksDetailsComponent } from './Components/user-books-details/user-books-details.component';
import { AssignRolesComponent } from './Components/assign-roles/assign-roles.component';
// import { TooltipModule } from 'ng2-tooltip-directive';
// import { CheckinDialogComponent } from './Components/checkin-dialog/checkin-dialog.component';
// import { CheckinDialogComponentt } from './Components/user-module/book-status/book-status.component';
// import { ModalDialog1Component } from './Components/modal-dialog1/modal-dialog1.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BookListCardsComponent } from './Components/book-list-cards/book-list-cards.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StoryBooksViewAllComponent } from './Components/story-books-view-all/story-books-view-all.component';
import { ComicBooksViewAllComponent } from './Components/comic-books-view-all/comic-books-view-all.component';
import { FictionBooksViewAllComponent } from './Components/fiction-books-view-all/fiction-books-view-all.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FaqComponent } from './Components/faq/faq.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    BookListComponent,
    AddUserComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    InventoryComponent,
    SearchComponent,
    SingleBookComponent,
    UsersListComponent,
    CheckOutBooksComponent,
    HomeComponent,
    RegisterComponent,
    UserBooksDetailsComponent,
    AssignRolesComponent,
    BookListCardsComponent,
    StoryBooksViewAllComponent,
    ComicBooksViewAllComponent,
    FictionBooksViewAllComponent,
    AboutUsComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgPipesModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgxMatSelectSearchModule,
    HttpModule,
    MatAutocompleteModule,
    NgxDatatableModule,
    NguCarouselModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        timeOut: 3000,
      }),
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatExpansionModule,
      TooltipModule,
      MatTooltipModule,
      MatMenuModule,
      MatChipsModule,
      CarouselModule.forRoot(),
      Ng2OrderModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      TooltipModule,
      OrderModule,
      ModalModule.forRoot(),
      BsDatepickerModule.forRoot(),
      BsDropdownModule.forRoot(),
      SlickCarouselModule,
      NgxSpinnerModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  entryComponents: [],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
