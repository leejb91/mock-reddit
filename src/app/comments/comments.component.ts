import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../reddit-service/reddit.service';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
	id: string;
	comments: any[];

	constructor(
		private redditService: RedditService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.getComments();
	}

	getComments() {
		this.redditService.getComments(this.id).subscribe(
			(res: any) => {
				this.comments = res;
			}, err => {
				console.log(err)
			}
		);
	}

}
