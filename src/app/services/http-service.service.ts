import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllPokemons(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`);
  }

}
