import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { MockRoutes } from '../mocks/MockRoutes';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockNext: any;
  let mockState: any;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(MockRoutes)]
    });
    guard = TestBed.inject(AuthGuard);
    location = TestBed.inject(Location);
  });

  it('#canActivate should return true for loggedin users and route to login page for loggedout users', async () => {
    spyOn(localStorage, 'getItem').and.returnValues("true", "false");
    
    expect(guard.canActivate(mockNext, mockState)).toBe(true);

    await guard.canActivate(mockNext, mockState);
    expect(location.path()).toBe('/');
    expect(guard.canActivate(mockNext, mockState)).toBe(false);
  });

});
