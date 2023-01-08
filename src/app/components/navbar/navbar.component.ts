import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token:string | null = null;
  constructor(
     private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
  }
}
