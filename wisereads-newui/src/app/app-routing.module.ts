
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CardsComponent } from './Components/cards/cards.component';

import { LoginComponent } from './Components/login/login.component';
import { SigninService } from './_helpers/authGuard.service';
import { HomeLayoutComponent } from './Components/layout/home-layout.component';
import { LoginLayoutComponent } from './Components/layout/login-layout.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { SingleBookComponent } from './Components/single-book/single-book.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { CheckOutBooksComponent } from './Components/check-out-books/check-out-books.component';
import { HomeComponent } from './Components/home/home.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserBooksDetailsComponent } from './Components/user-books-details/user-books-details.component';
import { AssignRolesComponent } from './Components/assign-roles/assign-roles.component';
import { BookListCardsComponent } from './Components/book-list-cards/book-list-cards.component';
import { StoryBooksViewAllComponent } from './Components/story-books-view-all/story-books-view-all.component';
import { ComicBooksViewAllComponent } from './Components/comic-books-view-all/comic-books-view-all.component';
import { FictionBooksViewAllComponent } from './Components/fiction-books-view-all/fiction-books-view-all.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FaqComponent } from './Components/faq/faq.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [SigninService],
    children: [
      {
        path: '', component: CardsComponent
      },
      {
        path: 'checkout-books', component: CheckOutBooksComponent
      },
      {
        path: 'add-book', loadChildren: './Components/books/books.module#BooksModule'
      },
      {
        path: 'edit-book/:id', loadChildren: './Components/books/books.module#BooksModule'
      },
      {
        path:'book-status/:id/:id2', loadChildren: './Components/user-module/user-module.module#UserModuleModule'
      },
      {
        path: 'book_list', component: BookListComponent
      },
      {
        path: 'app-add-user', component: AddUserComponent
      },
      {
        path: 'editUser/:id', component: AddUserComponent,
      },
      {
        path: 'inventory', component: InventoryComponent
      },
      // {
      //   path: 'book-detail/:id', component: SingleBookComponent
      // },
      {
        path: 'app-users-list', component: UsersListComponent
      },
      {
        path: 'app-check-out-books', component: CheckOutBooksComponent
      },
      {
        path: 'user-book-details/:id', component: UserBooksDetailsComponent
      },     
      {
        path: 'app-book-list-cards', component: BookListCardsComponent
      },
      {
        path: 'app-story-books-view-all', component: StoryBooksViewAllComponent
      },
      {
        path: 'app-comic-books-view-all', component: ComicBooksViewAllComponent
      },
      {
        path: 'app-fiction-books-view-all', component: FictionBooksViewAllComponent
      }
      // {
      //   path: 'app-assign-roles', component: AssignRolesComponent
      // },
    ]
  },
  
  {
    path: 'book-detail/:id', component: SingleBookComponent
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'app-about-us',
        component: AboutUsComponent
      },
      {
        path: 'app-faq',
        component: FaqComponent
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
        path: 'app-footer', component: FooterComponent
      },
      {
        path: 'app-header', component: HeaderComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
