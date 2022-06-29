import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-estudiantes',
  templateUrl: './array-estudiantes.component.html',
  styleUrls: ['./array-estudiantes.component.scss']
})
export class ArrayEstudiantesComponent implements OnInit {

  Alumno: Array<{id: number, nombre: string}> = [
    { id: 1, nombre: "Santiago" },
    { id: 2, nombre: "Jorge" },
    { id: 3, nombre: "Mateo" },
    { id: 4, nombre: "Lucas" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
