import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfileViewComponentComponent } from './profile-view-component/profile-view-component.component';
import { ListViewComponetComponent } from './list-view-component/list-view-componet.component';
import { EditProfileComponentComponent } from './edit-profile-component/edit-profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ProfileViewComponentComponent,
    ListViewComponetComponent,
    EditProfileComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
