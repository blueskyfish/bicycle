import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithProtectedRouteGuard } from './common/guard/with-protected-route-guard.service';
import { WithoutProtectedRouteGuard } from './common/guard/without-protected-route.guard';
import { BikeDashboardModule } from './dashboard/dashboard.module';
import { BicycleListViewComponent, DashboardViewComponent, HomeViewComponent } from './dashboard/views';
import { BikeLoginModule } from './login/login.module';
import { LoginViewComponent } from './login/view/login-view.component';
import { BikeRegisterModule } from './register/register.module';
import { RegisterViewComponent } from './register/view/register-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginViewComponent,
    canActivate: [
      WithoutProtectedRouteGuard,
    ],
  },
  {
    path: 'register',
    component: RegisterViewComponent,
    canActivate: [
      WithoutProtectedRouteGuard,
    ],
  },
  {
    path: 'home',
    component: HomeViewComponent,
    canActivate: [
      WithProtectedRouteGuard,
    ],
    children: [
      {
        path: '',
        component: BicycleListViewComponent,
      },
      {
        path: ':bicycleId',
        component: DashboardViewComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),

    BikeLoginModule,
    BikeRegisterModule,
    BikeDashboardModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
