import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstellationComponent } from './constellation/constellation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StarItemComponent } from './star-item/star-item.component';
import { JsGalaxyComponent } from './js-galaxy/js-galaxy.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateStarComponent } from './create-star/create-star.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NavComponent } from './nav/nav.component';
import {MatMenuModule} from '@angular/material/menu';
import {StarService} from './service/star.service';

@NgModule({
  declarations: [
    AppComponent,
    ConstellationComponent,
    StarItemComponent,
    JsGalaxyComponent,
    CreateStarComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
  ],
  entryComponents: [
    CreateStarComponent
  ],
  providers: [StarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
