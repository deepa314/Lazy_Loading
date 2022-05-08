import { Injectable } from '@angular/core';

interface User {
  username: string
}
@Injectable()
export class Auth1Service {

  
  currentUser: User = {
    username: ''
  };
  
  constructor() { }

  login() {
    this.currentUser['username'] = 'himanshu';
  }

  logout() {
    this.currentUser.username = '';
  }
}
