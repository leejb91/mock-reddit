import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RedditService {
	url = 'api';

	constructor(
		private http: HttpClient
	) { }

	getList(query: any) {
		let params = new HttpParams();
		const queryKeys = Object.keys(query);
		queryKeys.forEach((key) => {
			params = params.append(key, query[key]);
		});
		return this.http.get(this.url, {params: params});
	}

	getComments(id: string) {
		return this.http.get(this.url + '/' + id);
	}
}
