import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Auth1Service } from 'src/app/core/services/auth1.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements AfterViewInit {

  constructor(private aurhS: Auth1Service) { 
  }

  ngAfterViewInit(): void {
    const elem: HTMLInputElement = <HTMLInputElement>document.getElementById('username');
    elem.value = this.aurhS.currentUser.username;
  }


}
