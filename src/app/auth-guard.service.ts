import { Injectable, injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()

export class AuthGuardService implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        
    }
}