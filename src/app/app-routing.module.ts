import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StarListComponent } from './star-list/star-list.component';
import {JsGalaxyComponent} from './js-galaxy/js-galaxy.component';


const routes: Routes = [
  { path: '', component: JsGalaxyComponent},
  { path: 'stars', component: StarListComponent},
  { path: 'front-constellation', component: StarListComponent},
  { path: 'back-constellation', component: StarListComponent},
  { path: 'library-constellation', component: StarListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
