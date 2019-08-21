import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { BookStatusComponent } from './book-status/book-status.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; 
import { NgxPaginationModule } from 'ngx-pagination';
import {NgPipesModule} from 'ngx-pipes';
import { TooltipModule } from 'ng2-tooltip-directive';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [BookStatusComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgPipesModule,
    TooltipModule,
    OrderModule
  ]
})
export class UserModuleModule { }
