import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { HomeComponent } from "./home/home.component";
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/login", pathMatch: "full"
  },
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "start-page",
        component: StartPageComponent,
        children: [
          {
            path: "home-splash",
            component: HomeSplashComponent
          },
          {
            path: "side-by-side",
            component: SideBySideComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
