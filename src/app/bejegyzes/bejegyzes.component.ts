import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bejegyzes',
  templateUrl: './bejegyzes.component.html',
  styleUrls: ['./bejegyzes.component.css']
})
export class BejegyzesComponent implements OnInit, OnDestroy {

  osztaly: string = 'Válassz osztályt!'
  tevekenyseg:  string = 'Válassz tevékenységet!'
  osztalyok: string[] = ['A1', 'A2', 'B1', 'B2']
  tevekenysegek: string[] = ['t1', 't2', 't3']

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    
  }
}
