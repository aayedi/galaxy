import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StarListComponent } from './star-list/star-list.component';


const routes: Routes = [
  { path: "", component: AppComponent},
  { path: "stars", component: StarListComponent},
  //{ path: "**", redirectTo: "/", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
