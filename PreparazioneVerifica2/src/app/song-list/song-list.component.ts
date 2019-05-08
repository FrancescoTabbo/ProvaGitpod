import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Song } from '../song.model';

@Component({
    selector: 'app-song-list',
    templateUrl: './song-list.component.html',
    styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {


    @HostBinding('attr.class') cssClass = 'card';
    @Input() song: Song

    constructor() { }

    ngOnInit() {
    }

}
