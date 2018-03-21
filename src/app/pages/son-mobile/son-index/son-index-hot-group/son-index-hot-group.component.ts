import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { indexState } from '@app/store/state.model';

@Component({
  selector: 'app-son-index-hot-group',
  templateUrl: './son-index-hot-group.component.html',
  styleUrls: ['./son-index-hot-group.component.scss']
})
export class SonIndexHotGroupComponent implements OnInit, OnDestroy {

	listData$:Observable<indexState>;
	listSubscription:Subscription;
	listData:indexState;
	constructor(private store:Store<indexState>) { 
		this.listData$ = store.pipe(select('index'));
	}

	ngOnInit() {
		this.listSubscription = this.listData$.subscribe(state => this.listData = state.data.new_tag_games);
		console.log(this.listData);
	}
	ngOnDestroy() {
		this.listSubscription.unsubscribe();
	}
}
