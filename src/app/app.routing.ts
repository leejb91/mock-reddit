import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
	{ path: '', component: ListComponent },
	{ path: ':id', component: CommentsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
