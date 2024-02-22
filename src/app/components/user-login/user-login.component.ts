/***** Modules *****/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/***** Data *****/
import { loginMenu } from 'src/app/menus/app-menus';

/***** Services *****/
import { FarmersApiService } from 'src/app/service/farmers-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {

  menus = loginMenu;
  loginForm!: FormGroup;
  form: any;

  // validation messages for input fields
  emailRequiredError = "Mail is required";
  passwordRequiredError = "Password is required";

  constructor(
    private _formBuilder: FormBuilder,
    private _service: FarmersApiService,
    private _router: Router, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // on load to clear the local storage

    // form fields and its validators
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


    // get url param of 'userType'

  }

  loginUser(form: FormGroup) {
    /**
     * call 'getSpecificUsers' from service based on userType
     * check the form credentials from response details
     * if matches with any of the users,
     *      set local storage 'user' with the specific user details
     *      set local storage 'isLoggedIn' as 'true'
     *      route to user home page
     * else
     *      show window alert 'Username or password is wrong'
     * reset the form
     */

  }

}
