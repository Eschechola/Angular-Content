import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propert.component.html',
  styleUrls: ['./output-propert.component.css']
})


export class OutputPropertComponent implements OnInit {

  //expor esse valor para outros componentes
  @Input() valor: number = 0;

  //classe para emitir valor para o componente pai
  //no caso, quem chama (pai) é o data-binding component
  @Output() mudouValor = new EventEmitter();


  @ViewChild('campoInput') campoValorInput: ElementRef;

  Incrementa(){
    
    //pode ser usar assim definindo uma varipavel ao html
    //this.campoValorInput.nativeElement.value++;

    this.valor += 1;

    //emite um valor para o componente pai
    //pode enviar valores e objetos
    this.mudouValor.emit({novoValor: this.valor});
  }

  Decrementa(){
    this.valor -= 1;

    //emite um valor para o componente pai
    //pode enviar valores e objetos
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
