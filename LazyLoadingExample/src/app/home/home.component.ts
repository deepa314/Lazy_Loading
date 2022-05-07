import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor( private viewcontref: ViewContainerRef,
    private compfactresol: ComponentFactoryResolver) {}

  ngOnInit(): void {
    console.log('home comonent');
  }
  loadComponent() {
    import('../greet/greet.component').then(({GreetComponent})=>{
      this.viewcontref.clear();
      const cmp=this.compfactresol.resolveComponentFactory(GreetComponent);
      const cmpref=this.viewcontref.createComponent(cmp);
    });
  }
}
