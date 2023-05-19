import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'home-pokedex',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{

  constructor(private httpService: HttpService) {}

  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  types: any[] = [];
  filteredTypes: any[] = [];
  loading = true;
  selectedTypes: any[] = [];
  searchText = '';


  ngOnInit() {
    for(let i = 1; i <= 150; i++) {
      this.httpService.getAllPokemons(i).subscribe((res: any) => {
        this.pokemons.push(res);
        this.types.push(res.types);
        if(this.pokemons.length == 150) {
          this.types.map((type, index) => {
            type.map((innerType: any) => {
              this.filteredTypes.push(innerType.type.name);
            })
            if (index == this.types.length -1) {
              this.filteredTypes = [...new Set(this.filteredTypes)];
            }
          })
          this.pokemons.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
          this.loading = false;
        }
      })
    }
  }

  setType(event: any, type: string, index: number) {
    if (event.target.checked) {
      this.selectedTypes.push(type);
    } else {
      var index = this.selectedTypes.indexOf(type);
      if (index !== -1) {
        this.selectedTypes.splice(index, 1);
      }
    }
  }

  checkType(pokemon: any) {
    if (pokemon.types.some((r: any) => this.selectedTypes.includes(r.type.name))) {
      return true;
    }
    if (this.selectedTypes.length == 0) {
      return true;
    }
    return false;
  }
}
