export class indexState {
	constructor(
		public data: any,
		) {}
}

export class routerState {
	constructor(		
		public routerExact: boolean
		) {}
}
class headlinesData {
	public num: number;
	public headlines: Array<object>

}
export class headLinesState {
	constructor(
		public data: headlinesData,
		public nowPage: number
		) {}
}

export type State =  indexState | routerState | headLinesState;
export const initialIndexState: indexState = {
	data: {},
}

export const initialRouterState: routerState = {
	routerExact: true
}

export const initialHeadLines: headLinesState = {
	data: {num: 0, headlines: []},
	nowPage: 1,
}