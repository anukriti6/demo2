/***** Modules *****/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/***** Modals *****/
import { Product } from 'src/app/modals/Product';
import { User } from 'src/app/modals/User';

/***** Services *****/
import { FarmersApiService } from 'src/app/service/farmers-api.service';

@Component({
  selector: 'app-farmer-save-products',
  templateUrl: './farmer-save-products.component.html'
})
export class FarmerSaveProductsComponent implements OnInit {

  saveProductForm!: FormGroup;
  product!: Product;

  // validation message for saveProductForm fields
  nameRequiredError = "Name is required";
  nameMinMaxError = "Invalid name";
  stockRequiredError = "Stock is required";
  stockMinError = "Invalid stock";
  priceRequiredError = "Price is required";
  priceMinError = "Invalid price";

  constructor(
    private _formBuilder: FormBuilder,
    private _service: FarmersApiService,
    private _router: Router, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // call 'getLoggedInUser' and assign it to 'loggedInUser'

    // form fields and its validators
    this.saveProductForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      unit: ['kg'],
      stock: ['', [Validators.required, Validators.min(1)]],
      pricePerUnit: ['', [Validators.required, Validators.min(1)]],
    });

    /**
     * get route params
     * if there is a url param with 'product', 
     * fill it in the form to edit details
     */

  }

  // To add/update the product details
  saveProduct(form: FormGroup) {
    /**
     * sending the details to the service
     * For updating, get 'product' details and update with the form values and send
     * For adding, add 'belongsTo' (id of loggedin user) with the form values and send
     * On successful adding/updating, route to UserHomepage component : '/home/farmers' 
     */
  }

}
