import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import { delay, flatMap, map } from 'rxjs/operators';

Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
    // preload(route: Route, fn: () => Observable<any>): Observable<any> {
    //     return timer(1500).pipe(flatMap(_ => fn()))
    // }

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data['preload']) {
            return fn();
        } else {
            return of(null);
        }
    }
}

export const PRELOADINJECTIBLES = [
    CustomPreloadStrategy
]

