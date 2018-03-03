import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { sumReducer,routerReducer } from './reducer.module';


@NgModule({
	imports: [
		StoreModule.forRoot({tesr: sumReducer, routerChange: routerReducer})
	],
	providers: [],
	exports: [StoreModule]
})

export class AppStoreModule {}