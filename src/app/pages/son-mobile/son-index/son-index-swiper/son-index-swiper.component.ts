import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { indexState } from '@app/store/state.model'
import { Store, select } from '@ngrx/store';
import * as types from '@app/store/actions.module';

@Component({
  selector: 'app-son-index-swiper',
  templateUrl: './son-index-swiper.component.html',
  styleUrls: ['./son-index-swiper.component.scss'],
  providers:[]
})
export class SonIndexSwiperComponent implements OnInit, OnDestroy {
	data;
	indexState$: Observable<indexState>;
	swiperHttpSubscription: Subscription;
	swiperSubscription: Subscription;
	constructor(
		private http: HttpClient,
		private render: Renderer2,
		private store : Store<indexState>
		 ) {
		this.indexState$ = store.pipe(select('index'));
	}

	ngOnInit() {
		let nowDate = new Date().getTime() + '';
		this.swiperHttpSubscription = this.http.get('/api/store.json',{params:{_:nowDate}})
				.subscribe((res:any) => {
					this.store.dispatch({
						type: types.INDEX_GET,
						payload: res.store
					});
				});
		this.swiperSubscription = this.indexState$.subscribe(state => {
			this.data = state.data.promotions;
		});
	}
	ngOnDestroy() {
		this.swiperHttpSubscription.unsubscribe();
		this.swiperSubscription.unsubscribe();
	}
}
