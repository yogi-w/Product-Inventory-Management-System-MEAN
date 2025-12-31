import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:3000/api/products'


  getProduct(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  addProduct(product: any): Observable<any>{
    return this.http.post<any>(this.url, product)
  }

  getProductById(id:string): Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }


  updateProduct(id:string, product: any): Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`,product)
  }


  deleteProduct(id:string): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

}
