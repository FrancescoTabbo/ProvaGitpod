import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Verdura } from './dvegetables.model';
import { Verdure } from './mock-veg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  verdure = Verdure;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['nome', Validators.required], 'descrizione': ['descrizione', Validators.required], 'prezzo': ['prezzo', Validators.required]
    });
  }

  ngOnInit(){
  }

  onSubmit(value: string): void {

    let verdura: Verdura = new Verdura();
    verdura.nome = this.myForm.controls['nome'].value;
    verdura.descrizione = this.myForm.controls['descrizione'].value;
    verdura.prezzo = this.myForm.controls['prezzo'].value;

    this.verdure.push(verdura);
  }
}
