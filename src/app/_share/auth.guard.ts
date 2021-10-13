import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
    constructor(private router: Router){}
    canActivate(){
        let authToken = localStorage.getItem('authToken');
        if(authToken != undefined && authToken.length > 0){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
    

}