import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getproducts(url): Observable<Product> {
    return this.http.get<Product>(url)

  }
}
