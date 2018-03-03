import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// 数据源类

// data类
export class SwiperOption {
	data:Array<object>
	constructor() {}
}
@Component({
  selector: 'app-son-index-swiper',
  templateUrl: './son-index-swiper.component.html',
  styleUrls: ['./son-index-swiper.component.scss'],
  providers:[SwiperOption]
})
export class SonIndexSwiperComponent implements OnInit {
	clientWidth: string;
	now: number;
	constructor(
		private swiperOption:SwiperOption,
		private http: HttpClient
		 ) {}

	ngOnInit() {
		this.http.get('/api/store.json?_=1520044349542')
				.subscribe((res:any) => {
					this.swiperOption.data = res.store.promotions;
				});
		this.clientWidth = screen.width + 'px';
		this.now = 0;
	}
	handleTouchStart(event) {
		console.log(event);
	}
	handleTouchEnd(event) {
		console.log(event);
	}

	getClass(num: number): boolean {
		if (num == this.now) {
			return true;
		} else return false;
	}
}
