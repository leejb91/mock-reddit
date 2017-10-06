import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ListComponent } from './list/list.component';
import { RedditService } from './reddit-service/reddit.service';
import { RepliesComponent } from './comments/replies/replies.component';

@NgModule({
	declarations: [
		AppComponent,
		CommentsComponent,
		ListComponent,
		RepliesComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		RouterModule,
	],
	providers: [
		RedditService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
