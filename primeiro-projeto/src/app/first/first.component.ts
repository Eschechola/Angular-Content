import { Component } from "@angular/core";

//notaçao indicando que essa classe é um componente
//o que vier dentro dos parenteses sao metadados
@Component({
    //como o component será chamado, no caso ficaria <first-component></first-component>
    selector: 'first-component',
    templateUrl: './first.component.html'
})

export class FirstComponent {

}