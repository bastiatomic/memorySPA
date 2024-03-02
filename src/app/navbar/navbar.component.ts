import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() moves_amount : number = 0; // this value is useless?

  @Output() pairsChange = new EventEmitter<number>();
  @Input() pairs! : number;

  @Output() deckSwapChange = new EventEmitter<string>();

  morePairs(a: string){
    console.log(`more_pairs`, a);
    if (a == 'add'){
      this.pairsChange.emit(1)
    } else{
      this.pairsChange.emit(-1)
    }
    
  }

  newGame(){

  }

  deckSwap(command : string){
    console.log("navbar > cardsControl")
    this.deckSwapChange.emit(command)
  }

}
