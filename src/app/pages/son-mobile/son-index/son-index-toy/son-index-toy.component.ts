import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { indexState } from '@app/store/state.model'
@Component({
  selector: 'app-son-index-toy',
  templateUrl: './son-index-toy.component.html',
  styleUrls: ['./son-index-toy.component.scss']
})
export class SonIndexToyComponent implements OnInit, OnDestroy {
	listData$:Observable<indexState>;
	listSubscription:Subscription;
	listData:indexState;
	hasClass:boolean = false;
	constructor(private store:Store<indexState>) {
		this.listData$ = store.pipe(select('index'));
	}

	ngOnInit() {
		this.listSubscription = this.listData$.subscribe(state => this.listData = state.data.hot_tag_games);
	}
	ngOnDestroy() {
		this.listSubscription.unsubscribe();
	}

}
