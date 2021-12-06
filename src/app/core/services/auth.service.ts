import { Injectable } from '@angular/core';
import { UserInfo } from '../../shared/models/UserInfo'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserInfo;

  constructor() { }

  getAuthorizationToken() {
    return 'some-auth-token';
  }

  getUser():UserInfo {
    return this.user;
  }

  isAuthenticated():boolean {
    
    return true;
  }
}
