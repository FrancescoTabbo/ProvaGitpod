import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Prenotazione } from './prenotazione/prenotazione.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prenotazione: Prenotazione[];   // <-- component property
  data: Object;
  loading: boolean;
  oArt: Observable<Prenotazione[]>;
  postArt: Observable<Object>;
  tempArt: Prenotazione;
  num: number = 0;
  selectedPren : Prenotazione;

  constructor(public http: HttpClient){
    this.prenotazione = new Array<Prenotazione>();
    this.oArt = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
    this.oArt.subscribe(this.ricevidati);
  }
  ricevidati = (data) => {
      this.prenotazione = data;
  }

    makeCompactRequest(Nome: HTMLInputElement, Cognome: HTMLInputElement, Indirizzo: HTMLInputElement, Telefono: HTMLInputElement, Email: HTMLInputElement, Data: HTMLInputElement, Ora: HTMLInputElement): boolean {


    //mandi un apost al server

    this.tempArt = new Prenotazione(Nome.value, Cognome.value, Indirizzo.value, Telefono.value, Email.value, Data.value, Ora.value, );
    this.loading = true;
    this.postArt = this.http.post('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni', JSON.stringify(this.tempArt));

  this.prenotazione.push(this.tempArt);


    this.postArt.subscribe(data => {
      this.data = data;

      //console.log(data);
      this.loading = false;



    });

    return false;
  }


onClick(art)
{
    this.selectedPren = art;
    console.log(this.selectedPren);
}

}
