import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs'
import { indexState } from '@app/store/state.model';

@Component({
  selector: 'app-son-index-suggecttion',
  templateUrl: './son-index-suggecttion.component.html',
  styleUrls: ['./son-index-suggecttion.component.scss']
})
export class SonIndexSuggecttionComponent implements OnInit {
	listData$: Observable<indexState>;
	listData;
	listSubscription: Subscription;
	hasClass:boolean = true;
	constructor(private store: Store<indexState>) { 
		this.listData$ = this.store.pipe(select('index'));
	}

	ngOnInit() {
		this.listSubscription = this.listData$.subscribe(state => {
			this.listData = state.data.rec_games;
		})
	}
	ngOnDestroy() {
		this.listSubscription.unsubscribe();
	}

}
