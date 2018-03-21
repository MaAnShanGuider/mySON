import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRouterModule } from './router/router.module';
import { AppStoreModule } from './store/store.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

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
import { HeadlinesTarbarComponent } from './pages/son-mobile/headlines/headlines-tarbar/headlines-tarbar.component';
import { HeadlinesSwiperComponent } from './pages/son-mobile/headlines/headlines-swiper/headlines-swiper.component';
import { HeadlinesContentComponent } from './pages/son-mobile/headlines/headlines-content/headlines-content.component';
import { HeadlinesContentChildComponent } from './pages/son-mobile/headlines/headlines-content/headlines-content-child/headlines-content-child.component';
import { SonIndexSortComponent } from './pages/son-mobile/son-index/son-index-sort/son-index-sort.component';
import { SonIndexSuggecttionComponent } from './pages/son-mobile/son-index/son-index-suggecttion/son-index-suggecttion.component';
import { SonIndexToyComponent } from './pages/son-mobile/son-index/son-index-toy/son-index-toy.component';
import { SonIndexHotGroupComponent } from './pages/son-mobile/son-index/son-index-hot-group/son-index-hot-group.component';
import { SonIndexCommonListComponent } from './pages/son-mobile/son-index/common/son-index-common-list/son-index-common-list.component';


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
    SonSwiperDirective,
    HeadlinesTarbarComponent,
    HeadlinesSwiperComponent,
    HeadlinesContentComponent,
    HeadlinesContentChildComponent,
    SonIndexSortComponent,
    SonIndexSuggecttionComponent,
    SonIndexToyComponent,
    SonIndexHotGroupComponent,
    SonIndexCommonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    AppStoreModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),    
    NgZorroAntdModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
