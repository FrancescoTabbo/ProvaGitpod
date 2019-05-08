import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Album } from '../album.model';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-dettagli-album',
    templateUrl: './dettagli-album.component.html',
    styleUrls: ['./dettagli-album.component.css']
})
export class DettagliAlbumComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'card';
    @Input() value: Album
    constructor() { }

    ngOnInit() {
    }

}
