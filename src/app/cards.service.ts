import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = [];

   numbers = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🫛", "🥬", "🥒", "🌶", "🫑", "🌽", "🥕", "🫒", "🧄", "🧅", "🫚", "🥔", "🍠", "🫘", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕", "🫓", "🥪", "🥙", "🧆", "🌮", "🌯", "🫔", "🥗", "🥘", "🫕", "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠", "🥮", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "🫖", "☕", "🍵", "🧃", "🥤", "🧋", "🫙", "🍶", "🍺", "🍻", "🥂", "🍷", "🫗", "🥃", "🍸", "🍹", "🧉", "🍾", "🧊", "🥄", "🍴", "🍽", "🥣", "🥡", "🥢", "🧂"]


  constructor() {
  }
  newShuffleCards(){
    this.cards = []
    for (var i = 0; i<8; i++) {
      var randSymbol: string = this.numbers[Math.floor(Math.random() * this.numbers.length)]
      this.cards.push({number: i, symbol: randSymbol, whatVisible: "x" })
      this.cards.push({number: i, symbol: randSymbol, whatVisible: "x" })
    }
    this.cards.sort((a, b) => 0.5 - Math.random());
    return this.cards
  }

}


export interface Card{
  number: Number;
  symbol: string
  whatVisible: string

}