import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ToursComponent } from './tours/tours.component';
import { SerchComponent } from './serch/serch.component';
import { FormsModule } from '@angular/forms';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ToursFormComponent } from './tours-form/tours-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authenticationGuard } from './guards/Guards';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PopupComponent } from './shared/popup/popup.component';

const appRoute: Routes = [
  // {path:' ' , component:AppComponent},
  { path: 'home', component: CarouselComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'demo', component: DemoTestComponent },
  { path: ' ', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tours/tour/:id:title', component: ToursComponent },
  {
    path: 'add',
    component: ToursFormComponent , canActivate:[authenticationGuard] ,
  },
  {
    path:'fileupload/:id',
    component:FileUploadComponent
  },

  { path: 'edittour/:id', component: ToursFormComponent },
  { path: '**', component: ErrorComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NavbarComponent,
    CarouselComponent,
    SigninComponent,
    SignupComponent,
    ToursComponent,
    SerchComponent,
    DemoTestComponent,
    ErrorComponentComponent,
    ToursFormComponent,
    FileUploadComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
