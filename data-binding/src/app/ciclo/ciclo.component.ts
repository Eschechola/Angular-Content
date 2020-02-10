import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

//boas praticas, importar as interfaces
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() valorInicial: number = 10;

  constructor() { }

  log(key: string){
    console.log(key);
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

}
