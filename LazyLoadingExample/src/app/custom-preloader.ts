import { Observable, of } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

export class CustomPreloader implements PreloadingStrategy {
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? preload() : of(null);
  }
}
