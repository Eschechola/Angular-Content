import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  
  /* TWO - WAY DATA BINDING */


  nome: string = 'abc';

  pessoa: any = {
    nome: 'Lucas',
    idade: 17
  }


  constructor() { }

  ngOnInit() {
  }

}
