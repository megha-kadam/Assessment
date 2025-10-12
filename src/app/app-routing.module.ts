import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ProductComponent } from './shared/components/product/product.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { UserResolver } from './shared/resolve/user.resolver';
import { ProductResolver } from './shared/resolve/product.resolver';
import { ProfileResolver } from './shared/resolve/profile.resolver';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent
  },
      {
        path:'profile',
        component:ProfileComponent,
        title : 'Profile',
        resolve : {
          profile : ProfileResolver
        },
        canActivate : [AuthGuard]
      },
  {
    path : 'products',
    component : ProductComponent,
    title : 'Product',
    canActivate : [AuthGuard],
    resolve : {
      products : ProductResolver
    }
  },
  {
    path : 'users',
    component : UserComponent,
    title : 'Users',
    canActivate : [AuthGuard],
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
