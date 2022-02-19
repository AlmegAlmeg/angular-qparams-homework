import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  linksArr: string[]
  isLoggedInFromService:boolean
  constructor(private authService: AuthService, private router: Router) { 
    this.linksArr = ['home', 'login', 'dashboard', 'names-list']
    this.isLoggedInFromService = this.authService.isLoggedIn
  }

  ngOnInit(): void {
    this.isLoggedInFromService = this.authService.isLoggedIn
    this.authService.loggedChanged.subscribe(status => this.isLoggedInFromService = status)
  }

  btnLogin(){
    this.router.navigate(['login'])
  }

  btnLogout(){
    this.authService.logout()
    this.isLoggedInFromService = this.authService.isLoggedIn
    this.router.navigate(['home'])
  }
}
