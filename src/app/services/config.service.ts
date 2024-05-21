import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  loadProductsFromFakeApi() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
