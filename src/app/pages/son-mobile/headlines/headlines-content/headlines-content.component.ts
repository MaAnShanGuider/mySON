import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as types from '@app/store/actions.module';
import { headLinesState } from '@app/store/state.model';
@Component({
  selector: 'app-headlines-content',
  templateUrl: './headlines-content.component.html',
  styleUrls: ['./headlines-content.component.scss']
})
export class HeadlinesContentComponent implements OnInit {
	nowTargetState$: Observable<headLinesState>;
	private nowTargetSubscription: Subscription;
	nowTarget: headLinesState;
	title:Array<string>;
	/*
		nowOffsetX: ul当前的偏移量
		touchMoveX: 触摸过程中的过程值
		touchStartX: 起始点
	 */
	nowOffsetX: number = 0;
	touchMoveX: number;
	touchStartX: number;
	constructor(
		private store: Store<headLinesState>,
		private http: HttpClient
		) {
		this.nowTargetState$ = store.pipe(select('headLines'));
		this.title = ['资讯', '文章', '电台', '视频', '测评'];
	 }

	ngOnInit() {
		this.nowTargetSubscription = this.nowTargetState$.subscribe(state => {
			this.nowTarget = state;
		});
		this.http.get('/api/headlines.json',{
			params: {
			'q[section_parent_id_eq]': '1',
			'sonkwo_client': 'mobile',
			'page': '1',
			'per': '10',
			'_':'1520230013911'}})
		.subscribe((res:any) => {
			this.store.dispatch({
				type: types.HEADLINES_NEWS_GET,
				payload: res.headlines,
				num: 0
			})
		});
	}
	ngOnDestroy() {
		this.nowTargetSubscription.unsubscribe();
	}
	handleClickChangeTarget(num:number) {
		num == 3? num = 10 : null;
		num == 4? num = 24 : null;
		this.http.get('/api/headlines.json',{
			params: {
			'q[section_parent_id_eq]': String(num+1),
			'sonkwo_client': 'mobile',
			'page': '1',
			'per': '10',
			'_':'1520230013911'}})
		.subscribe((res:any) => {
			this.store.dispatch({
				type: types.HEADLINES_NEWS_GET,
				payload: res.headlines,
				num: num
			})
		})
	}
	getClassFromNowTarget(num:number): boolean {
		num == 3? num = 10 : null;
		num == 4? num = 24 : null;
		if (num == this.nowTarget.data.num) {
			return true;
		} else return false;
	}
	handleTouchMove($event) {
		this.touchMoveX = $event.changedTouches[0].clientX;
		let diff = this.nowOffsetX + this.touchMoveX - this.touchStartX ;
		//--下面进行边距判断
		if (!(diff <= -95 || diff >= 0)) {
			this.nowOffsetX = diff; 
		} 
		
		//  下面这步操作，是防止累加，所以用前一个点，后一个点来运算。
		this.touchStartX = $event.changedTouches[0].clientX;
	}
	handleTouchStart($event) {
		this.touchStartX = $event.changedTouches[0].clientX;
	}
}
