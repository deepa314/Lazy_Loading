import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements AfterViewInit {

  constructor(private aurhS: AuthService) { 
  }

  ngAfterViewInit(): void {
    const elem: HTMLInputElement = <HTMLInputElement>document.getElementById('username');
    elem.value = this.aurhS.currentUser.username;
  }


}
