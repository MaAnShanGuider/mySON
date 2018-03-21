import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store, select } from '@ngrx/store';
import * as types from './../../../store/actions.module';
import { routerState } from './../../../store/state.model';
@Component({
  selector: 'app-son-peripheral',
  templateUrl: './son-peripheral.component.html',
  styleUrls: ['./son-peripheral.component.scss']
})
export class SonPeripheralComponent implements OnInit {
	constructor(private store: Store<routerState>) { 
		console.log('wocao');
	}

	ngOnInit() {
		// 将routerExact赋值为false
		this.store.dispatch({
			type: types.ROUTER_INTO_PERIPHERAL
		});
	}
	ngOnDestroy() {
		// 将routerExact赋值为true
		this.store.dispatch({
			type: types.ROUTER_LEAVE_PERIPHERAL
		});
	}

}
