import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  translate: string;
  cleartranslate: string;
  piglatin: string;
  words: string;
  word: string;
  output: string = '';
  vowels: any = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  pigWay: string = 'way';
  pigAy: string = 'ay';
  items: any = [];

  constructor() {

  }

  doTranslation(sentence) {
    if(sentence) {
      this.reset();
      this.translate = sentence;
      this.items.unshift(sentence);
      this.splitSentence(sentence);
    }
  }

  reset() {
    this.cleartranslate = '';
  }

  deleteHistoryItem(sentence) {
    for(let i = 0; i <this.items.length; i++) {
      if(this.items[i] == sentence){
        this.items.splice(i, 1);
      }
    }
  }

  splitSentence(sentence) {
    this.words = sentence.split(' ');
    this.output = '';
    // loop through each word
    for (var i = 0; i < this.words.length; i++) {
      // translate each word
      this.output += this.translatePigLatin(this.words[i]) + " ";
    }
    this.piglatin = this.output;
}


translatePigLatin(word) {
  var result = word.split('');

  if(word.match(/[aeiou]/gi)) {

    // check first character is a vowel
    if(this.vowels.includes(word.charAt(0))) {

       // if first character is a vowel return the word and add 'way' on the end
       return word += this.pigWay;
       }

       else {

         // loop the length of the word
         for (var i = 0; i < word.length; i++) {

           // if not a vowel
           if (!this.vowels.includes(word[i])) {

             // shift removes the first letter and push adds it to the end
             result.push(result.shift());

             // stop looping if we get to a vowel
           } else {

             // add 'ay' to the end
             result.push(this.pigAy);

             // join the array back together (with no gaps) to make a word
             return result.join('');
           }
         }
       }
     }

     else {
       // no vowels so just return the word
       return word;
   }

}


  ngOnInit() {
    this.piglatin = 'Your translation will appear here...';
  }

}
