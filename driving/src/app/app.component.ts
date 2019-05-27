import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mezzo } from './driving.model';
import { Mezzi } from './mock-driving';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  mezzi = Mezzi;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'tipo': ['tipo', Validators.required], 'descrizione': ['descrizione', Validators.required], 'tariffa': ['tariffa', Validators.required], 'valutazioneMedia': ['valutazioneMedia', Validators.required]
    });
  }

  ngOnInit(){
  }

  onSubmit(value: string): void {

    let mezzo: Mezzo = new Mezzo();
    mezzo.tipo = this.myForm.controls['tipo'].value;
    mezzo.descrizione = this.myForm.controls['descrizione'].value;
    mezzo.tariffa = this.myForm.controls['tariffa'].value;
    mezzo.valutazioneMedia = Number(this.myForm.controls['valutazioneMedia'].value);

    this.mezzi.push(mezzo);
  }
}
