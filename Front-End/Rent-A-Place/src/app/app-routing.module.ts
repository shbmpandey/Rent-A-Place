import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { ShowPropertyDetailsComponent } from './show-property-details/show-property-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] },
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'addNewProperty',
    component: AddNewPropertyComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  { path: 'showPropertyDetails', component: ShowPropertyDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'addNewProperty',
    component: AddNewPropertyComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
