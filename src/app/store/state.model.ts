export class testState {
	constructor(
		public test: string
		) {}
}

export class routerState {
	constructor(		
		public routerExact: boolean
		) {}
}
export type State = | testState | routerState;
export const initialTestState: State = {
	test: 'boom'
}

export const initialRouterState: State = {
	routerExact: true
}