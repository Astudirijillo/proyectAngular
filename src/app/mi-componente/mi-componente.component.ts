import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent implements OnInit {
  edad: number;
  nombres: Array<String>;

  constructor() {
    this.edad = 18;
    this.nombres = ['Victor', 'Carlos', 'Juan', 'Luis'];
  }

  ngOnInit(): void {
    console.log('El componente mi-componente esta cargando');
  }

  aumentarEdad() {
    this.edad = this.edad + 1;
    console.log('aumentar');
  }
  disminuirEdad() {
    this.edad--;
    console.log('disminuir');
  }
}
