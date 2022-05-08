import { Component, OnInit } from '@angular/core';
import { Auth1Service } from '../core/services/auth1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authS: Auth1Service) { }

  ngOnInit(): void {
  }

  login() {
    this.authS.login();
  }

  logout() {
    this.authS.logout();
  }

}
