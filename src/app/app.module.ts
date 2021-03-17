import 'keylines';
// import { KlComponent, KlComponents, KlComponentsService } from '../../angular-keylines';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UvUiLibModule } from "uv-ui-lib";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HomeComponent } from './home/home.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { GlobalWhereUsedComponent } from "./global-where-used/global-where-used.component";
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import { WidgetSandboxComponent } from './widget-sandbox/widget-sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartPageComponent,
    HomeComponent,
    SideBySideComponent,
    HomeSplashComponent,
    // KlComponents,
    // KlComponent,
    GlobalWhereUsedComponent,
    DataViewerComponent,
    WidgetSandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UvUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
