import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';

import { AccountRoutingModule } from './account-routing.module';
import { AccountSearchComponent } from './account-search/account-search.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

@NgModule({
  declarations: [AccountSearchComponent, AccountSummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PanelModule,
    TabViewModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }