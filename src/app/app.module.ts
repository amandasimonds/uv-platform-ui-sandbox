import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UvUiLibModule } from 'uv-ui-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartPageComponent
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
