import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {

  titulo: string;
  subtitulo:string;
  constructor() {
    this.titulo="";
    this.subtitulo="";
  }

  ngOnInit() {
  }

}