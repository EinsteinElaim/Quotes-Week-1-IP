import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'First Quote', 'Einstein', 'Author 1'),
    new Quote(2, 'Second Quote', 'Eliam', 'Author 2'),
    new Quote(3, 'Third Quote', 'Murithi', 'Author 3'),
    new Quote(4, 'Fourth Quote', 'Eliot', 'Author 4'),
    new Quote(5, 'Fifth Quote', 'Blair', 'Author 5'),
  ];


  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote);
  }


  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote} ?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  toggleDetails(index){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
