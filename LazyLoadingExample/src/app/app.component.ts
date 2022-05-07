import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'LazyLoadingExample';

  ngOnInit(): void {
    console.log("app.component.html");
  }
  
}
