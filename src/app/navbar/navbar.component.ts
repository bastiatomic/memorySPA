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

  @Output() pairs = new EventEmitter<number>();

  ngOnInit(){
    this.pairs.emit(4); // init value
  }
  

  more_pairs(a: string){
    if (a == 'add'){
      this.pairs.emit(1)
    } else{
      this.pairs.emit(-1)
    }
    
  }

  newGame(){

  }

}
