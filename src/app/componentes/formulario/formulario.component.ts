import { Persona } from './../../models/Persona';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  PersonaModel: Persona

  constructor() {
    this.PersonaModel = new Persona();



  }
  formularioModel = new FormGroup({
    nombre: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl(null,[Validators.required, Validators.minLength(2)]),
    edad: new FormControl(null,[Validators.required])

});

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  guardar(){
    console.log(this.formularioModel)

  }

}
