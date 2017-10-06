import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedditService } from '../reddit-service/reddit.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	list: any;
	showPreviousButton = false;
	page = 1;

	queryParams: any = {
		before: '',
		after: '',
		count: 0,
		limit: 10
	};

	constructor(
		private redditService: RedditService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.route.queryParams.subscribe(
			query => {
				this.queryParams.before = query.before ? query.before : '';
				this.queryParams.after = query.after ? query.after : '';
				this.queryParams.count = query.count ? parseInt(query.count, 10) : 0;
				this.getList();
				this.checkPage();
			}
		);
	}

	getList() {
		this.redditService.getList(this.queryParams).subscribe(
			(res: any) => {
				const response = res;
				this.list = response.data.children;
			}, err => {
				console.log('error', err);
			}
		);
	}

	checkPage() {
		// use this.queryParams.count to figure out the page
		if (this.queryParams.count % 10 === 0 && !!this.queryParams.after) {
			this.page = (this.queryParams.count / 10) + 1;
		}
		if (this.queryParams.count % 10 === 1 && !!this.queryParams.before) {
			this.page = (this.queryParams.count - 1) / 10;
		}

		// use page number to determine whether previous or next is needed
		if (this.page <= 1) {
			this.showPreviousButton = false;
		} else {
			this.showPreviousButton = true;
		}
	}

	goToComments(id: string) {
		this.router.navigate(['/', id]);
	}

	navigate(type: string) {
		// get first or last fullname of item listing depending on 'previous' or 'next'
		if (type === 'after') {
			this.page++;
			this.queryParams[type] = this.list[this.list.length - 1].data.name;
			this.queryParams.before = '';
			this.queryParams.count = (this.page - 1) * this.queryParams.limit;
		} else {
			this.page--;
			this.queryParams[type] = this.list[0].data.name;
			this.queryParams.after = '';
			this.queryParams.count = (this.page * this.queryParams.limit) + 1;
		}

		const options = {queryParams: this.queryParams};
		this.router.navigate([''], options);
	}
}
