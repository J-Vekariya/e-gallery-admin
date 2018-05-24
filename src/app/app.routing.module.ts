import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }
  ];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
          )
    ],
    providers: [],
  })
  export class AppRoutinModule { }
  