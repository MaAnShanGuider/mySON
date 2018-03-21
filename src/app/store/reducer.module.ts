import { Action } from '@ngrx/store';
import { State,headLinesState, indexState,initialIndexState, initialRouterState, initialHeadLines } from './state.model';
import * as types from './actions.module';

export class indexGet implements Action {
	readonly type = types.INDEX_GET;
	constructor( public payload: string) {}
}
export class RouterInto implements Action {
	readonly type = types.ROUTER_INTO_PERIPHERAL;
	constructor( public payload: string) {}
}
export class RouterLeave implements Action {
	readonly type = types.ROUTER_LEAVE_PERIPHERAL;
	constructor( public payload: string) {}
}


export class HeadLinesNewsGet implements Action {
	readonly type = types.HEADLINES_NEWS_GET;
	constructor( 
		public payload: Array<object>,
		public num: number
		) {}
}
export class HeadLinesNewsGetMore implements Action {
	readonly type = types.HEADLINES_NEWS_GET_MORE;
	constructor( 
		public page: number,
		public payload: Array<object>,
		) {}
}
export type Actions = 
| indexGet 
| RouterInto 
| RouterLeave 
| HeadLinesNewsGet
| HeadLinesNewsGetMore;

export function indexReducer(state:indexState = initialIndexState, action: Actions) {
	switch (action.type) {
		case types.INDEX_GET: 
			console.log('触发INDEX_GET');
			return Object.assign({}, state, {data: action.payload});
		default :
			return state;
	}
}

export function routerReducer(state:State = initialRouterState, action: Actions) {
	switch (action.type) {
		case types.ROUTER_INTO_PERIPHERAL: 
			console.log('触发ROUTER_INTO_PERIPHERAL');
			return Object.assign({}, state, {routerExact: false});
		case types.ROUTER_LEAVE_PERIPHERAL: 
			console.log('触发ROUTER_LEAVE_PERIPHERAL');
			return Object.assign({}, state, {routerExact: true});
		default :
			return state;
	}
}

export function headLinesReducer(state:headLinesState = initialHeadLines, action: Actions) {
	switch (action.type) {
		case types.HEADLINES_NEWS_GET:
			console.log('headline页面请求到数据了。');
			return Object.assign({}, 
								state, 
								{data: {
									num: action.num,
									headlines:action.payload},
								nowPage: 1});
		case types.HEADLINES_NEWS_GET_MORE:
			let oldData = {...state.data};
			oldData.headlines = [].concat(oldData.headlines,action.payload);
			return Object.assign({}, state, {
								data:oldData,
								nowPage: action.page});
		default:
			return state;
	}
}