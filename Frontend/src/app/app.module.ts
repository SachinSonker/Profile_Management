import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
//import {FormsModule} from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
//import {HttpClientModule } from '@angular/common/http';
//import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
   // FormsModule,
    ForgetPasswordComponent
    //HttpClientModule
   // MatButtonModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
