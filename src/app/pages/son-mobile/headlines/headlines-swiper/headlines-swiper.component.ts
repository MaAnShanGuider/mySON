import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/delayWhen';

@Component({
  selector: 'app-headlines-swiper',
  templateUrl: './headlines-swiper.component.html',
  styleUrls: ['./headlines-swiper.component.scss']
})
export class HeadlinesSwiperComponent implements OnInit {
	data;
	constructor(
		private http: HttpClient,
		private render: Renderer2
		 ) {}

	ngOnInit() {
		this.http.get('/api/page.json?q[kind_eq]=2&sonkwo_client=mobile&_=1520157523427')
				.subscribe((res:any) => {
					this.data = res.page.banners;
				});
	}

}
