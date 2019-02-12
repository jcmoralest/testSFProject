import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlbumesService {

  readonly urlAPI = 'https://localhost:3000/api/album/';

  constructor(private http: HttpClient) { }

  getAlbums(query: string): Observable<any> {
    debugger;
    return this.http.get(this.urlAPI + 'searchAlbums');
  }
}
