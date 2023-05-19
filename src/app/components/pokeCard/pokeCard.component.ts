import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pokeCard',
  templateUrl: './pokeCard.component.html',
  styleUrls: ['./pokeCard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokeCardComponent {

  @Input() pokemon: any;
  @Input() selectedTypes: Array<any> = [];

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
