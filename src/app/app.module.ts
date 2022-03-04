import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';
import { CopyComponent } from './copy/copy.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ListFruitComponent } from './list-fruit/list-fruit.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ListHttpBookComponent } from './book/list-http-book/list-http-book.component';
import { EditHttpBookComponent } from './book/edit-http-book/edit-http-book.component';
import { ListCountriesComponent } from './countries/list-countries/list-countries.component';
import { DisplayCountryComponent } from './countries/list-countries/display-country/display-country.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HeaderComponent,
    CopyComponent,
    CounterComponent,
    ListFruitComponent,
    ListBookComponent,
    EditBookComponent,
    LoginComponent,
    LogoutComponent,
    ListHttpBookComponent,
    EditHttpBookComponent,
    ListCountriesComponent,
    DisplayCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
