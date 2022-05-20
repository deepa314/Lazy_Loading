import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import { delay, flatMap, map } from 'rxjs/operators';

Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
    preload(route: Route, preload: () => Observable<any>): Observable<any> {
        return route.data && route.data.preload?preload():of(null);
    }

   
}


