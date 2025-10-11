import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ProductComponent } from './shared/components/product/product.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { UserResolver } from './shared/resolve/user.resolver';
import { ProductResolver } from './shared/resolve/product.resolver';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path:'',
        component:ProfileComponent,
        title : 'Profile'
      },
    ]
  },
  
  {
    path : 'products',
    component : ProductComponent,
    title : 'Product',
    resolve : {
      products : ProductResolver
    }
  },
  {
    path : 'users',
    component : UserComponent,
    title : 'Users',
    resolve : {
      users : UserResolver
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
