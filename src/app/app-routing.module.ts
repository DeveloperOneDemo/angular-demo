import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { EditHttpBookComponent } from './book/edit-http-book/edit-http-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { ListHttpBookComponent } from './book/list-http-book/list-http-book.component';
import { CopyComponent } from './copy/copy.component';
import { CounterComponent } from './counter/counter.component';
import { ListCountriesComponent } from './countries/list-countries/list-countries.component';
import { DisplayComponent } from './display/display.component';
import { ListFruitComponent } from './list-fruit/list-fruit.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  { path: "display", component: DisplayComponent, canActivate: [AuthGuard]},
  { path: "copy", component: CopyComponent, canActivate: [AuthGuard] },
  { path: "counter", component: CounterComponent, canActivate: [AuthGuard] },
  { path: "list-fruit", component: ListFruitComponent, canActivate: [AuthGuard] },
  { path: "book-crud", component: ListBookComponent, canActivate: [AuthGuard] },
  { path: "book-http-crud", component: ListHttpBookComponent, canActivate: [AuthGuard] },
  { path: "book-edit/:myId", component: EditBookComponent, canActivate: [AuthGuard] },
  { path: "book-http-edit/:myId", component: EditHttpBookComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "list-countries", component: ListCountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
