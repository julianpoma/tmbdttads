import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { LoginComponent } from './header/login/login.component';
import { PeliculasDestacadasComponent } from './peliculas-destacadas/peliculas-destacadas.component';
import { ItemPeliculaComponent } from './peliculas-destacadas/item-pelicula/item-pelicula.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PeliculasDestacadasComponent,
    ItemPeliculaComponent,
    BarraBusquedaComponent,
    PeliculaComponent,
    CarrouselComponent,
    FooterComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
