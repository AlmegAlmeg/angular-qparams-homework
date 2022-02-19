import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean
  loggedChanged: Subject<any>
  constructor() { 
    this.isLoggedIn = false
    this.loggedChanged = new Subject()
  }

  isAuth():boolean{
    return this.isLoggedIn
  }

  login():boolean{
    this.isLoggedIn = true
    this.loggedChanged.next(this.isLoggedIn)
    return this.isLoggedIn
  }

  logout():boolean{
    this.isLoggedIn = false
    return this.isLoggedIn
  }
}
