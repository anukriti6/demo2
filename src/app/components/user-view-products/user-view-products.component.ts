/***** Modules *****/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/***** Modals *****/
import { Product } from 'src/app/modals/Product';
import { User } from 'src/app/modals/User';

/***** Services *****/
import { FarmersApiService } from 'src/app/service/farmers-api.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-view-products.component.html',
  styleUrls: ['./user-view-products.component.css']
})
export class UserViewProductsComponent implements OnInit {

  quantity: any;
  products!: Product[];
  loggedInUser!: User;
  noOfProducts: number = 0;

  constructor(private _router: Router, private _service: FarmersApiService) { }

  ngOnInit(): void {
    // call 'getLoggedInUser' and assign it to 'loggedInUser'
    this.getProducts();
  }

  // getting products from server for farmers and customers
  getProducts() {
    /**
     * call 'getProducts' from service
     * get the products based on the logged in user
     * to view the details in template
     */
  }

  // deleting the products from server for farmers
  deleteProduct(id: number) { 
    /**
     * call 'deleteProductByFarmer' from service
     * on successful deletion, 
     *      show window alert "Product removed" and call 'getProducts' fn
     */
  }

  getUpdateForm(product: Product) {
    // route to FarmerSaveProduct component to update the product for farmers user
  }

  // to buy the product for customers user
  buyProduct(product: Product) {
    /**
     * if input quantity is greater than product stock, show window alert "Out of stock"
     * else 
     *      update the stock value
     *      call service 'updateProduct' with product details (which contain updated stock)
     *      reset the quantity input to 1
     *      show alert 'Product is shipped, it will reach you soon.'
     *      call 'getProducts' fn
     */
  }

}
