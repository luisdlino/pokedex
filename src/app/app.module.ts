import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http-service.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { LoadingComponent } from './components/loading/loading.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './components/filterPipe/filterPipe';
import { PokeCardComponent } from './components/pokeCard/pokeCard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingComponent,
    FilterPipe,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
