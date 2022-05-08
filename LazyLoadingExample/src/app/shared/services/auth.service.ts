import { Injectable } from '@angular/core';

interface User {
  username: string
}

@Injectable()
export class AuthService {

  currentUser: User = {
    username: ''
  };
  
  constructor() { }

  login() {
    this.currentUser['username'] = 'himanshu.tamrakar';
  }

  logout() {
    this.currentUser.username = '';
  }

  
}


