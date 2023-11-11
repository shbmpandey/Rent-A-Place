import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShowPropertyDetailsComponent } from './show-property-details/show-property-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ShowPropertyImagesDialogComponent } from './show-property-images-dialog/show-property-images-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
declarations: [
AppComponent,
HomeComponent,
AdminComponent,
UserComponent,
LoginComponent,
RegisterComponent,
HeaderComponent,
ForbiddenComponent,
AddNewPropertyComponent,

ShowPropertyDetailsComponent,
ShowPropertyImagesDialogComponent,
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule,
RouterModule,
BrowserAnimationsModule,
MatToolbarModule,
MatButtonModule,
MatFormFieldModule,
MatGridListModule,
MatTableModule,
MatIconModule,
MatDialogModule
],
providers: [
AuthGuard,
{
provide: HTTP_INTERCEPTORS,
useClass:AuthInterceptor,
multi:true
},
UserService
],
bootstrap: [AppComponent]
})
export class AppModule { }