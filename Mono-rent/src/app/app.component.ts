import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   verifica:boolean=false;

  constructor( public cookieService: CookieService ) {
      if(cookieService.get('ID') != undefined){
          this.verifica=true;
      }
   }

  ngOnInit(): void {}

}