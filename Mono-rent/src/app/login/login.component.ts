import { Component, OnInit, Input  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   @Input() cookieService:CookieService;
   constructor(public http: HttpClient,public router: Routes) {}

   Login(username :HTMLInputElement,password:HTMLInputElement): void {
       const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('username', username.value)
      .set('password', password.value);

      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ username: username.value, password: password.value });

    this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/segnalaG',null, options  )
      .subscribe(data => {
        if(data[0].message == "OK"){
          this.cookieService.set('ID','username');
        }
    });
      }
      /*Regi(){
          this.router.location('/admin');
      }*/

}
