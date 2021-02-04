import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnunciosComponent } from './anuncios/anuncios.component';
import { ListarTestComponent } from './listar-test/listar-test.component';
import { LoginComponent } from './login/login.component';
import { ListarAnunciosComponent } from './listar-anuncios/listar-anuncios.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent,
    ListarTestComponent,
    LoginComponent,
    ListarAnunciosComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
