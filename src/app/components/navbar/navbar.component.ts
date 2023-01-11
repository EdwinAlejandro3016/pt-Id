import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token: string = '';
  constructor(
      private tokenService:TokenService,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
  }
  off(){
    this.token = '';
    this.tokenService.cerrarSession();
    this.router.navigate(['/login']);
  }
}
