import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(newValue: number) {
    // let elementHTML:any=document.getElementsByName('progreso')[0]
    // console.log('Element: ',elementHTML.value);
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    }else{
      this.progreso=newValue;
    }

    // elementHTML.value=this.progreso
    this.txtProgress.nativeElement.value=this.progreso;
    this.cambioValor.emit(this.progreso);

  }

  changeValue(value: number) {
    if (this.progreso >= 100 && value > 0) {
      this.progreso = 100;
      return
    }
    if (this.progreso <= 0 && value < 0) {
      this.progreso = 0
      return
    }
    this.progreso += value
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
