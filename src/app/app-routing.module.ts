import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JsGalaxyComponent} from './js-galaxy/js-galaxy.component';
import {ConstellationComponent} from './constellation/constellation.component';


const routes: Routes = [
  {path: '', component: JsGalaxyComponent},
  {path: 'constellation/:constellationType', component: ConstellationComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
