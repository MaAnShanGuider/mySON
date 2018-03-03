import { Action } from '@ngrx/store';
import { State, initialTestState, initialRouterState } from './state.model';
import * as types from './actions.module';

export class TextChange implements Action {
	readonly type = types.TEXT_CHANGE;
	constructor( public payload: string) {}
}
export class RouterInto implements Action {
	readonly type = types.ROUTER_INTO_PERIPHERAL;
	constructor( public payload: string) {}
}
export class RouterLeavel implements Action {
	readonly type = types.ROUTER_LEAVEL_PERIPHERAL;
	constructor( public payload: string) {}
}
export type Actions = | TextChange | RouterInto | RouterLeavel;

export function sumReducer(state:State = initialTestState, action: Actions) {
	switch (action.type) {
		case types.TEXT_CHANGE: 
			console.log('触发TEXT_ChANGE');
			return Object.assign({}, state, {test: action.payload});
		default :
			return state;
	}
}

export function routerReducer(state:State = initialRouterState, action: Actions) {
	switch (action.type) {
		case types.ROUTER_INTO_PERIPHERAL: 
			console.log('触发ROUTER_INTO_PERIPHERAL');
			return Object.assign({}, state, {routerExact: false});
		case types.ROUTER_LEAVEL_PERIPHERAL: 
			console.log('触发ROUTER_LEAVEL_PERIPHERAL');
			return Object.assign({}, state, {routerExact: true});
		default :
			return state;
	}
}