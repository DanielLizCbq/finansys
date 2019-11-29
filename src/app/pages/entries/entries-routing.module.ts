import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: EntryListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
