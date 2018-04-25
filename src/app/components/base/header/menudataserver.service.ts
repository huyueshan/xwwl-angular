import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Menu } from './menu';



@Injectable()
export class MenudataserverService {

  constructor(
    // private http: Http,
    private http: HttpClient,
  ) {  }


  getMenus(url): Observable<Menu[]> {
   return this.http.get<Menu[]>(url)
  }

}
