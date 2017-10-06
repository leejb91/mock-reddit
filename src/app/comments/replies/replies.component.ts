import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-replies',
	templateUrl: './replies.component.html',
	styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
	@Input() replies: any;

	constructor() { }

	ngOnInit() {
	}

}
