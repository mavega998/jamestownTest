import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FormCarsComponent } from './components/form-cars/form-cars.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';

import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ListPersonComponent } from './components/list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCarsComponent,
    ListCarsComponent,
    HomeComponent,
    CarsComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
  ],
  entryComponents: [CarsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
