import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import { Store, select} from '@ngrx/store';
import * as types from '@app/store/actions.module';
import { headLinesState } from '@app/store/state.model';
@Component({
  selector: 'app-headlines-content-child',
  templateUrl: './headlines-content-child.component.html',
  styleUrls: ['./headlines-content-child.component.scss']
})
export class HeadlinesContentChildComponent implements OnInit {
	headLines$: Observable<headLinesState>;
	private contentSubscription: Subscription;
	private scrollSubscription: Subscription;
	headLines: headLinesState;
	scrollHeight: number;
	clientHeight: number;
	@ViewChild('headlinesChild') headlinesChild: ElementRef;
	constructor(
		private store: Store<headLinesState>,
		private http: HttpClient
		) { 
		this.headLines$ = store.pipe(select('headLines'));
		this.scrollHeight =  document.documentElement.scrollHeight;
		this.clientHeight =  document.body.clientHeight;
	}

	ngOnInit() {
		// 这一句把三个都联系起来了。
		this.contentSubscription = this.headLines$.subscribe(state => this.headLines = state);
	}
	ngAfterViewChecked() {		
		this.scrollHeight =  document.documentElement.scrollHeight;
	}
	ngAfterViewInit() {		
		this.scrollSubscription = Observable.fromEvent(this.headlinesChild.nativeElement,'touchmove' )
			.throttleTime(500).subscribe(res=>{
				let hadScrollTop = window.document.documentElement.scrollTop;
				console.log(hadScrollTop, this.clientHeight, this.scrollHeight);
				if( hadScrollTop + this.clientHeight - 162 <= this.scrollHeight ) {
					// ---进行第二次请求
					console.log('到达末端');
					let num = this.headLines.data.num;
					let page = this.headLines.nowPage + 1 + '';
					let now_ = new Date().getTime();
					num = num == 3? 10 : num == 4 ? 24 : num;
					this.http.get('/api/headlines.json',{
						params: {
						'q[section_parent_id_eq]': String(num + 1),
						'sonkwo_client': 'mobile',
						'page': page,
						'per': '10',
						'_': String(now_)}})
					.subscribe((res:any) => {
						this.store.dispatch({
							type: types.HEADLINES_NEWS_GET_MORE,
							page: Number(page),
							payload: res.headlines
						})
					})
				}
			});
	}
	ngOnDestroy() {
		this.contentSubscription.unsubscribe();
	}
	handleTouchMove($event) {
		// 最关键的就是这三个值了，哈哈
		// console.log(window.document.documentElement.scrollTop, document.documentElement.scrollHeight,document.body.clientHeight);

		// 不过，我们放弃了用这个来做事件，改用rxjs的fromEvent，这样能够避免重复多次请求
		
	}


	handleClick($event) {
		console.log($event);

	}

}
