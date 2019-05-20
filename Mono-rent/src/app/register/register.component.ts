import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams,  HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   @Input() cookieService:CookieService;
  constructor(public http: HttpClient) { }

  ngOnInit() {}

  Registrati(Nome:HTMLInputElement, Cognome:HTMLInputElement, Indirizzo:HTMLInputElement, Telefono:HTMLInputElement, Email:HTMLInputElement, Nickname:HTMLInputElement, Password:HTMLInputElement): void {
      const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });
    const params = new HttpParams()
      .set('Nome', Nome.value)
      .set('Cognome', Cognome.value)
      .set('Indirizzo', Indirizzo.value)
      .set('Telefono', Telefono.value)
      .set('Email', Email.value)
      .set('Nickname', Nickname.value)
      .set('Password', Password.value);

      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ Nome: Nome.value, Cognome: Cognome.value,Indirizzo: Indirizzo.value,Telefono: Telefono.value,Email: Email.value,Nickname: Nickname.value, Password: Password.value });

    this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/segnalaG',null, options  )
      .subscribe(data => {
        if(data[0].message == "OK"){
          this.cookieService.set('ID','username');
        }
    });
      }

}
