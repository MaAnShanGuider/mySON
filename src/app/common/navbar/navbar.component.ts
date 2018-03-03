import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { routerState } from './../../store/state.model'
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	routerExact: boolean;
	routerState$: Observable<routerState>;
	private routerStateSubcription: Subscription;
	//  xixihaha是用来获取store里的state的值。
	xixihaha: routerState;
	constructor(
		private route: ActivatedRoute, 
		private store: Store<routerState>
		) { 
		// select的参数，为合并后的state的里面都根级key值，属性名。
		this.routerState$ = store.pipe(select('routerChange'));
	}
		getRoute(str: string) {
			return true;
		}
	ngOnInit() {
		this.routerStateSubcription = this.routerState$.subscribe(state => {
			this.xixihaha = state;
			this.routerExact = this.xixihaha.routerExact;
		})
	}
	ngOnDestroy() {
		console.log('你好啊')
	}

}
