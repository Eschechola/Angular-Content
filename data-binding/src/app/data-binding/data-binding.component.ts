import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  /* INTERPOLATION */

  url: string = 'https://medium.com@lucas.eschechola'
  cursoAngular: boolean = true;

  getValor(){
    return 4+2;
  }

  getCurtirCurso(){
    return true;
  }

  /* INTERPOLATION */


  /* PROPERTY BINDING */
  urlImagem: string = 'https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.0-9/p720x720/57311501_323213241698452_8222770121471426560_o.jpg?_nc_cat=102&_nc_ohc=_uz2VyN4gfkAX8av577&_nc_ht=scontent.fcgh12-1.fna&_nc_tp=1002&oh=2f6ce626521d6ba88f1a29e1f6d69593&oe=5EA97ABE'


  /* EVENT BINDING */
  botaoClicado(){
    alert('Clicado')
  }

  valorAtual: string = "";
  
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    
  }

  // OU PODE TER O INTELI SENSE DO EVENTO

  

  onKeyUp2(evento){
    alert(evento.target.value);
  }


  valorSalvo: string = ""; 

  salvarValor(valor){
    this.valorSalvo = valor;
  }


  valorBlur: string = "";

  salvarBlur(valor){
    this.valorBlur = valor;
  }


  onMouseOver(){
    alert('Mouse em cima');
  }

  onMouseOut(){
    alert('Mouse removido');
  }


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
