import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-generator',
  templateUrl: './text-generator.component.html',
  styleUrls: ['./text-generator.component.css']
})

export class TextGeneratorComponent {

  texts = ['lechuga', 'tomate', 'bacalao', 'espinacas', 'ya', 'mango', 'plátanos'];
  choosenText = '';
  counterInitNum = 0;
  counter = [];

  getRandomText() {
    this.choosenText = this.texts[Math.floor(Math.random()*this.texts.length)];
    this.setCounter();
  }

  setCounter() {
    this.counterInitNum++;
    this.counter.push(this.counterInitNum);
    console.log(this.counter);
  }

}
