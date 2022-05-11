import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './base.routes';
import { HomePage } from '../pages/home/home.page';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'admin-ng';

const Pages = [HomePage];
const Modules = [
    MatTableModule,
    SharedModule
];
@NgModule({
    declarations: [...Pages],
    imports: [CommonModule, RouterModule.forChild(routes), ...Modules],
    exports: [],
    providers: [],
})
export class BaseModule { }