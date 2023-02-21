import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotTableComponent } from './bot-table.component';
import { Routes, RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

const routes: Routes = [{ path: '', component: BotTableComponent }];
@NgModule({
  declarations: [
    BotTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    TabViewModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class BotTableModule { }
