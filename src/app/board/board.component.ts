import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from "@angular/common";
import { Card, CardsService } from '../cards.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent,CommonModule, CardComponent, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent{

  cards: Card[] = []
  firstGuess : Card | null = null
  secondGuess : Card | null = null
  moves_amount : number = 0

  constructor(private CardService: CardsService){

  }

  ngOnInit(){
    this.newGame()
  }

  newGame(){
    this.cards = this.CardService.newShuffleCards()
    this.moves_amount = 0
    this.firstGuess = null; this.secondGuess = null
  }

  //TODO: make more return to avoid nested if()
  makeMove(index: number){
    var guess: Card = this.cards[index]
    console.log(guess)
    
    if(!this.firstGuess){
      this.firstGuess = guess
      guess.whatVisible = guess.symbol
    }
    else if(this.firstGuess && guess != this.firstGuess){
      this.secondGuess = guess
      guess.whatVisible = guess.symbol
    }

    if(this.firstGuess?.symbol == this.secondGuess?.symbol){
      console.log("YOU WON")
      this.moves_amount += 1
      this.firstGuess = null; this.secondGuess = null
    } else if(this.secondGuess) {
      console.log("YOU FAILED")
      this.moves_amount += 1

      // reset if wrong choice
      if(this.firstGuess.symbol != this.secondGuess.symbol){

        setTimeout(() =>{
          
          if(this.firstGuess){this.firstGuess.whatVisible = "x"}
          if(this.secondGuess){this.secondGuess.whatVisible = "x"}
          this.firstGuess = null; this.secondGuess = null
          
          },3000);
        }
    
    }

  }



}



