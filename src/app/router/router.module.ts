import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SonMobileComponent } from '../pages/son-mobile/son-mobile.component';
import { SonCartComponent } from '../pages/son-mobile/son-cart/son-cart.component';
import { SonHomeComponent } from '../pages/son-mobile/son-home/son-home.component';
import { SonMineComponent } from '../pages/son-mobile/son-mine/son-mine.component';
import { SonIndexComponent } from '../pages/son-mobile/son-index/son-index.component';
import { SonPeripheralComponent } from '../pages/son-mobile/son-peripheral/son-peripheral.component';
import { HeadlinesComponent } from '../pages/son-mobile/headlines/headlines.component';

export const ROUTES : Routes = [	
	{ path: '', redirectTo:'mobile', pathMatch: 'full'},
	{ path: 'mobile', component: SonMobileComponent, children: [
		{ path: '', component: SonIndexComponent},
		{ path: 'peripheral', component: SonPeripheralComponent},
		{ path: 'home', component: SonHomeComponent},
		{ path: 'cart', component: SonCartComponent},
		{ path: 'mine', component: SonMineComponent},
		{ path: 'headlines', component: HeadlinesComponent},
	] },

	]; 

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES)
	],
	providers: [],
	exports: [
		RouterModule
	]
})

export class AppRouterModule{};