import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    // @ts-ignore __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    useValue: window.__MICRO_APP_BASE_ROUTE__ || '/sub-app',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
