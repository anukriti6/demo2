/***** Modules *****/
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/***** Modals *****/
import { User } from 'src/app/modals/User';

/***** Services *****/
import { FarmersApiService } from 'src/app/service/farmers-api.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu-options.component.html'
})
export class UserMenuOptionsComponent implements OnInit {

  @Input() menus: any; // data from another component

  loggedInUser!: User;
  userName!: string;
  isLoggedIn!: string | null;

  constructor(private _router: Router, private _service: FarmersApiService) { }

  ngOnInit(): void {

     /**
      * check 'isLoggedIn' in local storage
      * if user logged in, 
      *       call 'getLoggedInUser' and assign it to 'loggedInUser'
      *       get name of the user
      * 
      */
  
  }

  selectedOption(event: any) {

    // based on the menu 'name', route to menu 'path'

  }

}
