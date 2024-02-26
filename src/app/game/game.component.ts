import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  imports: [NavbarComponent, BoardComponent],
})
export class GameComponent {
  //I store all the values assocciated with one game and emit/send them to their components

  pairs: number = 0;
  moves_amount: number = 0;

  onPairChange(a: number) {
    this.pairs += a;
  }

  onNewMoveCommand(command: string) {
    switch (command) {
      case 'null':
        this.moves_amount = 0;
        break;
      case 'inc':
        this.moves_amount += 1;
        break;
      case 'dec':
        this.moves_amount -= 1;
        break;
    }
  }
}
