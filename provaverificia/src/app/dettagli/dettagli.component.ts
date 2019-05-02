import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Prenotazione } from '../prenotazione/prenotazione.model';
@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() selectedPren: Prenotazione;
  constructor() { }

  ngOnInit() {
  }

}
