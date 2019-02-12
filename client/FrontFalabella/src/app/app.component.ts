import { Component, OnInit } from '@angular/core';
import { AlbumesService } from './services/albumes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private albumServ: AlbumesService) {}

  ngOnInit() {
    this.albumServ.getAlbums('mi')
    .subscribe(_ => {
      console.log(_);
      debugger;
    });
  }
}
