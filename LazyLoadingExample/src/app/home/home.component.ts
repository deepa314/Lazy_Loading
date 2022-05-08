import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authS: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authS.login();
  }

  logout() {
    this.authS.logout();
  }

}
