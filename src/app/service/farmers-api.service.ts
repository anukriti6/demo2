/***** Modules *****/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmersApiService {

  constructor(private http: HttpClient) { }

  
  // getting the loggedin user details from local storage 'user'
  getLoggedInUser(): any {
    let objstring: any = localStorage.getItem('user');
    let loggedInUser = JSON.parse(objstring);
    return loggedInUser;  
  }

  /* API requests by farmer/customer */

  // get farmers/customers user data 

  getSpecificUsers(userType: string): Observable<any> {
    return; // API 'GET' Request: '/api/{userType}'
  }

  // getting product details

  getProducts(): Observable<any> {
    return;  // API 'GET' Request: '/api/products'
  }

  // updating stock based on customer buying quantity

  updateProduct(details: any): Observable<any> {
    return;  // API 'PUT' Request: '/api/products/{id}' with request body 'details'
  }

  /* API requests for farmer */

  // adding or updating the products

  addProductByFarmer(details: any): Observable<any> {
    return; // API 'POST' Request: '/api/products' with request body 'details'
  }

  // deleting a product

  deleteProductByFarmer(id: any): Observable<any> {
    return; // API 'DELETE' Request: '/api/products/{id}'
  }

}
