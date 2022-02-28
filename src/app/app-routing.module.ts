import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './book/list-book/list-book.component';
import { CopyComponent } from './copy/copy.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ListFruitComponent } from './list-fruit/list-fruit.component';

const routes: Routes = [
  { path: "display", component: DisplayComponent },
  { path: "copy", component: CopyComponent },
  { path: "counter", component: CounterComponent },
  { path: "list-fruit", component: ListFruitComponent },
  { path: "book-crud", component: ListBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
