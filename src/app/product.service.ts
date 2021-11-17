// import { Injectable } from '@angular/core';

// import {Http, Response} from '@angular/http';
// import { AlbumStorePage } from '../../e2e/app.po';

// import 'rxjs/add/operator/map';

// @Injectable()
// export class ProductService {

//   private _albumUrl: string = '../assets/album.json';

//   constructor(private _http: Http) {}

//   getAlbum (id:number) {
//     return this._http.get(this._albumUrl).map((response) => response.json());
//   }

// }

// using observables

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Album } from './album';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }
}
