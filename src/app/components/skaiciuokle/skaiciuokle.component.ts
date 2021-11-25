import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {
  x;
  y;
  sandauga;

  constructor() { }

  ngOnInit(): void {
  }

  skaiciuoti(){
    this.sandauga=this.x*this.y;
  }

}
