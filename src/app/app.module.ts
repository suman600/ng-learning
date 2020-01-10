import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment  } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// components
import { AppComponent } from './app.component';
// app routes /modules
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// future modeules
import { LayoutModule } from './layout/layout.module';
// guards and services
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
