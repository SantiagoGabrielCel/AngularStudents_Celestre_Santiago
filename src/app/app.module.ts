import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './componentes/app-toolbar/app-toolbar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { StudentsComponent } from './componentes/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    NavbarComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
