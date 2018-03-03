import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRouterModule } from './router/router.module';
import { AppStoreModule } from './store/store.module';

import { AppComponent } from './core/app.component';
import { SonIndexComponent } from './pages/son-mobile/son-index/son-index.component';
import { SonMobileComponent } from './pages/son-mobile/son-mobile.component';
import { HeadlinesComponent } from './pages/son-mobile/headlines/headlines.component';
import { SonHomeComponent } from './pages/son-mobile/son-home/son-home.component';
import { SonCartComponent } from './pages/son-mobile/son-cart/son-cart.component';
import { SonMineComponent } from './pages/son-mobile/son-mine/son-mine.component';
import { SonPeripheralComponent } from './pages/son-mobile/son-peripheral/son-peripheral.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { TarbarComponent } from './common/tarbar/tarbar.component';
import { SonIndexSwiperComponent } from './pages/son-mobile/son-index/son-index-swiper/son-index-swiper.component';
import { SonSwiperDirective } from './directive/son-swiper.directive';


@NgModule({
  declarations: [
    AppComponent,
    SonIndexComponent,
    SonMobileComponent,
    HeadlinesComponent,
    SonHomeComponent,
    SonCartComponent,
    SonMineComponent,
    SonPeripheralComponent,
    NavbarComponent,
    TarbarComponent,
    SonIndexSwiperComponent,
    SonSwiperDirective
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    AppStoreModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
