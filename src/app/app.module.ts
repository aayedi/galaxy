import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarListComponent } from './star-list/star-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';
import { StarItemComponent } from './star-item/star-item.component';
import { JsGalaxyComponent } from './js-galaxy/js-galaxy.component';
import { StarLinkComponent } from './star-link/star-link.component';
import { TreeModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    StarListComponent,
    StarItemComponent,
    JsGalaxyComponent,
    StarLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
