import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UvUiLibModule } from 'uv-ui-lib'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UvUiLibModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
