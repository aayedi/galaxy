import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstellationComponent } from './constellation/constellation.component';
import {JsGalaxyComponent} from './js-galaxy/js-galaxy.component';


const routes: Routes = [
  { path: '', component: JsGalaxyComponent},
  { path: 'constellation/:constellationType', component: ConstellationComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
