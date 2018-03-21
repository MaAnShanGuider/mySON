import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { indexReducer,routerReducer,headLinesReducer } from './reducer.module';


@NgModule({
	imports: [
		StoreModule.forRoot({
			index: indexReducer, 
			routerChange: routerReducer,
			headLines:headLinesReducer
		})
	],
	providers: [],
	exports: [StoreModule]
})

export class AppStoreModule {}